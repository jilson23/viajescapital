import './style.css';
import TituloLinea from '../../../components/tituloLinea';
import Download from '../../../components/download';
import Notas from '../../../components/notas';

function Sostenibilidad() {
  return (
    <div className="Sostenibilidad">
      <TituloLinea titulo="Sostenibilidad" />

      <div className="Sostenibilidad__contenedor">
        <div className="Sostenibilidad__card">
          <div className="Sostenibilidad__header">
            <img className="Sostenibilidad__img" src="./SVG/promovaca.svg" alt="" />
            <div className="Sostenibilidad__titulos">
              <h3>¿Quieres aprender a Reciclar?</h3>
              <p>Aquí todo lo que necesitas saber</p>
            </div>
          </div>
          <div className="Sostenibilidad__body">
            <a
              className="Sostenibilidad__link"
              download
              href="../document/como-reciclar.pptx"
            >
              Como reciclar
            </a>
          </div>
        </div>
      </div>

      <div className="grid3">
        <div>
          <TituloLinea titulo="Patrimonio de Colombia para la humanidad" />
          <Download
            content="Descargar PDF"
            link="../document/PATRIMONIO-DE-COLOMBIA-PARA-LA-HUMANIDAD.jpeg"
          />
        </div>

        <div>
          <TituloLinea titulo="Tips para proteger el Medio Ambiente" />
          <Download content="Descargar PDF" link="../document/TIPS-MEDIO-AMBIENTE.jpeg" />
        </div>

        <div>
          <TituloLinea titulo="Conoce nuestra Política de Sostenibilidad" />
          <Download
            content="Descargar PDF"
            link="../document/POLITICA-DE-SOSTENIBILIDAD.jpeg"
          />
        </div>
      </div>

      <TituloLinea titulo="Denuncia si encuentras alguna irregularidad" />

      <img className="Nosotros__image" src="./img/orangutan.jpg" alt="" />

      <p>
        Denunciar ante las autoridades competentes irregularidades en el cumplimiento de
        la legislación vigente, especialmente aquellas que atenten contra el patrimonio
        cultural y natural, así como la integridad social.
      </p>

      <Notas>
        <p>018000115010 Explotación sexual niños niñas y adolescentes.</p>

        <p>
          POLICÍA NACIONAL 112-123 trafico ilegal y daño de la flora y fauna.
          Comercialización y daño de bienes culturales.
        </p>

        <p>POLICÍA DE TURISMO: 6530202 - 350 304 5628 Intendente Salas.</p>
      </Notas>

      <img className="Nosotros__image" src="./img/certificado-calidad.jpg" alt="" />

      <Download
        content="Ver Certificado de Calidad Turística"
        link="../document/certificado-sgs.jpeg"
      />
    </div>
  );
}
export default Sostenibilidad;
