'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const LARGE_IMAGE_URL = '/screenshot-lg.png';
const SMALL_IMAGE_URL = '/screenshot-sm.png';

// Determines the correct image URL based on screen width, with SSR safety.
const getImageUrl = () => {
  // On the server, default to the large image as media queries are not available.
  if (typeof window === 'undefined') {
    return LARGE_IMAGE_URL;
  }
  // On the client, check the media query to select the appropriate image.
  return window.matchMedia('(min-width: 1024px)').matches
    ? LARGE_IMAGE_URL
    : SMALL_IMAGE_URL;
};

/**
 * A component that creates a parallax scrolling effect on an image.
 * The image appears to scroll at a different speed than the page content.
 * It also responsively switches between a large and small image.
 */
const MirrorEffect = () => {
  // Ref to access the underlying <img> DOM element.
  const imageRef = useRef<HTMLImageElement>(null);
  // State to hold the vertical offset for the parallax effect.
  const [offset, setOffset] = useState(0);
  // State for the current image URL, initialized with an SSR-safe function.
  const [imageUrl, setImageUrl] = useState(getImageUrl);

  // Memoized handler to calculate and apply the parallax scroll effect.
  const handleScrollAndResize = useCallback(() => {
    const image = imageRef.current;
    if (!image) return;

    const doc = document.documentElement;
    const scrollableHeight = doc.scrollHeight - doc.clientHeight;
    // Calculate scroll progress as a percentage (0 to 1).
    const scrollPercentage =
      scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

    // Determine how much the image itself can scroll within the viewport.
    const imageScrollableHeight = image.offsetHeight - doc.clientHeight;

    // Only apply the parallax effect if the image is taller than the viewport.
    const newOffset =
      imageScrollableHeight > 0
        ? scrollPercentage * imageScrollableHeight
        : 0;

    setOffset(newOffset);
  }, []);

  // Effect to set up and clean up event listeners.
  useEffect(() => {
    // Media query to detect screen size changes for responsive images.
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    // Handler to update the image URL when the media query match status changes.
    const updateImageUrl = () => setImageUrl(getImageUrl());

    // Attach event listeners for scroll, resize, and media query changes.
    mediaQuery.addEventListener('change', updateImageUrl);
    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    // Cleanup function to remove event listeners when the component unmounts.
    return () => {
      mediaQuery.removeEventListener('change', updateImageUrl);
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, [handleScrollAndResize]);

  return (
    <img
      ref={imageRef}
      src={imageUrl}
      alt="Project screenshot for mirror effect"
      className="z-10 absolute w-full"
      style={{ top: `-${offset}px` }}
      // Recalculate offset when the image (re)loads to handle size changes.
      onLoad={handleScrollAndResize}
    />
  );
};

export default MirrorEffect;