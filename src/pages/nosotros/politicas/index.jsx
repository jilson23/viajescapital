import TituloLinea from '../../../components/tituloLinea';
import Download from '../../../components/download';

function Politicas() {
  return (
    <div className="Politicas">
      <TituloLinea titulo="Políticas" />
      <Download content="Descargar PDF Políticas" link="../document/inz1017.pdf" />
    </div>
  );
}
export default Politicas;
