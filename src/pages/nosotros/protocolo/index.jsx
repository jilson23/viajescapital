import TituloLinea from '../../../components/tituloLinea';
import Download from '../../../components/download';

function Protocolo() {
  return (
    <div className="Protocolo">
      <TituloLinea titulo="Protocolo de Bioseguridad" />
      <p>
        A continuación encontraras nuestros protocolos de bioseguridad y recomendaciones a
        la hora de realizar tus viajes, recuerda tu salud es lo mas importante para
        nosotros, tómate unos minutos para leerlos.
      </p>
      <Download
        content="Descargar PDF Protocolos de Bioseguridad"
        link="../document/inz1017.pdf"
      />
    </div>
  );
}
export default Protocolo;
