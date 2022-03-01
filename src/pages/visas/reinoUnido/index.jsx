import Titleimage from '../../../components/titleImage';
import Notas from '../../../components/notas';
import Advertence from '../../../components/advertence';
import Download from '../../../components/download';
import TituloLinea from '../../../components/tituloLinea';

const ReinoUnido = () => {
  return (
    <div className="ReinoUnido">
      <Titleimage title="Trámite VISA Reino Unido" image="./img/londres.jpg" />
      <Advertence content="Toda la documentación debe presentarse en Original y Copia" />
      <TituloLinea titulo="Requisitos VISA" />
      <ul>
        <li>Pasaporte Biométrico o Electrónico con una validez mínima de 6 meses.</li>
        <li>2 Fotografías a color fondo blanco tamaño 3.5 x 4.5.</li>
        <li>
          Certificación Laboral indicando cargo, tiempo de servicio, salario y periodo de
          vacaciones.
        </li>
        <li>Extractos bancarios de los 3 últimos meses.</li>
        <li>Declaración de renta.</li>
        <li>Printer de reserva aérea.</li>
        <li>
          Reserva de hotel o carta de invitación con copia de la tarjeta de residencia de
          la persona que invita.
        </li>
        <li>
          Para menores de edad se debe anexar permiso de salida del país autenticado ante
          notaria, registro civil de nacimiento , carta de responsabilidad de gastos, y
          certificados de estudios. Al diligenciar el formulario para menores de edad, hay
          una pregunta de con quien viaja el menor de edad, hay que colocar el nombre
          exacto de la persona con que va a viajar, ya que esta información va a salir en
          la visa y solo con esa persona le permitiran entrar al Reino Unido al menor de
          edad.
        </li>
      </ul>

      <TituloLinea titulo="NOTA" />
      <Notas>
        A partir Julio los colombianos no necesitan visa de tránsito aéreo para vuelos que
        requieran hacer escala en el Reino Unido. Los requerimientos de visa seguirán
        siendo necesarios si los nacionales, por alguna razón, necesitan cruzar el
        Departamento de Fronteras del Reino Unido o si su vuelo de conexión es desde un
        aeropuerto diferente al que inicialmente se llegó.
      </Notas>
      <TituloLinea wrap={true} titulo="Documentos adicionales para VISA de estudiantes" />
      <ul>
        <li>
          Diligenciar el formulario adicional para estudiantes. ( Additiona Student
          Questionnaire) Este formulario debe ser diligenciado en ingles.
        </li>
        <li>
          Carta de aceptacion de la universidad o establecimiento educativo en el Reino
          unido indicando los estudios a cursar con duración del curso e intensidad
          horaria.
        </li>
        <li>Certificados de estudios cursados en Colombia.</li>
      </ul>
      <TituloLinea titulo="Nuestro servicio incluye" />
      <ul>
        <li>Diligenciamiento del formulario.</li>
        <li>Asesoría en los documentos a presentar.</li>
        <li>Cita para la toma de huellas en Cali.</li>
      </ul>
      <TituloLinea titulo="Precios por persona" />

      <ul>
        <li>Valor de la visa de 6 meses 145 USD</li>
        <li>Valor de las biometrias en Cali 100 USD</li>
        <li>Valor del trámite $ 190.000</li>
      </ul>
      <p>
        Las citas en Cali solo las dan los días martes, el trámite se paga en Efectivo lo
        demás en Tarjeta de crédito.
      </p>

      <TituloLinea titulo="Formulario para Visa Reino Unido" />
      <Download
        content="Descargar Formulario"
        link="../document/FORMULARIO-BORRADOR-UK.docx"
      />
    </div>
  );
};
export default ReinoUnido;
