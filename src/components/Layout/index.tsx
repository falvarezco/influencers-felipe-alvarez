import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode,
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex p-5 flex-col h-full'>
      {children}
    </div>
  )
}

export default Layout;