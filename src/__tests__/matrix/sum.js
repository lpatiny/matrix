import { Matrix } from '../..';

describe('sum by row and columns', () => {
  const matrix = new Matrix([[1, 2, 3], [4, 5, 6]]);
  it('sum by row', () => {
    expect(matrix.sum('row')).toStrictEqual([6, 15]);
  });

  it('sum by column', () => {
    expect(matrix.sum('column')).toStrictEqual([5, 7, 9]);
  });

  it('sum all', () => {
    expect(matrix.sum()).toBe(21);
  });
});
