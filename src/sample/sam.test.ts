import { hello } from './sam';
jest.mock('./promise.ts');

describe('Sample test', () => {
  it('should pass', async () => {
    const data = await hello();
    expect(data).toBe(17);
  });
});
