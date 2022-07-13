import { render, screen } from '@testing-library/react';
import Platforms, { PlatformProps } from './Platforms';

const props: PlatformProps = {
  platforms: [
    { handle: '@foo_bar', platform: 'Twitter' },
    { handle: '@foo_bar', platform: 'Facebook' },
    { handle: '@foo_bar', platform: 'Pinterest' },
    { handle: '@foo_bar', platform: 'Github' },
  ],
  isMobile: false,
}

describe('Platforms Component', () => {
  const component = (
    <Platforms {...props}/>
  );

  test('Should display children elements properly', () => {
    render(component);
    expect(screen.getByTestId('Twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('Facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('Pinterest-icon')).toBeInTheDocument();
    expect(screen.getByTestId('Github-icon')).toBeInTheDocument();
  });
});
