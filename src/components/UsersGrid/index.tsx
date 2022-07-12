import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { PaginatedData, UserData } from '../../types';
import GridCard from './GridCard';
import Button from '../Button';

interface UsersGridProps {
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
  const numberOfPages = Object.values(users).length;
  const pageLinks = new Array(numberOfPages).fill('');

  const handleSetPage = (goTo: string) => {
    // TODO: Scroll top 
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
      <section className='grid grid-cols-1 gap-6 md:grid-cols-4 my-10'>
        {hasData && users[pageIdx].map(
          (user: UserData) => <GridCard key={user.uuid} {...user}/>
        )}
        {isEmpty(users) && isLoading && <h2>Loading data...</h2>}
      </section>
      <footer className='flex w-full gap-6 justify-center'>
        <button onClick={() => handleSetPage('first')}>{'<<'}</button>
        <button onClick={() => handleSetPage('prev')}>{'<'}</button>
        {pageLinks.map((v, idx) => (
          <Button 
            onClick={() => setPage(idx + 1)}
            selectedSecondary={currentPage === idx + 1}>
            {idx + 1}
          </Button>
        ))}
        <button onClick={() => handleSetPage('next')}>{'>'}</button>
        <button onClick={() => handleSetPage('last')}>{'>>'}</button>
      </footer>
    </>
  )
}

export default UsersGrid;