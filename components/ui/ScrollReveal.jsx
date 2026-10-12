"use client";

import React, { useRef, useEffect, useState } from "react";

/**
 * High-performance, lightweight ScrollReveal component.
 * Uses native IntersectionObserver + hardware-accelerated CSS transitions.
 * Zero CPU overhead after revealing.
 */
export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  className = "",
  stagger = false,
  staggerAmount = 0.1,
  as: Tag = "div",
  ...rest
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use lightweight IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Free memory immediately
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = () => {
    switch (animation) {
      case "fadeUp":
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 36px, 0)";
      case "fadeIn":
        return "none";
      case "fadeLeft":
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(-36px, 0, 0)";
      case "fadeRight":
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(36px, 0, 0)";
      case "scaleIn":
        return isVisible ? "scale(1)" : "scale(0.95)";
      default:
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 36px, 0)";
    }
  };

  if (stagger && React.isValidElement(children) === false && Array.isArray(children)) {
    return (
      <Tag ref={containerRef} className={className} {...rest}>
        {React.Children.map(children, (child, idx) => {
          if (!React.isValidElement(child)) return child;

          const childStyle = {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
            transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: `${delay + idx * staggerAmount}s`,
            willChange: isVisible ? "auto" : "opacity, transform",
          };

          return React.cloneElement(child, {
            style: { ...child.props.style, ...childStyle },
          });
        })}
      </Tag>
    );
  }

  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <Tag ref={containerRef} style={baseStyle} className={className} {...rest}>
      {children}
    </Tag>
  );
}
