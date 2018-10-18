const returnPromise1: () => Promise<number> = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(10);
    }, 3000),
  );

const returnPromise2: () => Promise<number> = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(7);
    }, 3000),
  );

export { returnPromise1, returnPromise2 };
