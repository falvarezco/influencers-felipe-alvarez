import React, { 
  FC,
  useState,
  useRef,
  useEffect,
} from 'react';
import SvgIcon from '../SvgIcon';

interface SearchHeaderProps {
  onChange: (event: any) => void,
}

const MOBILE_INPUT_CLASSES = `
  inline-block md:hidden w-full h-10 pl-8 p-2 rounded-lg
  bg-cgrey-300 border-2 border-white
`;

const DESKTOP_INPUT_CLASSES = `
  hidden md:inline-block w-full h-10 pl-8 p-2 rounded-lg
  bg-cgrey-300 border-2 border-white
`;

const SearchHeader: FC<SearchHeaderProps> = ({onChange}) => {
  const [isFocused, handleFocus] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const titleClasses = `
    ${isFocused ?'w-[0%]' : 'w-[78%]'} transition text-4xl font-semibold md:text-6xl
  `;
  const formClasses = `
    ${isFocused ? 'w-[100%]' : 'w-[12%]'} transition md:flex-1
  `;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleFocus(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <header ref={ref} className='w-full flex items-center justify-center md:justify-around h-24'>
      <h1 className={titleClasses}>Influencers</h1>
      <form className={formClasses}>
        <div className='relative'>
          <SvgIcon name='search' classes='absolute top-[12px] left-4'/>
          <input
            type="text"
            data-testid="mobile-search-field"
            className={MOBILE_INPUT_CLASSES}
            placeholder='Search for an influencer'
            onKeyUp={onChange}
            onFocus={() => handleFocus(true)} />
          <input
            type="text"
            data-testid="desktop-search-field"
            className={DESKTOP_INPUT_CLASSES}
            placeholder='Search for an influencer'
            onKeyUp={onChange} />
        </div>
      </form>
    </header>
  )
}

export default SearchHeader;