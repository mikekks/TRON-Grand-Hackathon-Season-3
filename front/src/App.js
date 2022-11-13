import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';
import WalletPage from './pages/WalletPage';
import GrowingFarmPage from './pages/GrowingFarmPage';
import StakingFarmPage from './pages/StakingFarm';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<StartPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/growing" element={<GrowingFarmPage />} />
          <Route path="/staking" element={<StakingFarmPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
