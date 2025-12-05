import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
