'use client'

import React, { useRef } from 'react'

const ExperienceCard = (
    {
      title,
      desc,
      className,
      thumbnail,
      start,
      end }:
    {
      title: string; 
      desc: string; 
      className: string; 
      thumbnail: string; 
      start: string; 
      end: string }
) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const transformRef = useRef({ rotateX: 0, rotateY: 0, scale: 1 })

  const MAX_TILT = 12 // degrees
  const HOVER_SCALE = 1.02

  const applyTransform = (opts?: { glowOpacity?: number }) => {
    const el = cardRef.current
    const glow = glowRef.current
    if (!el) return
    const { rotateX, rotateY, scale } = transformRef.current
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`

    if (glow && typeof opts?.glowOpacity === 'number') {
      glow.style.opacity = `${opts.glowOpacity}`
    }
  }

  // handle mouse move: set target tilt and move glow by adjusting left/top percentages so it follows the cursor
  const onMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    const glow = glowRef.current
    if (!el || !glow) return
    const rect = el.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) - 0.5 // -0.5 .. 0.5 (x)
    const ny = ((e.clientY - rect.top) / rect.height) - 0.5 // -0.5 .. 0.5 (y)

    // compute tilt
    transformRef.current.rotateY = -nx * MAX_TILT
    transformRef.current.rotateX = ny * MAX_TILT
    transformRef.current.scale = HOVER_SCALE

    // set transitions so tilt & glow move over ~150ms (avoids jumpiness)
    el.style.transition = 'transform 150ms cubic-bezier(0.2,0.8,0.2,1)'
    glow.style.transition = 'left 150ms cubic-bezier(0.2,0.8,0.2,1), top 150ms cubic-bezier(0.2,0.8,0.2,1), opacity 150ms ease'

    // move glow by percent so it truly follows the mouse
    const leftPct = 50 + nx * 100 // maps -0.5..0.5 => 0..100
    const topPct = 50 + ny * 100
    glow.style.left = `${leftPct}%`
    glow.style.top = `${topPct}%`

    // compute intensity based on distance from center
    const intensity = Math.min((Math.abs(nx) + Math.abs(ny)) * 1.2, 1) // 0..1
    const opacity = 0.12 + intensity * 0.7

    applyTransform({ glowOpacity: opacity })
  }

  // reset on leave with a short fade; move glow back to center
  const resetTransform = () => {
    const el = cardRef.current
    const glow = glowRef.current
    if (!el || !glow) return

    transformRef.current.rotateX = 0
    transformRef.current.rotateY = 0
    transformRef.current.scale = 1

    el.style.transition = 'transform 180ms cubic-bezier(0.2,0.8,0.2,1)'
    glow.style.transition = 'left 220ms cubic-bezier(0.2,0.8,0.2,1), top 220ms cubic-bezier(0.2,0.8,0.2,1), opacity 220ms ease'
    glow.style.left = '50%'
    glow.style.top = '50%'
    applyTransform({ glowOpacity: 0 })
  }

  return (
        <div
            className={`relative rounded-xl p-6 shadow-sm hover:shadow-md transition-colors will-change-transform overflow-hidden ${className}`}
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseEnter={(e) => {
              const el = cardRef.current
              const glow = glowRef.current
              if (el) el.style.transition = 'transform 150ms cubic-bezier(0.2,0.8,0.2,1)'
              if (glow) glow.style.transition = 'left 150ms cubic-bezier(0.2,0.8,0.2,1), top 150ms cubic-bezier(0.2,0.8,0.2,1), opacity 150ms ease'
              onMouseMove(e)
            }}
            onMouseLeave={resetTransform}
        >
            {/* glow element (follows mouse/tilt). pointer-events none so it doesn't block interactions */}
            <div
              ref={glowRef}
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '200%',
                height: '200%',
                transform: 'translate(-50%,-50%) scale(1)',
                background: 'radial-gradient(circle at center, rgba(96,165,250,0.9), rgba(59,130,246,0.06) 30%, rgba(59,130,246,0.02) 50%, transparent 70%)',
                filter: 'blur(28px)',
                pointerEvents: 'none',
                opacity: 0,
                mixBlendMode: 'screen',
                willChange: 'left, top, opacity',
              }}
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            <h4 className=" hidden sm:block absolute right-[24px] top-[24px] text-base text-gray-300">{start} - {end}</h4>
            <div className="mt-4 flex items-start gap-4">
                <img src={thumbnail} alt="" className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                <p className="text-sm text-gray-200">{desc}</p>
            </div>
        </div>
  )
}

export default ExperienceCard