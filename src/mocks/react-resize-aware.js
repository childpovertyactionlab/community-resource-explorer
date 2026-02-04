import React from "react"

// Create a resize-aware hook that works in both SSR and browser
const useResizeAware = () => {
  // Provide sensible initial dimensions instead of null
  // This prevents components from waiting indefinitely for dimensions
  const getInitialSize = () => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    // SSR fallback - provide reasonable defaults
    return { width: 1920, height: 1080 };
  };

  const [sizes, setSizes] = React.useState(getInitialSize);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) {
      return;
    }

    const updateSize = () => {
      if (ref.current) {
        setSizes({
          width: ref.current.offsetWidth || window.innerWidth,
          height: ref.current.offsetHeight || window.innerHeight,
        });
      }
    };

    // Use ResizeObserver if available, otherwise fallback to window resize
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        updateSize();
      });

      if (ref.current) {
        resizeObserver.observe(ref.current);
      }

      updateSize(); // Initial size

      return () => {
        resizeObserver.disconnect();
      };
    } else {
      // Fallback to window resize
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  const resizeListener = React.createElement("div", {
    ref: ref,
    style: {
      display: "block",
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: -1,
    },
    key: "resize-listener"
  });

  return [resizeListener, sizes];
};

export default useResizeAware;
