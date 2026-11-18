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
  // Datos exclusivos de la Landing Page Aqua Woman
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
    {
      id: "vol-01", title: "Punta Cana Todo Incluido", businessLine: "volume", price: "A consultar",
      image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Playa", "Todo Incluido", "Familiar/Pareja"],
      includes: ["Tiquetes aéreos", "Alojamiento en hotel seleccionado", "Alimentación Todo Incluido", "Traslados in/out", "Asistencia médica"],
      notIncludes: ["Excursiones opcionales", "Gastos de índole personal", "Propinas"],
      importantNotes: ["Fechas a demanda", "Sujeto a disponibilidad aérea y hotelera"]
    },
    {
      id: "mar-01", title: "Japón: Temporada de Cerezos", businessLine: "margin", price: "8.690 USD",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Tokio, Kioto, Osaka", "Guía Especializado", "26 Mar 2027"],
      includes: ["Vuelos internacionales", "Alojamiento Premium", "Desayunos", "Pases de tren alta velocidad", "Guía en español", "Entradas a monumentos"],
      notIncludes: ["Visado para Japón", "Almuerzos y cenas libres", "Gastos personales"],
      importantNotes: ["Salida confirmada: 26 de marzo de 2027", "Cupos extremadamente limitados", "Requiere visado"]
    },
    {
      id: "mar-09", title: "GP Fórmula 1 Miami 2027", businessLine: "margin", price: "2.346 USD",
      image: "https://images.unsplash.com/photo-1512759908851-f2f65f3eb175?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Experiencia F1", "Miami", "29 Abr - 03 May"],
      includes: ["Alojamiento 4 noches", "Entrada General Admission 3 días", "Seguro de viaje"],
      notIncludes: ["Tiquetes aéreos", "Upgrades a Tribuna/Paddock", "Traslados al circuito", "Alimentación"],
      importantNotes: ["Fechas: 29 abr al 03 may 2027", "Precios sujetos a variaciones del evento", "Requiere Visa Americana vigente"]
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