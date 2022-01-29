import './style.css';
import TituloLinea from '../../../components/tituloLinea';
import Notas from '../../../components/notas';
import Advertence from '../../../components/advertence';
import Download from '../../../components/download';
import Titleimage from '../../../components/titleImage';

const NuevaZelanda = () => {
    return (
        <div className="NuevaZelanda">
            <Titleimage
                title="Tramite VISA Nueva Zelanda"
                image="../img/nuevazelanda.jpg"
            />
            <ul>
                <li>El trámite se debe realizar ante el VAC en Washington D.C.</li>
                <li>Centro de Postulación de Visas - VAC en Washington DC</li>
                <li>Horario de atención: 9:00 a 16:00, de lunes a viernes.</li>
                <li>
                    Los tiempos de proceso aplican a postulaciones presentadas con
                    documentación completa. Considere que la evaluación de su postulación
                    puede demorar 40 días, aproximadamente
                </li>
            </ul>
            <TituloLinea titulo="Requisitos VISA de Turismo" />
            <ul>
                <li>
                    Formulario completamente diligenciado, firmado y fechado por cada uno
                    de los pasajeros (Un formulario puede ser usado por una familia, por
                    ejemplo, un postulante principal con postulantes dependientes. Los
                    hijos dependientes deben ser menores de 20 años, en este caso pagan un
                    solo valor de visa.
                </li>
                <li>Especificar código postal en el punto de dirección en Colombia.</li>
                <li>Formulario adicional.</li>
                <li>
                    Ciudadanos de otra nacionalidad deben proporcionar prueba de su
                    situación y derechos de su entrada al país de residencia (visa de
                    residencia, cédula de extranjería legalizada ante notario)
                </li>
                <li>
                    Itinerario o carta de la línea aérea o agencia de viajes, confirmando
                    la reserva de los pasajes
                </li>
                <li>
                    Certificado laboral, especificando cargo, sueldo y tiempo de servicio
                </li>
                <li>
                    Pruebas de solvencia económica: El monto mínimo requerido es de
                    NZ$1.000 por mes de estadía para cubrir gastos personales y
                    alojamiento (no incluye pasaje, seguro, ni curso de inglés). Se puede
                    demostrar a través de uno o varios de los siguientes documentos:
                    Extractos bancarios de cuenta corriente o ahorros de los últimos tres
                    meses; certificación bancaria informando posesión de fondos mutuos,
                    acciones u otros.
                </li>
                <li>
                    Formulario completamente diligenciado, firmado y fechado por cada uno
                    de los pasajeros (Un formulario puede ser usado por una familia, por
                    ejemplo, un postulante principal con postulantes dependientes. Los
                    hijos dependientes deben ser menores de 20 años, en este caso pagan un
                    solo valor de visa.
                </li>
                <li>
                    Seguro de asistencia médica por el período de la estadía. (En nuestras
                    oficinas puede comprar el seguro de asistencia médica correspondiente)
                </li>
                <li>
                    Si es independiente: Certificado de la Cámara de Comercio, certificado
                    de la DIAN, certificados de propiedad o bienes raíces
                </li>
                <li>
                    Si es pensionado: Resolución de la pensión y comprobantes de pago de
                    los últimos seis meses.
                </li>
                <li>
                    Para personas a cargo: Carta de responsabilidad de gastos, registro de
                    nacimiento, registro de matrimonio apostillados para demostrar
                    parentesco y certificado de estudios, si aplica.
                </li>
                <li>
                    Para menores de edad: Registro de nacimiento, certificado de estudios
                    y autorización de salida del país cuando viaje sólo o con uno de sus
                    padres.
                </li>
                <li>
                    Si es invitado: Adjuntar formulario «Sponsorship Form for Visiting New
                    Zealand» y adjuntar la información requerida en dicho contrato. La
                    Embajada solo recibe documentos originales o copias notariadas.
                </li>
            </ul>
            <div className="grid3">
                <Advertence content="Si el oficial de inmigración lo solicita, los postulantes deberán presentar una traducción certificada de cualquier otro documento no escrito en inglés y en apoyo de una postulación a una visa de entrada temporal." />
                <Download content="Descargar formulario" />
                <Download content="Descargar formulario adicional" />
            </div>

            <TituloLinea titulo="Derechos Consulares" />
            <ul>
                <li>Valor de la visa USD 120</li>
                <li>Cuota de facilitación USD 58</li>
                <li>Asesoría $ 100.000</li>
                <li>
                    El valor de la visa, la cuota de facilitación y el correo de regreso
                    se cancelar por medio de tarjeta de crédito diligenciando los datos de
                    la misma en el formulario.
                </li>
                <li>Valor correo Bogotá - Washington $196.500 hasta 500 gramos.</li>
            </ul>
            <TituloLinea titulo="NOTAS" />

            <div className="grid3">
                <Notas>
                    Los colombianos están exentos de visa de tránsito por Nueva Zelanda.
                </Notas>
                <Notas color="green">
                    Los formularios que estén incompletos serán devueltos al postulante y
                    rechazado el tramite.
                </Notas>
                <Notas color="white">
                    La embajada puede solicitar información adicional y entrevista al
                    postulante si lo considera necesario.
                </Notas>
            </div>
        </div>
    );
};
export default NuevaZelanda;
