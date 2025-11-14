/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/style.scss"
import "mapbox-gl/dist/mapbox-gl.css"

// Temporarily disabled error suppression to debug map issues
// TODO: Re-enable after fixing map display issues
/*
if (typeof window !== 'undefined') {
  const isMapboxError = (msg) => {
    const str = msg?.toString() || ''
    return str.includes('An API access token is required') || str.includes('mapbox-gl')
  }

  // Intercept console errors
  const originalError = console.error
  console.error = (...args) => {
    if (isMapboxError(args[0])) {
      console.warn('[Mapbox] Non-critical error:', ...args)
      return
    }
    originalError(...args)
  }

  // Prevent error dialog
  window.addEventListener('error', (e) => {
    if (isMapboxError(e.message) || e.filename?.includes('mapbox-gl')) {
      e.preventDefault()
      e.stopImmediatePropagation()
      return false
    }
  }, true)

  // Filter out from Gatsby dev overlay
  const originalEvents = window._gatsbyEvents || []
  Object.defineProperty(window, '_gatsbyEvents', {
    get() {
      return this._gatsbyEventsArray || []
    },
    set(value) {
      if (value?.push) {
        const originalPush = value.push
        value.push = function(event) {
          if (Array.isArray(event) && event[0] === 'FAST_REFRESH' && event[1]) {
            const { action, payload } = event[1]
            if (action === 'HANDLE_RUNTIME_ERROR' || action === 'SHOW_RUNTIME_ERRORS') {
              const errors = Array.isArray(payload) ? payload : [payload]
              const filtered = errors.filter(err => {
                const msg = err?.message || err?.toString() || ''
                const stack = err?.stack || ''
                return !isMapboxError(msg) && !stack.includes('mapbox-gl')
              })
              if (filtered.length === 0) return
              event[1].payload = filtered
            }
          }
          return originalPush.call(this, event)
        }
      }
      this._gatsbyEventsArray = value
    },
    configurable: true
  })
  window._gatsbyEvents = originalEvents
}
*/

