import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingApp from './AppComponents/LandingApp';
import WalletApp from './AppComponents/WalletApp';
import Login from './Components/Forms/Login/Login';

function App ()
{
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<LandingApp />} />
        <Route path='/wallet' element={<WalletApp />} />
        <Route path='/' element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
