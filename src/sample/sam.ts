import { returnPromise } from './promise';

async function hello() {
  const data = await returnPromise();
  return data;
}

export { hello };
