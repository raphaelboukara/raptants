import React from 'react';
import { render } from '@testing-library/react';
import { BasicFooter } from './footer.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicFooter />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
