import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-test-renderer';
import Platforms, { PlatformProps } from './Platforms';

const props: PlatformProps = {
  platforms: [
    { handle: 'twitter_handle', platform: 'Twitter' },
    { handle: 'foo_bar', platform: 'Facebook' },
    { handle: 'foo_bar', platform: 'Pinterest' },
    { handle: 'foo_bar', platform: 'Github' },
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

  test('Should display popup elements properly', async () => {
    render(component);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      userEvent.click(screen.getByTestId('Twitter-icon'))
    })
    expect(screen.getByTestId('handle-popup')).toBeInTheDocument();
    expect(screen.getByTestId('handle-popup').textContent).toBe('@twitter_handle');
  });
});
