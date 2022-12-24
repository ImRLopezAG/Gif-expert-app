import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGif } from '../../../src/hook/useFetchGif';

describe('Test to the useFetchGif', () => {
  const { result } = renderHook(() => useFetchGif('Dragon Ball', 5));
  const { images, isLoading } = result.current;
  test('should return the initial state', async () => {
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return the final state of th hook', async () => {
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
  });
});
