// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Reservas from './components/reservas';
import Whapptrip from './components/whapptrip2';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src='./SVG/logo.svg' className="App-logo" alt="logo" />
      </header>
      <Reservas />
      <Whapptrip />
      <Footer />
    </div>
  );
}

export default App;
