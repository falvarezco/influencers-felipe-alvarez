import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Influencers from './pages/Influencers';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Influencers />} />
      </Routes>
    </>
  )
}

export default App;
