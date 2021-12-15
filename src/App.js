// import logo from './logo.svg';
import './App.css';
import Reservas from './components/reservas';
import whapptrip from './components/whapptrip';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src='./SVG/logo.svg' className="App-logo" alt="logo" />
      </header>
      <Reservas />
      <whapptrip />
    </div>
  );
}

export default App;
