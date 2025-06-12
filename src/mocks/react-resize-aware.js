// src/mocks/react-resize-aware.js
// This mock is used during SSR (build-html stage in Gatsby)
// to prevent errors with browser-specific code.

const mockResizeListener = () => {}; // A no-op function for the listener element
const mockSizes = { width: 0, height: 0 }; // Default sizes

// Export a function that mimics the useResizeAware hook's signature
const useMockResizeAware = () => [mockResizeListener, mockSizes];

export default useMockResizeAware;
