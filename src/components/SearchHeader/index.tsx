import React, { FC } from 'react';

interface SearchHeaderProps {
  // TODO: Use event type
  onChange: (value: any) => void,
}

const SearchHeader: FC<SearchHeaderProps> = ({onChange}) => {
  return (
    <header className='w-full flex items-center justify-between h-24 '>
      <h1 className='text-4xl font-semibold md:text-6xl'>Infuencers</h1>
      <form action="">
        <input 
          type="text"
          className="h-10 p-2 rounded-lg bg-cgrey-300 border-2 border-white"
          placeholder='Search for an influencer'
          onChange={onChange} />
      </form>
    </header>
  )
}

export default SearchHeader;