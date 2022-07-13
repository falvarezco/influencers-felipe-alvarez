import { render, screen } from '@testing-library/react';
import { UserData } from '../../types';
import GridCard from './GridCard';
import { intToString } from '../../utils';

const cardProps: UserData = {
  audience: '1500',
  avatar: 'nice_picture',
  channels: [
    { handle: '@foo_bar', platform: 'Twitter' },
    { handle: '@foo_bar', platform: 'Facebook' },
  ],
  description: 'Infuencer Details',
  name: 'Bob',
  location: 'somewhere',
  reach: 3000,
  resonance: 2555,
  is_aligned: false,
}

describe('GridCard Component', () => {
  let component = (
    <GridCard {...cardProps}/>
  );

  test('Should display children elements properly', () => {
    render(component);
    expect(screen.getByText(/Bob/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', cardProps.avatar);
    expect(screen.getAllByTestId('platforms')).toHaveLength(4); 
  });

  test('Should show stats properly', () => {
    render(component);
    const {audience, reach, resonance} = cardProps;
    const formattedAudience = intToString(audience);
    expect(screen.getAllByTestId('audience-stat')[0].textContent).toBe(formattedAudience);
    expect(screen.getAllByTestId('audience-stat')[1].textContent).toBe(formattedAudience);
    expect(screen.getByTestId('reach-stat').textContent).toBe(`${reach}`);
    expect(screen.getByTestId('resonance-stat').textContent).toBe(`${resonance}`);
  });
  
  test('Should show Aligned icon if not present', () => {
    const newProps = {
      ...cardProps,
      is_aligned: true,
    }
    render(<GridCard {...newProps}/>);
    expect(screen.getByTestId('aligned-icon')).toBeInTheDocument();
  });
});
