import { diff } from './util';

export const calculateCosine = (a: number, b: number, c: number) => {
  // all zero
  if (a === 0 && b === 0 && c === 0) {
    return null;
  }

  // distance between two point
  const dab = diff(a, b);
  const dbc = diff(b, c);
  const dca = diff(c, a);

  // check straight line, invalid cases
  if (dab === dbc) {
    // straight line to up
    if (a < b && b < c) {
      return null;
    }
    // straight line to down
    if (c < b && b < a) {
      return null;
    }
  }

  // side length
  const ab = Math.sqrt(1 + dab * dab);
  const bc = Math.sqrt(1 + dbc * dbc);
  const ca = Math.sqrt(4 + dca * dca);

  // cosine formula
  const cos = (ab * ab + ca * ca - bc * bc) / (2 * ab * ca);

  return cos;
};
