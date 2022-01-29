import Titleimage from '../../../components/titleImage';
import Download from '../../../components/download';
import TituloLinea from '../../../components/tituloLinea';

const Canada = () => {
    return (
        <div className="Canada">
            <Titleimage title="Tramite VISA Canada" image="../img/canada.jpg" />

            <TituloLinea titulo="Requisitos" />
            <p>
                No presentar toda la documentación exigida puede ocasionar el rechazo de
                su solicitud o demoras de tramitación.
            </p>
            <p>
                Todos los documentos que estén en un idioma diferente al inglés, francés o
                español deben estar traducidos y venir acompañados de una declaración
                jurada por la persona que realizó la traducción. También se debe presentar
                una fotocopia autenticada del documento original.
            </p>
            <p>
                La solicitud será rechazada de inmediato si contiene declaraciones falsas
                o documentos falsos.
            </p>
            <h2>Existen dos listas; ¿Cuál aplica a su caso?</h2>

            <TituloLinea titulo="Si usted:" />
            <ul>
                <li>Ya ha tenido una visa de residencia temporal canadiense.</li>
                <li>Ya ha viajado a Canadá en los últimos cinco años.</li>
                <li>
                    No tiene NINGUNA INFRACCIÓN de inmigración en CUALQUIER país (ejemplo:
                    deportación, visa rechazada, etc.). Califica para el proceso
                    simplificado y sólo tiene que presentar los documentos que aparecen en
                    la columna “Simplificado”. Los solicitantes de la visa de transito
                    deben suministrar los documentos que aparecen en la lista “Reg.”
                </li>
            </ul>
            <p>
                Si usted no califica para este proceso, debe suministrar todos los
                documentos habituales, los cuales aparecen en la columna “Reg.”
            </p>
            <TituloLinea titulo="Si corresponde, también debe presentar los documentos siguientes:" />
            <p>
                Si usted duda de si necesita suministrar sus datos biométricos, de cuales
                tarifas pagar o si debe incluir fotografías en papel, comunicarse con el
                Centro de recepción de solicitudes de visa más cercano a usted el cual le
                suministrará instrucciones personalizadas.
            </p>
            <p>
                Cuando usted llegue al Centro de Recepción de Solicitud de Visas
                Canadiense, pague los costos de servicio, presente su solicitud y obtenga
                un recibo. Este recibo contiene su número personal de seguimiento,
                necesario para verificar en línea la evolución de su solicitud.
            </p>
            <h2>Valor tramitología y Asesoría:</h2>
            <ul>
                <li>
                    Los derechos consulares deben ser pagados en efectivo, en el Banco de
                    Occidente a nivel nacional, en la cuenta No. 291005932 a nombre de la
                    Embajada de Canadá, código 03 para visas de una entrada, código 04
                    para visas de múltiples entradas.
                </li>
                <li>
                    Valor diligenciamiento de Formularios y asesoría personalizada
                    $250.000 por persona.
                </li>
                <li>
                    Valor Derechos consulares Visa Canada de Turismo con Biometrias $ 185
                    Cad.
                </li>
                <li>
                    Valor VFS Global unicamente para menores de 14 años y mayores de 80
                    años $49.800
                </li>
            </ul>
            <hr />
            <p>
                (PORQUE NO PRESENTAN HUELLAS, NO TIENEN QUE VENIR) Y estos se pueden pagar
                en el vfs Por tarjeta de débito o de crédito ((Visa/Mastercard).
            </p>
            <Download content="Descargar Formulario" />
        </div>
    );
};
export default Canada;
