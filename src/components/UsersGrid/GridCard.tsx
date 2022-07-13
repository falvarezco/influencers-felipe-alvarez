import React, { FC } from 'react';
import { UserData } from '../../types';
import SvgIcon from '../SvgIcon';
import Platforms from './Platforms';
import { intToString } from '../../utils'; 

interface GridCardProps extends UserData {}

const CARD_CONTAINER_CLASSES = `
  flex transition hover:shadow-xl shadow-cgrey-500 flex-col 
  gap-5 bg-white rounded-3xl px-[36px] py-[38px] col-span-2 border 
  border-white border-[4px] hover:border-blueGrey cursor-pointer
`;

const ALIGNED_CLASSES = `
  w-[30px] h-[30px] flex absolute top-[80px] left-[50%] bg-white
  rounded-full items-center justify-center ml-[-15px]
`;

const GridCard: FC<GridCardProps> = ({
  audience,
  avatar,
  channels,
  description,
  name,
  reach,
  resonance,
  is_aligned,
}) => (
  <article
    data-testid='user-card'
    className={CARD_CONTAINER_CLASSES}>
    <div className='flex items-center gap-5'>
      <div className='relative flex-2'>
        <figure className='bg-cgrey-500 w-[96px] w-min-[96px] rounded-full overflow-hidden'>
          <img src={avatar} alt="influencer" />
        </figure>
        {is_aligned && <SvgIcon testId='aligned-icon' classes={ALIGNED_CLASSES} name='aligned' />}
      </div>
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
      <div className='flex flex-2 hidden md:flex w-[96px] h-[20px] justify-center'>
        <div className='flex items-center gap-2'>
          <SvgIcon name='audience' />
          <span data-testid='audience-stat'>{intToString(audience)}</span>
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-3'>
        <p>{description}</p>
        <div className='flex flex-col gap-2'>
          {/* Stats */}
          <div className='block md:hidden'>
            <span className='font-bold'>Audiencess: </span>
            <span data-testid='audience-stat'>{intToString(audience)}</span>
          </div>
          <div>
            <span className='font-bold'>Reach: </span>
            <span data-testid='reach-stat'>{reach}</span>
          </div>
          <div>
            <span className='font-bold'>Resonance: </span>
            <span data-testid='resonance-stat'>{resonance}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default GridCard;