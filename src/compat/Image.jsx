import React from "react";

/**
 * Drop-in React replacement for next/image.
 * Supports fill, width, height, priority, and object-fit styling.
 */
export default function Image({
  src,
  alt = "",
  fill = false,
  width,
  height,
  className = "",
  style = {},
  priority = false,
  sizes,
  ...rest
}) {
  const combinedStyle = fill
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }
    : style;

  return (
    <img
      src={src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      style={combinedStyle}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...rest}
    />
  );
}
