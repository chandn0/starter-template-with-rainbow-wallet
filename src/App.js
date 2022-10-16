import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="connectwallet">  < ConnectButton /></div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
