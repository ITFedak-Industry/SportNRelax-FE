import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { CartPage } from './Page';

describe('CartPage', () => {
  it('should be defined', () => {
    expect(CartPage).toBeDefined();
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<CartPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
