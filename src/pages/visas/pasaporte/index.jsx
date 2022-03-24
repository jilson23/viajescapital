import './style.css';
import TituloLinea from '../../../components/tituloLinea';
// import Notas from '../../../components/notas';
// import Advertence from '../../../components/advertence';
import Download from '../../../components/download';
import Titleimage from '../../../components/titleImage';

const Pasaporte = () => {
  return (
    <div className="Pasaporte">
      <Titleimage title="Trámite Pasaporte" image="/img/pasaporte.jpg" />
      <p>
        El costo total del pasaporte en Cali y el Valle del Cauca es de $ 288.500
        Dividiéndose en dos pagos:
      </p>
      <ol>
        <li>
          El primer pago es de $173.500 el cual se cancela en un GANE o por PSE, posterior
          a esto podremos coordinar la cita en la Gobernación.
        </li>
        <li>
          Para el día de la cita la gobernación asigna un pin para poder realizar el
          segundo pago correspondiente a $115.000 y se cancela en el Banco Sudameris.
        </li>
        <li>
          Este mismo día se informa el tiempo en el que estarían entregando el pasaporte.
        </li>
      </ol>
      <TituloLinea titulo="REQUISITOS" />
      <ul>
        <li>Documento de identidad en perfectas condiciones</li>
        <li>Diligenciar formulario borrador de ViajesCapital</li>
        <li>Registro Civil Autenticado en caso de menores de edad</li>
        <li>En caso de Renovación llevar pasaporte vencido</li>
      </ul>
      <Download
        content="Descargar formulario"
        link="../document/Formulario_Pasaporte_Colombiano.pdf"
      />
    </div>
  );
};

export default Pasaporte;
