import React, { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-stone-50 text-stone-800 font-sans py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900 text-center">
          Política de Tratamiento y Protección de Datos Personales
        </h1>

        <div className="mb-10 overflow-x-auto">
          <table className="w-full text-left border-collapse border border-stone-200 text-stone-700">
            <tbody>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold w-1/3">Responsable del tratamiento</th><td className="p-3">Viajes Aquatravel</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">NIT</th><td className="p-3">1075657482-0</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">RNT</th><td className="p-3">115795</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">Dirección</th><td className="p-3">Cra. 10 No. 5-73, Oficina 213, Centro Comercial Zipacentro</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">Teléfonos</th><td className="p-3">601 8826723 / +573043321590</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">Correo de privacidad</th><td className="p-3">ViajesAquatravel@gmail.com</td></tr>
              <tr><th className="p-3 bg-stone-100 font-semibold">Redes</th><td className="p-3">@viajesaquatravel Instagram, Facebook y Tik Tok</td></tr>
            </tbody>
          </table>
          <p className="mt-2 text-sm text-stone-500 italic">Colombia Versión preliminar. Noviembre de 2026</p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">1. Objeto y alcance</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Esta Política establece cómo Viajes Aquatravel recolecta, almacena, usa, consulta, transmite, actualiza, protege y, cuando corresponda, suprime los datos personales de clientes, viajeros, prospectos, acompañantes, proveedores, aliados, colaboradores y demás personas cuyos datos sean tratados en el desarrollo de sus actividades. Se aplica a información obtenida en la oficina, formularios, página web, correo, teléfono, WhatsApp, redes sociales, eventos y demás canales físicos o digitales.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">2. Marco normativo</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          El tratamiento se realizará conforme a la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012, sus decretos reglamentarios y compilatorios - incluido el Decreto 1074 de 2015-, y las demás normas que las modifiquen, adicionen o sustituyan. Esta política se interpretará de acuerdo con los principios y derechos previstos en la legislación de protección de datos personales.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">3. Definiciones</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
          <li className="leading-relaxed"><strong>Dato personal:</strong> información que identifica o puede identificar a una persona natural.</li>
          <li className="leading-relaxed"><strong>Titular:</strong> persona natural a quien se refieren los datos.</li>
          <li className="leading-relaxed"><strong>Tratamiento:</strong> recolección, almacenamiento, uso, circulación, actualización, consulta o supresión de datos.</li>
          <li className="leading-relaxed"><strong>Responsable:</strong> Viajes Aquatravel, quien determina las finalidades y medios del tratamiento.</li>
          <li className="leading-relaxed"><strong>Encargado:</strong> tercero que trata datos por cuenta de Aquatravel, según las instrucciones y acuerdos correspondientes.</li>
          <li className="leading-relaxed"><strong>Dato sensible:</strong> dato que afecta la intimidad o cuyo uso indebido puede generar discriminación, incluyendo información de salud, biométrica, orientación sexual, convicciones y otras categorías definidas por la ley.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">4. Datos que podemos recolectar</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
          <li className="leading-relaxed"><strong>Identificación y contacto:</strong> nombres, apellidos, documento, fecha de nacimiento, dirección, teléfono y correo.</li>
          <li className="leading-relaxed"><strong>Datos de viajeros:</strong> información necesaria para reservas, emisión de tiquetes, alojamiento, traslados, excursiones, asistencia, visas o trámites, incluyendo datos de documentos de viaje.</li>
          <li className="leading-relaxed"><strong>Datos transaccionales:</strong> cotizaciones, compras, pagos, comprobantes, facturación, historial de reservas y solicitudes.</li>
          <li className="leading-relaxed"><strong>Datos de preferencias y servicio:</strong> destino, fechas, tipo de habitación, requerimientos de viaje y comunicaciones con la agencia.</li>
          <li className="leading-relaxed"><strong>Datos de menores:</strong> cuando sea necesario para gestionar servicios turísticos, se tratarán con especial protección y a través del padre, madre, representante legal o persona legitimada.</li>
          <li className="leading-relaxed"><strong>Datos sensibles:</strong> solo cuando resulten estrictamente necesarios y legalmente procedentes, por ejemplo, información de salud, movilidad, alergias o asistencia especial requerida para un viaje. Su entrega será facultativa salvo que la información sea necesaria para una prestación específica.</li>
        </ul>
        <p className="mb-6 leading-relaxed text-stone-600">
          Aquatravel procurará recolectar únicamente los datos pertinentes y necesarios para cada finalidad.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">5. Finalidades del tratamiento</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
          <li className="leading-relaxed">Cotizar, asesorar, planificar, reservar, confirmar, emitir, coordinar, prestar y dar seguimiento a servicios turísticos nacionales e internacionales.</li>
          <li className="leading-relaxed">Gestionar tiquetes, alojamientos, traslados, excursiones, actividades, asistencia al viajero, seguros, documentación y requerimientos de proveedores.</li>
          <li className="leading-relaxed">Enviar confirmaciones, vouchers, itinerarios, avisos de cambios, información de viaje, alertas y comunicaciones operativas.</li>
          <li className="leading-relaxed">Gestionar pagos, facturación, cartera, reembolsos, reclamaciones, solicitudes y obligaciones contables, contractuales o legales.</li>
          <li className="leading-relaxed">Compartir los datos estrictamente necesarios con aerolíneas, hoteles, operadores, transportadores, receptivos, aseguradoras, asistencia, plataformas de reserva, autoridades u otros proveedores que intervengan en la prestación.</li>
          <li className="leading-relaxed">Atender consultas, peticiones, quejas, reclamos, derechos de habeas data, auditorías y requerimientos de autoridades.</li>
          <li className="leading-relaxed">Administrar la relación con proveedores, aliados, colaboradores y personas que se postulen o participen en actividades comerciales.</li>
          <li className="leading-relaxed">Con autorización opcional, enviar promociones, campañas, novedades, ofertas, invitaciones y contenidos comerciales por correo, teléfono, WhatsApp, SMS o redes.</li>
          <li className="leading-relaxed">Realizar análisis internos, estadísticas y mejora de servicio, preferiblemente con datos agregados o anonimizados cuando sea posible.</li>
        </ul>
        <p className="mb-6 leading-relaxed text-stone-600">
          Aquatravel no utilizará los datos para finalidades incompatibles con las informadas sin obtener autorización adicional cuando esta sea legalmente necesaria.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">6. Autorización y libertad</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Aquatravel solicitará autorización previa, expresa e informada cuando sea requerida por la ley, y conservará evidencia que permita consultarla posteriormente. La autorización podrá obtenerse mediante medios escritos, electrónicos, verbales o mecanismos legalmente válidos. El silencio no se considerará autorización.
        </p>
        <p className="mb-4 leading-relaxed text-stone-600">
          La autorización para comunicaciones comerciales será opcional y separada de la autorización necesaria para gestionar una cotización o servicio. Negarse a recibir publicidad no impedirá recibir mensajes indispensables para una reserva activa.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          Para datos sensibles, Aquatravel informará su carácter sensible y el carácter facultativo de su entrega, y solicitará autorización explícita cuando corresponda. No se condicionará un servicio a entregar datos sensibles que no sean necesarios para su prestación.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">7. Datos de niños, niñas y adolescentes</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Aquatravel tratará datos de menores únicamente cuando sean necesarios para los servicios solicitados, con respeto a su interés superior, derechos fundamentales y protección reforzada. La autorización será gestionada por su representante legal o persona habilitada, cuando legalmente corresponda. Se limitará la recolección y el uso de estos datos a lo necesario para el viaje o finalidad autorizada.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">8. Destinatarios y transmisión de datos</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Para ejecutar los servicios, Aquatravel podrá comunicar datos pertinentes a proveedores turísticos, operadores, aerolíneas, hoteles, transportadores, asistencia, aseguradoras, plataformas de reservas, procesadores de pagos, asesores profesionales y autoridades que legalmente los requieran. Los destinatarios pueden estar ubicados en Colombia o en otros países, especialmente cuando el servicio turístico se presta en el exterior.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          Aquatravel procurará compartir únicamente información necesaria y utilizar acuerdos, instrucciones y medidas de protección adecuadas con terceros que actúen como encargados. Los proveedores que actúen como responsables independientes estarán sujetos a sus propias políticas y obligaciones legales.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">9. Derechos de los titulares</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
          <li className="leading-relaxed">Conocer, actualizar y rectificar sus datos personales.</li>
          <li className="leading-relaxed">Solicitar prueba de la autorización, salvo las excepciones legales.</li>
          <li className="leading-relaxed">Ser informado, previa solicitud, sobre el uso que se ha dado a sus datos.</li>
          <li className="leading-relaxed">Presentar quejas ante la Superintendencia de Industria y Comercio (SIC), previo agotamiento del trámite ante Aquatravel cuando sea requisito.</li>
          <li className="leading-relaxed">Revocar la autorización y/o solicitar supresión, cuando proceda conforme a la ley.</li>
          <li className="leading-relaxed">Acceder gratuitamente a sus datos personales tratados, conforme a la normativa.</li>
        </ul>
        <p className="mb-6 leading-relaxed text-stone-600">
          Estos derechos podrán ejercerse por el titular, sus causahabientes, representante legal o apoderado debidamente acreditado.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">10. Procedimiento para consultas y reclamos</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          El titular podrá enviar su solicitud a viajesaquatravel@gmail.com o presentarla en la oficina indicada en esta política. Deberá incluir nombre completo, documento o acreditación de representación, descripción clara de la solicitud, datos de contacto y, si corresponde, documentos de soporte.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-600">
          <li className="leading-relaxed"><strong>Consultas:</strong> serán atendidas en un máximo de diez (10) días hábiles desde su recepción. Si no es posible responder dentro de ese plazo, se informará la causa y el nuevo plazo, que no excederá cinco (5) días hábiles adicionales.</li>
          <li className="leading-relaxed"><strong>Reclamos:</strong> si la solicitud de corrección, actualización, supresión o presunto incumplimiento está incompleta, se requerirá subsanación dentro de los cinco (5) días siguientes. El reclamo completo será atendido en un máximo de quince (15) días hábiles contados desde el día siguiente a su recepción. Si se requiere extensión, se informará y no excederá ocho (8) días hábiles adicionales.</li>
        </ul>
        <p className="mb-6 leading-relaxed text-stone-600">
          Aquatravel podrá solicitar información razonable para verificar la identidad y legitimación del solicitante, evitando recolectar información excesiva. Si el reclamo se recibe incompleto, se seguirá el procedimiento legal de subsanación y desistimiento.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">11. Seguridad y confidencialidad</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Aquatravel adoptará medidas administrativas, humanas y técnicas razonables para proteger los datos contra pérdida, adulteración, acceso, uso o divulgación no autorizados. El acceso será limitado a quienes necesiten la información para cumplir sus funciones. Las personas que intervengan en el tratamiento deberán guardar confidencialidad, incluso después de terminar su vínculo con la agencia.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          En caso de incidentes de seguridad, Aquatravel evaluará su alcance, adoptará medidas de contención y gestionará las comunicaciones y reportes que sean exigidos por la normativa.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">12. Conservación y eliminación</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Los datos se conservarán durante el tiempo necesario para cumplir las finalidades autorizadas, prestar servicios, atender solicitudes, cumplir obligaciones legales, contables, fiscales, contractuales y ejercer o defender derechos. Cuando los datos ya no sean necesarios y no exista obligación o fundamento legal para conservarlos, se eliminarán, anonimizarán o bloquearán de forma segura, según corresponda.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">13. Cookies, página web y canales digitales</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Si la página web utiliza cookies, píxeles, analítica u otras tecnologías, Aquatravel informará su uso, propósito y opciones de control a través de avisos o mecanismos adecuados. Los formularios digitales deberán incluir un aviso de privacidad y un mecanismo para registrar la autorización cuando sea necesaria. Las plataformas de redes sociales y mensajería también pueden tratar información bajo sus propios términos y políticas.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">14. Fotografías, videos y testimonios</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          El uso promocional de fotografías, videos, testimonios o imágenes identificables de clientes y viajeros requerirá autorización específica cuando sea necesaria, especialmente si se trata de menores. La autorización de tratamiento de datos para reservar un viaje no equivale automáticamente a autorización para publicar imágenes o testimonios.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">15. Cambios a la política</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Aquatravel podrá actualizar esta política por cambios legales, operativos, tecnológicos o en sus prácticas. La versión vigente estará disponible en los canales de la agencia y se indicará la fecha de actualización. Cuando un cambio requiera nueva autorización, esta será solicitada conforme a la ley.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">16. Contacto</h3>
        <ul className="list-none mb-6 space-y-1 text-stone-600">
          <li><strong>Responsable:</strong> Viajes Aquatravel | RNT 115795</li>
          <li><strong>Dirección:</strong> Cra. 10 No. 5-73, Oficina 213, Centro Comercial Zipacentro</li>
          <li><strong>Teléfonos:</strong> 601 8826723 / +573043321590</li>
          <li><strong>Correo para privacidad y derechos:</strong> viajesaquatravel@gmail.com</li>
          <li><strong>Redes:</strong> @viajesaquatravel (Instagram, Facebook y Tik Tok).</li>
        </ul>

        <h3 className="text-xl font-bold mt-12 mb-6 text-stone-800 border-t border-stone-200 pt-8">17. Formato sugerido de autorización</h3>
        <div className="bg-stone-100 p-6 rounded-xl border border-stone-200 mb-8">
          <h4 className="text-lg font-bold mb-4 text-stone-900">AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES</h4>
          <p className="mb-4 text-stone-700 leading-relaxed">
            Yo, [Nombre del titular], identificado(a) con [Tipo de documento] No. [Número], autorizo de manera previa, expresa e informada a Viajes Aquatravel, identificada con NIT 1075657482-0 y RNT 115795, para recolectar, almacenar, usar, consultar, actualizar y, cuando sea necesario para la prestación de servicios turísticos, transmitir mis datos personales a proveedores y terceros pertinentes, con las finalidades descritas en su Política de Tratamiento y Protección de Datos Personales.
          </p>
          <p className="mb-6 text-stone-700 leading-relaxed">
            Declaro que fui informado(a) de mis derechos a conocer, actualizar, rectificar y solicitar prueba de la autorización; conocer el uso de mis datos; presentar quejas ante la SIC; y solicitar revocatoria o supresión cuando proceda. También fui informado(a) de los canales de contacto para ejercerlos: ViajesAquatravel@gmail.com y la dirección física indicada en la política.
          </p>
          <div className="space-y-4 text-stone-700">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" disabled checked />
              <span>Autorizo el tratamiento de mis datos personales para las finalidades necesarias relacionadas con cotización, reserva y prestación de servicios turísticos.</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" disabled />
              <span>Autorizo, de manera opcional, el tratamiento de datos sensibles que voluntariamente suministre y que sean necesarios para requerimientos de viaje, asistencia, salud, movilidad o alimentación especial. (La entrega de estos datos es facultativa, salvo necesidad específica del servicio.)</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" disabled />
              <span>Autorizo, de manera opcional, recibir publicidad, promociones, ofertas, novedades e invitaciones de Viajes Aquatravel por correo electrónico, WhatsApp, teléfono, SMS y/o redes sociales. Puedo retirar esta autorización para comunicaciones comerciales.</span>
            </label>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-700">
            <p><strong>Nombre:</strong> ______________________</p>
            <p><strong>Firma / aceptación electrónica:</strong> ______________________</p>
            <p><strong>Documento:</strong> ______________________</p>
            <p><strong>Fecha:</strong> ______________________</p>
            <p className="col-span-1 md:col-span-2"><strong>Canal de autorización:</strong> ______________________</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">18. Aviso de privacidad corto para formularios y web</h3>
        <p className="mb-6 leading-relaxed text-stone-600 bg-stone-50 p-4 border-l-4 border-blue-500">
          Viajes Aquatravel, RNT 115795, tratará sus datos personales para cotizar, reservar, coordinar y prestar servicios turísticos, gestionar pagos y comunicaciones operativas, atender solicitudes y cumplir obligaciones legales. Sus datos podrán compartirse con proveedores necesarios para gestionar su viaje, incluidos proveedores ubicados en otros países. Usted puede conocer, actualizar, rectificar y ejercer los demás derechos previstos en la ley escribiendo a viajesaquatravel@gmail.com o dirigiéndose a Cra. 10 No. 5-73, Oficina 213, Centro Comercial Zipacentro. Consulte la Política de Tratamiento y Protección de Datos Personales completa. La autorización para recibir publicidad es opcional.
        </p>

      </div>
    </div>
  );
}