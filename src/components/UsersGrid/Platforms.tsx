import React, { FC } from 'react';
import { Channel } from '../../types';
import SvgIcon from '../SvgIcon';

export interface PlatformProps {
  platforms: Channel[],
  isMobile?: boolean,
}

const Platforms:FC<PlatformProps> = ({platforms, isMobile}) => {
  const visibility = isMobile ? 'flex md:hidden w-[16px]' : 'hidden md:flex w-[16px]';
  const container = `${visibility} h-[16px] md:w-[24px] md:h-[24px] cursor-pointer rounded-full`;
  return (
    <>
      {platforms.map(({platform}) => 
        <div data-testid='platforms' key={platform} className={container}>
          <SvgIcon testId={`${platform}-icon`} name={platform.toLowerCase()}/>
        </div>
      )}
    </>
  )
};

export default Platforms;