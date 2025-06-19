

import React from "react"

const mockResizeListener = React.createElement("div", {
  style: { display: "none" },
  key: "mock-resize-listener"
});

// Default sizes that will be returned by the hook
const mockSizes = { width: 1024, height: 768 };

// Export a function that mimics the useResizeAware hook's signature
const useMockResizeAware = () => [mockResizeListener, mockSizes];

export default useMockResizeAware;
