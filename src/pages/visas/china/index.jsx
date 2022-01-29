import Titleimage from '../../../components/titleImage';
import TituloLinea from '../../../components/tituloLinea';
import Notas from '../../../components/notas';
import Download from '../../../components/download';

const China = () => {
    return (
        <div className="China">
            <Titleimage title="Tramite VISA China" image="../img/china.jpg" />

            <TituloLinea titulo="Requisitos VISA de turismo (L)" />
            <ul>
                <li>•Pasaporte original con mínimo seis meses de vigencia.</li>
                <li>Formulario totalmente diligenciado.</li>
                <li>1 Foto 3 x 4 a color.</li>
                <li>
                    Carta Laboral o de Trabajo o Certificado de Ingresos expedido por
                    contador público y fotocopia de su tarjeta profesional.
                </li>
                <li>
                    Certificado de camara y comercio en original tanto para independientes
                    como para empleados.
                </li>
                <li>
                    Reserva Aérea o fotocopia de sus tiquetes aéreos (si ya los tiene).
                </li>
                <li>
                    Reserva Hotelera o Carta de Justificación de Hospedaje en China
                    (Nombre de Contacto en China y Dirección Completa).
                </li>
                <li>Certificacion bancaria con saldo a la fecha.</li>
                <li>Extractos bancarios de los 3 ultimos meses.</li>
            </ul>

            <TituloLinea titulo="Requisitos VISA de negocios (F)" />
            <p>
                (Este tipo de visa también se otorga a personas que van a China con el
                propósito de realizar trabajos de corto tiempo o prácticas profesionales,
                como pasantías, seminarios, conferencias o congresos).
            </p>

            <ul>
                <li>Pasaporte original con mínimo seis meses de vigencia.</li>
                <li>Formulario totalmente diligenciado.</li>
                <li>1 Foto.</li>
                <li>
                    Carta Laboral o de Trabajo o Certificado de Ingresos expedido por
                    contador público y fotocopia de su tarjeta profesional.
                </li>
                <li>
                    Certificado de camara y comercio en original tanto para independientes
                    como para empleados.
                </li>
                <li>
                    Reserva Aérea o fotocopia de sus tiquetes aéreos (si ya los tiene).
                </li>
                <li>
                    Reserva Hotelera o Carta de Justificación de Hospedaje en China
                    (Nombre de Contacto en China y Dirección Completa).
                </li>
                <li>
                    Carta de Invitación expedida por una entidad oficial o una Autoridad
                    China (Formato ¨Please apply forthwith for visa at the Chinese
                    Embassy/Consulate/Visa Office In Colombia with this form).
                </li>
                <li>Certificacion bancaria con saldo a la fecha.</li>
                <li>Extractos bancarios de los 3 ultimos meses.</li>
            </ul>

            <TituloLinea titulo="NOTAS ADICIONALES" />
            <div className="grid3">
                <Notas>
                    La visa por múltiples entradas se otorga presentando fotocopia de
                    visas de negocios (f) anteriores, carta de invitación oficial de china
                    o en el caso de que el aplicante tenga establecida una empresa en
                    china, presentar fotocopia del documento de su empresa registrada allá
                    o documentos de su domicilio o residencia en china.
                </Notas>
                <Notas color="green">
                    Las personas que visitan Hong Kong y requieren ingresar a china, deben
                    solicitar el visado chino en su país con anterioridad al viaje. Las
                    personas que visitan Hong Kong y requieren ingresar a china, deben
                    solicitar el visado chino en su país con anterioridad al viaje.
                </Notas>
                <Notas color="white">
                    Las personas con pasaporte oficial y diplomático no requieren visa.
                </Notas>
            </div>
            <div className="grid2">
                <Notas>
                    Los extranjeros residentes en Colombia pueden solicitar la visa
                    presentando junto con los demás documentos requeridos, fotocopia de su
                    cédula de extranjería y visa colombiana.
                </Notas>
                <Notas color="green">
                    Caso Hong Kong: los colombianos que viajan a Hong Kong y su estadía va
                    a ser menos de 90 días, no requieren visa.
                </Notas>
            </div>

            <p>Este tramite demora 5 dias hábiles.</p>

            <TituloLinea titulo="Precios por persona" />
            <ul>
                <li>Valor tramite por una entrada $ 277.000</li>
                <li>Valor tramite por 2 entradas $ 377.000</li>
            </ul>
            <TituloLinea titulo="Formulario para Visa China" />
            <Download
                content="Descargar Formulario"
                link="../document/formulario-visa-china-pass.pdf"
            />
        </div>
    );
};
export default China;
