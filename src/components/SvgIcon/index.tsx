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
import { ReactComponent as FirstPage } from '../../svg/first-page.svg';
import { ReactComponent as LastPage } from '../../svg/last-page.svg';
import { ReactComponent as PrevPage } from '../../svg/prev-page.svg';
import { ReactComponent as NextPage } from '../../svg/next-page.svg';
import { ReactComponent as Search } from '../../svg/search.svg';

export interface SvgIconProps {
  name: string,
  testId?: string,
  size?: string,
  classes?: string,
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
    case 'first-page':
      return <FirstPage />;
    case 'last-page':
      return <LastPage />;
    case 'prev-page':
      return <PrevPage />;
    case 'next-page':
      return <NextPage />;
    case 'search':
      return <Search />;
    default:
      return <svg/>;
  }
}

const SvgIcon: FC<SvgIconProps> = ({ name, testId, size, onClick, classes }) => (
  <div
    data-testid={testId}
    style={{width: size}}
    className={classes}
    onClick={onClick}>
    {getIcon(name)}
  </div>
)

export default SvgIcon;
