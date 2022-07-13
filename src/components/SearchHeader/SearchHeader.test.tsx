import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-test-renderer';
import SearchHeader from '.';

describe('SearchHeader Component', () => {
  let change = jest.fn();

  let component = (
    <SearchHeader onChange={change}/>
  );

  test('Should display children elements properly', () => {
    render(component);
    const value = 'hello';
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(screen.getByTestId('search-field'), value);
    });

    expect(screen.getByText(/Influencers/i)).toBeInTheDocument();
    expect(screen.getByTestId('search-field')).toHaveValue(value);
    expect(change).toHaveBeenCalled();  
  });
});
