"use client";

import { useEffect, useRef, useState } from "react";

export default function ParallaxImage({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      // 0 when the element is centered in the viewport; small drift otherwise
      setOffset((elementCenter - viewportCenter) * 0.03);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        borderRadius: "24px",
        width: "100%",
        aspectRatio: "16 / 9",
      }}
    >
      <img
        src={src}
        style={{
          transform: `translateY(${offset}px) scale(1.12)`,
          transition: "transform 0.1s linear",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          willChange: "transform",
        }}
      />
    </div>
  );
}
