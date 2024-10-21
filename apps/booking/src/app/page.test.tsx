import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Page from './page';

describe('Page', () => {
  it('should be defined', () => {
    expect(Page).toBeDefined();
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});
