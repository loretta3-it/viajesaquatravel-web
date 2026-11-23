import React, { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-stone-50 text-stone-800 font-sans py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900 text-center">
          Términos, Condiciones y Políticas de Viaje
        </h1>

        <div className="mb-10 overflow-x-auto">
          <table className="w-full text-left border-collapse border border-stone-200 text-stone-700">
            <tbody>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold w-1/3">Nombre comercial</th><td className="p-3">Viajes Aquatravel</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">NIT</th><td className="p-3">1075657482-0</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">Registro Nacional de Turismo (RNT)</th><td className="p-3">115795</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">Teléfonos</th><td className="p-3">601 8826723 | +57 3043321590</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">Correo</th><td className="p-3">ViajesAquatravel@gmail.com</td></tr>
              <tr className="border-b border-stone-200"><th className="p-3 bg-stone-100 font-semibold">Dirección</th><td className="p-3">Cra. 10 No. 5-73, Oficina 213, Centro Comercial Zipacentro</td></tr>
              <tr><th className="p-3 bg-stone-100 font-semibold">Redes sociales</th><td className="p-3">@viajesaquatravel (Instagram, Facebook y Tik Tok)</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-stone-800 border-b border-stone-200 pb-2">VIAJES AQUATRAVEL</h2>
        <p className="mb-6 leading-relaxed text-stone-600 font-semibold">Documento informativo para clientes y viajeros</p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">1. Objeto y aceptación</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Estas políticas regulan la información, cotización, reserva, pago, confirmación, cambios, cancelaciones y prestación de los servicios turísticos comercializados por Viajes Aquatravel. Al solicitar, reservar o pagar un servicio, el cliente declara haber recibido, leído y aceptado estas condiciones, junto con las condiciones particulares de la cotización, voucher, itinerario, factura o confirmación de reserva. En caso de diferencias, prevalecerán las condiciones particulares informadas y aceptadas para el producto, siempre dentro del marco legal aplicable.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">2. Información del servicio y alcance de la agencia</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Aquatravel entregará información clara sobre los servicios incluidos y no incluidos, precio, duración, itinerario, alojamiento y categoría cuando corresponda, transportes, prestadores, condiciones de reserva y restricciones conocidas. Los servicios podrán ser prestados directamente por Aquatravel o por aerolíneas, hoteles, operadores, transportadores, guías, receptivos, parques, aseguradoras y demás proveedores independientes.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          Aquatravel actúa como organizadora, comercializadora o intermediaria según se indique en cada cotización y confirmación. La responsabilidad por cada componente se determina según el rol asumido, las condiciones pactadas y la legislación vigente. La agencia gestionará y acompañará al viajero ante los proveedores cuando corresponda.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">3. Cotizaciones, tarifas y disponibilidad</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
          <li className="leading-relaxed">Las cotizaciones tienen vigencia y disponibilidad limitadas; precios, inventarios, impuestos, tasas, condiciones y cupos pueden variar hasta que el proveedor confirme y la reserva quede formalizada.</li>
          <li className="leading-relaxed">La reserva se considera confirmada cuando Aquatravel comunica la confirmación y/o entrega los comprobantes correspondientes, una vez cumplidos los requisitos y pagos exigidos.</li>
          <li className="leading-relaxed">Los precios se expresan en la moneda indicada en la propuesta. Si hay componentes en moneda extranjera, se aplicará la tasa, método de conversión y fecha informados antes de la compra.</li>
          <li className="leading-relaxed">Promociones, descuentos, beneficios, temporadas, ocupación, edades y restricciones se aplican según la publicación o propuesta específica. No se presume que un beneficio incluya servicios no descritos.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">4. Pagos, abonos y saldo</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          El monto del abono, calendario de cuotas, fechas límite y fecha máxima para completar el pago se informarán en la cotización o plan de pagos. Si una promoción permite separar con un porcentaje inicial, dicho porcentaje y condiciones se comunicarán expresamente.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
          <li className="leading-relaxed">El cliente se compromete a pagar oportunamente los valores acordados y a conservar los comprobantes.</li>
          <li className="leading-relaxed">El saldo deberá estar pagado dentro del plazo indicado en la reserva. En algunos servicios, el proveedor exige pago total antes de emitir tiquetes, vouchers o confirmar alojamiento.</li>
          <li className="leading-relaxed">La falta de pago en los plazos establecidos puede ocasionar pérdida de cupos, cambios de tarifa, cancelación de servicios o aplicación de penalidades del proveedor, previamente informadas y conforme a la ley.</li>
          <li className="leading-relaxed">Aquatravel no solicita pagos a cuentas personales no autorizadas. El cliente debe verificar los canales de pago oficiales de la agencia antes de transferir.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">5. Cambios solicitados por el cliente</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Las solicitudes de cambio de nombres, fechas, destinos, vuelos, hoteles, ocupación, servicios o itinerario deberán enviarse por escrito. Su aprobación depende de disponibilidad, reglas del proveedor, tarifa adquirida y costos aplicables. Los gastos, diferencias tarifarias, penalidades y cargos de terceros que procedan serán informados al cliente antes de confirmar el cambio.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          No todos los tiquetes, tarifas promocionales, reservas hoteleras o servicios permiten cambios. Aquatravel gestionará la solicitud y comunicará la respuesta del proveedor, sin garantizar aprobación cuando dependa de un tercero.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">6. Cancelaciones, desistimientos y reembolsos</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Toda cancelación debe solicitarse por escrito a los canales oficiales de Aquatravel, indicando titular, reserva y motivo. Las condiciones de cancelación y devolución de cada proveedor y producto se informarán antes de la compra y se incorporan a la reserva.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
          <li className="leading-relaxed">Los valores reembolsables dependerán de los servicios efectivamente pagados, las condiciones del proveedor, los servicios no utilizados que sean susceptibles de devolución, los cargos legítimos aplicables y la normativa vigente.</li>
          <li className="leading-relaxed">Cuando existan valores recuperables de proveedores, Aquatravel realizará la gestión de solicitud y devolución correspondiente y mantendrá informado al cliente. Los tiempos pueden depender de terceros y se comunicará el plazo estimado.</li>
          <li className="leading-relaxed">No se garantiza devolución de componentes sujetos a tarifas no reembolsables o penalidades, salvo que corresponda por ley, por incumplimiento atribuible al responsable o por condiciones particulares pactadas. Las solicitudes de reembolso por cancelación, interrupción del viaje, enfermedad, negación de visa, impedimento de ingreso, fuerza mayor u otras circunstancias se analizarán conforme a la ley y las condiciones particulares. Se podrán solicitar soportes.</li>
          <li className="leading-relaxed">El derecho de retracto, cuando legalmente aplique a la modalidad y al servicio contratado, se atenderá conforme a la Ley 1480 de 2011 y sus modificaciones. Su aplicación puede tener excepciones, entre ellas servicios cuya ejecución haya comenzado con autorización del consumidor; por ello, no se presume aplicable a todos los servicios turísticos.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">7. Tiquetes y transporte aéreo</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
          <li className="leading-relaxed">Los vuelos, horarios, conexiones, equipaje permitido, selección de silla, check-in, documentación y restricciones se rigen por las condiciones de la aerolínea y las normas aeronáuticas aplicables.</li>
          <li className="leading-relaxed">Los horarios y rutas pueden ser modificados por la aerolínea por razones operacionales, meteorológicas, de seguridad u otras previstas en la normativa. Aquatravel informará y apoyará la gestión de novedades de las que tenga conocimiento.</li>
          <li className="leading-relaxed">El viajero debe presentarse con la anticipación indicada por la aerolínea, cumplir los requisitos de check-in y abordar a tiempo. La no presentación (no-show) puede generar pérdida del vuelo y cargos o restricciones.</li>
          <li className="leading-relaxed">Las condiciones de equipaje, artículos permitidos, documentación y servicios adicionales deben revisarse en la confirmación y con la aerolínea. Equipaje adicional, silla, comidas u otros extras solo están incluidos si se indican expresamente.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">8. Hoteles, alojamientos y servicios en destino</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          La categoría, tipo de habitación, ocupación, régimen de alimentación, horarios de ingreso y salida, políticas de niños, depósitos, impuestos locales, servicios, amenidades y restricciones son los descritos en la reserva confirmada. Fotografías e imágenes son ilustrativas y pueden representar áreas o habitaciones diferentes, sin perjuicio de la información contractual.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          Los horarios de check-in/check-out, solicitudes especiales, camas, habitaciones comunicadas, accesibilidad, alimentación especial y otros requerimientos deben solicitarse con anticipación; estarán sujetos a confirmación del establecimiento.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">9. Documentos, visas, requisitos migratorios y salud</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
          <li className="leading-relaxed">Cada viajero es responsable de contar con documentos vigentes y cumplir los requisitos migratorios, de ingreso, salida, tránsito, vacunación, salud, permisos y demás exigencias del destino y transportadores.</li>
          <li className="leading-relaxed">Aquatravel brindará orientación sobre requisitos conocidos al momento de la asesoría, pero estos pueden cambiar. El viajero debe verificar la información oficial antes del viaje.</li>
          <li className="leading-relaxed">La negación de visa, permisos o ingreso al destino no genera automáticamente derecho a devolución de todos los valores; se aplicarán las condiciones del proveedor y la legislación vigente.</li>
          <li className="leading-relaxed">Los datos de nombres y documentos deben entregarse correctamente y coincidir con los documentos de viaje. Errores, correcciones o cambios pueden generar cargos o impedir la prestación del servicio.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">10. Menores de edad y viajeros con necesidades particulares</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Los menores deberán viajar con los documentos y autorizaciones legalmente exigidos. El adulto responsable debe verificar permisos de salida, custodia, acompañamiento y requisitos específicos del destino y transportador. Se recomienda informar antes de reservar sobre movilidad reducida, condiciones médicas, alergias, dietas, embarazo, necesidades de asistencia u otras circunstancias que puedan afectar el viaje; la prestación de apoyos especiales está sujeta a disponibilidad y confirmación de los proveedores.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">11. Asistencia al viajero, seguridad y conducta</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Cuando el plan incluya asistencia médica o seguro, se entregará información sobre cobertura, vigencia, exclusiones, procedimiento y contacto de emergencia. El viajero debe revisar las condiciones y comunicarse directamente con la central de asistencia en caso de requerir atención.
        </p>
        <p className="mb-4 leading-relaxed text-stone-600">
          El viajero deberá respetar instrucciones de proveedores, guías, autoridades, normas locales, seguridad, convivencia, cuidado ambiental y restricciones de actividades.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-stone-600">
          <li className="leading-relaxed">Aquatravel no controla las condiciones de seguridad, clima, infraestructura, decisiones de autoridades o actos de terceros en los destinos. Se informarán las advertencias conocidas y se brindará acompañamiento dentro del alcance contratado.</li>
          <li className="leading-relaxed">Conductas que pongan en riesgo a otros, incumplan normas o afecten la operación pueden llevar a restricciones o retiro del servicio por parte del proveedor o autoridad, de acuerdo con las reglas aplicables.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">12. Modificaciones por fuerza mayor o circunstancias operativas</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Ante fuerza mayor, caso fortuito, decisiones de autoridades, fenómenos naturales, condiciones climáticas, cierres, huelgas, situaciones de seguridad, cambios de proveedor u otras circunstancias que afecten la operación, podrán presentarse ajustes de horarios, itinerarios, actividades, hoteles, transportes o servicios. Aquatravel comunicará las novedades y gestionará alternativas razonables, procurando mantener la calidad y características esenciales del plan. Las soluciones, reembolsos o compensaciones se determinarán conforme a las normas y condiciones aplicables.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          Los cambios de hotel por razones operativas podrán contemplar alojamiento de categoría similar o superior, cuando sea viable y de acuerdo con las condiciones legales y contractuales.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">13. Servicios no utilizados, retrasos y pérdida de conexiones</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          La no utilización voluntaria de un servicio por parte del viajero, llegadas tardías, pérdida de transporte, no presentación, abandono del plan o interrupción por razones personales no genera automáticamente devolución. Se gestionará cualquier valor recuperable de acuerdo con las condiciones del proveedor y la ley. El viajero debe comunicar de inmediato cualquier novedad para facilitar la asistencia y las gestiones.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">14. Equipaje y objetos personales</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          El viajero es responsable del cuidado de sus documentos, dinero, dispositivos, objetos de valor y equipaje, salvo cuando se encuentren bajo custodia de un proveedor y se configure la responsabilidad correspondiente. En caso de pérdida, daño o demora del equipaje, deberá reportarlo de inmediato al transportador o prestador y conservar los soportes y reportes.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">15. Protección de datos personales</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Aquatravel utilizará los datos personales entregados por los clientes para cotizar, reservar, emitir, coordinar, prestar, cobrar y dar seguimiento a servicios turísticos; realizar comunicaciones operativas; cumplir obligaciones legales; atender solicitudes y, cuando exista autorización, enviar información comercial. Los datos podrán compartirse con proveedores necesarios para gestionar el servicio, autoridades o entidades habilitadas, bajo las finalidades correspondientes.
        </p>
        <p className="mb-6 leading-relaxed text-stone-600">
          El titular podrá ejercer sus derechos de consulta, actualización, rectificación, revocatoria o supresión, cuando proceda, a través del correo viajesaquatravel@gmail.com. El tratamiento se realizará conforme a la Ley 1581 de 2012 y normas aplicables. La política integral de tratamiento de datos podrá ser solicitada a la agencia.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">16. Prevención de explotación sexual comercial de niños, niñas y adolescentes</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Viajes Aquatravel rechaza y se compromete a prevenir la explotación, abuso y cualquier forma de violencia sexual contra niños, niñas y adolescentes, y promueve el cumplimiento de la legislación colombiana, incluida la Ley 679 de 2001 y demás normas concordantes. Se solicita a clientes y viajeros reportar situaciones sospechosas a las autoridades competentes.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">17. Peticiones, quejas, reclamos y solicitudes</h3>
        <p className="mb-6 leading-relaxed text-stone-600">
          Las solicitudes, inquietudes, peticiones, quejas o reclamos podrán presentarse por teléfono, correo electrónico o en la oficina indicada. El cliente debe incluir datos de contacto, número o referencia de reserva, descripción de los hechos y soportes disponibles. Aquatravel dará respuesta dentro de los términos legales aplicables y podrá solicitar información adicional para gestionar el caso.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3 text-stone-800">18. Disposiciones finales</h3>
        <p className="mb-4 leading-relaxed text-stone-600">
          Estas políticas complementan la información de cada cotización, confirmación, voucher y contrato. Ninguna cláusula pretende limitar derechos irrenunciables del consumidor ni excluir responsabilidades que la ley atribuya a Aquatravel o a los prestadores. Si una disposición se considera inválida, las demás conservarán su vigencia en cuanto sea legalmente posible. La relación se regirá por las leyes de la República de Colombia.
        </p>
        <p className="mb-6 leading-relaxed text-stone-500 italic">
          Versión informativa: noviembre de 2026. Aquatravel podrá actualizar este documento; la versión aplicable a cada reserva será la informada y aceptada al momento de contratar, sin perjuicio de la ley.
        </p>

      </div>
    </div>
  );
}