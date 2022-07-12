import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode,
  selectedPrimary?: boolean,
  selectedSecondary?: boolean,
  onClick?: MouseEventHandler,
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  selectedPrimary,
  selectedSecondary,
}) => {
  const classes = `
    w-[56px] h-[48px] ${selectedPrimary ? 'bg-cgrey-300' : 'bg-none'}
    ${selectedSecondary ? 'bg-blueGreyLight border-2 border-blueGrey' : 'bg-none'}
    hover:bg-cgrey-300 rounded-xl
  `;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;