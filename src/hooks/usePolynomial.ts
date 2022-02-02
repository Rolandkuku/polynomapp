export type Coordinates = {
  x: number;
  y: number;
};

export interface Polynomial {
  desc: string;
  a: number;
  b: number;
  c: number;
  alpha: number;
  beta: number;
  delta: number;
  r0: number | null;
  r1: number | null;
  r2: number | null;
  coordinates: Array<Coordinates>;
}

export function usePolynomial(
  a: number = 0,
  b: number = 0,
  c: number = 0
): Polynomial {
  function applyFunction(x: number) {
    return a * Math.pow(x, 2) + b * x + c;
  }

  const desc = `${a}(x + ${b}/2 * ${a}) - (${b}^2 - 4 * ${a} * ${c})/(4 * ${a}^2)`;
  const alpha = -b / (2 * a);
  const delta = Math.pow(b, 2) - 4 * a * c;
  const beta = -delta / (4 * a);

  let r0 = null;
  let r1 = null;
  let r2 = null;

  if (delta > 0) {
    r1 = (-b - Math.sqrt(delta)) / (2 * a);
    r2 = (-b + Math.sqrt(delta)) / (2 * a);
  }

  if (delta === 0) {
    r0 = alpha;
  }

  const coordinates: Array<{ x: number; y: number }> = [];
  for (let i = alpha - 10; i <= alpha + 10; i++) {
    coordinates.push({
      x: i,
      y: applyFunction(i),
    });
  }

  return { desc, alpha, delta, beta, r1, r2, r0, coordinates, a, b, c };
}
