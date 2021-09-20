/* example utils */

export const fetch = delay => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('test2');
    }, delay);
  });
};

export const test = async () => {
  const res = await fetch(2000);
  return res;
};

export const sum = (x, y) => x + y;

export const sumAsync = async (x, y) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(sum(x, y));
    }, 1);
  });
};
