export function a11yClick(event) {
  if (event.type === 'click') {
    return true
  }
  else if (event.type === 'keypress' || event.type === 'keydown') {
    const code = event.charCode || event.keyCode;
    if ((code === 32) || (code === 13)) {
      return true
    }
  }
  else {
    return false
  }
}