import './App.scss';
import React from 'react';
import MainPage from './pages/MainPage';
import WalletPage from './pages/WalletPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar';

{/*
==============================
App.js

스타일 파일(.scss)들은 이 글을 보는 시점에서 파일 구조를 변경중에 있습니다.
.scss 파일들은 아직까지는 가급적이면 내용 변경이나 path 이동 등을 삼가주시면 감사하겠습니다.
==============================
*/}

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
        <BottomNavbar /> {/* 하단바 컴포넌트 */}
      </Router>
    </div>
  );
}

export default App;
