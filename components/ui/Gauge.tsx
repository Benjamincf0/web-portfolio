import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GaugeProps {
  value: number; // 0 to maxVal
  maxVal: number; // Maximum value for the gauge
  duration?: number; // animation duration in ms
  className?: string;
  showValue?: boolean;
  size?: number; // diameter in pixels
}

export const Gauge = ({ 
  value, 
  maxVal,
  duration = 2000, 
  className,
  showValue = true,
  size = 300
}: GaugeProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const gaugeRef = useRef<HTMLDivElement>(null);
  const clampedValue = Math.min(Math.max(value, 0), maxVal);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (gaugeRef.current) {
      observer.observe(gaugeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const start = performance.now();
    const initial = animatedValue;
    const delta = clampedValue - initial;
    if (delta === 0) return;

    // Constant rate based on full-scale duration
    const total = Math.max(1, (duration * Math.abs(delta)) / maxVal);

    let rafId: number;
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / total, 1);
      setAnimatedValue(initial + delta * progress);
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, clampedValue, duration, animatedValue, maxVal]);

  // Convert value (0-maxVal) to angle (-90 to 90 degrees, for a 180° semicircle)
  const angle = (animatedValue / maxVal) * 180 - 90;
  
  // SVG dimensions
  const strokeWidth = size * 0.12; // Thicker semicircle
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  
  // Create arc path for the gauge background
  const createArc = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  // Calculate color based on value
  const getColor = () => {
    const normalizedValue = (animatedValue / maxVal) * 100; // Normalize to 0-100 for color logic
    if (normalizedValue < 33) return "hsl(var(--gauge-danger))";
    if (normalizedValue < 66) return "hsl(var(--gauge-warning))";
    return "hsl(var(--gauge-success))";
  };

  // Generate tick marks based on maxVal
  const tickValues = [0, maxVal * 0.25, maxVal * 0.5, maxVal * 0.75, maxVal];

  return (
    <div ref={gaugeRef} className={cn("flex flex-col items-center gap-4", className)}>
      {showValue && (
        <div className="flex justify-center items-center w-full max-w-[280px] text-sm text-muted-foreground px-4">
          {/* <span className="font-medium">0</span> */}
          <span 
            className="font-bold text-3xl transition-colors duration-300 w-[200px]"
            style={{ 
              color: getColor(),
            //   left: '50%',
            //   transform: 'translateX(-50%)',
            //   bottom: '10px'
            }}
          >
            {`${animatedValue.toFixed(2)} GPA`}
          </span>
          {/* <span className="font-medium">{maxVal.toFixed(2)}</span> */}
        </div>
      )}
      <div className="relative" style={{ width: size, height: size / 2 + 40 }}>
        <svg width={size} height={size / 2 + 40} className="overflow-visible">
          {/* Background arc */}
          <path
            d={createArc(-90, 90)}
            fill="none"
            stroke="hsl(var(--gauge-bg))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          
          {/* Colored gradient arcs */}
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--gauge-danger))" />
              <stop offset="50%" stopColor="hsl(var(--gauge-warning))" />
              <stop offset="100%" stopColor="hsl(var(--gauge-success))" />
            </linearGradient>
          </defs>
          
          <path
            d={createArc(-90, 90)}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity="0.3"
          />
          
          {/* Tick marks */}
          {tickValues.map((tick) => {
            const tickAngle = (tick / maxVal) * 180 - 90;
            const outerPoint = polarToCartesian(center, center, radius + strokeWidth / 2, tickAngle);
            const innerPoint = polarToCartesian(center, center, radius - strokeWidth / 2, tickAngle);
            return (
              <line
                key={tick}
                x1={innerPoint.x}
                y1={innerPoint.y}
                x2={outerPoint.x}
                y2={outerPoint.y}
                stroke="hsl(var(--foreground))"
                strokeWidth="2"
                opacity="0.3"
              />
            );
          })}
          
          {/* Needle */}
          <g
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: `${center}px ${center}px`,
            }}
          >
            {/* Needle shadow */}
            <path
              d={`M ${center} ${center} L ${center - strokeWidth * 0.1} ${center - radius + strokeWidth * 1.5} L ${center} ${center - radius + strokeWidth} L ${center + strokeWidth * 0.1} ${center - radius + strokeWidth * 1.5} Z`}
              fill="rgba(0,0,0,0.2)"
              transform={`translate(2, 2)`}
            />
            {/* Needle */}
            <path
              d={`M ${center} ${center} L ${center - strokeWidth * 0.1} ${center - radius + strokeWidth * 1.5} L ${center} ${center - radius + strokeWidth} L ${center + strokeWidth * 0.1} ${center - radius + strokeWidth * 1.5} Z`}
              fill="#808080" // Gray color for the arrow
            />
          </g>
          
          {/* Center dot */}
          <circle
            cx={center}
            cy={center}
            r={strokeWidth * 0.3}
            fill="hsl(var(--foreground))"
          />
          <circle
            cx={center}
            cy={center}
            r={strokeWidth * 0.2}
            fill={getColor()}
          />
        </svg>
      </div>
    </div>
  );
};

// Helper function to convert polar coordinates to cartesian
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}