import './style.css'
import Promovacaciones from '../../components/promovacaciones';
import Reservas from '../../components/reservas';
import Whapptrip from '../../components/whapptrip';

function Inicio() {
    return (
      <div className="Inicio">
        <Reservas />
        <Whapptrip />
        <Promovacaciones />
      </div>
    );
  }

export default Inicio;