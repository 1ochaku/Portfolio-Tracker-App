import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import MyPortfolio from './pages/MyPortfolio';
import EditStock from './components/EditStock';
import StocksProvider from "./context/StocksProvider";

function App() {
  return (
    <StocksProvider>
      <Router>
      <div className="App">
        <Header/>
        <div className="SideBar">
          <Sidebar />
          <div className='Routes'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/myportfolio" element={<MyPortfolio/>} />
                <Route path="/edit/:symbol" element={<EditStock/>}/>
              </Routes> 
            </div>
          </div>
        </div>
      </Router>
    </StocksProvider>
  );
}

export default App;

