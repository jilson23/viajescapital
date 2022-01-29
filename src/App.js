import './App.css';
import {Outlet, Link, useLocation } from 'react-router-dom'
import Footer from './components/footer';



function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <header className="header">
        {
          pathname !== '/' ? <Link to="/"> <img className='header__back' src="./SVG/back.svg" alt="" /> </Link> : null
        }
      <Link to="/"><img className="header__logo" src='./SVG/logo.svg' alt="logo" /></Link>
      </header>
      
      {/* <Link to="/">inicio</Link>
      <Link to="/nosotros">nosotros</Link>
      <Link to="/visas">visas</Link>
      <Link to="/promovacaciones">promo</Link> */}
      <Outlet />
      <Footer />
      
    </div>
  );
}

export default App;
