import { render } from '@testing-library/react';
import { GifExpertApp } from '../src/App';

describe('Test to App', () => {
  test('Should take a snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
});
