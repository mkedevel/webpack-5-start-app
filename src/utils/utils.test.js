import {sum, sumAsync} from './utils';

describe('Test Utils', () => {
  it('sync: Function should return the sum of two numbers', () => {
    expect(sum(2, 2)).toEqual(4);
  });

  it('async: Function should return the sum of two numbers', async () => {
    const sum = await sumAsync(3, 3);
    expect(sum).toEqual(6);
  });
});
