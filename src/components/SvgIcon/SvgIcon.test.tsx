import { render, screen } from '@testing-library/react';
import SvgIcon, { SvgIconProps } from '.';

describe('SvgIcon Component', () => {
  const props: SvgIconProps = {
    name: 'facebook',
    testId: 'testing-id',
    classes: 'flex',
    onClick: jest.fn(),
  }
  const component = (
    <SvgIcon {...props} />
  )
  test('Should display children elements properly', () => {
    render(component);
    component.props.onClick();
    
    expect(props.onClick).toHaveBeenCalled();
    expect(screen.getByTestId('testing-id')).toHaveAttribute('class', 'flex');
    expect(screen.getByTestId('testing-id').textContent).toBe('facebook.svg');
  });
});
