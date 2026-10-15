import React from "react";
import { Link as RouterLink } from "react-router-dom";

/**
 * Drop-in React replacement for next/link.
 * Supports href, to, hash fragments (#About), external URLs, and internal SPA navigation.
 */
export default function Link({ href, to, children, className = "", onClick, ...rest }) {
  const target = to || href || "/";

  // Handle external links, mailto, tel, or pure hash links on the same page
  const isExternal =
    typeof target === "string" &&
    (target.startsWith("http://") ||
      target.startsWith("https://") ||
      target.startsWith("mailto:") ||
      target.startsWith("tel:") ||
      target.startsWith("#"));

  if (isExternal) {
    return (
      <a href={target} className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={target} className={className} onClick={onClick} {...rest}>
      {children}
    </RouterLink>
  );
}
