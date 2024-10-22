import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
