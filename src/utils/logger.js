export const logger = (msg, type) => {
  switch (true) {
    case type === "error":
      console.error(msg)
      break
    case type === "warn":
      console.warn(msg)
      break
    default:
      console.log(msg)
  }
}
