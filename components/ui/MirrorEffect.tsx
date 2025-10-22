'use client';

import { useEffect, useRef, useState } from 'react';

const MirrorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // This effect loads the correct screenshot based on screen size.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const loadImage = () => {
      const image = new Image();
      image.src = mediaQuery.matches ? '/screenshot-lg.png' : '/screenshot-sm.png';

      image.onload = () => {
        const mirrorCanvas = canvasRef.current;
        if (mirrorCanvas) {
          const context = mirrorCanvas.getContext('2d');
          if (context) {
            // Set the canvas dimensions to match the loaded image
            mirrorCanvas.width = image.width;
            mirrorCanvas.height = image.height;
            // Draw the image onto the canvas
            context.drawImage(image, 0, 0);
          }
        }
      };
    };

    // Load the initial image
    loadImage();

    // Add a listener to reload the image if the screen size changes
    mediaQuery.addEventListener('change', loadImage);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', loadImage);
    };
  }, []); // Empty dependency array ensures this setup runs only once.

  // This effect tracks the scroll position.
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      className='z-10 absolute w-full'
      ref={canvasRef}
      style={{ top: `-${scrollY}px` }}
    />
  );
};

export default MirrorEffect;