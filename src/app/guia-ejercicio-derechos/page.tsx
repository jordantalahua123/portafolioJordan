'use client'

export default function GuiaEjercicioDerechosPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    GUÍA PARA EL EJERCICIO DE DERECHOS EN PROTECCIÓN DE DATOS PERSONALES PARA TITULARES - ECUAROAD
                </h1>

                <p className="text-gray-700 dark:text-gray-300">
                    Este documento es una guía para los usuarios de EcuaRoad para ejercer sus derechos en el marco de la normativa 
                    vigente en protección de datos personales en Ecuador.
                </p>

                <div className="text-gray-700 dark:text-gray-300 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TERMINOLOGÍA</h2>
                        <div className="space-y-3">
                            <p>
                                <strong>Solicitante:</strong> Persona natural que ejerce sus derechos sobre sus datos personales, ya sea como 
                                titular de la información o a través de un representante legal debidamente autorizado.
                            </p>
                            <p>
                                <strong>Responsable:</strong> Persona natural o jurídica, pública o privada, que decide sobre la finalidad y el 
                                tratamiento de datos personales. En el presente caso, AiroSoft - EcuaRoad.
                            </p>
                            <p>
                                <strong>Encargado:</strong> Persona natural o jurídica que trate datos personales a nombre y por cuenta de EcuaRoad. 
                                En el presente caso, son los colaboradores internos y proveedores tecnológicos de EcuaRoad.
                            </p>
                            <p>
                                <strong>Tratamiento:</strong> Cualquier operación realizada sobre datos personales, tales como: recopilación, 
                                registro, organización, conservación, modificación, consulta, utilización, comunicación, transferencia, eliminación, 
                                y en general, cualquier uso de datos personales.
                            </p>
                            <p>
                                <strong>Solicitud de ejercicio de derechos de datos personales:</strong> Formato mediante el cual el titular o su 
                                representante puede solicitar la aplicación de cualquiera de los siguientes derechos:
                            </p>
                            
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-3">
                                <h4 className="font-semibold mb-2">DERECHOS DISPONIBLES:</h4>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>Acceso:</strong> Obtener información sobre el tratamiento de sus datos y acceder a ellos</li>
                                    <li><strong>Rectificación y actualización:</strong> Modificar datos inexactos o desactualizados</li>
                                    <li><strong>Supresión (eliminación):</strong> Solicitar la eliminación de datos cuando ya no sean necesarios</li>
                                    <li><strong>Oposición:</strong> Negarse al tratamiento de datos en determinadas circunstancias</li>
                                    <li><strong>Portabilidad:</strong> Obtener sus datos en un formato estructurado y reutilizable</li>
                                    <li><strong>Limitación del tratamiento:</strong> Exigir la suspensión temporal del uso de sus datos personales</li>
                                    <li><strong>No ser objeto de decisiones automatizadas:</strong> Evitar ser evaluado exclusivamente por algoritmos sin intervención humana</li>
                                </ul>
                            </div>

                            <p className="mt-3">
                                <strong>DPD (Delegado de Protección de Datos):</strong> Persona designada por EcuaRoad para asesorar, supervisar y 
                                garantizar el cumplimiento de la normativa de protección de datos y para gestionar y responder a las solicitudes de 
                                los titulares.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">DERECHOS DE LOS TITULARES DE DATOS PERSONALES</h2>
                        <p>
                            De conformidad con la Ley Orgánica de Protección de Datos Personales (LOPDP), los titulares pueden ejercer los 
                            siguientes derechos:
                        </p>

                        <div className="space-y-6 mt-4">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Derecho de Acceso</h3>
                                <p>El titular tiene derecho a obtener:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Confirmación sobre si sus datos personales están siendo tratados por EcuaRoad</li>
                                    <li>Acceso a dichos datos personales</li>
                                    <li>Información sobre la finalidad del tratamiento</li>
                                    <li>Categorías de datos recopilados (identificación, geolocalización, uso de plataforma)</li>
                                    <li>Destinatarios con quienes se han compartido (proveedores tecnológicos como Firebase, Google Maps)</li>
                                    <li>Período de conservación previsto</li>
                                    <li>Existencia de decisiones automatizadas (actualmente ninguna)</li>
                                </ul>
                                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mt-2">
                                    <p className="text-sm"><strong>Ejemplo práctico en EcuaRoad:</strong></p>
                                    <p className="text-sm italic">
                                        &quot;Quiero saber qué datos personales tienen sobre mí, cuántos reportes viales he generado, y qué información 
                                        de ubicación han almacenado.&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="border-l-4 border-green-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Derecho de Rectificación y Actualización</h3>
                                <p>El titular puede solicitar la corrección o actualización de sus datos cuando sean inexactos, incompletos o desactualizados.</p>
                                <p className="mt-2"><strong>Cómo ejercerlo en EcuaRoad:</strong></p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>Directamente en la app:</strong> Acceder a &quot;Configuración&quot; → &quot;Mi Perfil&quot; → Editar datos</li>
                                    <li><strong>Por solicitud formal:</strong> Si no puede hacerlo directamente, enviar solicitud a airosoft.ec@gmail.com</li>
                                </ul>
                                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mt-2">
                                    <p className="text-sm"><strong>Ejemplo práctico:</strong></p>
                                    <p className="text-sm italic">
                                        &quot;Mi número de teléfono cambió de [número anterior] a [número nuevo], necesito actualizarlo.&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="border-l-4 border-red-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Derecho de Supresión (Cancelación o Eliminación)</h3>
                                <p>El titular puede requerir la eliminación de sus datos cuando:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>La información ya no sea necesaria para la finalidad con la que fue recopilada</li>
                                    <li>Revoque su consentimiento sin que exista otra base legal para el tratamiento</li>
                                    <li>Los datos se hayan tratado de manera ilícita</li>
                                    <li>Deba cumplirse una obligación legal de eliminación</li>
                                </ul>
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-2">
                                    <p className="text-sm"><strong>Importante en EcuaRoad:</strong></p>
                                    <p className="text-sm">Al solicitar supresión de cuenta:</p>
                                    <ul className="list-disc pl-6 text-sm space-y-1">
                                        <li>Se eliminarán TODOS sus datos personales (nombre, correo, teléfono)</li>
                                        <li>Se eliminará su historial de uso</li>
                                        <li>Los reportes viales que generó se ANONIMIZAN (se elimina vínculo con su identidad) pero pueden mantenerse por su utilidad pública</li>
                                        <li><strong>Este proceso es IRREVERSIBLE</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">4. Derecho de Oposición</h3>
                                <p>El titular puede oponerse al tratamiento de sus datos cuando existan motivos legítimos relacionados con su situación particular.</p>
                                <p className="mt-2"><strong>Ejemplos en EcuaRoad:</strong></p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Oposición a recibir notificaciones push de alertas viales (puede desactivarse en configuración)</li>
                                    <li>Oposición a uso de datos para análisis estadísticos (implicaría limitación de funcionalidad)</li>
                                    <li>Oposición a comunicaciones de marketing (si en el futuro se implementan)</li>
                                </ul>
                                <p className="mt-2 text-sm">
                                    <strong>Nota:</strong> La oposición a tratamientos esenciales (como geolocalización para reportes) puede hacer 
                                    imposible usar la Plataforma.
                                </p>
                            </div>

                            <div className="border-l-4 border-indigo-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">5. Derecho a la Portabilidad de los Datos</h3>
                                <p>
                                    El titular tiene derecho a recibir sus datos en formato estructurado, de uso común y lectura mecánica, y a 
                                    solicitar su transmisión a otro responsable.
                                </p>
                                <p className="mt-2"><strong>Qué datos puede exportar de EcuaRoad:</strong></p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Datos de perfil (nombre, correo, teléfono)</li>
                                    <li>Historial de reportes generados</li>
                                    <li>Configuraciones de cuenta</li>
                                    <li>Datos de uso (timestamps, rutas frecuentes)</li>
                                </ul>
                                <p className="mt-2"><strong>Formato de entrega:</strong> JSON o CSV</p>
                                <p><strong>Plazo:</strong> 15 días hábiles desde la solicitud</p>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">6. Derecho a la Limitación del Tratamiento</h3>
                                <p>El titular puede solicitar la suspensión temporal del tratamiento en circunstancias específicas:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Mientras se verifica la exactitud de datos impugnados</li>
                                    <li>Cuando el tratamiento sea ilícito pero no desee la supresión</li>
                                    <li>Cuando EcuaRoad ya no necesite los datos pero el titular los requiera para defensa legal</li>
                                </ul>
                                <p className="mt-2"><strong>Durante la limitación:</strong></p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Los datos se conservan pero NO se tratan activamente</li>
                                    <li>Solo se usarán para ejercicio de reclamaciones o con consentimiento del titular</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-pink-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">7. Derecho a No Ser Objeto de Decisiones Automatizadas</h3>
                                <p>
                                    El titular tiene derecho a no ser sometido a decisiones basadas únicamente en tratamiento automatizado que 
                                    produzcan efectos jurídicos o le afecten significativamente.
                                </p>
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded mt-2">
                                    <p className="text-sm"><strong>En EcuaRoad:</strong></p>
                                    <p className="text-sm">
                                        Actualmente NO existen decisiones automatizadas que produzcan efectos legales. Las decisiones sobre 
                                        suspensión de cuentas por violación de términos son revisadas por personal humano.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">PROCEDIMIENTO PARA EL EJERCICIO DE DERECHOS</h2>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">PASO 1: Presentación de la Solicitud</h3>
                                <p>El titular o su representante legal deberá presentar una solicitud formal que contenga:</p>

                                <div className="mt-4 space-y-4">
                                    <div>
                                        <h4 className="font-semibold">A. Datos del Titular</h4>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Nombre completo</li>
                                            <li>Número de cédula de identidad</li>
                                            <li>Correo electrónico registrado en EcuaRoad</li>
                                            <li>Número de teléfono</li>
                                            <li>(Si aplica) Datos del representante legal con poder notariado</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">B. Descripción Clara del Derecho a Ejercer</h4>
                                        <p>Indicar específicamente:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>¿Qué derecho desea ejercer? (acceso, rectificación, supresión, etc.)</li>
                                            <li>¿Qué datos específicos involucra la solicitud?</li>
                                            <li>¿Qué acción espera que tome EcuaRoad?</li>
                                        </ul>

                                        <div className="mt-3 space-y-3">
                                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                                                <p className="text-sm font-semibold">✅ CORRECTO:</p>
                                                <p className="text-sm italic">
                                                    &quot;Solicito ejercer mi derecho de ACCESO. Requiero copia de todos mis datos personales almacenados, 
                                                    incluyendo mi información de perfil, historial de reportes viales generados desde enero 2025, y 
                                                    datos de geolocalización asociados a mi cuenta.&quot;
                                                </p>
                                            </div>

                                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                                                <p className="text-sm font-semibold">✅ CORRECTO:</p>
                                                <p className="text-sm italic">
                                                    &quot;Solicito ejercer mi derecho de SUPRESIÓN. Requiero la eliminación completa de mi cuenta de EcuaRoad 
                                                    y todos mis datos personales asociados, incluyendo nombre, correo [correo@ejemplo.com], teléfono, 
                                                    cédula y historial de uso.&quot;
                                                </p>
                                            </div>

                                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                                                <p className="text-sm font-semibold">❌ INCORRECTO:</p>
                                                <p className="text-sm italic">
                                                    &quot;Quiero saber qué tienen sobre mí.&quot; (Muy vago, especificar derecho de acceso y qué datos específicamente)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">C. Datos de Contacto para Respuesta</h4>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Dirección de correo electrónico preferida</li>
                                            <li>Dirección física (opcional, si prefiere respuesta física)</li>
                                            <li>Número de teléfono</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">D. Documentos de Respaldo</h4>
                                        <p>Adjuntar:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Copia de cédula de identidad (ambos lados)</li>
                                            <li>Si actúa mediante representante: Poder notariado + cédula del representante</li>
                                            <li>Screenshot de su perfil de EcuaRoad (para validación)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">PASO 2: Envío de la Solicitud</h3>
                                
                                <div className="space-y-3">
                                    <p><strong>Método preferido:</strong> Correo electrónico</p>
                                    <p><strong>Dirección:</strong> <a href="mailto:airosoft.ec@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">airosoft.ec@gmail.com</a></p>
                                    <p><strong>Asunto del correo:</strong> &quot;Solicitud Ejercicio de Derecho [TIPO DE DERECHO] - [TU NOMBRE]&quot;</p>

                                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mt-3">
                                        <p className="font-semibold mb-2">Ejemplo:</p>
                                        <pre className="text-sm whitespace-pre-wrap">
{`Asunto: Solicitud Ejercicio de Derecho de ACCESO - Juan Pérez

Estimado equipo de EcuaRoad:

Por medio del presente, yo, Juan Pérez López, con cédula de identidad 1234567890, 
y correo electrónico registrado juan.perez@email.com, solicito formalmente ejercer 
mi derecho de ACCESO conforme a la Ley Orgánica de Protección de Datos Personales.

Requiero específicamente:
1. Copia de todos mis datos personales almacenados en EcuaRoad
2. Historial completo de reportes viales que he generado desde mi registro
3. Información sobre con qué terceros se han compartido mis datos
4. Período de conservación previsto para mis datos

Adjunto copia de mi cédula de identidad para validación.

Solicito recibir la respuesta en el correo juan.perez@email.com

Atentamente,
Juan Pérez López
Fecha: [FECHA]`}
                                        </pre>
                                        <p className="mt-2 text-sm"><strong>Documentos adjuntos:</strong></p>
                                        <ul className="list-disc pl-6 text-sm">
                                            <li>cedula_frente.pdf</li>
                                            <li>cedula_reverso.pdf</li>
                                            <li>screenshot_perfil_ecuaroad.png (opcional pero recomendado)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">PASO 3: Recepción y Confirmación</h3>
                                <p>
                                    EcuaRoad confirmará la recepción de su solicitud dentro de <strong>3 días hábiles</strong> mediante correo electrónico.
                                </p>
                                <p className="mt-2">
                                    Si la solicitud está incompleta o requiere información adicional, se le notificará para completarla.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">PASO 4: Análisis y Respuesta</h3>
                                <ul className="space-y-2">
                                    <li><strong>Plazo de respuesta:</strong> 15 días hábiles desde la recepción de solicitud completa</li>
                                    <li><strong>Prórroga:</strong> Este plazo podrá extenderse por 15 días hábiles adicionales en casos justificados 
                                    (ej. solicitudes complejas, volumen alto de datos), notificando previamente al titular.</li>
                                </ul>

                                <p className="mt-3"><strong>Casos que justifican prórroga:</strong></p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Solicitudes que requieren recuperación de datos históricos extensos</li>
                                    <li>Necesidad de consultar con proveedores tecnológicos (Firebase, Google)</li>
                                    <li>Complejidad técnica de la exportación de datos</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">PASO 5: Entrega de Respuesta</h3>
                                <p>La respuesta será enviada por correo electrónico (o físicamente si fue solicitado) y contendrá:</p>

                                <div className="mt-3 space-y-3">
                                    <div>
                                        <p className="font-semibold">Para solicitudes de ACCESO:</p>
                                        <ul className="list-disc pl-6 text-sm space-y-1">
                                            <li>Documento PDF con todos los datos personales solicitados</li>
                                            <li>Archivo JSON/CSV con datos estructurados</li>
                                            <li>Explicación de finalidades de tratamiento</li>
                                            <li>Lista de destinatarios de datos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Para solicitudes de RECTIFICACIÓN:</p>
                                        <ul className="list-disc pl-6 text-sm space-y-1">
                                            <li>Confirmación de datos actualizados</li>
                                            <li>Captura de pantalla del perfil actualizado</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Para solicitudes de SUPRESIÓN:</p>
                                        <ul className="list-disc pl-6 text-sm space-y-1">
                                            <li>Confirmación de eliminación exitosa</li>
                                            <li>Fecha efectiva de eliminación</li>
                                            <li>Información sobre datos anonimizados que se conservan</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Para solicitudes de PORTABILIDAD:</p>
                                        <ul className="list-disc pl-6 text-sm space-y-1">
                                            <li>Archivo ZIP con todos los datos en formato JSON y/o CSV</li>
                                            <li>Documento README explicando estructura de datos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Para solicitudes de OPOSICIÓN/LIMITACIÓN:</p>
                                        <ul className="list-disc pl-6 text-sm space-y-1">
                                            <li>Confirmación de restricciones aplicadas</li>
                                            <li>Explicación de implicaciones en funcionalidad de la Plataforma</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">PASO 6: Seguimiento y Reclamaciones</h3>
                                <p>
                                    Si el titular NO está satisfecho con la respuesta o considera que sus derechos no han sido respetados, puede:
                                </p>

                                <div className="mt-3 space-y-3">
                                    <div>
                                        <h4 className="font-semibold">Opción 1: Solicitud de Revisión Interna</h4>
                                        <p className="text-sm">
                                            Dentro de 10 días hábiles desde la respuesta, puede solicitar una revisión interna dirigida al Delegado 
                                            de Protección de Datos de EcuaRoad a <a href="mailto:airosoft.ec@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">airosoft.ec@gmail.com</a>
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Opción 2: Reclamación ante Autoridad Competente</h4>
                                        <p className="text-sm">
                                            El titular puede presentar reclamación ante la autoridad de control de protección de datos en Ecuador:
                                        </p>
                                        <p className="text-sm mt-1">
                                            <strong>Superintendencia de Control del Poder de Mercado</strong><br />
                                            (u organismo designado para supervisión de protección de datos)
                                        </p>
                                        <p className="text-sm mt-2">
                                            El titular mantiene este derecho en cualquier momento, independientemente de haber agotado o no el 
                                            procedimiento interno.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">PREGUNTAS FRECUENTES (FAQ)</h2>

                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="font-semibold">¿Es gratuito ejercer mis derechos?</h4>
                                <p><strong>SÍ.</strong> El ejercicio de todos los derechos de protección de datos es completamente gratuito. 
                                EcuaRoad NO puede cobrar ningún monto por atender solicitudes.</p>
                            </div>

                            <div className="border-l-4 border-green-500 pl-4">
                                <h4 className="font-semibold">¿Cuánto tiempo tarda la respuesta?</h4>
                                <p>15 días hábiles desde que EcuaRoad recibe la solicitud completa. En casos excepcionales puede extenderse 
                                a 30 días hábiles con notificación previa justificada.</p>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-4">
                                <h4 className="font-semibold">¿Puedo ejercer mis derechos en nombre de un familiar?</h4>
                                <p><strong>SÍ,</strong> pero necesita un poder notariado que le autorice específicamente para ejercer derechos 
                                de protección de datos en nombre del titular.</p>
                            </div>

                            <div className="border-l-4 border-red-500 pl-4">
                                <h4 className="font-semibold">¿Qué pasa si elimino mi cuenta? ¿Puedo recuperarla?</h4>
                                <p><strong>NO.</strong> La eliminación de cuenta es irreversible. Todos sus datos personales se eliminan 
                                permanentemente dentro de 30 días y no pueden recuperarse.</p>
                            </div>

                            <div className="border-l-4 border-yellow-500 pl-4">
                                <h4 className="font-semibold">¿Los reportes viales que generé también se eliminan?</h4>
                                <p><strong>Parcialmente.</strong> Los reportes se anonimizan (se elimina su nombre, correo, y cualquier vínculo 
                                con su identidad) pero el contenido del reporte puede conservarse por su utilidad pública informativa para otros 
                                conductores.</p>
                            </div>

                            <div className="border-l-4 border-indigo-500 pl-4">
                                <h4 className="font-semibold">¿Puedo solicitar que eliminen solo algunos datos pero no toda mi cuenta?</h4>
                                <p><strong>SÍ,</strong> puede solicitar limitación del tratamiento o supresión parcial de ciertos datos específicos 
                                sin eliminar toda su cuenta. Especifique claramente en su solicitud qué datos desea eliminar.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CONTACTO PARA EJERCICIO DE DERECHOS</h2>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <p><strong>Responsable de Protección de Datos:</strong> EcuaRoad</p>
                            <p className="mt-2"><strong>Correo electrónico:</strong> <a href="mailto:airosoft.ec@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">airosoft.ec@gmail.com</a></p>
                            <p><strong>Teléfono:</strong> +593 969 183 227</p>
                            <p><strong>Dirección física:</strong> Latacunga, Ecuador</p>
                            <p><strong>Sitio web:</strong> <a href="https://jordantalahua.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://jordantalahua.netlify.app/</a></p>
                            <p className="mt-3"><strong>Horario de atención:</strong> 8:00am a 5:00pm</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AUTORIDAD DE CONTROL</h2>
                        <p>Si considera que sus derechos no han sido respetados, puede presentar reclamación ante:</p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-3">
                            <p><strong>Superintendencia de Control del Poder de Mercado</strong></p>
                            <p className="text-sm">(u organismo que la normativa ecuatoriana designe para supervisión de protección de datos)</p>
                        </div>
                    </section>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mt-8">
                        <h3 className="font-semibold mb-2">NOTA LEGAL:</h3>
                        <p className="text-sm">
                            Esta guía tiene carácter informativo y se proporciona para facilitar el ejercicio de derechos de protección de datos 
                            personales. No sustituye asesoría legal profesional. Para casos complejos, se recomienda consultar con un abogado 
                            especializado en protección de datos.
                        </p>
                    </div>

                    <div className="text-center mt-12 text-sm text-gray-600 dark:text-gray-400">
                        <p><strong>Versión:</strong> 1.0</p>
                        <p><strong>Fecha de publicación:</strong> Enero 2025</p>
                        <p><strong>Última actualización:</strong> Enero 2025</p>
                        <p className="mt-4">EcuaRoad - Conectando Caminos, Conectando Gente</p>
                        <p className="mt-2">Copyright © 2025 EcuaRoad | Todos los derechos reservados</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

