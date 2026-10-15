import React, { Suspense, lazy } from "react";

/**
 * Drop-in React replacement for next/dynamic.
 * Supports React.lazy and Suspense with fallback.
 */
export default function dynamic(importFn, options = {}) {
  const LazyComponent = lazy(importFn);

  return function DynamicComponent(props) {
    const Fallback = options.loading || (() => null);
    return (
      <Suspense fallback={<Fallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
