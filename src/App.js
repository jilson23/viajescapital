import './App.css';
import {Outlet, Link} from 'react-router-dom'
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src='./SVG/logo.svg' className="App-logo" alt="logo" />
      </header>
      
      <Link to="/">inicio</Link>
      <Link to="/nosotros">nosotros</Link>
      <Link to="/visas">visas</Link>
      <Link to="/promovacaciones">promo</Link>
      <Outlet />
      <Footer />
      
    </div>
  );
}

export default App;
