import React, { FC, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import SvgIcon from '../SvgIcon';

const CONTAINER_CLASSES = `
  fixed flex w-full p-3 items-center bg-cgrey-100 
  border-b-2 border-blueGrey border-solid z-30
`;

const DESKTOP_LIST_CLASSES = `
  hidden flex-1 justify-end md:flex items-center gap-10
`;


const DESKTOP_BTN_CLASSES = `
  transition bg-cgrey-400 p-3 rounded-xl border-2 cursor-pointer
  border-cgrey-400 hover:border-2 hover:border-blueGrey
`;

const MOBILE_NAV_CONTAINER = `
  flex absolute flex-col bg-cgrey-100 w-full h-full top-0 z-40
`;

const MOBILE_LIST_CLASSES = 'flex flex-col items-left gap-5 py-10 px-5';
const MOBILE_LIST_ITEM_CLASSES = 'pt-2 font-semibold';
const MOBILE_NAV_BTN = 'flex flex-1 items-center justify-end md:hidden';

interface MobileNavProps {
  children: ReactNode,
}

const MobileNav: FC<MobileNavProps> = ({children}) => {
  const root = document.getElementById('root') as HTMLElement;
  return createPortal(
    <div 
      data-testid='mobile-nav' 
      className={MOBILE_NAV_CONTAINER}>
      {children}
    </div>
  , root);
};

const Navigation: FC = () => {
  const [mobileMenuOpen, toggleMenu] = useState(false);
  const toggleMobileNav = () => toggleMenu(!mobileMenuOpen);
  return (
    <nav className={CONTAINER_CLASSES}>
      <figure className='flex-none'>
        <SvgIcon name='logo'/>
      </figure>
      <ul className={DESKTOP_LIST_CLASSES}>
        <li>Dashboard</li>
        <li className={DESKTOP_BTN_CLASSES}>
          <NavLink to='/'>Influencer List</NavLink>
        </li>
        <li>
          <SvgIcon name='user' size='32' />
        </li>
      </ul>
      <figure className={MOBILE_NAV_BTN}>
        <SvgIcon name='menu' size='32' onClick={toggleMobileNav}/>
      </figure>
      {mobileMenuOpen &&
        <MobileNav>
          <header className='flex p-3'>
            <figure className='flex-none'>
              <SvgIcon name='logo'/>
            </figure>
            <figure className={MOBILE_NAV_BTN}>
              <SvgIcon name='close' size='32' onClick={toggleMobileNav}/>
            </figure>
          </header>
          <ul className={MOBILE_LIST_CLASSES}>
            <li className={MOBILE_LIST_ITEM_CLASSES}>Dashboard</li>
            <li className={MOBILE_LIST_ITEM_CLASSES}>
              <NavLink to='/'>Influencer List</NavLink>
            </li>
            <li className={MOBILE_LIST_ITEM_CLASSES}>
              My Account
            </li>
          </ul>
        </MobileNav>
      }
    </nav>
  )
}

export default Navigation;