import TituloLinea from '../../../components/tituloLinea';
import Download from '../../../components/download';
import './style.css';

function Protocolo() {
  return (
    <div className="Protocolo">
      <TituloLinea titulo="Protocolo de Bioseguridad" />
      <p>
        A continuación encontraras nuestros protocolos de bioseguridad y recomendaciones a
        la hora de realizar tus viajes, recuerda tu salud es lo mas importante para
        nosotros, tómate unos minutos para leerlos.
      </p>
      <div className="grid2">
        <Download
          content="Descargar PDF Recomendaciones de Bioseguridad"
          link="../document/recomendaciones-bioseguridad.pdf"
        />
        <Download
          content="Descargar PDF Protocolos de Bioseguridad"
          link="../document/2-Protocolo-de-bioseguridad.pdf"
        />
      </div>
    </div>
  );
}
export default Protocolo;
