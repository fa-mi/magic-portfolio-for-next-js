"use client";

import { useEffect, useState } from "react";

export default function ParallaxImage({ src }: { src: string }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.05); // kecil saja
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ overflow: "hidden", borderRadius: "24px" }}>
      <img
        src={src}
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
          width: "100%",
        }}
      />
    </div>
  );
}