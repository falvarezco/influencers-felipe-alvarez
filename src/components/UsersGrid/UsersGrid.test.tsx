import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-test-renderer';
import { getPaginatedMock } from '../../utils';
import UseGrid, { UsersGridProps } from '.';

describe('Users Grid Component', () => {
  let props: UsersGridProps = {
    users: [],
    currentPage: 1,
    isLoading: false,
    setPage: jest.fn(),
  }

  const component = (
    <UseGrid {...props} />
  );

  test('Should empty message when expected', () => {
    render(component);
    expect(screen.getByText(/No Users Found...Try Another Search!/i)).toBeInTheDocument();
  });

  test('Should show loading message when expected', () => {
    let newProps = {
      ...props,
      isLoading: true,
    }
    render(<UseGrid {...newProps} />);

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  describe('Users Grid with Data', () => {
    const propsWithData = {
      ...props,
      users: {...getPaginatedMock()},
    }

    const component = (
      <UseGrid {...propsWithData} />
    );

    test('Should show user cards as expected', () => {
      render(component);
      expect(screen.getAllByTestId('user-card')).toHaveLength(10);
    });
    
    test('Should show Pagination buttons as expected', () => {
      render(component);
      // Render Page 1 items
      expect(screen.getByRole('button', {name: '1'})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: '2'})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: '3'})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: 'first-page.svg'})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: 'last-page.svg'})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: 'prev-page.svg'})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: 'next-page.svg'})).toBeInTheDocument();
    });
    
    test('Should show page results when Paginated', () => {
      let newProps = {
        ...props,
        users: {...getPaginatedMock()},
        setPage: (v: any) => jest.fn(v),
        currentPage: 2,
      }
      render(<UseGrid {...newProps} />);
      expect(screen.getAllByTestId('user-card')).toHaveLength(10);
      // In a real scenario we can't check on static data so the following the assertion will go away 
      // However this serves as a way to validate changing results as of now
      expect(screen.getByRole('heading', {name: 'Winona Bosco'})).toBeInTheDocument();
    })

    test('Should handleSetPage logic properly', async () => {
      render(component);
      const lastPage = Object.values(getPaginatedMock()).length;
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        userEvent.click(screen.getByRole('button', {name: 'first-page.svg'}));
        userEvent.click(screen.getByRole('button', {name: 'last-page.svg'}));
        userEvent.click(screen.getByRole('button', {name: 'prev-page.svg'}));
        userEvent.click(screen.getByRole('button', {name: 'next-page.svg'}));
      });
  
      expect(propsWithData.setPage).toHaveBeenCalledWith(1);
      expect(propsWithData.setPage).toHaveBeenCalledWith(2);
      expect(propsWithData.setPage).toHaveBeenCalledWith(lastPage);
    })
  });
});
