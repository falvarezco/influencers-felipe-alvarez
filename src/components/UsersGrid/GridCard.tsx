import React, { FC } from 'react';
import { UserData } from '../../types';
import SvgIcon from '../SvgIcon';
import Platforms from './Platforms';

interface GridCardProps extends UserData {}

const CARD_CONTAINER_CLASSES = `
  flex transition hover:shadow-xl shadow-cgrey-500 flex-col 
  gap-5 bg-white rounded-3xl px-[36px] py-[38px] col-span-2 border 
  border-white border-[4px] hover:border-blueGrey cursor-pointer
`;

const GridCard: FC<GridCardProps> = ({
  audience,
  avatar,
  channels,
  description,
  name,
  reach,
  resonance,
  // TODO: Show Is Aligned Icon
  // is_aligned,
}) => (
  <article className={CARD_CONTAINER_CLASSES}>
    <div className='flex items-center gap-5'>
      <figure className='flex-2 bg-cgrey-500 w-[96px] w-min-[96px] rounded-full overflow-hidden'>
        <img src={avatar} alt="influencer" />
      </figure>
      <div className='flex flex-1 flex-col gap-3'>
        <h2 className='text-3xl md:text-5xl'>{name}</h2>
        <div className='hidden md:flex gap-4'>
          <Platforms platforms={channels} />
        </div>
      </div>
    </div>
    <div className='flex md:hidden gap-4'>
      <Platforms platforms={channels} isMobile />
    </div>
    <div className='flex gap-5'>
      <div className='flex flex-2 hidden md:flex w-[96px] justify-center'>
        <SvgIcon name='audience' />
        {/* TODO: Show Audience as 1k */}
        <span>{audience}</span>
      </div>
      <div className='flex flex-1 flex-col gap-3'>
        <p>{description}</p>
        <div className='flex flex-col gap-2'>
          {/* Stats */}
          <div className='flex-2 flex md:hidden'>
            <span className='font-bold'>Audience: </span>
            <span>{audience}</span>
          </div>
          <div>
            <span className='font-bold'>Reach: </span>
            <span>{reach}</span>
          </div>
          <div>
            <span className='font-bold'>Resonance: </span>
            <span>{resonance}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default GridCard;