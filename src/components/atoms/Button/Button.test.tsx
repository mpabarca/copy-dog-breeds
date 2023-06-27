import React from 'react';
import {render, screen} from '@testing-library/react';
import Button, {ButtonProps} from './Button';

describe('Button test', () => {
  const mockHandleOnClick = jest.fn();

  const props: ButtonProps = {
    color: 'red',
    text: 'Click me',
    handleOnClick: mockHandleOnClick,
  };
  it('should render Button component', () => {
    render(<Button {...props} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
