export default function nextTick(fn: Function) {
  return setTimeout(() => fn(), 100)
}