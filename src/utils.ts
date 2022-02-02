export function isNumber(n: number | undefined): n is number {
  return !isNaN(Number(n));
}
