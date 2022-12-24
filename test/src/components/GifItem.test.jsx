/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../../src/components/GifItem';

describe('Test to GifItem', () => {
  const title = 'Testing';
  const url = 'https://one-punch.com/saitama.jpg';
  const category = 'category';
  test('snapshot from the component', () => {
    const { container } = render(
      <GifItem title={title} url={url} category={category} />
    );
    expect(container).toMatchSnapshot();
  });

  test('the image should to show the same url and alt', () => {
    render(<GifItem title={title} url={url} category={category} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should to show the title of the component', () => {
    render(<GifItem title={title} url={url} category={category} />); 
    expect(screen.getByText(title)).toBeTruthy();
  });
});
