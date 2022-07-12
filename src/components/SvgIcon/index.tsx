import React, { FC, MouseEventHandler } from 'react';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as User } from '../../svg/user.svg';
import { ReactComponent as Menu } from '../../svg/menu.svg';
import { ReactComponent as Close } from '../../svg/close.svg';
import { ReactComponent as Instagram } from '../../svg/instagram.svg';
import { ReactComponent as Youtube } from '../../svg/youtube.svg';
import { ReactComponent as Facebook } from '../../svg/facebook.svg';
import { ReactComponent as Pinterest } from '../../svg/pinterest.svg';
import { ReactComponent as Reddit } from '../../svg/reddit.svg';
import { ReactComponent as Twitter } from '../../svg/twitter.svg';
import { ReactComponent as TikTok } from '../../svg/tiktok.svg';
import { ReactComponent as Twitch } from '../../svg/twitch.svg';
import { ReactComponent as Github } from '../../svg/github.svg';
import { ReactComponent as Audience } from '../../svg/audience.svg';
import { ReactComponent as Aligned } from '../../svg/aligned.svg';

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
    case 'instagram':
      return <Instagram />;
    case 'youtube':
      return <Youtube />;
    case 'facebook':
      return <Facebook />;
    case 'pinterest':
      return <Pinterest />;
    case 'reddit':
      return <Reddit />;
    case 'twitter':
      return <Twitter />;
    case 'tiktok':
      return <TikTok />;
    case 'twitch':
      return <Twitch />;
    case 'github':
      return <Github />;
    case 'audience':
      return <Audience />;
    case 'aligned':
      return <Aligned />;
    default:
      return <svg/>;
  }
}

const SvgIcon: FC<SvgIconProps> = ({ name, size, onClick }) => (
  <div style={{width: size}} onClick={onClick}>{getIcon(name)}</div>
)

export default SvgIcon;
