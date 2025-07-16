import React, { useRef, useState, useEffect } from "react";

const ImageComparisonSlider = ({
  beforeSrc,
  afterSrc,
  width = 700,
  height = 450,
  lineColor = "#ffffff", // پیش‌فرض سفید
  lineWidth = 4,
}) => {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const afterImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(width / 2);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      setPosition(x);
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        userSelect: "none",
        cursor: isDragging ? "ew-resize" : "default",
      }}
    >
      {/* تصویر قبل */}
      <img
        src={beforeSrc}
        alt="Before"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* تصویر بعد با clip-path */}
      <img
        src={afterSrc}
        alt="After"
        ref={afterImageRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: `inset(0 ${width - position}px 0 0)`,
          transition: isDragging ? "none" : "clip-path 0.2s ease",
        }}
      />

      <div
        ref={handleRef}
        onMouseDown={() => setIsDragging(true)}
        style={{
          position: "absolute",
          top: 0,
          left: `${position - lineWidth / 2}px`,
          width: `${lineWidth}px`,
          height: "100%",
          backgroundColor: lineColor,
          cursor: "ew-resize",
          zIndex: 10,
        }}
      >
        {/* آیکن وسط خط */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffffff",
            color: "#333",
            padding: "4px 8px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: "bold",
            userSelect: "none",
            boxShadow: "0 0 6px rgba(0, 0, 0, 0.25)",
            pointerEvents: "none",
          }}
        >
          ⇆
        </div>
      </div>

    </div>
  );
};

export default ImageComparisonSlider;
