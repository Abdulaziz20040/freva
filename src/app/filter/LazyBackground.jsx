import React from "react";
import { useInView } from "react-intersection-observer";

const LazyBackground = ({ src, className = "", style = {} }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        backgroundImage: inView ? `url(${src})` : "none",
      }}
    />
  );
};

export default LazyBackground;
