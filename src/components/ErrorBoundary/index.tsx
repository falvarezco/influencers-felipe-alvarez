import React, { ReactNode, Component } from 'react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode,
}

interface ErrorBoundaryState {
  errorMessage: string,
}

const CONTAINER_CLASSES = `
  absolute flex flex-col w-full h-full items-center
  gap-5 justify-center bg-cgrey-100
`;

const BTN_CLASSES = `
  transition bg-cgrey-400 p-3 rounded-xl border-2
  border-cgrey-400 hover:border-2 hover:border-blueGrey
`;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: string) {
    return { errorMessage: error.toString() };
  }

  render() {
    const {errorMessage} = this.state;
    const {children} = this.props;

    return errorMessage ? (
      <div className={CONTAINER_CLASSES}>
        <h3 className='font-semibold text-3xl'>{errorMessage}</h3>
        <Link className={BTN_CLASSES} to='/'>Try Again</Link>
      </div>
    ): children;
  }
}

export default ErrorBoundary;