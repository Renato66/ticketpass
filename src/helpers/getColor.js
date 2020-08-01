export default function getColor (name) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(`--color-${name}`).trim()
}
