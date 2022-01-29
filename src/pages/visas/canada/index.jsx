import './style.css';
import Titleimage from '../../../components/titleImage';
// import Download from '../../../components/download';
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
            <h3>Existen dos listas; ¿Cuál aplica a su caso?</h3>

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

            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Descripción</strong>
                        </td>
                        <td>
                            <strong>Reg.</strong>
                        </td>
                        <td>
                            <strong>Simplificado</strong>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Formulario de Solicitud (IMM5257) [
                            <a
                                href="http://www.cic.gc.ca/english/pdf/kits/forms/IMM5257E.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ING
                            </a>{' '}
                            |{' '}
                            <a
                                href="http://www.cic.gc.ca/francais/pdf/trousses/form/IMM5257F.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FRA
                            </a>
                            ] Debidamente completado y firmado con fecha. Incluya toda su
                            información de contacto (o la de su representante autorizado).
                            Asegúrese de validar el formulario una vez lo haya terminado
                            de llenar; esto generará una página con códigos de barras. Los
                            menores de edad requieren que uno de sus padres o su acudiente
                            autorizado firme este formulario por ellos.
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>
                            Formulario de Información Familiar (IMM 5645) [
                            <a
                                href="http://www.cic.gc.ca/english/pdf/kits/forms/IMM5645E.PDF"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ING
                            </a>{' '}
                            |{' '}
                            <a
                                href="http://www.cic.gc.ca/francais/pdf/trousses/form/IMM5645F.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FRA
                            </a>
                            ] Cada solicitante debe presentar su propio formulario de
                            información familiar, inclusive los niños. Asegúrese de
                            incluir el nombre de todos los familiares requeridos, así como
                            su lugar y fecha de nacimiento, su estado civil, ocupación
                            actual y dirección. Si alguna de las preguntas no aplica a su
                            caso particular, por favor escriba la sigla ‘N/A’.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            Suplemento 1(Schedule/Annexe 1), [
                            <a
                                href="http://www.cic.gc.ca/english/pdf/kits/forms/IMM5257B_1.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ING
                            </a>{' '}
                            |{' '}
                            <a
                                href="http://www.cic.gc.ca/francais/pdf/trousses/form/IMM5257B_1.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FRA
                            </a>
                            ] Si las preguntas aplican a su caso. No se requiere para
                            solicitantes menores de edad.
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>
                            Si usted prefiere que un representante se encargue de los
                            trámites concernientes a su solicitud de visa ante nuestra
                            oficina, es necesario que usted complete el formulario Uso de
                            un Representante (IMM 5476). [
                            <a
                                href="http://www.cic.gc.ca/english/information/representative/rep-who.asp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ING
                            </a>{' '}
                            |{' '}
                            <a
                                href="http://www.cic.gc.ca/francais/information/representants/representant-qui.asp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FRA
                            </a>
                            ] Únicamente representantes autorizados [ING | FRA] tienen
                            permitido actuar en su nombre.
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>
                            Declaración estatutaria de unión de hecho (Statutory
                            Declaration of Common Law Union/Déclaration officielle d’union
                            de fait), [
                            <a
                                href="http://www.cic.gc.ca/english/pdf/kits/forms/IMM5409E.PDF"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ING
                            </a>{' '}
                            |{' '}
                            <a
                                href="http://www.cic.gc.ca/francais/pdf/trousses/form/IMM5409F.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FRA
                            </a>
                            ] Si aplica a su caso. Adjunte evidencia de haber cohabitado
                            por un periodo superior a un año.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            Dos fotografías de pasaporte por cada solicitante (disponible
                            únicamente en{' '}
                            <a
                                href="http://www.cic.gc.ca/english/information/applications/photospecs.asp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                inglés
                            </a>{' '}
                            o{' '}
                            <a
                                href="http://www.cic.gc.ca/francais/information/demandes/photospecs.asp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                francés
                            </a>
                            ). Escriba el nombre y la fecha de nacimiento de la persona al
                            reverso de cada fotografía. Los solicitantes que deben dar sus
                            datos biométricos no tienen que incluir fotografías de papel.
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>
                            <a
                                href="http://www.canadainternational.gc.ca/colombia-colombie/visas/fees-frais.aspx?lang=spa"
                                target="blank"
                            >
                                Tarifas de trámite de una visa
                            </a>{' '}
                            &#8211; Verifique que pagó el monto correcto de los aranceles,
                            que no son reembolsables (pago aceptado únicamente por
                            depósito bancario). El nombre del postulante debe estar
                            escrito en letra de imprenta en el depósito bancario. Si usted
                            necesita dar sus datos biométricos, el costo de 85$ CAN
                            relativo a la biométrica cubre los costos de servicio del CRSV
                            para el tratamiento de las solicitudes. Los servicios
                            adicionales no están cubiertos.
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>
                            Pasaporte o documento de viaje válido, con al menos 2 páginas
                            en blanco. No entregue fundas para pasaporte (plásticas, de
                            cuero, etc.). Si usted no es ciudadano colombiano o
                            ecuatoriano, debe incluir prueba de su estatuto de residencia
                            en Colombia o Ecuador (visa, permiso, cedula)
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>
                            Descripción del viaje: Describa claramente y en detalle su
                            visita a Canadá. Incluya su itinerario y los nombres y
                            direcciones de personas e instituciones que tiene previsto
                            visitar. Si usted tiene estudios planeados en Canadá, describa
                            los proyectos que espera desarrollar una vez regrese a su país
                            de origen. No compre tiquetes aéreos hasta que haya recibido
                            una respuesta favorable de nuestra oficina.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            <p>
                                Si usted planea visitar a un familiar o a un amigo,
                                incluya por favor una carta de invitación escrita en
                                inglés o francés. Para mayor información acerca del
                                contenido de la carta de invitación, visite el sitio web
                                de CIC [
                                <a
                                    href="http://www.cic.gc.ca/english/visit/letter.asp"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ING
                                </a>{' '}
                                |{' '}
                                <a
                                    href="http://www.cic.gc.ca/francais/visiter/lettre.asp"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    FRA
                                </a>
                                ]. Adicionalmente, su anfitrión en Canadá podría, si
                                quisiera hacerlo, presentar algunos documentos de apoyo a
                                su solicitud, entre estos:
                            </p>
                            <ul>
                                <li>
                                    Evidencia del estatus migratorio en Canadá, tal como
                                    una fotocopia de la tarjeta de residencia permanente,
                                    el pasaporte o tarjeta de ciudadanía*.
                                </li>
                                <li>
                                    Documentos que indiquen el ingreso y situación
                                    financiera de la persona que lo está invitando. Deben
                                    provenir de un tercero que sea una fuente de
                                    información canadiense confiable o de fácil
                                    verificación. Por ejemplo: el Canada Revenue Agency
                                    Notice of Assessment [NOA]/Avis de cotisation de
                                    l'Agence du revenu du Canada, una carta del empleador
                                    especificando el salario, desprendibles de nómina,
                                    extractos bancarios, certificados de ingresos
                                    (Statements of Remuneration Paid/États de gain ou
                                    bordereau de paye) o reportes financieros preparados
                                    por un profesional certificado*.
                                </li>
                            </ul>
                            <p>
                                * Todos los documentos presentados por quien lo invita
                                deben venir marcados con el nombre completo (incluyendo
                                los 2 apellidos, si esto aplica) y la fecha de nacimiento
                                del solicitante. Aquellos documentos que no hayan sido
                                marcados con su nombre y fecha de nacimiento, no serán
                                considerados como parte de su solicitud.
                            </p>
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            Si usted va a visitar una compañía en Canadá o va a asistir a
                            un seminario o a un curso : Adjunte una carta de invitación en
                            inglés o francés de la organización canadiense. Si dicha
                            organización va a asumir los gastos de su viaje, esto debe
                            estar claramente indicado en la carta de invitación. De forma
                            similar, si usted planea asistir a una conferencia o a un
                            seminario, debe anexar a su solicitud una carta de registro
                            del evento en inglés o francés.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            <p>
                                Si una compañía colombiana o ecuatoriana va a cubrir sus
                                gastos de viaje: Adjunte unacarta de esta compañía en la
                                que se mencione esto específicamente. También incluya por
                                favor:
                            </p>

                            <ol>
                                <li>
                                    El original del registro en cámara de comercio
                                    (expedido máximo hace un mes).
                                </li>
                                <li>
                                    Declaraciones de ingresos de la compañía de los
                                    últimos dos años (Declaraciones de renta).
                                </li>
                            </ol>

                            <p>
                                Extractos bancarios originales de la compañía, de los
                                últimos tres meses. En cualquier caso, usted debe
                                presentar también sus propios documentos financieros.
                                Extractos bajados de Internet no serán aceptados.
                            </p>
                            <p>
                                NOTA: Este requisito no es aplicable para compañías
                                altamente reconocidas en Colombia o Ecuador.
                            </p>
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            Extractos bancarios originales de los últimos tres meses:
                            cuentas de ahorro o certificados de depósito a término (CDT)
                            que muestren solvencia económica suficiente para sustentar la
                            solicitud. No presente extractos bajados de Internet.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            Originales de las declaraciones de renta de los últimos dos
                            años.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            Un extracto bancario reciente, a su nombre (o de su esposo/a o
                            conyugue) que demuestre claramente que usted posee los fundos
                            necesarios para viajar a Canadá.
                        </td>
                        <td></td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>
                            Pruebas de solvencia económica del familiar que asumirá los
                            gastos de su viaje, si usted es una persona de la tercera edad
                            o un estudiante que no cuenta con recursos económicos propios
                            (certificaciones laborales, declaraciones de renta, extractos
                            bancarios, etc.). Debe presentarse también una carta de
                            compromiso en la que su familiar indique que se hará cargo de
                            sus gastos.
                        </td>
                        <td>X</td>
                        <td>No Aplica</td>
                    </tr>
                </tbody>
            </table>

            <TituloLinea
                wrap={true}
                titulo="Si corresponde, también debe presentar los documentos siguientes:"
            />

            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Descripción</strong>
                        </td>
                        <td>
                            <strong>Reg.</strong>
                        </td>
                        <td>
                            <strong>Simplificado</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Desprendibles de pago de pensión (en caso de contar con una
                            pensión de jubilación).
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            Ciudadanos colombianos: Hoja de vida oficial de las Fuerzas
                            Armadas y formulario IMM5579 (versión bilingüe español/inglés
                            o español/francés: Las personas que tuvieron o tienen un rango
                            militar (Fuerza Aérea, Armada, Ejército o Policía) deben
                            anexar una hoja de vida oficial expedida por las Fuerzas
                            Armadas. Este formulario es disponible al Centro de recepción
                            de solicitudes de visa o escribiendo un correo electrónico a
                            la Embajada.
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>
                            Certificación laboral indicando su cargo, antigüedad, salario
                            y en qué fechas exactas saldrá a vacaciones y retornará a su
                            trabajo.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Certificado de estudios en curso (si aplica para usted).</td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            Pasaportes anteriores, como evidencia de su historial de
                            viajes.
                        </td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            Menores viajando solos o en compañía de uno de los padres
                            únicamente, deben presentar un permiso notariado. El permiso
                            debe autorizar al menor para viajar solo, o junto con su padre
                            o su madre únicamente (según corresponda).
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>
                            Declaración de tutor/guardián (IMM5646) (Custodian/Guardian
                            Declaration/Déclaration du gardien) [
                            <a
                                href="http://www.cic.gc.ca/english/pdf/pub/custodian-parent.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ING
                            </a>{' '}
                            |{' '}
                            <a
                                href="http://www.cic.gc.ca/francais/pdf/pub/gardien-parent.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FRA
                            </a>
                            ] Para solicitantes menores de 17 años. En el formulario los
                            padres indican que transfieren la custodia del menor a una
                            persona u organización en Canadá, y a su vez esta persona u
                            organización señala por medio de una carta (o completando el
                            mismo formulario) que aceptan la custodia del menor durante el
                            término del viaje.
                        </td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>
                            TRANSITO: Usted debe presentar copia impresa de su itinerario
                            y la visa para su país de destino (si esto aplica). Este tipo
                            de visa no tiene costo alguno. No compre tiquetes aéreos hasta
                            haber recibido una respuesta favorable de nuestra parte.
                        </td>
                        <td>X</td>
                        <td>No aplica</td>
                    </tr>
                </tbody>
            </table>

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
            <h3>Valor tramitología y Asesoría:</h3>
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
            {/* <Download content="Descargar Formulario" /> */}
        </div>
    );
};
export default Canada;
