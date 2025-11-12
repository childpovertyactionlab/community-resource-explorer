import React from 'react';
import Explorer from 'cpal-components';

/**
 * ExplorerWrapper Component
 *
 * This is a simple wrapper for the Explorer component from cpal-components.
 * The actual data transformation from z-scores to 0-100 scale is done by
 * the patch script (scripts/patchCpalSchools.js) which directly modifies
 * the schools data in node_modules/cpal-components/lib/data/schools.js
 *
 * This wrapper exists to:
 * 1. Provide a layer for future enhancements if needed
 * 2. Keep the import path consistent in explorer.js
 * 3. Allow for debugging/monitoring without modifying node_modules
 */

const ExplorerWrapper = (props) => {
  // Simply pass through all props to the original Explorer component
  // The transformed data is already loaded by cpal-components from the patched file
  return <Explorer {...props} />;
};

export default ExplorerWrapper;