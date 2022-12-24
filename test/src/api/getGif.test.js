import { getGif } from '../../../src/api/getGif';

describe('Test to the API response', () => {
  test('should return an array of gif', async () => {
    const gif = await getGif('DragonBall', 10);
    expect(gif.length).toBeGreaterThan(0);
    expect(gif[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
  test('should return an objet of gif', async () => {
    const gif = await getGif('DragonBall', 10);
    expect(gif[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
