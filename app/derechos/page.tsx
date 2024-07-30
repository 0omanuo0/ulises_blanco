
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Derechos() {

    const license = ` <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://ulisesblanco.com">Web Ulises Blanco </a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-flex;">CC BY-NC-ND 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt=""></a></p> `;



    return (
        <main className="terminos-main">
            <Link href="/" className="fixed top-8 left-0 pl-8 pr-4 py-2 bg-white rounded-e-3xl shadow-md ">
            <ChevronLeftIcon className="h-12 hover:animate-horizontal-bounce transition-transform ease-in-out duration-300 "/>
            </Link>
            <h1>Licencia de Uso</h1>
            <article className="terminos-legales">
                <h2>1. Titularidad de Derechos</h2>
                <p>
                    Las obras presentadas en este sitio web (<a target="_blank" href="https://ulisesblanco.com">ulisesblanco.com</a>) pertenecen exclusivamente a los legitimos herederos de Ulises Blanco. Todos los derechos están reservados.
                </p>
                <h2>2. Permiso de Uso</h2>
                <p>Este trabajo está licenciado bajo una <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0)</a>. Bajo esta licencia, usted es libre de compartir, copiar y redistribuir el material en cualquier medio o formato, bajo las siguientes condiciones:</p>
                <ul>
                    <li>
                        <h3>2.1 Atribución</h3>
                        <p>
                            Debe indicar claramente la procedencia de las obras, mencionando <a target="_blank" href="https://ulisesblanco.com">ulisesblanco.com</a> como fuente original de manera visible en cualquier uso de las mismas.
                        </p>
                    </li>
                    <li>
                        <h3>2.2 Integridad de la Obra</h3>
                        <p>
                            Debe respetar la integridad y la imagen de las obras, evitando cualquier uso que las desvirtúe, menosprecie, o altere su significado original.
                        </p>
                    </li>
                </ul>
                <h2>3. Usos Prohibidos</h2>
                <p>Los siguientes usos están prohibidos sin el consentimiento expreso y por escrito de los titulares:</p>
                <ul>
                    <li>
                        <h3>3.1 Alteración y Transformación</h3>
                        <p>
                            No se permite la alteración, transformación o generación de obras derivadas.
                        </p>
                    </li>
                    <li>
                        <h3>3.2 Uso Comercial</h3>
                        <p>
                            No se permite el uso de las obras con fines comerciales.
                        </p>
                        <p>
                            Los textos firmados per la persona autora, las imágenes (fotografías y vídeos) y otras reproducciones de obras de arte visual únicamente pueden utilizarse de acuerdo con el derecho de cita reconocido en la <a target="_blank" href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930&p=20220330&tn=1#a32">Ley de propiedad intelectual.</a> Si se utilizan en línea, debe añadirse un enlace a la página inicial de la web.
                        </p>
                    </li>
                    <li>
                        <h3>3.3 Daño a la Imagen</h3>
                        <p>
                            No se permite el uso de las obras de manera que pueda dañar la imagen, la reputación o el honor de Ulises Blanco y sus legitimos herederos.
                        </p>
                        <h3>3.4 Uso para Entrenamiento de IA</h3>
                        <p>
                            No se permite el uso de las obras para entrenar algoritmos de inteligencia artificial, incluyendo pero no limitado a modelos como Stable Diffusion, DALL-E, o cualquier otra plataforma de inteligencia artificial.
                        </p>
                    </li>
                </ul>
                <h2>4. Procedimiento para Solicitar Permisos</h2>
                <p>
                    Para solicitar permisos que no estén cubiertos por esta licencia, debe contactar a los titulares a través de la información de contacto proporcionada en <a target="_blank" href="https://ulisesblanco.com">ulisesblanco.com</a>.
                </p>
                <h2>5. Cumplimiento y Consecuencias</h2>
                <p>
                    El uso de las obras implica la aceptación de estos términos. El incumplimiento de cualquiera de las condiciones aquí establecidas dará lugar a acciones legales pertinentes para la protección de los derechos de autor.
                    <h3>5.1 Jurisdicción y Ley Aplicable</h3>
                    <p>
                        Esta licencia se rige por las leyes de España. Cualquier disputa que surja en relación con esta licencia se resolverá en los tribunales competentes de dicho país.
                    </p>
                </p>
                <h2>
                    6. Exención de Responsabilidad
                </h2>
                <p>
                    Los titulares no se hacen responsables por el uso indebido de las obras por parte de terceros que no cumplan con los términos de esta licencia.
                </p>
                <h2>
                    7. Modificaciones a la Licencia
                </h2>
                <p>
                    Los titulares se reservan el derecho de modificar los términos de esta licencia en cualquier momento, con efecto inmediato tras su publicación en ulisesblanco.com. Es responsabilidad del usuario revisar periódicamente los términos para asegurarse del cumplimiento.
                    <h3>7.1 Terminación de la Licencia</h3>
                    <p>
                        Los titulares pueden terminar esta licencia en cualquier momento si el usuario incumple alguno de los términos establecidos. Tras la terminación, el usuario debe dejar de usar las obras de inmediato.
                    </p>
                </p>

            </article>

            {/* <span className="h-bar"></span> */}
            <article className="contact-info">
                <h2>
                    Información de Contacto
                </h2>
                <p>
                    Para más información o consultas, por favor contacte a los titulares a través de <a target="_blank" href="https://ulisesblanco.com">ulisesblanco.com</a>.
                </p>
                <div id="mails">
                    <p> Carmen Blanco: <a href="mailto:carmenblancomar@hotmail.com">carmenblancomar@hotmail.com</a></p>
                    <p> Marta Blanco: <a href="mailto:MARTA_BLANCO">MARTA_BLANCO</a></p>

                </div>
                <p>
                    Al utilizar cualquier obra de ulisesblanco.com, usted acepta y se compromete a cumplir con los términos de esta licencia de uso.
                </p>
            </article>
            {/* insert license text */}
            <div className="license" dangerouslySetInnerHTML={{ __html: license }}></div>
            
            <p>Última actualización: 30 de julio de 2024</p>
        </main>
    )
}