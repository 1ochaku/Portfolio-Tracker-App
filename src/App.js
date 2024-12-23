import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import MyPortfolio from './pages/MyPortfolio';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="SideBar">
          <Sidebar />
          <div className='Routes'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/myportfolio" element={<MyPortfolio />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
