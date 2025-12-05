import React from "react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-24 md:py-32 relative z-10 ${className}`}>
    <div className="container mx-auto px-6 max-w-6xl">{children}</div>
  </section>
);

export default Section;
