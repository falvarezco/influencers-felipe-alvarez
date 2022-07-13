import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode,
}

const CONTAINER_CLASSES = 'flex p-5 pt-[78px] flex-col h-full';

const Layout: FC<LayoutProps> = ({children}) => (
  <div className={CONTAINER_CLASSES}>
    {children}
  </div>
);

export default Layout;