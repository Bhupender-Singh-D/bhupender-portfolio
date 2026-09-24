import React, { useRef, useState, useEffect } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  perspective = 1000,
  scale = 1.02,
  glare = true,
  disabled = false,
  ...props
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e) => {
    if (disabled || isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate cursor position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation angles
    const rotateX = -mouseY * maxTilt * 2;
    const rotateY = mouseX * maxTilt * 2;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 100ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    });

    if (glare) {
      const angle = Math.atan2(e.clientY - (rect.top + height / 2), e.clientX - (rect.left + width / 2)) * (180 / Math.PI);
      setGlareStyle({
        opacity: 0.35,
        background: `linear-gradient(${angle + 90}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`,
        transition: 'opacity 200ms ease',
      });
    }
  };

  const handleMouseLeave = () => {
    if (disabled || isTouchDevice) return;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 500ms ease-out',
    });

    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 500ms ease-out',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu transition-all ${className}`}
      style={style}
      {...props}
    >
      {children}

      {glare && !isTouchDevice && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 mix-blend-overlay"
          style={glareStyle}
        />
      )}
    </div>
  );
}
