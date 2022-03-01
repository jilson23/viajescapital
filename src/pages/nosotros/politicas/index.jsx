import TituloLinea from '../../../components/tituloLinea';
import Download from '../../../components/download';

function Politicas() {
  return (
    <div className="Politicas">
      <TituloLinea titulo="Políticas" />
      <Download
        content="Descargar PDF Políticas"
        link="../document/codigo-de-conducta.pdf"
      />
    </div>
  );
}
export default Politicas;
