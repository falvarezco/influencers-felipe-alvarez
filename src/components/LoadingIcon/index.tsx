import React, { FC } from 'react';

const LoadingIcon: FC = () => {
	return (
    <svg
      data-testid='loading-icon'
      className='animate-spin'
      width='40px'
      viewBox="0 0 24 24"
      strokeDasharray={'3 2'}
      xmlns="<http://www.w3.org/2000/svg>"
    >
      <circle
        cx="12" cy="12" r="8"
        strokeWidth="2" stroke="#475569"
        fill="none"
      />
    </svg>
	)
}

export default LoadingIcon;