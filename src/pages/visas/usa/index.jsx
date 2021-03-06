import './style.css';
import Titleimage from '../../../components/titleImage';
import TituloLinea from '../../../components/tituloLinea';
import Notas from '../../../components/notas';
import Download from '../../../components/download';

const Usa = () => {
  return (
    <div className="Usa">
      <Titleimage title="Trámite VISA Americana" image="/img/american.jpg" />
      <TituloLinea titulo="Requisitos" />
      <ul>
        <li>
          Carta del empleador en donde se especifique: Salario mensual, cargo y tiempo de
          servicio.
        </li>
        <li>
          Desprendibles recientes de pago de nomina o de la actividad que desempeñe
          (Últimos 3 meses).
        </li>
        <li>Tarjeta de la Eps o de Medicina prepagada.</li>
      </ul>
      <TituloLinea titulo="Solvencia económica" />
      <ul>
        <li>Certificado de Cámara de Comercio. (Si es independiente).</li>
        <li>Formulario de registro mercantil. (Si Posee).</li>
        <li>Certificación de ingresos y/o retención en la fuente del último año.</li>
        <li>Extractos bancarios (Últimos 3 Meses).</li>
        <li>Si posee Cdts.</li>
        <li>Cédulas de Capitalización.</li>
        <li>Fiducias o cualquier vínculo bancario anexar constancia.</li>
      </ul>
      <TituloLinea titulo="Vínculos familiares / sociales" />
      <ul>
        <li>Certificado de matrimonio. (Expedido en los últimos tres meses)</li>
        <li>
          Para menores de edad, copia del «Folio» del registro de nacimiento. (Expedido en
          los últimos tres meses)
        </li>
        <li>
          Si depende de los padres, presentar documentos de ellos.(Carta de
          Responsabilidad).
        </li>
        <li>Tarjeta profesional o carnet universitario. (Copia)</li>
        <li>Si está estudiando actualmente anexar constancia estudiantil.</li>
      </ul>
      <TituloLinea
        wrap={true}
        titulo="Requisitos adicionales para todas las solicitudes"
      />
      <ul>
        <li>
          Pasaporte actual con un mínimo de seis meses de validez después de ingresar los
          Estados Unidos.
        </li>
        <li>Pasaportes anteriores.</li>
        <li>
          Documentos de identidad (cédula de ciudadanía tarjeta de identidad, Registro
          civil).
        </li>
        <li>
          Formulario DS-160, diligenciado completamente, con la información correcta y
          concreta.
        </li>
        <li>Confirmacion US-INFO para agendamiento de cita.</li>
        <li>
          2 Fotografías reciente 5x5 fondo blanco de frente color, con el cabello recogido
          se deben ver las orejas, sin aretes, sin collares, sin lentes, esta misma foto
          debe ser traída en un CD enviada por correo electrónico al siguiente mail:{' '}
          <a href="mailto:documentacion@viajescapital.com">
            documentacion@viajescapital.com
          </a>
        </li>
      </ul>
      <div className="grid2">
        <Notas>
          Para Inicar el Trámite solo se nesecita la Foto 5x5 Fondo Blanco, Copia del
          Pasaporte donde están los Datos Biométricos y el Formulario Borrador que esta
          adjunto, los demas documentos se nesecitan al final ya cuando este listo el
          Ds-160 y el Us Info.
        </Notas>
        <Notas color="green">
          Para renovación se requiere pasaporte original, el Formulario Borrador, una foto
          5x5 fondo blanco física y en CD o enviada por correo.
        </Notas>
      </div>

      <TituloLinea titulo="Precios por persona" />
      <ul>
        <li>Valor derechos Consulares $ 160 Usd.</li>
      </ul>
      <h3>Valor tramitología y Asesoría:</h3>
      <ul>
        <li>Individual: 200.000</li>
        <li>2 personas 150.000</li>
        <li>3 personas en adelante 100.000</li>
        <li>Renovacion, Plan Canitas 180.000</li>
        <li>2 personas en adelante 150.000 </li>
        <li>Menor de 14 años 180.000</li>
        <li>Estudiante: $ 180.000</li>
      </ul>

      <p>Se pueden pagar en Efectivo o con Tarjeta de Crédito</p>
      <h3>Para consignaciones:</h3>
      <p>
        Bancolombia Cuenta de Ahorros # 7571669257-4 a nombre de Viajes Capital S.A.S.
        Nit. 900672778-9 (Enviar foto de consignanción)
      </p>
      <TituloLinea titulo="Transferencias:" />
      <p>
        Bancolombia Cuenta de Ahorros # 7571669257-4 a nombre de Viajes Capital S.A.S.
      </p>
      <div className="Usa__debito">
        <h3>Pago tarjeta débito:</h3>{' '}
        <a href="https://www.zonapagos.com/t_viajescapital/pagos.asp">Pagar</a>
      </div>

      <TituloLinea titulo="Formulario para Visa Americana" />
      <div className="grid2">
        <Download
          content="Descargar Formulario"
          link="../document/Formato_Actualizado_Visa_EEUU_2019_Agosto_01.pdf"
        />
        <Notas color="white">
          Todo se puede enviar al correo documentacion@viajescapital.com o enviado a la
          siguiente direcccion Av 5 a norte 25-18 Local 11 piso 2 C.C. Calicentro norte
          (Sector La Pasarella)
        </Notas>
      </div>
    </div>
  );
};
export default Usa;
