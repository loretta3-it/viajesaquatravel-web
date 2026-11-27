import { WHATSAPP_PREFIX } from '../utils/whatsapp';

export const siteConfig = {
  schemaVersion: 3,

  agency: {
    name: 'Viajes AquaTravel',
    rnt: '115795',
    location: 'Zipacentro, Zipaquirá, Cundinamarca, Colombia',
    experienceYears: 9,
    addressLine1: 'Carrera 10 No. 5-73 oficina 213',
    addressLine2: 'Centro comercial Zipacentro, Segundo piso, Zipaquirá',
    phone: '601 8826723',
    whatsappNumber: '573043321590',
    email: 'viajesaquatravel@gmail.com',
    hours: { weekdays: '9am a 6pm', saturday: '9am a 1pm', sundayAndHolidays: 'Cerrado' },
    whatsappPrefix: WHATSAPP_PREFIX,
    social: {
      facebook: 'https://www.facebook.com/viajesaquatravel/',
      instagram: 'https://www.instagram.com/viajesaquatravel/',
      tiktok: 'https://www.tiktok.com/@viajesaquatravel',
    },
    mapPins: [
      { label: 'Oficina Zipaquirá', lat: 5.0221, lng: -74.0048 },
      { label: 'San Andrés', lat: 12.5847, lng: -81.7006 },
      { label: 'Cancún', lat: 21.1619, lng: -86.8515 },
      { label: 'Punta Cana', lat: 18.5601, lng: -68.3725 },
      { label: 'Curazao', lat: 12.1696, lng: -68.99 },
      { label: 'Miami', lat: 25.7617, lng: -80.1918 },
      { label: 'Perú', lat: -13.5319, lng: -71.9675 },
      { label: 'Argentina', lat: -34.6037, lng: -58.3816 },
      { label: 'Brasil', lat: -22.9068, lng: -43.1729 },
      { label: 'Bolivia', lat: -20.1338, lng: -67.4891 },
      { label: 'Chile', lat: -33.4489, lng: -70.6693 },
      { label: 'Europa', lat: 48.8566, lng: 2.3522 },
      { label: 'Dubái', lat: 25.2048, lng: 55.2708 },
      { label: 'Japón', lat: 35.6762, lng: 139.6503 },
    ],
  },

  businessLines: {
    volume: { id: 'volume', name: 'Caribe Todo Incluido', desc: 'Las mejores playas de las Américas sin preocupaciones.' },
    local: { id: 'local', name: 'Escapadas por Colombia', desc: 'Destinos nacionales imperdibles.' },
    southAmerica: {
      id: 'southAmerica',
      name: 'Suramérica',
      desc: 'Cultura, gastronomía y paisajes inolvidables del sur del continente.',
    },
    margin: { id: 'margin', name: 'Destinos Bucket List', desc: 'Viajes de alto impacto y experiencias globales únicas.' },
    // Solo para el shim legacy (AquaWoman.jsx); no es valor válido de destinations.businessLine
    aquaWoman: { id: 'aquaWoman', name: 'Aqua Woman', desc: 'Experiencia Femenina', link: 'https://www.instagram.com/aquawomanexperience/' },
  },

  seed: {
    destinations: [
      {
        "id": "vol-01",
        "title": "Punta Cana Todo Incluido",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Playa",
          "Todo Incluido",
          "Familiar/Pareja"
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento en hotel seleccionado",
          "Alimentación Todo Incluido",
          "Traslados in/out",
          "Asistencia médica"
        ],
        "notIncludes": [
          "Excursiones opcionales",
          "Gastos de índole personal",
          "Propinas"
        ],
        "importantNotes": [
          "Fechas a demanda",
          "Sujeto a disponibilidad aérea y hotelera"
        ],
        "businessLine": "volume",
        "priceLabel": "A consultar"
      },
      {
        "id": "vol-02",
        "title": "Cancún Todo Incluido",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Vida Nocturna",
          "Playas",
          "Cultura"
        ],
        "includes": [
          "Vuelos",
          "Alojamiento resort",
          "Alimentación y bebidas",
          "Traslados"
        ],
        "notIncludes": [
          "Impuesto ambiental (pago en destino)",
          "Tours a Chichén Itzá o Xcaret"
        ],
        "importantNotes": [
          "Requiere revisión de requisitos migratorios para mexicanos",
          "Tarifas dinámicas"
        ],
        "businessLine": "volume",
        "priceLabel": "A consultar"
      },
      {
        "id": "vol-03",
        "title": "Escapada Curazao",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1616016147494-069a531f8eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Playas de coral",
          "Arquitectura europea",
          "Buceo"
        ],
        "includes": [
          "Vuelos directos",
          "Alojamiento",
          "Desayunos",
          "Traslados"
        ],
        "notIncludes": [
          "Tarjeta de turismo",
          "Vacuna fiebre amarilla",
          "Alimentación no descrita"
        ],
        "importantNotes": [
          "No requiere visado",
          "Exige certificado de fiebre amarilla"
        ],
        "businessLine": "volume",
        "priceLabel": "A consultar"
      },
      {
        "id": "vol-04",
        "title": "Aruba - Isla Feliz",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1589136151624-9b27670d8a57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Compras",
          "Playas cristalinas",
          "Relax"
        ],
        "includes": [
          "Vuelos",
          "Alojamiento seleccionado",
          "Plan de alimentación",
          "Asistencia"
        ],
        "notIncludes": [
          "ED Card (Tarjeta de embarque)",
          "Propinas",
          "Gastos personales"
        ],
        "importantNotes": [
          "No requiere visado",
          "Fechas a demanda"
        ],
        "businessLine": "volume",
        "priceLabel": "A consultar"
      },
      {
        "id": "vol-05",
        "title": "Ciudad de Panamá",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1582236314811-9a706b4d3204?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Compras",
          "Canal de Panamá",
          "Escapada corta"
        ],
        "includes": [
          "Vuelos",
          "Alojamiento urbano o playa",
          "Desayunos",
          "Traslados",
          "Tour al Canal"
        ],
        "notIncludes": [
          "Alimentación completa",
          "Gastos de compras",
          "Entradas no descritas"
        ],
        "importantNotes": [
          "Destino ideal para compras",
          "Sin visado para colombianos"
        ],
        "businessLine": "volume",
        "priceLabel": "A consultar"
      },
      {
        "id": "vol-06",
        "title": "México D.F. y Cultura",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1518605363189-980b39bebe57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Historia",
          "Gastronomía",
          "Museos"
        ],
        "includes": [
          "Vuelos",
          "Alojamiento céntrico",
          "Desayunos",
          "Tour Basílica y Pirámides"
        ],
        "notIncludes": [
          "Cenas",
          "Gastos personales"
        ],
        "importantNotes": [
          "Pre-registro migratorio obligatorio"
        ],
        "businessLine": "volume",
        "priceLabel": "A consultar"
      },
      {
        "id": "vol-07",
        "title": "Perú Esencial",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Machu Picchu",
          "Lima",
          "Gastronomía"
        ],
        "includes": [
          "Vuelos a Lima y Cusco",
          "Alojamiento",
          "Tren a Aguas Calientes",
          "Entrada a ciudadela",
          "Guía"
        ],
        "notIncludes": [
          "Alimentación no descrita",
          "Propinas",
          "Mal de altura (seguro cubierto parcial)"
        ],
        "importantNotes": [
          "Consultar disponibilidad de cupos para Machu Picchu con antelación"
        ],
        "businessLine": "southAmerica",
        "priceLabel": "A consultar"
      },
      {
        "id": "sa-arg-01",
        "title": "Argentina: Buenos Aires y Bariloche",
        "destination": "Buenos Aires y Bariloche, Argentina",
        "duration": "7 Días / 6 Noches",
        "businessLine": "southAmerica",
        "price": null,
        "priceLabel": "A consultar",
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1000&q=80",
            "alt": "Buenos Aires y Patagonia Argentina"
          }
        ],
        "description": "Combina la elegancia urbana, el tango y la gastronomía de Buenos Aires con los lagos y montañas de la Patagonia en Bariloche.",
        "features": [
          "City Tour Buenos Aires",
          "Circuito Chico Bariloche",
          "Traslados incluidos"
        ],
        "includes": [
          "Alojamiento en hoteles seleccionados con desayuno diario",
          "Traslados aeropuerto - hotel - aeropuerto en ambos destinos",
          "City tour panorámico por Buenos Aires",
          "Excursión Circuito Chico en Bariloche"
        ],
        "notIncludes": [
          "Tiquetes aéreos internacionales y domésticos (cotizables a medida)",
          "Gastos personales y alimentación no especificada",
          "Asistencia médica internacional (disponible como adicional)"
        ],
        "importantNotes": [
          "Tarifas sujetas a disponibilidad y temporada (verano o nieve en invierno)."
        ],
        "whatsappMessage": "Quiero recibir cotización para el paquete Argentina: Buenos Aires y Bariloche.",
        "sortOrder": 22
      },
      {
        "id": "sa-bra-01",
        "title": "Brasil: Río de Janeiro y Búzios",
        "destination": "Río de Janeiro y Búzios, Brasil",
        "duration": "6 Días / 5 Noches",
        "businessLine": "southAmerica",
        "price": null,
        "priceLabel": "A consultar",
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=80",
            "alt": "Río de Janeiro y playas de Búzios"
          }
        ],
        "description": "Vive la energía vibrante de Río de Janeiro entre el Cristo Redentor y el Pan de Azúcar, y descansa en las playas cristalinas de Búzios.",
        "features": [
          "Cristo Redentor",
          "Playas de Búzios",
          "Traslados entre ciudades"
        ],
        "includes": [
          "Alojamiento en Río de Janeiro y Búzios con desayuno",
          "Traslados aeropuerto - hotel en Río - Búzios - aeropuerto",
          "Tour a Corcovado y Pan de Azúcar"
        ],
        "notIncludes": [
          "Tiquetes aéreos internacionales (cotizables según fecha)",
          "Alimentación no especificada y gastos personales",
          "Asistencia médica al viajero"
        ],
        "importantNotes": [
          "Recomendado verificar requisitos de vacuna contra la fiebre amarilla según itinerario."
        ],
        "whatsappMessage": "Quiero recibir cotización para el paquete Brasil: Río de Janeiro y Búzios.",
        "sortOrder": 23
      },
      {
        "id": "sa-bol-01",
        "title": "Bolivia: Salar de Uyuni y La Paz",
        "destination": "La Paz y Salar de Uyuni, Bolivia",
        "duration": "5 Días / 4 Noches",
        "businessLine": "southAmerica",
        "price": null,
        "priceLabel": "A consultar",
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80",
            "alt": "Paisaje andino de Bolivia y Salar de Uyuni"
          }
        ],
        "description": "Una expedición fascinante por el altiplano andino: teleféricos y cultura en La Paz combinados con el espejo natural más grande del mundo en Uyuni.",
        "features": [
          "Salar de Uyuni 4x4",
          "City Tour La Paz",
          "Guía especializado"
        ],
        "includes": [
          "Alojamiento en La Paz y Uyuni con desayunos",
          "Excursión full day en vehículo 4x4 por el Salar de Uyuni e Isla Incahuasi",
          "City tour en La Paz con recorrido en teleférico",
          "Traslados aeropuerto - hotel - aeropuerto"
        ],
        "notIncludes": [
          "Tiquetes aéreos internacionales y vuelos internos",
          "Ingresos a parques o reservas no especificados",
          "Asistencia médica internacional"
        ],
        "importantNotes": [
          "Destino de gran altitud; te asesoramos con recomendaciones previas de aclimatación."
        ],
        "whatsappMessage": "Quiero recibir cotización para el paquete Bolivia: Salar de Uyuni y La Paz.",
        "sortOrder": 24
      },
      {
        "id": "sa-chl-01",
        "title": "Chile: Santiago y Viña del Mar",
        "destination": "Santiago, Valparaíso y Viña del Mar, Chile",
        "duration": "5 Días / 4 Noches",
        "businessLine": "southAmerica",
        "price": null,
        "priceLabel": "A consultar",
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80",
            "alt": "Santiago de Chile y costa del Pacífico"
          }
        ],
        "description": "Descubre la modernidad de Santiago rodeada por la Cordillera de los Andes, sus valles vitivinícolas y el encanto costero de Valparaíso y Viña del Mar.",
        "features": [
          "City Tour Santiago",
          "Viña del Mar y Valparaíso",
          "Opción Ruta del Vino"
        ],
        "includes": [
          "Alojamiento en hotel seleccionado en Santiago con desayuno diario",
          "Traslados aeropuerto - hotel - aeropuerto",
          "City tour por Santiago de Chile",
          "Excursión de día completo a Valparaíso y Viña del Mar"
        ],
        "notIncludes": [
          "Tiquetes aéreos internacionales",
          "Cenas, propinas y gastos personales",
          "Asistencia médica internacional"
        ],
        "importantNotes": [
          "Posibilidad de agregar extensión a centros de ski en temporada de invierno."
        ],
        "whatsappMessage": "Quiero recibir cotización para el paquete Chile: Santiago y Viña del Mar.",
        "sortOrder": 25
      },
      {
        "id": "loc-01",
        "title": "San Andrés Islas",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Mar de los 7 colores",
          "Vuelos",
          "Playa"
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento",
          "Alimentación según plan",
          "Traslados"
        ],
        "notIncludes": [
          "Tarjeta de turismo de San Andrés",
          "Tours ecológicos",
          "Gastos personales"
        ],
        "importantNotes": [
          "Pago de tarjeta de ingreso directo en el aeropuerto"
        ],
        "businessLine": "local",
        "priceLabel": "A consultar"
      },
      {
        "id": "loc-02",
        "title": "Cartagena Histórica",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1583344445353-8b77a760f38b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Ciudad Amurallada",
          "Playa",
          "Historia"
        ],
        "includes": [
          "Tiquetes",
          "Alojamiento",
          "Desayunos",
          "Traslados"
        ],
        "notIncludes": [
          "Excursiones a islas",
          "Alimentación completa",
          "Gastos no especificados"
        ],
        "importantNotes": [
          "Múltiples opciones de alojamiento disponibles"
        ],
        "businessLine": "local",
        "priceLabel": "A consultar"
      },
      {
        "id": "loc-03",
        "title": "Aventura en La Guajira",
        "price": null,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1549420847-f31f9fcbbcb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Desierto",
          "Cultura Wayuu",
          "Cabo de la Vela"
        ],
        "includes": [
          "Transporte local",
          "Alojamiento en ranchería/cabaña",
          "Alimentación típica",
          "Guía"
        ],
        "notIncludes": [
          "Tiquetes a Riohacha",
          "Artesanías",
          "Bebidas alcohólicas"
        ],
        "importantNotes": [
          "Destino de turismo de naturaleza y aventura"
        ],
        "businessLine": "local",
        "priceLabel": "A consultar"
      },
      {
        "id": "loc-04",
        "title": "Santa Marta",
        "destination": "Santa Marta, Magdalena",
        "duration": "4 Días / 3 Noches",
        "price": null,
        "priceLabel": "A consultar",
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=1000&q=80",
            "alt": "Playas de Santa Marta y Caribe Colombiano"
          }
        ],
        "description": "Disfruta la magia de la bahía más linda de América: playas cristalinas, atardeceres inolvidables, naturaleza en el Parque Tayrona e historia frente al mar Caribe.",
        "features": [
          "Playas del Caribe",
          "Parque Tayrona",
          "Familiar/Pareja"
        ],
        "includes": [
          "Tiquetes aéreos ida y regreso",
          "Alojamiento en hotel seleccionado",
          "Alimentación según plan elegido",
          "Traslados aeropuerto - hotel - aeropuerto",
          "Asistencia médica"
        ],
        "notIncludes": [
          "Excursiones opcionales (Tayrona, Playa Blanca o Minca)",
          "Gastos personales y servicios no especificados",
          "Propinas"
        ],
        "importantNotes": [
          "Fechas a demanda según disponibilidad aérea y hotelera",
          "Opciones de alojamiento en El Rodadero, Bello Horizonte y Centro Histórico"
        ],
        "businessLine": "local",
        "whatsappMessage": "Quiero recibir cotización para un paquete de viaje a Santa Marta."
      },
      {
        "id": "loc-05",
        "title": "Coveñas",
        "destination": "Coveñas, Sucre",
        "duration": "4 Días / 3 Noches",
        "price": null,
        "priceLabel": "A consultar",
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80",
            "alt": "Playas tranquilas de Coveñas"
          }
        ],
        "description": "Escápate a las aguas tranquilas y cálidas del Golfo de Morrosquillo. Ideal para descansar en familia, disfrutar gastronomía costeña y explorar las Islas de San Bernardo.",
        "features": [
          "Aguas tranquilas",
          "Plan Familiar",
          "Golfo de Morrosquillo"
        ],
        "includes": [
          "Alojamiento frente al mar o zona hotelera seleccionada",
          "Alimentación según plan elegido",
          "Traslados terrestres o aéreos según origen",
          "Asistencia médica"
        ],
        "notIncludes": [
          "Excursión en lancha a Islas de San Bernardo (opcional)",
          "Alimentación no descrita y gastos personales",
          "Propinas"
        ],
        "importantNotes": [
          "Salidas flexibles durante todo el año",
          "Tarifas sujetas a temporada y disponibilidad"
        ],
        "businessLine": "local",
        "whatsappMessage": "Quiero recibir cotización para un paquete de viaje a Coveñas."
      },,
      {
        "id": "mar-01",
        "title": "Japón: Temporada de Cerezos",
        "price": 8690,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1665706896821-319040b81753?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Tokio, Kioto, Osaka",
          "Guía Especializado",
          "26 Mar 2027"
        ],
        "includes": [
          "Vuelos internacionales",
          "Alojamiento Premium",
          "Desayunos",
          "Pases de tren alta velocidad",
          "Guía en español",
          "Entradas a monumentos"
        ],
        "notIncludes": [
          "Visado para Japón",
          "Almuerzos y cenas libres",
          "Gastos personales"
        ],
        "importantNotes": [
          "Salida confirmada: 26 de marzo de 2027",
          "Cupos extremadamente limitados",
          "Requiere visado"
        ],
        "businessLine": "margin"
      },
      {
        "id": "mar-02",
        "title": "Europa por Primera Vez",
        "price": 3390,
        "currency": "EUR",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Multidestino",
          "Circuito Guiado",
          "19 Mar 2027"
        ],
        "includes": [
          "Vuelos desde Bogotá",
          "Alojamiento turista superior",
          "Autocar de lujo",
          "Desayunos buffet",
          "Guía acompañante"
        ],
        "notIncludes": [
          "ETIAS (si aplica)",
          "Excursiones opcionales",
          "Tasas hoteleras locales"
        ],
        "importantNotes": [
          "Salida: 19 de marzo de 2027",
          "Itinerario abarca Madrid, París, Roma y más"
        ],
        "businessLine": "margin"
      },
      {
        "id": "mar-03",
        "title": "¡Viva Vietnam!",
        "price": 4790,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Asia Exótica",
          "Bahía de Halong",
          "05 Feb 2027"
        ],
        "includes": [
          "Vuelos",
          "Alojamiento con encanto",
          "Crucero por la Bahía de Halong",
          "Excursiones programadas",
          "Guías locales"
        ],
        "notIncludes": [
          "Trámite de visado",
          "Comidas no descritas",
          "Propinas para guías/choferes"
        ],
        "importantNotes": [
          "Salida: 05 de febrero de 2027",
          "Experiencia inmersiva en el sudeste asiático"
        ],
        "businessLine": "margin"
      },
      {
        "id": "mar-04",
        "title": "Egipto y Jordania",
        "price": 4351,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1539650116574-8efeb43e2b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Pirámides",
          "Petra",
          "18 Ene 2027"
        ],
        "includes": [
          "Vuelos",
          "Crucero por el Nilo",
          "Alojamiento superior",
          "Visado de entrada (gestionado)",
          "Todas las excursiones base",
          "Guía egiptólogo"
        ],
        "notIncludes": [
          "Propinas obligatorias a pagar en destino",
          "Bebidas en las comidas",
          "Paseos en camello"
        ],
        "importantNotes": [
          "Salida: 18 de enero de 2027",
          "Clima ideal en esa época del año"
        ],
        "businessLine": "margin"
      },
      {
        "id": "mar-05",
        "title": "Turquía con Crucero Islas Griegas",
        "price": 3890,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Estambul",
          "Capadocia",
          "Mar Egeo"
        ],
        "includes": [
          "Vuelos",
          "Circuito terrestre en Turquía",
          "Crucero con pensión completa",
          "Paquete de bebidas en crucero",
          "Alojamiento hoteles 4/5*"
        ],
        "notIncludes": [
          "Vuelo en globo (opcional)",
          "Excursiones en puertos griegos",
          "Propinas de crucero"
        ],
        "importantNotes": [
          "Fechas de salida según programación naviera"
        ],
        "businessLine": "margin"
      },
      {
        "id": "mar-06",
        "title": "Guatemala: Joyas Arqueológicas",
        "price": 2970,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Cultura Maya",
          "Tikal",
          "08 Feb 2027"
        ],
        "includes": [
          "Vuelos",
          "Alojamiento",
          "Transporte local",
          "Guía arqueológico",
          "Entradas a parques"
        ],
        "notIncludes": [
          "Comidas libres",
          "Gastos personales"
        ],
        "importantNotes": [
          "Salida: 08 de febrero de 2027"
        ],
        "businessLine": "margin"
      },
      {
        "id": "mar-07",
        "title": "Dubái: Lujo y Desierto",
        "destination": "Dubái, Emiratos Árabes Unidos",
        "duration": "7 Días / 6 Noches",
        "price": null,
        "priceLabel": "A consultar",
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
            "alt": "Horizonte de Dubái y Burj Khalifa"
          }
        ],
        "description": "Vive el contraste único entre la arquitectura futurista más impresionante del mundo, compras de primer nivel y una noche mágica entre las dunas del desierto árabe.",
        "features": [
          "Burj Khalifa",
          "Safari en el Desierto",
          "Dubái y Abu Dhabi"
        ],
        "includes": [
          "Alojamiento en hoteles seleccionados con desayuno diario",
          "Traslados aeropuerto - hotel - aeropuerto",
          "City tour panorámico por Dubái clásico y moderno",
          "Safari 4x4 en el desierto con cena BBQ y espectáculo",
          "Asistencia médica internacional"
        ],
        "notIncludes": [
          "Tiquetes aéreos internacionales (cotizables según fecha)",
          "Tourism Dirham Fee (pago directo en hotel)",
          "Excursiones opcionales y gastos personales"
        ],
        "importantNotes": [
          "Fechas flexibles y salidas grupales disponibles bajo consulta",
          "Te asesoramos con todos los requisitos migratorios vigentes para colombianos"
        ],
        "businessLine": "margin",
        "whatsappMessage": "Quiero recibir cotización para el paquete Dubái: Lujo y Desierto."
      },
      {
        "id": "mar-08",
        "title": "Marruecos",
        "price": 2890,
        "currency": "EUR",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Desierto de Sahara",
          "Medinas",
          "21 Ene 2027"
        ],
        "includes": [
          "Vuelos",
          "Alojamiento en Riads",
          "Campamento en el desierto",
          "Media pensión",
          "Transporte 4x4",
          "Guía"
        ],
        "notIncludes": [
          "Bebidas",
          "Almuerzos",
          "Propinas"
        ],
        "importantNotes": [
          "Salida: 21 de enero de 2027"
        ],
        "businessLine": "margin"
      },
      {
        "id": "mar-09",
        "title": "GP Fórmula 1 Miami 2027",
        "price": 2346,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1512759908851-f2f65f3eb175?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Experiencia F1",
          "Miami",
          "29 Abr - 03 May"
        ],
        "includes": [
          "Alojamiento 4 noches",
          "Entrada General Admission 3 días",
          "Seguro de viaje"
        ],
        "notIncludes": [
          "Tiquetes aéreos",
          "Upgrades a Tribuna/Paddock",
          "Traslados al circuito",
          "Alimentación"
        ],
        "importantNotes": [
          "Fechas: 29 abr al 03 may 2027",
          "Precios sujetos a variaciones del evento",
          "Requiere Visa Americana vigente"
        ],
        "businessLine": "margin"
      }
    ],

    offers: [
      {
        "id": "bf-eur-01",
        "title": "Europa: Madrid, París y Barcelona",
        "destination": "Francia y España",
        "duration": "11 Días / 10 Noches",
        "price": 8690000,
        "originalPrice": 9500000,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Vuelos",
          "Hospedaje",
          "Desayunos",
          "Guía",
          "Traslados",
          "Seguro médico"
        ],
        "notIncludes": [
          "Gastos personales"
        ],
        "importantNotes": [
          "Precio válido a partir de dos personas",
          "Reserva con $500.000",
          "Fechas disponibles: Abril 9, 15, 16, 22, 23, 29, 30 de 2027",
          "Válido hasta el 20 de noviembre"
        ],
        "whatsappMessage": "Quiero reservar la oferta Black Days a Europa (Madrid, París y BCN) por $8'690.000 COP.",
        "campaignTag": "Black Days",
        "validUntil": "2026-11-20T23:59:59-05:00"
      },
      {
        "id": "bf-adz-01",
        "title": "Navidad en el Caribe - San Andrés",
        "destination": "San Andrés, Colombia",
        "duration": "4 Días / 3 Noches",
        "price": 1753000,
        "originalPrice": 2100000,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Tiquetes aéreos (con LATAM)",
          "Artículo Personal",
          "Traslados en destino",
          "Alojamiento 3 noches",
          "Alimentación según plan",
          "Asistencia Médica",
          "Tour vuelta a la isla + acuario mágico y bahía"
        ],
        "notIncludes": [
          "Equipaje extra",
          "Tarjeta de ingreso a la isla",
          "Impuestos locales"
        ],
        "importantNotes": [
          "Salidas desde Bogotá",
          "Viaje: Diciembre 23 al 26",
          "Tarifa basada en Hotel Portofino Caribe, opciones PA, PAM y FULL disponibles (consultar)"
        ],
        "whatsappMessage": "Quiero información de la oferta Navidad en el Caribe (San Andrés) desde $1.753.000 COP.",
        "campaignTag": "Black Days",
        "validUntil": "2026-12-23T23:59:59-05:00"
      },
      {
        "id": "bf-dxb-01",
        "title": "Celebra Fin de Año - Dubái",
        "destination": "Dubái, EAU",
        "duration": "8 Días / 7 Noches",
        "price": 1795,
        "originalPrice": 2200,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Alojamiento 7 noches",
          "Desayunos",
          "Traslados",
          "Desert Safari con BBQ",
          "Tour Dubái y Abu Dhabi",
          "Cena Show Cruise Marina",
          "Cena Fin de Año",
          "Asistencia Médica",
          "Free Bancario"
        ],
        "notIncludes": [
          "Vuelos Internacionales",
          "Tourism Dirham Fee (pago en hotel)"
        ],
        "importantNotes": [
          "Fecha inicial: 27, 28 o 29 Diciembre",
          "Tarifa por persona en acomodación triple"
        ],
        "whatsappMessage": "Quiero reservar la oferta Celebra Fin de Año en Dubái por USD 1.795.",
        "campaignTag": "Black Days",
        "validUntil": "2026-12-27T23:59:59-05:00"
      },
      {
        "id": "bf-dom-01",
        "title": "Combinado Rep. Dominicana (Hodelpa + Emotions)",
        "destination": "Santo Domingo y Juan Dolio",
        "duration": "5 Días / 4 Noches",
        "price": 3690000,
        "originalPrice": 4200000,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Vuelos",
          "Estadía Hodelpa (Santo Domingo)",
          "Estadía Emotions",
          "Todo Incluido (All Inclusive)",
          "Seguro médico",
          "Traslados",
          "GRATIS: Cena en Nicolás de Ovando"
        ],
        "notIncludes": [
          "Gastos no especificados"
        ],
        "importantNotes": [
          "Salidas: 5 al 9 de enero 2027",
          "Tarifa en acomodación triple (doble: $3'790.000)",
          "Válido a partir de dos personas"
        ],
        "whatsappMessage": "Me interesa la oferta del Combinado República Dominicana (Hodelpa + Emotions) desde $3'690.000 COP.",
        "campaignTag": "Black Days",
        "validUntil": "2026-11-30T23:59:59-05:00"
      },
      {
        "id": "bf-dom-02",
        "title": "Combinado Punta Cana - Santo Domingo",
        "destination": "Santo Domingo y Punta Cana",
        "duration": "5 Días / 4 Noches",
        "price": 4290000,
        "originalPrice": 4800000,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Vuelos",
          "Estadía Hodelpa (Santo Domingo)",
          "Estadía Impressive (Punta Cana)",
          "Todo Incluido (All Inclusive)",
          "Seguro médico",
          "Traslados",
          "GRATIS: Cena en Nicolás de Ovando"
        ],
        "notIncludes": [
          "Gastos no especificados"
        ],
        "importantNotes": [
          "Salidas: 5 al 9 de enero 2027",
          "Tarifa en acomodación triple (doble: $4'390.000)",
          "Válido a partir de dos personas"
        ],
        "whatsappMessage": "Me interesa la oferta del Combinado Punta Cana - Santo Domingo desde $4'290.000 COP.",
        "campaignTag": "Black Days",
        "validUntil": "2026-11-30T23:59:59-05:00"
      },
      {
        "id": "bf-puj-01",
        "title": "Impressive Punta Cana",
        "destination": "Punta Cana, Rep. Dominicana",
        "duration": "4 Días / 3 Noches",
        "price": 2820000,
        "originalPrice": 3200000,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Vuelos",
          "Estadía en Impressive Punta Cana",
          "Todo incluido (All Inclusive)",
          "Seguro médico",
          "Traslados"
        ],
        "notIncludes": [
          "Gastos no especificados"
        ],
        "importantNotes": [
          "Temporada: Mayo y junio de 2027",
          "Tarifa en acomodación triple (doble: $2'890.000)",
          "Válido a partir de dos personas"
        ],
        "whatsappMessage": "Quiero reservar la oferta a Impressive Punta Cana desde $2'820.000 COP.",
        "campaignTag": "Black Days",
        "validUntil": "2026-11-30T23:59:59-05:00"
      },
      {
        "id": "bf-pop-01",
        "title": "Puerto Plata | Enero",
        "destination": "Puerto Plata, Rep. Dominicana",
        "duration": "4 Días / 3 Noches",
        "price": 2590000,
        "originalPrice": 3000000,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Vuelos",
          "Hospedaje",
          "Todo incluido (All Inclusive)",
          "Seguro médico",
          "Traslados"
        ],
        "notIncludes": [
          "Gastos no especificados"
        ],
        "importantNotes": [
          "Salidas: 22 al 25 de enero 2027",
          "Tarifa en acomodación triple (doble: $2'690.000)",
          "Válido a partir de dos personas"
        ],
        "whatsappMessage": "Quiero reservar la Promo a Puerto Plata desde $2'590.000 COP.",
        "campaignTag": "Promo",
        "validUntil": "2026-11-30T23:59:59-05:00"
      },
      {
        "id": "bf-jpn-01",
        "title": "Corea y Japón: El Alma de Oriente",
        "destination": "Corea del Sur y Japón",
        "duration": "14 Días / 11 Noches",
        "price": 6860,
        "originalPrice": 7500,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1665706896821-319040b81753?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Vuelos internacionales e internos",
          "Alojamiento y desayunos",
          "Traslados (inc. Myeondong)",
          "Tren Alta Velocidad",
          "Guía y panorámicas",
          "Asistencia médica (60k USD)"
        ],
        "notIncludes": [
          "Visados",
          "Comidas no descritas"
        ],
        "importantNotes": [
          "Salidas 2027: 18 jun-01 jul / 17 sep-30 sep",
          "Itinerario abarca 14 ciudades",
          "Tarifa por persona en acomodación triple"
        ],
        "whatsappMessage": "Solicito información de la oferta Corea y Japón: El Alma de Oriente desde USD 6.860.",
        "campaignTag": "Black Days",
        "validUntil": "2026-11-30T23:59:59-05:00"
      },
      {
        "id": "bf-thai-01",
        "title": "Tailandia - La Travesía del Dragón",
        "destination": "Tailandia y Estambul",
        "duration": "16 Días / 12 Noches",
        "price": 7182,
        "originalPrice": 8500,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento",
          "Alimentación según itinerario",
          "Traslados",
          "Guía local",
          "Asistencia médica",
          "eSIM"
        ],
        "notIncludes": [
          "Servicios no especificados"
        ],
        "importantNotes": [
          "Salidas desde Bogotá: 1 al 16 de diciembre 2026",
          "Precio total por pareja en acomodación doble",
          "50% OFF en porción terrestre 2do pasajero (ya aplicado)"
        ],
        "whatsappMessage": "Quiero la oferta de Tailandia con el 50% OFF en el segundo pasajero por USD 7.182.",
        "campaignTag": "50% OFF 2do Pax",
        "validUntil": "2026-11-27T23:59:59-05:00"
      },
      {
        "id": "bf-eur-02",
        "title": "Europa Fantástica (Desde Bogotá)",
        "destination": "Europa Occidental",
        "duration": "19 Días / 17 Noches",
        "price": 6746,
        "originalPrice": 7102,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento",
          "Alimentación itinerario",
          "Traslados",
          "Guía",
          "Asistencia médica",
          "eSIM"
        ],
        "notIncludes": [
          "Servicios no especificados"
        ],
        "importantNotes": [
          "Salidas 2027: Abril 2, 16, 23 y 30",
          "Precio por pareja en acomodación doble",
          "50% OFF en porción terrestre 2do pasajero (ya aplicado)"
        ],
        "whatsappMessage": "Me interesa la oferta Europa Fantástica en pareja por USD 6.746.",
        "campaignTag": "50% OFF 2do Pax",
        "validUntil": "2026-11-27T23:59:59-05:00"
      },
      {
        "id": "bf-eur-03",
        "title": "Europa Vibrante (Desde Bogotá)",
        "destination": "Europa Occidental",
        "duration": "17 Días / 15 Noches",
        "price": 6594,
        "originalPrice": 6942,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento",
          "Alimentación itinerario",
          "Traslados",
          "Guía",
          "Asistencia médica",
          "eSIM"
        ],
        "notIncludes": [
          "Servicios no especificados"
        ],
        "importantNotes": [
          "Salidas 2027: Abril 9 y 23",
          "Precio por pareja en acomodación doble",
          "50% OFF en porción terrestre 2do pasajero (ya aplicado)"
        ],
        "whatsappMessage": "Me interesa la oferta Europa Vibrante (Bogotá) en pareja por USD 6.594.",
        "campaignTag": "50% OFF 2do Pax",
        "validUntil": "2026-11-27T23:59:59-05:00"
      },
      {
        "id": "bf-eur-04",
        "title": "Latidos del Mar - Europa con Minicrucero",
        "destination": "Europa y Mar Egeo",
        "duration": "17 Días / 15 Noches",
        "price": 6784,
        "originalPrice": 7142,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento",
          "Alimentación itinerario",
          "Traslados",
          "Guía",
          "Asistencia médica",
          "eSIM"
        ],
        "notIncludes": [
          "Servicios no especificados"
        ],
        "importantNotes": [
          "Salidas desde Bogotá: Abril 9 y 23 de 2027",
          "Precio por pareja en acomodación doble",
          "50% OFF en porción terrestre 2do pasajero (ya aplicado)"
        ],
        "whatsappMessage": "Me interesa Latidos del Mar - Europa con Minicrucero por USD 6.784.",
        "campaignTag": "50% OFF 2do Pax",
        "validUntil": "2026-11-27T23:59:59-05:00"
      },
      {
        "id": "bf-eur-05",
        "title": "Europa Vibrante (Desde Medellín)",
        "destination": "Europa Occidental",
        "duration": "17 Días / 15 Noches",
        "price": 6594,
        "originalPrice": 6942,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento",
          "Alimentación itinerario",
          "Traslados",
          "Guía",
          "Asistencia médica",
          "eSIM"
        ],
        "notIncludes": [
          "Servicios no especificados"
        ],
        "importantNotes": [
          "Salidas desde Medellín: Abril 2, 16 y 30 de 2027",
          "Precio por pareja en acomodación doble",
          "50% OFF en porción terrestre 2do pasajero (ya aplicado)"
        ],
        "whatsappMessage": "Me interesa la oferta Europa Vibrante (Medellín) en pareja por USD 6.594.",
        "campaignTag": "50% OFF 2do Pax",
        "validUntil": "2026-11-27T23:59:59-05:00"
      },
      {
        "id": "bf-eur-06",
        "title": "Europa Esencial (Desde Medellín)",
        "destination": "Europa Occidental",
        "duration": "17 Días / 15 Noches",
        "price": 6442,
        "originalPrice": 6782,
        "currency": "USD",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "includes": [
          "Tiquetes aéreos",
          "Alojamiento",
          "Alimentación itinerario",
          "Traslados",
          "Guía",
          "Asistencia médica",
          "eSIM"
        ],
        "notIncludes": [
          "Servicios no especificados"
        ],
        "importantNotes": [
          "Salidas desde Medellín: Abril 2, 16 y 30 de 2027",
          "Precio por pareja en acomodación doble",
          "50% OFF en porción terrestre 2do pasajero (ya aplicado)"
        ],
        "whatsappMessage": "Me interesa la oferta Europa Esencial (Medellín) en pareja por USD 6.442.",
        "campaignTag": "50% OFF 2do Pax",
        "validUntil": "2026-11-27T23:59:59-05:00"
      }
    ],

    // Decisión D7: Ráquira (aw-01, published) + Cancún y Dubái (draft)
    aquawoman_retreats: [
      {
        "id": "aw-01",
        "title": "Retiro: El Legado de Ser Mujer",
        "destination": "Ráquira, Boyacá",
        "duration": "3 Dias / 2 Noches",
        "price": 1999000,
        "currency": "COP",
        "status": "published",
        "isActive": true,
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80"
          },
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1687436874774-fa0d4616bec9?auto=format&fit=crop&w=1000&q=80"
          },
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1687436874174-977fdd9e2cb8?auto=format&fit=crop&w=1000&q=80"
          },
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "features": [
          "Bienestar",
          "Conexión Femenina",
          "Ráquira, 3 Días"
        ],
        "includes": [
          "Alojamiento en eco-hotel boutique exclusivo",
          "Alimentación consciente (Todas las comidas)",
          "Talleres de sanación de linaje y empoderamiento",
          "Kit de bienvenida Aqua Woman",
          "Transporte privado ida y regreso desde Bogotá"
        ],
        "notIncludes": [
          "Terapias individuales extra",
          "Gastos personales"
        ],
        "importantNotes": [
          "Exclusivo para mujeres",
          "Cupos limitados a 15 personas"
        ],
        "description": "Un fin de semana diseñado para soltar el burnout, reconectar con la hermandad femenina y sanar desde la raíz en un entorno de paz absoluta.",
        "itinerary": [
          {
            "day": "Día 1",
            "title": "Conexión",
            "desc": "Llegada, círculo de apertura y ritual de intención para soltar las cargas."
          },
          {
            "day": "Día 2",
            "title": "Sanación",
            "desc": "Talleres profundos, inmersión en la naturaleza y ceremonia de fuego."
          },
          {
            "day": "Día 3",
            "title": "Renacer",
            "desc": "Integración, cierre de hermandad y retorno con energía renovada."
          }
        ],
        "retreatTheme": "El Legado de Ser Mujer",
        "spotsLabel": "Cupos limitados a 15",
        "sortOrder": 1,
        "departureDates": [],
        "whatsappMessage": "Quiero más información sobre el retiro \"Retiro: El Legado de Ser Mujer\" de Aqua Woman."
      },
      {
        id: 'aw-cancun',
        title: 'Aqua Woman Experience Cancún',
        destination: 'Cancún, México',
        duration: 'Por definir',
        price: null,
        priceLabel: 'A consultar',
        currency: 'USD',
        status: 'draft',
        isActive: true,
        retreatTheme: 'Caribe, bienestar y comunidad femenina',
        departureDates: [],
        spotsLabel: 'Próximamente',
        media: [],
        description: 'Borrador inicial del retiro internacional Aqua Woman en Cancún.',
        features: [],
        includes: [],
        notIncludes: [],
        importantNotes: [],
        itinerary: [],
        whatsappMessage:
          'Quiero información prioritaria sobre Aqua Woman Experience Cancún.',
        sortOrder: 2,
      },
      {
        id: 'aw-dubai',
        title: 'Aqua Woman Experience Dubái',
        destination: 'Dubái, Emiratos Árabes Unidos',
        duration: 'Por definir',
        price: null,
        priceLabel: 'A consultar',
        currency: 'USD',
        status: 'draft',
        isActive: true,
        retreatTheme: 'Lujo, cultura y empoderamiento en Oriente Medio',
        departureDates: [],
        spotsLabel: 'Próximamente',
        media: [],
        description: 'Borrador inicial de la expedición femenina Aqua Woman en Dubái.',
        features: [],
        includes: [],
        notIncludes: [],
        importantNotes: [],
        itinerary: [],
        whatsappMessage:
          'Quiero información prioritaria sobre Aqua Woman Experience Dubái.',
        sortOrder: 3,
      },
    ],

    // Decisión D7: 3 servicios publicados
    services: [
      {
        id: 'svc-visas',
        title: 'Gestión y Asesoría de Visas',
        summary:
          'Acompañamiento integral para trámites de visa de Estados Unidos y Espacio Schengen.',
        description:
          'Servicio especializado de asesoría migratoria para viajeros colombianos. Incluye diagnóstico de perfil, organización documental, gestión de formularios y citas, y entrenamiento personalizado para la entrevista consular. Nota legal: la aprobación o negación de la visa es decisión exclusiva de la autoridad consular correspondiente.',
        icon: 'visa',
        ctaLabel: 'Solicitar asesoría de visa',
        price: null,
        priceLabel: 'A consultar',
        currency: 'COP',
        status: 'published',
        isActive: true,
        media: [],
        features: [
          'Diagnóstico personalizado de perfil del solicitante',
          'Gestión y revisión documental (EE.UU. y Espacio Schengen)',
          'Programación de citas y seguimiento de trámites',
          'Entrenamiento práctico para entrevista consular',
        ],
        includes: [
          'Evaluación de perfil y requisitos',
          'Diligenciamiento y revisión de formularios',
          'Preparación para entrevista consular',
        ],
        notIncludes: [
          'Tasas consulares oficiales',
          'Garantía de aprobación consular',
        ],
        importantNotes: [
          'La aprobación de cualquier visa es facultad exclusiva de la embajada o consulado correspondiente.',
        ],
        whatsappMessage:
          'Quiero asesoría para el trámite de mi visa (EE.UU. o Espacio Schengen).',
        sortOrder: 1,
      },
      {
        id: 'svc-asistencia',
        title: 'Asistencia Integral y Médica al Viajero',
        summary:
          'Respaldo médico 24/7, hospitalización, protección de equipaje y telemedicina en tu viaje.',
        description:
          'Viaja protegido ante imprevistos médicos o logísticos en destinos nacionales e internacionales. Coberturas diseñadas según tu destino y duración del viaje, con opciones sin deducibles y soporte continuo 24/7.',
        icon: 'medical',
        ctaLabel: 'Cotizar asistencia al viajero',
        price: null,
        priceLabel: 'Según plan y destino',
        currency: 'COP',
        status: 'published',
        isActive: true,
        media: [],
        features: [
          'Atención médica inmediata ante emergencias',
          'Hospitalización, cirugías, medicamentos y odontología de urgencia',
          'Traslados sanitarios, ambulancias y repatriación',
          'Protección y localización de equipaje',
          'Cobertura sin deducibles según plan elegido',
          'Telemedicina y soporte 24/7 en español',
        ],
        includes: [
          'Asistencia médica y hospitalaria según tope del plan',
          'Telemedicina y central de emergencias 24/7',
          'Cobertura de equipaje y traslados sanitarios',
        ],
        notIncludes: [
          'Condiciones preexistentes fuera de la cobertura contratada',
        ],
        importantNotes: [
          'Las coberturas exactas y ausencia de deducibles dependen del plan seleccionado al momento de la emisión.',
        ],
        whatsappMessage:
          'Quiero cotizar una Asistencia Integral y Médica al Viajero para mi próximo viaje.',
        sortOrder: 2,
      },
      {
        id: 'svc-sim',
        title: 'Conectividad Global - SIM Card Internacional',
        summary:
          'SIM Cards internacionales listas para usar con datos a medida y sin costos de roaming.',
        description:
          'Mantente conectado desde que aterrizas con nuestras SIM Cards internacionales listas para usar. Planes de datos a la medida de tu itinerario con llamadas locales, llamadas a Colombia y SMS ilimitados sin cargos sorpresa de roaming.',
        icon: 'sim',
        ctaLabel: 'Cotizar SIM internacional',
        price: null,
        priceLabel: 'Según destino y días',
        currency: 'COP',
        status: 'published',
        isActive: true,
        media: [],
        features: [
          'Listas para usar desde el aterrizaje',
          'Planes de datos a medida por destino y duración',
          'Llamadas locales, llamadas a Colombia y SMS ilimitados',
          'Sin tarifas ni sorpresas de roaming internacional',
        ],
        includes: [
          'SIM Card internacional configurada',
          'Soporte de activación previa al viaje',
        ],
        notIncludes: [
          'Equipos celulares con bandas bloqueadas por operador',
        ],
        importantNotes: [
          'Verifica que tu teléfono cuente con bandas abiertas antes del viaje.',
        ],
        whatsappMessage:
          'Quiero cotizar una SIM Card Internacional para mantenerme conectado en mi viaje.',
        sortOrder: 3,
      },
    ],

    banners: [
      {
        "id": "banner-mar-01",
        "title": "Japón: Temporada de Cerezos",
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1665706896821-319040b81753?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "ctaLabel": "Ver Detalles / Cotizar",
        "ctaType": "product",
        "ctaTarget": "destinations/mar-01",
        "priceHint": "",
        "status": "published",
        "isActive": true,
        "sortOrder": 1
      },
      {
        "id": "banner-vol-01",
        "title": "Punta Cana Todo Incluido",
        "media": [
          {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "ctaLabel": "Ver Detalles / Cotizar",
        "ctaType": "product",
        "ctaTarget": "destinations/vol-01",
        "priceHint": "A consultar",
        "status": "published",
        "isActive": true,
        "sortOrder": 2
      },
      {
        "id": "banner-mar-09",
        "title": "GP Fórmula 1 Miami 2027",
        "media": [
          {
            "type": "image",
            "url": "https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "ctaLabel": "Ver Detalles / Cotizar",
        "ctaType": "product",
        "ctaTarget": "destinations/mar-09",
        "priceHint": "",
        "status": "published",
        "isActive": true,
        "sortOrder": 3
      }
    ],

    settings: {
      promo_button: {
        id: 'promo_button',
        label: 'Black Friday Ofertas',
        isVisible: true,
        targetPath: '/ofertas',
        palette: {
          preset: 'amber',
          bgFrom: '#F59E0B',
          bgTo: '#EAB308',
          text: '#0F172A',
          glow: '#F59E0B',
        },
        pulse: true,
        updatedBy: 'seed-v3',
      },
      aquawoman_page: {
        id: 'aquawoman_page',
        heroTitle: 'Un espacio seguro para reconectar con tu esencia',
        heroSubtitle:
          'Cero carga mental. Viajes y retiros diseñados exclusivamente para mujeres que buscan sanar, soltar y transformar su mundo.',
        instagramUrl: 'https://www.instagram.com/aquawomanexperience/',
      },
      reviews: {
        id: 'reviews',
        provider: 'google',
        widgetId: '',
        isVisible: false,
      },
    },
  },
};

/**
 * SHIM LEGACY TEMPORAL (se elimina en Sprint 4).
 * Reproduce la forma V2 (strings de precio, image, discountPrice) para Home.jsx, BlackFriday.jsx y AquaWoman.jsx.
 */
const fmtNum = (n) => new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(n);

siteConfig.catalog = siteConfig.seed.destinations.map((item) => ({
  ...item,
  image: item.media?.[0]?.url || '',
  price: item.price == null ? item.priceLabel || 'A consultar' : `${fmtNum(item.price)} ${item.currency}`,
}));

siteConfig.offers = {
  campaignName: 'Black Days',
  isActive: true,
  deals: siteConfig.seed.offers.map((offer) => ({
    ...offer,
    image: offer.media?.[0]?.url || '',
    discountPrice: offer.price == null ? '' : fmtNum(offer.price),
    originalPrice: offer.originalPrice == null ? '' : fmtNum(offer.originalPrice),
  })),
};

const raquiraSeed = siteConfig.seed.aquawoman_retreats.find((r) => r.id === 'aw-01');
siteConfig.aquaWomanData = {
  heroTitle: siteConfig.seed.settings.aquawoman_page.heroTitle,
  heroSubtitle: siteConfig.seed.settings.aquawoman_page.heroSubtitle,
  retreat: raquiraSeed
    ? {
        ...raquiraSeed,
        location: raquiraSeed.destination,
        price: raquiraSeed.price == null ? raquiraSeed.priceLabel || 'A consultar' : fmtNum(raquiraSeed.price),
        gallery: (raquiraSeed.media || []).map((m) => m.url),
      }
    : null,
};