import './App.scss';
import React from 'react';
import MainPage from './pages/MainPage';
import WalletPage from './pages/WalletPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} /> {/* main page */}
          <Route path="/wallet" element={<WalletPage />} /> {/* wallet page */}
          {/* <Route path="/wallet" element={<WalletPage />} /> 3rd page */}
          {/* <Route path="/wallet" element={<WalletPage />} /> 4th page */}
        </Routes>
        <BottomNavbar />
      </Router>
    </div>
  );
}

export default App;
