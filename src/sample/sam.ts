import { returnPromise1, returnPromise2 } from './promise';

async function hello() {
  const [data1, data2]: number[] = await Promise.all([
    returnPromise1(),
    returnPromise2(),
  ]);
  return data1 + data2;
}

export { hello };
