import React, { FC, ReactNode } from 'react';

interface NavigationProps {
  children: ReactNode,
}

const Navigation: FC<NavigationProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Navigation;