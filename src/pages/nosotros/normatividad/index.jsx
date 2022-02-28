import TituloLinea from '../../../components/tituloLinea';
import Download from '../../../components/download';

function Normatividad() {
  return (
    <div className="Normatividad">
      <TituloLinea titulo="Normatividad" />
      <Download content="Descargar PDF Normatividad" link="../document/inz1017.pdf" />
    </div>
  );
}
export default Normatividad;
