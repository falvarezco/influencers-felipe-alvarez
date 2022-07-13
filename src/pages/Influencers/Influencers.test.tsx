import { render, screen } from '@testing-library/react';
import { Influencers, InfluencersProps } from '.';
import { getPaginatedMock } from '../../utils';

describe('Influencers Page Component', () => {
  let props: InfluencersProps = {
    users: [],
    currentPage: 1,
    isLoading: false,
    onLoad: jest.fn(),
    setPage: jest.fn(),
    setSearch: jest.fn(),
  }

  let component = (
    <Influencers {...props}/>
  );

  test('Should display children elements properly', () => {
    render(component);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText(/No data.../i)).toBeInTheDocument();
  });
  
  test('Should call given method props successfully', () => {
    const pageNum = 2;
    const strSearch = 'abc';
    
    component.props.onLoad();
    component.props.setPage(pageNum);
    component.props.setSearch(strSearch);
    
    expect(props.onLoad).toHaveBeenCalled();
    expect(props.setPage).toHaveBeenCalledWith(pageNum);
    expect(props.setSearch).toHaveBeenCalledWith(strSearch);
  });

  test('Should render grid if users data passed', () => {
    const newProps = {
      ...props,
      users: {...getPaginatedMock()},
    }
    render(<Influencers {...newProps}/>);
    expect(screen.getByTestId('users-grid')).toBeInTheDocument();
  });
});
