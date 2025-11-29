import React, { useRef } from "react";

const PointerGlowText = ({ text }) => {
  const ref = useRef(null);

  const handlePointerMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      className="characters"
      ref={ref}
      onPointerMove={handlePointerMove}
      data-text={text}
    >
      {text}
    </div>
  );
};

export default PointerGlowText;
