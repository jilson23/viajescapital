import Titleimage from '../../../components/titleImage';
import TituloLinea from '../../../components/tituloLinea';
import TituloCuadro from '../../../components/titulocuadro';
import Download from '../../../components/download';

const Australia = () => {
  return (
    <div className="Australia">
      <Titleimage title="Trámite VISA Australia" image="./img/australia.jpg" />
      <p>
        La Embajada de Australia informa que a partir del 9 de Mayo de 2014 ha puesto a
        disposición del público el sistema de postulación online para visas de turismo y
        negocios. Todo postulante a una visa de visitante (Subclase 600) ONLINE debe
        proporcionar documentos de respaldo junto con su solicitud. El Departamento de
        Inmigración tomará una decisión en base a la documentación presentada. Es
        recomendable que todo postulante proporcione tanta evidencia como le sea posible
        para respaldar su solicitud.
      </p>
      <p>
        Para adjuntar documentación deberá crear una cuenta «ImmiAccount». Una Vez usted
        haya creado e ingresado a su cuenta, debe utilizar la opción «attach dcument»
        (adjuntar documento), la cual verá en la parte superior izquierda de su pantalla.
        Para crear y acceder directamente a su «ImmiAccount».
      </p>
      <p>
        En caso de que «ImmiAccount» se encuentre en mantenimiento o tenga inconvenientes
        para adjuntar documentos, se puede contactar al Centro de Servicio para las
        Américas.
      </p>
      <p>La duración del trámite queda a criterio de la Embajada.</p>
      <p>La visa es otorgada según criterio de la Embajada.</p>
      <hr />
      <p>
        La visa de Visitante (subclase 600) permite visitar Australia para realizar
        actividades de turismo o negocios. Es una visa temporal.{' '}
      </p>
      <TituloLinea titulo="Esta visa tiene cuatro categorías:" />
      <TituloCuadro content="Categoría Turística" />
      <p>
        para las personas que viajan a Australia para pasar unas vacaciones, recreación o
        visitar a familiares y amigos. Si solicita la visa en Australia, debe estar en
        Australia cuando la visa sea decidida. Si solicita la cita fuera de Australia,
        usted debe estar fuera de Australia cuando la visa sea decidida. Adjuntar{' '}
        <a href="https://chile.embassy.gov.au/files/scle/1419spa.pdf">formulario 1419</a>.
      </p>

      <TituloCuadro content="Categoría visita de negocios" />
      <p>
        Para las personas de negocios que viajen a Australia para una visita de negocios
        breve. Esto incluye ir a una conferencia, negociación o reunión. Usted debe estar
        fuera de Australia cuando postule y cuando la visa sea decidida.
      </p>

      <TituloCuadro content="Categoría Familiar Patrocinador" />
      <p>
        Para las personas que viajen a Australia para visitar a su familiar. Usted debe
        tener un patrocinador a quien se le pueda pedir una garantía. Usted debe estar
        fuera de Australia cuando postule y cuando la visa sea decidida. No podrá
        solicitar otra visa durante su estadía en Australia.
      </p>

      <TituloCuadro content="Visas de Tránsito" />
      <p>
        Si usted pasa en tránsito hacia otro país debe solicitar la visa de tránsito. La
        visa de tránsito es gratuita y le permite salir del aeropuerto y permanecer hasta
        3 días (no más de 72 horas) en la ciudad de arribo de Australia, la información
        correspondiente se encuentra en el siguiente{' '}
        <a href="https://chile.embassy.gov.au/sclecastellano/visatransito.html">enlace</a>
        .
      </p>
      <TituloLinea titulo="Derechos Consulares" />
      <ul>
        <li>
          Valor VISA de turismo y negocios (Subclase 600) USD 135 más la toma de huellas
          33 USD
        </li>
        <li>Asesoría $ 100.000</li>
        <li>Valor VISA de temporal trabajo (Subclase 400) USD 175</li>
        <li>Trámite Avac consultar el siguiente enlace: Aranceles Avac.</li>
        <li>La visa de tránsito es gratuita.</li>
      </ul>
      <Download content="Descargar Formulario" />
    </div>
  );
};
export default Australia;
