export const siteConfig = {
  agency: {
    name: "Viajes Aqua Travel",
    experienceYears: 9,
    rnt: "115795",
    addressLine1: "Carrera 10 No. 5-73 oficina 213",
    addressLine2: "Centro comercial Zipacentro, Segundo piso, Zipaquirá",
    phone: "601 8826723",
    whatsappNumber: "573043321590",
    email: "viajesaquatravel@gmail.com",
    hours: {
      weekdays: "9am a 6pm",
      saturday: "9am a 1pm",
      sundayAndHolidays: "Cerrado"
    },
    defaultMessage: "Hola, vengo de la página web y quiero más información sobre "
  },
  policies: [
    {
      id: "terms",
      title: "Términos y Condiciones",
      path: "/terminos-y-condiciones"
    },
    {
      id: "privacy",
      title: "Políticas de Privacidad",
      path: "/politicas-de-privacidad"
    }
  ],
  businessLines: {
    volume: { id: "volume", name: "Caribe Todo Incluido", desc: "Las mejores playas de las Américas sin preocupaciones." },
    local: { id: "local", name: "Escapadas por Colombia", desc: "Destinos nacionales imperdibles." },
    margin: { id: "margin", name: "Destinos Bucket List", desc: "Viajes de alto impacto y experiencias globales únicas." },
    aquaWoman: { 
      id: "aquaWoman", 
      name: "Aqua Woman", 
      desc: "Experiencia Femenina",
      link: "https://www.instagram.com/aquawomanexperience/"
    }
  },
  aquaWomanData: {
    heroTitle: "Un espacio seguro para reconectar con tu esencia",
    heroSubtitle: "Cero carga mental. Viajes y retiros diseñados exclusivamente para mujeres que buscan sanar, soltar y transformar su mundo.",
    retreat: {
      title: "Retiro: El Legado de Ser Mujer",
      location: "Ráquira, Boyacá",
      price: "1.999.000",
      description: "Un fin de semana diseñado para soltar el burnout, reconectar con la hermandad femenina y sanar desde la raíz en un entorno de paz absoluta.",
      includes: [
        "Alojamiento en eco-hotel boutique exclusivo",
        "Alimentación consciente (Todas las comidas)",
        "Talleres de sanación de linaje y empoderamiento",
        "Kit de bienvenida Aqua Woman",
        "Transporte privado ida y regreso desde Bogotá"
      ],
      itinerary: [
        { day: "Día 1", title: "Conexión", desc: "Llegada, círculo de apertura y ritual de intención para soltar las cargas." },
        { day: "Día 2", title: "Sanación", desc: "Talleres profundos, inmersión en la naturaleza y ceremonia de fuego." },
        { day: "Día 3", title: "Renacer", desc: "Integración, cierre de hermandad y retorno con energía renovada." }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510844355160-2fb07bf9af75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  },
  offers: {
    campaignName: "Black Days",
    isActive: true,
    deals: [
      {
        id: "bf-eur-01",
        title: "Europa: Madrid, París y Barcelona",
        campaignTag: "Black Days",
        isActive: true,
        validUntil: "2026-11-20T23:59:59",
        currency: "COP",
        originalPrice: "9.500.000",
        discountPrice: "8.690.000",
        image: "https://images.unsplash.com/photo-KP0uq0vIgI4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Francia y España",
        duration: "11 Días / 10 Noches",
        includes: ["Vuelos", "Hospedaje", "Desayunos", "Guía", "Traslados", "Seguro médico"],
        notIncludes: ["Gastos personales"],
        importantNotes: ["Precio válido a partir de dos personas", "Reserva con $500.000", "Fechas disponibles: Abril 9, 15, 16, 22, 23, 29, 30 de 2027", "Válido hasta el 20 de noviembre"],
        whatsappMessage: "Hola, quiero reservar la oferta Black Days a Europa (Madrid, París y BCN) por $8'690.000 COP."
      },
      {
        id: "bf-adz-01",
        title: "Navidad en el Caribe - San Andrés",
        campaignTag: "Black Days",
        isActive: true,
        validUntil: "2026-12-23T23:59:59",
        currency: "COP",
        originalPrice: "2.100.000",
        discountPrice: "1.753.000",
        image: "https://images.unsplash.com/photo-opz5XqwPhUY?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "San Andrés, Colombia",
        duration: "4 Días / 3 Noches",
        includes: ["Tiquetes aéreos (con LATAM)", "Artículo Personal", "Traslados en destino", "Alojamiento 3 noches", "Alimentación según plan", "Asistencia Médica", "Tour vuelta a la isla + acuario mágico y bahía"],
        notIncludes: ["Equipaje extra", "Tarjeta de ingreso a la isla", "Impuestos locales"],
        importantNotes: ["Salidas desde Bogotá", "Viaje: Diciembre 23 al 26", "Tarifa basada en Hotel Portofino Caribe, opciones PA, PAM y FULL disponibles (consultar)"],
        whatsappMessage: "Hola, quiero información de la oferta Navidad en el Caribe (San Andrés) desde $1.753.000 COP."
      },
      {
        id: "bf-dxb-01",
        title: "Celebra Fin de Año - Dubái",
        campaignTag: "Black Days",
        isActive: true,
        validUntil: "2026-12-27T23:59:59",
        currency: "USD",
        originalPrice: "2.200",
        discountPrice: "1.795",
        image: "https://images.unsplash.com/photo-DcyL0IoCY0A?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Dubái, EAU",
        duration: "8 Días / 7 Noches",
        includes: ["Alojamiento 7 noches", "Desayunos", "Traslados", "Desert Safari con BBQ", "Tour Dubái y Abu Dhabi", "Cena Show Cruise Marina", "Cena Fin de Año", "Asistencia Médica", "Free Bancario"],
        notIncludes: ["Vuelos Internacionales", "Tourism Dirham Fee (pago en hotel)"],
        importantNotes: ["Fecha inicial: 27, 28 o 29 Diciembre", "Tarifa por persona en acomodación triple"],
        whatsappMessage: "Hola, quiero reservar la oferta Celebra Fin de Año en Dubái por USD 1.795."
      },
      {
        id: "bf-dom-01",
        title: "Combinado Rep. Dominicana (Hodelpa + Emotions)",
        campaignTag: "Black Days",
        isActive: true,
        validUntil: "2026-11-30T23:59:59",
        currency: "COP",
        originalPrice: "4.200.000",
        discountPrice: "3.690.000",
        image: "https://images.unsplash.com/photo-1zYWq3rdi8Y?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Santo Domingo y Juan Dolio",
        duration: "5 Días / 4 Noches",
        includes: ["Vuelos", "Estadía Hodelpa (Santo Domingo)", "Estadía Emotions", "Todo Incluido (All Inclusive)", "Seguro médico", "Traslados", "GRATIS: Cena en Nicolás de Ovando"],
        notIncludes: ["Gastos no especificados"],
        importantNotes: ["Salidas: 5 al 9 de enero 2027", "Tarifa en acomodación triple (doble: $3'790.000)", "Válido a partir de dos personas"],
        whatsappMessage: "Hola, me interesa la oferta del Combinado República Dominicana (Hodelpa + Emotions) desde $3'690.000 COP."
      },
      {
        id: "bf-dom-02",
        title: "Combinado Punta Cana - Santo Domingo",
        campaignTag: "Black Days",
        isActive: true,
        validUntil: "2026-11-30T23:59:59",
        currency: "COP",
        originalPrice: "4.800.000",
        discountPrice: "4.290.000",
        image: "https://images.unsplash.com/photo-u-Di0zMI4xI?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Santo Domingo y Punta Cana",
        duration: "5 Días / 4 Noches",
        includes: ["Vuelos", "Estadía Hodelpa (Santo Domingo)", "Estadía Impressive (Punta Cana)", "Todo Incluido (All Inclusive)", "Seguro médico", "Traslados", "GRATIS: Cena en Nicolás de Ovando"],
        notIncludes: ["Gastos no especificados"],
        importantNotes: ["Salidas: 5 al 9 de enero 2027", "Tarifa en acomodación triple (doble: $4'390.000)", "Válido a partir de dos personas"],
        whatsappMessage: "Hola, me interesa la oferta del Combinado Punta Cana - Santo Domingo desde $4'290.000 COP."
      },
      {
        id: "bf-puj-01",
        title: "Impressive Punta Cana",
        campaignTag: "Black Days",
        isActive: true,
        validUntil: "2026-11-30T23:59:59",
        currency: "COP",
        originalPrice: "3.200.000",
        discountPrice: "2.820.000",
        image: "https://images.unsplash.com/photo-u-Di0zMI4xI?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Punta Cana, Rep. Dominicana",
        duration: "4 Días / 3 Noches",
        includes: ["Vuelos", "Estadía en Impressive Punta Cana", "Todo incluido (All Inclusive)", "Seguro médico", "Traslados"],
        notIncludes: ["Gastos no especificados"],
        importantNotes: ["Temporada: Mayo y junio de 2027", "Tarifa en acomodación triple (doble: $2'890.000)", "Válido a partir de dos personas"],
        whatsappMessage: "Hola, quiero reservar la oferta a Impressive Punta Cana desde $2'820.000 COP."
      },
      {
        id: "bf-pop-01",
        title: "Puerto Plata | Enero",
        campaignTag: "Promo",
        isActive: true,
        validUntil: "2026-11-30T23:59:59",
        currency: "COP",
        originalPrice: "3.000.000",
        discountPrice: "2.590.000",
        image: "https://images.unsplash.com/photo-jrSA92yYkY?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Puerto Plata, Rep. Dominicana",
        duration: "4 Días / 3 Noches",
        includes: ["Vuelos", "Hospedaje", "Todo incluido (All Inclusive)", "Seguro médico", "Traslados"],
        notIncludes: ["Gastos no especificados"],
        importantNotes: ["Salidas: 22 al 25 de enero 2027", "Tarifa en acomodación triple (doble: $2'690.000)", "Válido a partir de dos personas"],
        whatsappMessage: "Hola, quiero reservar la Promo a Puerto Plata desde $2'590.000 COP."
      },
      {
        id: "bf-jpn-01",
        title: "Corea y Japón: El Alma de Oriente",
        campaignTag: "Black Days",
        isActive: true,
        validUntil: "2026-11-30T23:59:59",
        currency: "USD",
        originalPrice: "7.500",
        discountPrice: "6.860",
        image: "https://images.unsplash.com/photo-4Q-Rbu8Ipcg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Corea del Sur y Japón",
        duration: "14 Días / 11 Noches",
        includes: ["Vuelos internacionales e internos", "Alojamiento y desayunos", "Traslados (inc. Myeondong)", "Tren Alta Velocidad", "Guía y panorámicas", "Asistencia médica (60k USD)"],
        notIncludes: ["Visados", "Comidas no descritas"],
        importantNotes: ["Salidas 2027: 18 jun-01 jul / 17 sep-30 sep", "Itinerario abarca 14 ciudades", "Tarifa por persona en acomodación triple"],
        whatsappMessage: "Hola, solicito información de la oferta Corea y Japón: El Alma de Oriente desde USD 6.860."
      },
      {
        id: "bf-thai-01",
        title: "Tailandia - La Travesía del Dragón",
        campaignTag: "50% OFF 2do Pax",
        isActive: true,
        validUntil: "2026-11-27T23:59:59",
        currency: "USD",
        originalPrice: "8.500",
        discountPrice: "7.182",
        image: "https://images.unsplash.com/photo-gmOMKy9oXj8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Tailandia y Estambul",
        duration: "16 Días / 12 Noches",
        includes: ["Tiquetes aéreos", "Alojamiento", "Alimentación según itinerario", "Traslados", "Guía local", "Asistencia médica", "eSIM"],
        notIncludes: ["Servicios no especificados"],
        importantNotes: ["Salidas desde Bogotá: 1 al 16 de diciembre 2026", "Precio total por pareja en acomodación doble", "50% OFF en porción terrestre 2do pasajero (ya aplicado)"],
        whatsappMessage: "Hola, quiero la oferta de Tailandia con el 50% OFF en el segundo pasajero por USD 7.182."
      },
      {
        id: "bf-eur-02",
        title: "Europa Fantástica (Desde Bogotá)",
        campaignTag: "50% OFF 2do Pax",
        isActive: true,
        validUntil: "2026-11-27T23:59:59",
        currency: "USD",
        originalPrice: "7.102",
        discountPrice: "6.746",
        image: "https://images.unsplash.com/photo-WBGjg0DsO_g?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Europa Occidental",
        duration: "19 Días / 17 Noches",
        includes: ["Tiquetes aéreos", "Alojamiento", "Alimentación itinerario", "Traslados", "Guía", "Asistencia médica", "eSIM"],
        notIncludes: ["Servicios no especificados"],
        importantNotes: ["Salidas 2027: Abril 2, 16, 23 y 30", "Precio por pareja en acomodación doble", "50% OFF en porción terrestre 2do pasajero (ya aplicado)"],
        whatsappMessage: "Hola, me interesa la oferta Europa Fantástica en pareja por USD 6.746."
      },
      {
        id: "bf-eur-03",
        title: "Europa Vibrante (Desde Bogotá)",
        campaignTag: "50% OFF 2do Pax",
        isActive: true,
        validUntil: "2026-11-27T23:59:59",
        currency: "USD",
        originalPrice: "6.942",
        discountPrice: "6.594",
        image: "https://images.unsplash.com/photo-KP0uq0vIgI4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Europa Occidental",
        duration: "17 Días / 15 Noches",
        includes: ["Tiquetes aéreos", "Alojamiento", "Alimentación itinerario", "Traslados", "Guía", "Asistencia médica", "eSIM"],
        notIncludes: ["Servicios no especificados"],
        importantNotes: ["Salidas 2027: Abril 9 y 23", "Precio por pareja en acomodación doble", "50% OFF en porción terrestre 2do pasajero (ya aplicado)"],
        whatsappMessage: "Hola, me interesa la oferta Europa Vibrante (Bogotá) en pareja por USD 6.594."
      },
      {
        id: "bf-eur-04",
        title: "Latidos del Mar - Europa con Minicrucero",
        campaignTag: "50% OFF 2do Pax",
        isActive: true,
        validUntil: "2026-11-27T23:59:59",
        currency: "USD",
        originalPrice: "7.142",
        discountPrice: "6.784",
        image: "https://images.unsplash.com/photo-KP0uq0vIgI4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Europa y Mar Egeo",
        duration: "17 Días / 15 Noches",
        includes: ["Tiquetes aéreos", "Alojamiento", "Alimentación itinerario", "Traslados", "Guía", "Asistencia médica", "eSIM"],
        notIncludes: ["Servicios no especificados"],
        importantNotes: ["Salidas desde Bogotá: Abril 9 y 23 de 2027", "Precio por pareja en acomodación doble", "50% OFF en porción terrestre 2do pasajero (ya aplicado)"],
        whatsappMessage: "Hola, me interesa Latidos del Mar - Europa con Minicrucero por USD 6.784."
      },
      {
        id: "bf-eur-05",
        title: "Europa Vibrante (Desde Medellín)",
        campaignTag: "50% OFF 2do Pax",
        isActive: true,
        validUntil: "2026-11-27T23:59:59",
        currency: "USD",
        originalPrice: "6.942",
        discountPrice: "6.594",
        image: "https://images.unsplash.com/photo-WBGjg0DsO_g?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Europa Occidental",
        duration: "17 Días / 15 Noches",
        includes: ["Tiquetes aéreos", "Alojamiento", "Alimentación itinerario", "Traslados", "Guía", "Asistencia médica", "eSIM"],
        notIncludes: ["Servicios no especificados"],
        importantNotes: ["Salidas desde Medellín: Abril 2, 16 y 30 de 2027", "Precio por pareja en acomodación doble", "50% OFF en porción terrestre 2do pasajero (ya aplicado)"],
        whatsappMessage: "Hola, me interesa la oferta Europa Vibrante (Medellín) en pareja por USD 6.594."
      },
      {
        id: "bf-eur-06",
        title: "Europa Esencial (Desde Medellín)",
        campaignTag: "50% OFF 2do Pax",
        isActive: true,
        validUntil: "2026-11-27T23:59:59",
        currency: "USD",
        originalPrice: "6.782",
        discountPrice: "6.442",
        image: "https://images.unsplash.com/photo-WBGjg0DsO_g?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        destination: "Europa Occidental",
        duration: "17 Días / 15 Noches",
        includes: ["Tiquetes aéreos", "Alojamiento", "Alimentación itinerario", "Traslados", "Guía", "Asistencia médica", "eSIM"],
        notIncludes: ["Servicios no especificados"],
        importantNotes: ["Salidas desde Medellín: Abril 2, 16 y 30 de 2027", "Precio por pareja en acomodación doble", "50% OFF en porción terrestre 2do pasajero (ya aplicado)"],
        whatsappMessage: "Hola, me interesa la oferta Europa Esencial (Medellín) en pareja por USD 6.442."
      }
    ]
  },
  catalog: [
    // CARIBE TODO INCLUIDO (volume)
    {
      id: "vol-01", title: "Punta Cana Todo Incluido", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-u-Di0zMI4xI?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Playa", "Todo Incluido", "Familiar/Pareja"],
      includes: ["Tiquetes aéreos", "Alojamiento en hotel seleccionado", "Alimentación Todo Incluido", "Traslados in/out", "Asistencia médica"],
      notIncludes: ["Excursiones opcionales", "Gastos de índole personal", "Propinas"],
      importantNotes: ["Fechas a demanda", "Sujeto a disponibilidad aérea y hotelera"]
    },
    {
      id: "vol-02", title: "Cancún Todo Incluido", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Vida Nocturna", "Playas", "Cultura"],
      includes: ["Vuelos", "Alojamiento resort", "Alimentación y bebidas", "Traslados"],
      notIncludes: ["Impuesto ambiental (pago en destino)", "Tours a Chichén Itzá o Xcaret"],
      importantNotes: ["Requiere revisión de requisitos migratorios para mexicanos", "Tarifas dinámicas"]
    },
    {
      id: "vol-03", title: "Escapada Curazao", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1616016147494-069a531f8eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Playas de coral", "Arquitectura europea", "Buceo"],
      includes: ["Vuelos directos", "Alojamiento", "Desayunos", "Traslados"],
      notIncludes: ["Tarjeta de turismo", "Vacuna fiebre amarilla", "Alimentación no descrita"],
      importantNotes: ["No requiere visado", "Exige certificado de fiebre amarilla"]
    },
    {
      id: "vol-04", title: "Aruba - Isla Feliz", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1589136151624-9b27670d8a57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Compras", "Playas cristalinas", "Relax"],
      includes: ["Vuelos", "Alojamiento seleccionado", "Plan de alimentación", "Asistencia"],
      notIncludes: ["ED Card (Tarjeta de embarque)", "Propinas", "Gastos personales"],
      importantNotes: ["No requiere visado", "Fechas a demanda"]
    },
    {
      id: "vol-05", title: "Ciudad de Panamá", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1582236314811-9a706b4d3204?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Compras", "Canal de Panamá", "Escapada corta"],
      includes: ["Vuelos", "Alojamiento urbano o playa", "Desayunos", "Traslados", "Tour al Canal"],
      notIncludes: ["Alimentación completa", "Gastos de compras", "Entradas no descritas"],
      importantNotes: ["Destino ideal para compras", "Sin visado para colombianos"]
    },
    {
      id: "vol-06", title: "México D.F. y Cultura", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1518605363189-980b39bebe57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Historia", "Gastronomía", "Museos"],
      includes: ["Vuelos", "Alojamiento céntrico", "Desayunos", "Tour Basílica y Pirámides"],
      notIncludes: ["Cenas", "Gastos personales"],
      importantNotes: ["Pre-registro migratorio obligatorio"]
    },
    {
      id: "vol-07", title: "Perú Esencial", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Machu Picchu", "Lima", "Gastronomía"],
      includes: ["Vuelos a Lima y Cusco", "Alojamiento", "Tren a Aguas Calientes", "Entrada a ciudadela", "Guía"],
      notIncludes: ["Alimentación no descrita", "Propinas", "Mal de altura (seguro cubierto parcial)"],
      importantNotes: ["Consultar disponibilidad de cupos para Machu Picchu con antelación"]
    },

    // ESCAPADAS POR COLOMBIA (local)
    {
      id: "loc-01", title: "San Andrés Islas", businessLine: "local", price: "A consultar",
      image: "https://images.unsplash.com/photo-opz5XqwPhUY?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Mar de los 7 colores", "Vuelos", "Playa"],
      includes: ["Tiquetes aéreos", "Alojamiento", "Alimentación según plan", "Traslados"],
      notIncludes: ["Tarjeta de turismo de San Andrés", "Tours ecológicos", "Gastos personales"],
      importantNotes: ["Pago de tarjeta de ingreso directo en el aeropuerto"]
    },
    {
      id: "loc-02", title: "Cartagena Histórica", businessLine: "local", price: "A consultar",
      image: "https://images.unsplash.com/photo-1583344445353-8b77a760f38b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Ciudad Amurallada", "Playa", "Historia"],
      includes: ["Tiquetes", "Alojamiento", "Desayunos", "Traslados"],
      notIncludes: ["Excursiones a islas", "Alimentación completa", "Gastos no especificados"],
      importantNotes: ["Múltiples opciones de alojamiento disponibles"]
    },
    {
      id: "loc-03", title: "Aventura en La Guajira", businessLine: "local", price: "A consultar",
      image: "https://images.unsplash.com/photo-1549420847-f31f9fcbbcb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Desierto", "Cultura Wayuu", "Cabo de la Vela"],
      includes: ["Transporte local", "Alojamiento en ranchería/cabaña", "Alimentación típica", "Guía"],
      notIncludes: ["Tiquetes a Riohacha", "Artesanías", "Bebidas alcohólicas"],
      importantNotes: ["Destino de turismo de naturaleza y aventura"]
    },
    {
      id: "loc-04", title: "Relax en Palomino", businessLine: "local", price: "A consultar",
      image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Playa", "Selva", "Tubing"],
      includes: ["Transporte terrestre desde Santa Marta", "Alojamiento eco-hotel", "Desayunos", "Seguro"],
      notIncludes: ["Vuelos a Santa Marta", "Actividades", "Comidas adicionales"],
      importantNotes: ["Ideal para desconexión total"]
    },
    {
      id: "loc-05", title: "Boyacá Tradicional", businessLine: "local", price: "A consultar",
      image: "https://images.unsplash.com/photo-1582236314811-9a706b4d3204?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Pueblos Patrimonio", "Villa de Leyva", "Gastronomía local"],
      includes: ["Transporte terrestre VIP", "Alojamiento boutique", "Desayunos y cenas", "Tours guiados"],
      notIncludes: ["Gastos personales", "Almuerzos", "Entradas a viñedos"],
      importantNotes: ["Salidas grupales e individuales disponibles"]
    },

    // DESTINOS BUCKET LIST (margin)
    {
      id: "mar-01", title: "Japón: Temporada de Cerezos", businessLine: "margin", price: "8.690 USD",
      image: "https://images.unsplash.com/photo-4Q-Rbu8Ipcg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Tokio, Kioto, Osaka", "Guía Especializado", "26 Mar 2027"],
      includes: ["Vuelos internacionales", "Alojamiento Premium", "Desayunos", "Pases de tren alta velocidad", "Guía en español", "Entradas a monumentos"],
      notIncludes: ["Visado para Japón", "Almuerzos y cenas libres", "Gastos personales"],
      importantNotes: ["Salida confirmada: 26 de marzo de 2027", "Cupos extremadamente limitados", "Requiere visado"]
    },
    {
      id: "mar-02", title: "Europa por Primera Vez", businessLine: "margin", price: "3.390 EUR",
      image: "https://images.unsplash.com/photo-KP0uq0vIgI4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Multidestino", "Circuito Guiado", "19 Mar 2027"],
      includes: ["Vuelos desde Bogotá", "Alojamiento turista superior", "Autocar de lujo", "Desayunos buffet", "Guía acompañante"],
      notIncludes: ["ETIAS (si aplica)", "Excursiones opcionales", "Tasas hoteleras locales"],
      importantNotes: ["Salida: 19 de marzo de 2027", "Itinerario abarca Madrid, París, Roma y más"]
    },
    {
      id: "mar-03", title: "¡Viva Vietnam!", businessLine: "margin", price: "4.790 USD",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Asia Exótica", "Bahía de Halong", "05 Feb 2027"],
      includes: ["Vuelos", "Alojamiento con encanto", "Crucero por la Bahía de Halong", "Excursiones programadas", "Guías locales"],
      notIncludes: ["Trámite de visado", "Comidas no descritas", "Propinas para guías/choferes"],
      importantNotes: ["Salida: 05 de febrero de 2027", "Experiencia inmersiva en el sudeste asiático"]
    },
    {
      id: "mar-04", title: "Egipto y Jordania", businessLine: "margin", price: "4.351 USD",
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Pirámides", "Petra", "18 Ene 2027"],
      includes: ["Vuelos", "Crucero por el Nilo", "Alojamiento superior", "Visado de entrada (gestionado)", "Todas las excursiones base", "Guía egiptólogo"],
      notIncludes: ["Propinas obligatorias a pagar en destino", "Bebidas en las comidas", "Paseos en camello"],
      importantNotes: ["Salida: 18 de enero de 2027", "Clima ideal en esa época del año"]
    },
    {
      id: "mar-05", title: "Turquía con Crucero Islas Griegas", businessLine: "margin", price: "3.890 USD",
      image: "https://images.unsplash.com/photo-iQTmygr_WTY?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Estambul", "Capadocia", "Mar Egeo"],
      includes: ["Vuelos", "Circuito terrestre en Turquía", "Crucero con pensión completa", "Paquete de bebidas en crucero", "Alojamiento hoteles 4/5*"],
      notIncludes: ["Vuelo en globo (opcional)", "Excursiones en puertos griegos", "Propinas de crucero"],
      importantNotes: ["Fechas de salida según programación naviera"]
    },
    {
      id: "mar-06", title: "Guatemala: Joyas Arqueológicas", businessLine: "margin", price: "2.970 USD",
      image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Cultura Maya", "Tikal", "08 Feb 2027"],
      includes: ["Vuelos", "Alojamiento", "Transporte local", "Guía arqueológico", "Entradas a parques"],
      notIncludes: ["Comidas libres", "Gastos personales"],
      importantNotes: ["Salida: 08 de febrero de 2027"]
    },
    {
      id: "mar-07", title: "Buenos Aires", businessLine: "margin", price: "1.990 USD",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Tango", "Gastronomía", "10 Mar 2027"],
      includes: ["Vuelos", "Alojamiento boutique", "Cena Show de Tango", "City Tour", "Desayunos"],
      notIncludes: ["Impuestos locales", "Gastos no descritos"],
      importantNotes: ["Salida: 10 de marzo de 2027", "Opciones de ampliación a Iguazú"]
    },
    {
      id: "mar-08", title: "Marruecos", businessLine: "margin", price: "2.890 EUR",
      image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Desierto de Sahara", "Medinas", "21 Ene 2027"],
      includes: ["Vuelos", "Alojamiento en Riads", "Campamento en el desierto", "Media pensión", "Transporte 4x4", "Guía"],
      notIncludes: ["Bebidas", "Almuerzos", "Propinas"],
      importantNotes: ["Salida: 21 de enero de 2027"]
    },
    {
      id: "mar-09", title: "GP Fórmula 1 Miami 2027", businessLine: "margin", price: "2.346 USD",
      image: "https://images.unsplash.com/photo-1512759908851-f2f65f3eb175?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Experiencia F1", "Miami", "29 Abr - 03 May"],
      includes: ["Alojamiento 4 noches", "Entrada General Admission 3 días", "Seguro de viaje"],
      notIncludes: ["Tiquetes aéreos", "Upgrades a Tribuna/Paddock", "Traslados al circuito", "Alimentación"],
      importantNotes: ["Fechas: 29 abr al 03 may 2027", "Precios sujetos a variaciones del evento", "Requiere Visa Americana vigente"]
    },

    // AQUA WOMAN (aquaWoman)
    {
      id: "aw-01", title: "Retiro: El Legado de Ser Mujer", businessLine: "aquaWoman", price: "1.999.000 COP",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Bienestar", "Conexión Femenina", "Ráquira, 3 Días"],
      includes: ["Alojamiento eco-hotel exclusivo", "Alimentación consciente (completa)", "Talleres de sanación y empoderamiento", "Kit de bienvenida", "Transporte desde Bogotá"],
      notIncludes: ["Terapias individuales extra", "Gastos personales"],
      importantNotes: ["Exclusivo para mujeres", "Cupos limitados a 15 personas"]
    }
  ],
  testimonials: [
    {
      id: 1, name: "Laura Martínez", rating: 5,
      text: "Viajamos a Punta Cana en familia y la asesoría de Aqua Travel fue espectacular. Se encargaron de cada detalle."
    },
    {
      id: 2, name: "Carlos Gómez", rating: 5,
      text: "Excelente servicio. El viaje a Turquía superó nuestras expectativas. El respaldo de una agencia certificada da mucha tranquilidad."
    },
    {
      id: 3, name: "Diana Rodríguez", rating: 5,
      text: "El retiro de Aqua Woman me cambió la vida. Una experiencia de conexión profunda impecablemente organizada."
    }
  ]
};