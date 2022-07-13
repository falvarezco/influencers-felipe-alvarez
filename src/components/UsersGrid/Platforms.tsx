import React, { 
  FC,
  useState,
  useEffect,
  useRef,
} from 'react';
import { Channel } from '../../types';
import SvgIcon from '../SvgIcon';
import { formatSocialsHandle } from '../../utils';

export interface PlatformProps {
  platforms: Channel[],
  isMobile?: boolean,
}

const HANDLE_CLASSES = `
  absolute flex justify-center top-8 bg-white left-[-50px]
  border-2 border-blueGrey rounded-2xl shadow-xl shadow-cgrey-500 p-2
`;

const Platforms:FC<PlatformProps> = ({platforms, isMobile}) => {
  const [list, onUpdateList] = useState<Channel[]>([]);
  const visibility = isMobile ? 'flex md:hidden w-[12px]' : 'hidden md:flex w-[24px]';
  const container = `${visibility} relative h-[16px] md:w-[24px] md:h-[24px] cursor-pointer rounded-full`;
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = ({platform}: any) => {
    onUpdateList(list.map(p => ({
      ...p,
      isActive: p.platform === platform ? true : false,
    })));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onUpdateList(platforms.map(p => ({...p, isActive: false})));
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {;
    onUpdateList(platforms.map(p => ({...p, isActive: false})));
  }, [platforms]);

  return (
    <>
      {list.map((p: Channel) => {
        const {platform, handle, isActive} = p; 
        return (
          <div
            ref={ref}
            data-testid='platforms'
            key={`${platform}-${handle}`}
            className={container}>
              <SvgIcon
                testId={`${platform}-icon`}
                onClick={() => handleToggle(p)}
                name={platform.toLowerCase()}/>
              {isActive && 
                <div data-testid='handle-popup' className={HANDLE_CLASSES}>
                  {formatSocialsHandle(handle)}
                </div>
              }
          </div>
        )
      })}
    </>
  )
};

export default Platforms;