import './App.css';
import Home from './components/Home';
import {SideBar} from './components/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transactions from './components/Transactions';

function App() { 
  return (
    <BrowserRouter>
      <div className='bg-pblue flex jus'>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
