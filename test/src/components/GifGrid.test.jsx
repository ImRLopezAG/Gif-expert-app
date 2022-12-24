/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../../src/components/GifGrid';
import { useFetchGif } from '../../../src/hook/useFetchGif';

jest.mock('../../../src/hook/useFetchGif');

describe('Test to the grid gif', () => {
  const category = 'Dragon ball';
  test('should show the loading at first', () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} limit={5} />);
    expect(screen.getByText(category));
    expect(screen.getByText('Loading...'));
  });
  test('should prove if the hook is sending gif', () => {
    const gif = [
      {
        id: 'abc',
        title: 'Dragon Ball',
        url: 'https://google.com',
      },
      {
        id: 'abcd',
        title: 'Dragon Ball 2',
        url: 'https://google.com',
      },
    ];
    useFetchGif.mockReturnValue({
      images: gif,
      isLoading: false,
    });

    render(<GifGrid category={category} limit={5} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
