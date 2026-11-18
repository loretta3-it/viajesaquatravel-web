export const siteConfig = {
  agency: {
    name: "Viajes Aqua Travel",
    experienceYears: 9,
    rnt: "115795",
    location: "Zipacentro, Zipaquirá, Colombia",
    whatsappNumber: "573043321590",
    defaultMessage: "Hola, vengo de la página web y quiero más información sobre "
  },
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
  catalog: [
    // CARIBE TODO INCLUIDO (volume)
    {
      id: "vol-01", title: "Punta Cana Todo Incluido", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1596422846543-7ce3ce60b4cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Tokio, Kioto, Osaka", "Guía Especializado", "26 Mar 2027"],
      includes: ["Vuelos internacionales", "Alojamiento Premium", "Desayunos", "Pases de tren alta velocidad", "Guía en español", "Entradas a monumentos"],
      notIncludes: ["Visado para Japón", "Almuerzos y cenas libres", "Gastos personales"],
      importantNotes: ["Salida confirmada: 26 de marzo de 2027", "Cupos extremadamente limitados", "Requiere visado"]
    },
    {
      id: "mar-02", title: "Europa por Primera Vez", businessLine: "margin", price: "3.390 EUR",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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