import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { PaginatedData, UserData } from '../../types';
import { scrollTop } from '../../utils';
import GridCard from './GridCard';
import Button from '../Button';
import SvgIcon from '../SvgIcon';
import LoadingIcon from '../LoadingIcon';

export interface UsersGridProps {
  users: PaginatedData,
  currentPage: number,
  isLoading: boolean,
  setPage: (val: number) => void,
}

const UsersGrid: FC<UsersGridProps> = ({
  users,
  isLoading,
  currentPage,
  setPage,
}) => {
  const pageIdx = currentPage - 1;
  const hasData = !isEmpty(users) && !isLoading;
  const dataLoading = isEmpty(users) && isLoading;
  const noResults = isEmpty(users) && !isLoading;
  const numberOfPages = Object.values(users).length;
  const pageLinks = new Array(numberOfPages).fill('');

  const handleSetPage = (goTo?: string | null, page?: number) => {
    if (!goTo && page) {
      scrollTop();
      return setPage(page);
    }

    scrollTop();

    switch (goTo) {
      case 'first':
        return setPage(1);
      case 'prev':
        return currentPage === 1 ? setPage(1) : setPage(currentPage - 1);
      case 'next':
        return currentPage === numberOfPages ? setPage(numberOfPages) : setPage(currentPage + 1);
      case 'last':
        return setPage(numberOfPages);
        default:
          setPage(1)
    }
  }

  return (
    <>
      <section
        data-testid='users-grid' 
        className='grid grid-cols-1 gap-6 md:grid-cols-4 my-10'>
        {hasData && users[pageIdx].map(
          (user: UserData) => <GridCard key={user.name} {...user}/>
        )}
        {dataLoading && 
          <div data-testid='loading-indicator' className='col-span-4 flex justify-center'>
            <LoadingIcon />
          </div>
        }
        {noResults && 
          <div className='col-span-4 p-5 rounded-2xl bg-cgrey-300'>
            <h2 className='text-center text-xl'>No Users Found...Try Another Search!</h2>
          </div>
        }
      </section>
      {hasData && 
        <footer
          data-testid='grid-footer'
          className='flex w-full gap-6 justify-center'>
          <button 
            onClick={() => handleSetPage('first')}>
            <SvgIcon name='first-page' />
          </button>
          <button
            onClick={() => handleSetPage('prev')}>
            <SvgIcon name='prev-page' />
          </button>
          {pageLinks.map((v, idx) => (
            <Button
              key={`page-btn-${idx}`}
              onClick={() => handleSetPage(null, (idx + 1))}
              selectedSecondary={currentPage === idx + 1}>
              {idx + 1}
            </Button>
          ))}
          <button
            onClick={() => handleSetPage('next')}>
            <SvgIcon name='next-page' />
          </button>
          <button
            onClick={() => handleSetPage('last')}>
            <SvgIcon name='last-page' />
          </button>
        </footer>
      }
    </>
  )
}

export default UsersGrid;