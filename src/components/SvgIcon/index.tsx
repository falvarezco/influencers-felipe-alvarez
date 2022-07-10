import React, { FC, MouseEventHandler } from 'react';
import { ReactComponent as Logo } from '../../svg/logo.svg'
import { ReactComponent as User } from '../../svg/user.svg'
import { ReactComponent as Menu } from '../../svg/menu.svg'
import { ReactComponent as Close } from '../../svg/close.svg'

interface SvgIconProps {
  name: string,
  size?: string,
  onClick?: MouseEventHandler<HTMLDivElement>,
};

const getIcon = (name: string) => {
  switch (name) {
    case 'logo':
      return <Logo />;
    case 'user':
      return <User />;
    case 'menu':
      return <Menu />;
    case 'close':
      return <Close />;
    default:
      return <svg/>;
  }
}

const SvgIcon: FC<SvgIconProps> = ({ name, size, onClick }) => (
  <div style={{width: size}} onClick={onClick}>{getIcon(name)}</div>
)

export default SvgIcon;
