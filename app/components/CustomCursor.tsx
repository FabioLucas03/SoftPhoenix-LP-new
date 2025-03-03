'use client'

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleClick = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 400);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicking ? 'cursor-click' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
        willChange: 'transform'
      }}
    />
  );
} 