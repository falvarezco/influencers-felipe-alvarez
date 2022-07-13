import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import Influencers from './pages/Influencers';

const App = () => {
  return (
    <ErrorBoundary>
      <Navigation />
      <Routes>
        <Route path="/" element={<Influencers />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App;
