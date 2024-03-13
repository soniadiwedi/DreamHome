import logo from './logo.svg';
import './App.css';
import './index.scss'
import "./layout.scss"

import Navbar from './components/navbar/Navbar';
import Home from './pages/homePage/Home';
function App() {
  return (
    <div className="layout">
      <div className='navbar'>
     <Navbar/>
      </div>
      <div className='content'>
     <Home/>
      </div>

    </div>
  );
}

export default App;
