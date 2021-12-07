export default function resolveClass(...classes: string[]) {
  return classes.filter(cls => !!cls && cls != '').join(' ')
}