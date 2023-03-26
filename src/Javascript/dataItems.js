const cyberItem = "Cyber Item",
  steamPunk = "Steampunk",
  magico = "Mágico";

export const cyberPunkItems = [

  {
    nombre: "Analizador GeoAmbiental ",
    tipo: cyberItem,
    descripcion: "Dron de reconocimiento",
    efecto: "+2 supervivencia, +3 Orientarse. Cargado tiene 1 semana de autonomía. HP 60",
    rareza: "B",
    costo: 3200,
    precio:8000
  },
  {
    nombre: "Armor sónica Abdómen",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800,
    precio:7000
  },
  {
    nombre: "Armor sónica Brazo Derecho",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800,
    precio:7000
  },
  {
    nombre: "Armor sónica Brazo Izquierdo",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800,
    precio:7000
  },
  {
    nombre: "Armor sónica casco",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "S",
    costo: 4667,
    precio:7000
  },
  {
    nombre: "Armor sónica Pecho",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "A",
    costo: 3500,
    precio:7000
  },
  {
    nombre: "Armor sónica Pierna Izquierda",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800,
    precio:7000
  },
  {
    nombre: "Armor sónica Pierna Derecha",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800,
    precio:7000
  },

  {
    nombre: "Astra Style-36",
    tipo: cyberItem,
    descripcion: "Pistola Ligera 6 balas",
    efecto: "Daño 25+2D4 / 2 ros TC (dificultad 15 x ro) / +3 Arma DIstancia",
    rareza: "D",
    costo: 857,
    precio:3000
  },
  {
    nombre: "Avenger",
    tipo: cyberItem,
    descripcion: "Pistola Media 8 balas",
    efecto: "Daño 30+2D4 / 2 ros TC (dificultad 12 x ro) / +2 Arma DIstancia",
    rareza: "c",
    costo: 2286,
    precio:8000
  },

  {
    nombre: "BioHormonal",
    tipo: cyberItem,
    descripcion: "Perfume",
    efecto: "Durante 1TL +6 seducir",
    rareza: "C",
    costo: 200,
    precio:700
  },
  {
    nombre: "Bomba de humo",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Permite el sigilo en un radio de 5M.",
    rareza: "D",
    costo: 571,
    precio:2000
  },
  {
    nombre: "Bomba de luz",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Los cercanos que la vean sufren una penalización en movimientos de -1D10 (cada uno ra el suyo) por 1D3 tc.",
    rareza: "D",
    costo: 1286,
    precio:4500
  },
  {
    nombre: "Chadran Jungle Reaper",
    tipo: null,
    descripcion: "Ametralladora Pesada (30 balas)",
    efecto: "Daño 38+2D10 / 3 ros TC (dificultad 25 x ro) / -3 Arma Distancia /Ráfaga 1D20",
    rareza: "S",
    costo: 15333,
    precio:23000
  },

  {
    nombre: "Collar de detención",
    tipo: cyberItem,
    descripcion: "Genera Descargas",
    efecto: "",
    rareza: "",
    costo: 3600,
    precio:9000
  },
  {
    nombre: "Combat Magnun",
    tipo: cyberItem,
    descripcion: "Pistola Media (6 balas)",
    efecto: "",
    rareza: "",
    costo: 4400,
    precio:11000
  },
  {
    nombre: "Cyber Arco",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 6500,
    precio:13000
  },
  {
    nombre: "Cinturon AntiG",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(+2 DES) x 1D8+1 TC. Para volver usarse debe tener contacto con el sol 1TL.",
    rareza: "B",
    costo: 3500,
    precio:13000
  },
  {
    nombre: "Chip arma inteligente",
    tipo: cyberItem,
    descripcion: "Ayuda a la precisión",
    efecto: "Arma Dist +3, requiere una cirugía leve",
    rareza: "C",
    costo: 2286,
    precio:8000
  },
  {
    nombre: "Columna de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Posee 4 slots para diferentes Alquimias y con un pensamiento el usuario se aplica las que desee en medio turno. Son muy llamativas y con un golpe las rompen. Requiere cirugía mayor",
    rareza: "A",
    costo: 7500,
    precio:15000
  },
  {
    nombre: "Constitution Deluge",
    tipo: cyberItem,
    descripcion: "Lanza Granadas (8 granadas)",
    efecto: "Daño 45+3D6 / 1 ro TC (dificultad 40 daño %100, 35 %75 daño, 30 50% daño, 25 25% daño) / -3 Arma Distancia",
    rareza: "S",
    costo: 19333,
    precio:29000
  },
  {
    nombre: "Cyber Esqueleto",
    tipo: cyberItem,
    descripcion: "1D8 para ver la parte, si 8 elige",
    efecto: "Armor +10 la parte y suma +1D8 FUE. Si de un golpe le hacen 40p revienta. Destrezas -1",
    rareza: "S",
    costo: 8667,
    precio:13000
  },
  {
    nombre: "Cyber látigo",
    tipo: cyberItem,
    descripcion: "Látigo disparado de muñeca",
    efecto: "Dispara a Lanzar +5, FUE 35p",
    rareza: "B",
    costo: 3600,
    precio:9000
  },
  {
    nombre: "Cyber Mano",
    tipo: cyberItem,
    descripcion: "Mano muluso",
    efecto: "FUE +3D, ene lintena, 5 ros de 30+2D6, 5 dedos bomba (30+6D6), aerosol paralizante (-10 mov x 1D3 tc), Ganzúa (+3 abrir cerradura)",
    rareza: "B",
    costo: 8800,
    precio:22000
  },
  {
    nombre: "Cyber Terminal",
    tipo: cyberItem,
    descripcion: "Medio de comunicación",
    efecto: "Conecta con otras cyberterminales en un radio de 100-150 km. Cargada ene 1tl de autonomía",
    rareza: "C",
    costo: 3143,
    precio:11000
  },
  {
    nombre: "CyberCam EX3",
    tipo: cyberItem,
    descripcion: "Analiza en vivo al enemigo",
    efecto: "Cada turno que hayas pasado combaendo contra un rival te da a dar un bonificador de (+1D3) en atacar o esquivar. Max +6. HP=50",
    rareza: "S",
    costo: 14667,
    precio:22000
  },
  {
    nombre: "CyberConmocion",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Al recibir 20 o más puntos de daño suelta una descarga eléctrica que causa 5d8 a todos en un radio de 3x3 metros, solo una vez por día. Requiere cirugía mayor",
    rareza: "A",
    costo: 8000,
    precio:16000
  },
  {
    nombre: "Cyberimplante Brazo Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500,
    precio:15000
  },
  {
    nombre: "Cyberimplante Brazo Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500,
    precio:15000
  },
  {
    nombre: "Cyberimplante Brazo Der",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500,
    precio:15000
  },
  {
    nombre: "Cyberimplante Pierna Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500,
    precio:15000
  },
  {
    nombre: "Cyberimplante Pierna Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500,
    precio:15000
  },
  {
    nombre: "Cybrer Escudo Retractil",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupa T1, se despliega desde un brazo, da +3 al bloqueo y ene 80Hp, que se pueden ir regenerando con Reparar 30 10hp con 50 de chatarra.",
    rareza: "A",
    costo: 6000,
    precio:12000
  },
  {
    nombre: "Czar Skorpion",
    tipo: cyberItem,
    descripcion: "Ametralladora ligera (25 balas)",
    efecto: "Daño 25+2D4 / 4 ros TC (dificultad 15 x ro) / +3 Arma DIstancia/ Ráfaga 1D20+6",
    rareza: "A",
    costo: 9500,
    precio:19000
  },
  {
    nombre: "Daga de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armaduras ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 7 // +7 // 200hp // Bonif +2 //",
    rareza: "B",
    costo: 1800,
    precio:4500
  },
  {
    nombre: "Dai Lung Cybermag",
    tipo: cyberItem,
    descripcion: "Pistola Ligera (9 balas)",
    efecto: "Daño 30+2D4 / 2 ros TC (dificultad 18 x ro) / +2 Arma Distancia",
    rareza: "C",
    costo: 1714,
    precio:6000
  },
  {
    nombre: "Detector de radiación/enfermedades",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Disposivo autónomo solar (conque 1TL le de sol funciona todo el día) que avisa los porcentajes de enfermedades o radiaciones cercanos, configurable para que suene alertando o no haga ningún ruido para mayor discreción. Pequeña pantalla usualmente en el antebrazo. ",
    rareza: "C",
    costo: 2000,
    precio:7000
  },
  {
    nombre: "Droide Médico",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Medicina +8 o puede cargarse hasta con 30% de boquín y curar con una rada de 20. (es más lento que una persona, 3TC una curación rápida).",
    rareza: "A",
    costo: 6000,
    precio:12000
  },
  {
    nombre: "Drug Dealer",
    tipo: cyberItem,
    descripcion: "Implante de uso único",
    efecto: "Cuando caes inconciente por HP te cura 4D6, +3 Fortaleza, +2 Destreza por 1D4+2 tc. Luego perdés 1 Espíritu",
    rareza: "A",
    costo: 3000,
    precio:6000
  },
  {
    nombre: "Espada de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armaduras ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 12 // +11 // 70hp // Bonif +4 //",
    rareza: "A",
    costo: 4750,
    precio:9500
  },
  {
    nombre: "FlashHand",
    tipo: cyberItem,
    descripcion: "Luz aturdidora bajo muñeca",
    efecto: "Los cercanos que la vean sufren una penalización en movimientos de -1D10 (cada uno ra el suyo) por 1D3 tc",
    rareza: "D",
    costo: 1429,
    precio:5000
  },
  {
    nombre: "Founder 90001",
    tipo: cyberItem,
    descripcion: "Rastreador tecnológico",
    efecto: "Encuentra CUALQUIER item CP en 10m a la redonda (si por alguna razón mágica está oculto no). 2 turnos quieto",
    rareza: "D",
    costo: 2857,
    precio:10000
  }, {
    nombre: "Granada",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Explosión 40+3D6",
    rareza: "B",
    costo: 1800,
    precio:4500
  },
  {
    nombre: "Granada de pulso",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Toda la tecnología CP deja de funcionar en un radio de 5M, durante 1D4+1 TC",
    rareza: "A",
    costo: 3250,
    precio:6500
  },
  {
    nombre: "Guadaña de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armadura no mágica ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 10 // +11 // 330hp // Bonif +4 //",
    rareza: "S",
    costo: 9333,
    precio:14000
  },
  {
    nombre: "Hacha de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armaduras ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 12 // +14 // 400hp // Bonif +2 /",
    rareza: "A",
    costo: 5500,
    precio:11000
  },
  {
    nombre: "Hammer FIST",
    tipo: cyberItem,
    descripcion: "Módulo de ataque propulsado",
    efecto: "Carga 1tc, el próximo golpe a mano limpia tendrá +4 Pelea +8D6 daño. HP=40",
    rareza: "C",
    costo: 4000,
    precio:14000
  },
  {
    nombre: "HeadGear",
    tipo: cyberItem,
    descripcion: "Casco para hackear ",
    efecto: "Tiradas tecnológicas +4, +8pt RES",
    rareza: "B",
    costo: 3600,
    precio:9000
  },
  {
    nombre: "Heavy SMG",
    tipo: cyberItem,
    descripcion: "Ametralladora Media (30 balas)",
    efecto: "Daño 30+1D10 / 4 ros TC (dificultad 20 x ro) / -1 Arma Distancia /Ráfaga 2D20",
    rareza: "A",
    costo: 10500,
    precio: 21000},
  {
    nombre: "Holo Academycs",
    tipo: cyberItem,
    descripcion: "Sistema holográfico aprendizaje ",
    efecto: "Se puede usar en party. +3 Aprendizaje, +3 Enseñanza. Cargado ene 1tl de autonomía",
    rareza: "C",
    costo: 2857,
    precio:10000
  },
  {
    nombre: "Holo Clothes",
    tipo: cyberItem,
    descripcion: "Ocupa 1 equipamiento magic",
    efecto: "Los cambios de temperatura te afectan 50% menos. Tenés 40% de que Alquimias y enferemedades no te afecten.",
    rareza: "B",
    costo: 5600,
    precio:14000
  },
  {
    nombre: "Holo Proyector",
    tipo: cyberItem,
    descripcion: "Crea una pantalla holográfica",
    efecto: "Crea una copia holográfica tuya para evitar un ataque sorpresivo.",
    rareza: "C",
    costo: 571,
    precio:2000
  },
  {
    nombre: "Hydro Subsidium",
    tipo: cyberItem,
    descripcion: "Traje de buzo avanzado",
    efecto: "Puede soportar profundidades alsimas, fríos bajos y hasta un TL sin salir a la superficie",
    rareza: "B",
    costo: 6000,
    precio:15000
  },
  {
    nombre: "Infrareloj Datatel",
    tipo: cyberItem,
    descripcion: "Localiza cosas",
    efecto: "Siempre que res por LOOT hacé 2 radas y quedate con tu favorita",
    rareza: "A",
    costo: 3500,
    precio:7000
  },
  {
    nombre: "Kan-Eda 4cm Rail Cannon",
    tipo: cyberItem,
    descripcion: "Rifle Láser (1 Tiro)",
    efecto: "Daño 50+2D10 / rayo constante permite re lanzar con -6 (+2xlvl) para golpear otra parte u otro PJ / -4 Arma distancia / 1 TC recargar disparos",
    rareza: "S",
    costo: 22000,
    precio:33000
  },
  {
    nombre: "Lanza de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "13 // +15 // 80hp // Bonif +4 // al cortar traspasa cualquier armadura no mágica ",
    rareza: "S",
    costo: 8000,
    precio:12000
  },
  {
    nombre: "Latom Shin-RA",
    tipo: cyberItem,
    descripcion: "Lanzallamas (1D4+3 TC)",
    efecto: "Daño 20+2D6 / Este daño va a 1D6 locaciones al mismo empo/ 50% de prolongarse otro TC, -20% por c/TC que pase /-3 Arma Dist.",
    rareza: "A",
    costo: 10000,
    precio:20000
  },
  {
    nombre: "Lector de magia agresiva (lentes)",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Le permite al usuario ver los efectos invisibles y tratar de esquivarlos",
    rareza: "S",
    costo: 7333,
    precio:11000
  },
  {
    nombre: "Log Pose",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Set de 2 Brújulas digitales con diseño de Radar, cada una marca hacia dónde está la otra. Disposivo autónomo solar (conque 1TL le de sol funciona todo el día)",
    rareza: "A",
    costo: 3500,
    precio:7000
  },
  {
    nombre: "MedicGear Abs+Pecho",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "S",
    costo: 6667,
    precio:10000
  },
  {
    nombre: "MedicGear Brazos",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "A",
    costo: 5000,
    precio:10000
  },
  {
    nombre: "MedicGear Casco",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "A",
    costo: 3000,
    precio:6000
  },
  {
    nombre: "MedicGear Piernas",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "A",
    costo: 5000,
    precio:10000
  },
  {
    nombre: "Meta Warhammer",
    tipo: cyberItem,
    descripcion: "Shotgun (8 balas)",
    efecto: "Distancia Daño 35+1D12/ cerca Daño 35+2D12 / 2 ros TC (dif a distancia 35 x ro, cerca 15) / -5 Arma Distancia",
    rareza: "S",
    costo: 16667,
    precio:25000
  },
  {
    nombre: "MiKoto Casco Omega",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Casco al que se le pueden comprar chips de mejoras en cualquier mercader, da +6 a RES si se rompe de golpes los upgrades se salvan, tirada de Tecnología 20. UPGRADES: $4000. NightVision $5000 // Purificador de aire $6000 // Percibir +3 $8000 // Rastrear +4 $8000 // Senr magia +3 $8000 //Reconocimiento de Bountys por rostro $5000 // Análisis facial Empáco +3 $8000 // Filmación úlmos 15 min $6000 // Apertura sombrilla para evitar lluvias $3000 // Tasación +4 $7000 // Nulifica el efecto de las bombas de humo o luz $5000 ",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "MiKoto Chip",
    tipo: cyberItem,
    descripcion: "Detector de mentiras",
    efecto: "Empático +4",
    rareza: "A",
    costo: 4000,
    precio:8000
  },
  {
    nombre: "MiKoto Controlador",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Brazalete autónomo solar (conque 1TL le de sol funciona todo el día) que controla las pulsaciones y ritmos cardíacos. Cuando el usario se altera le dá una pequeña descarga de 1Hp en cada parte del cuerpo y le permite rar autocontrol+8 para calmarse",
    rareza: "C",
    costo: 1714,
    precio:6000
  }, {
    nombre: "MiKoto HoloLens",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Permite marcar a un objevo y da Descubrir +5 para encontrarlo si se esconde o mueve. Nulifica el efecto de las bombas de humo o luz.",
    rareza: "A",
    costo: 4150,
    precio:8300
  },
  {
    nombre: "MiKoto Ignis",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ideal para viajeros, un droide que una vez al día cocina o te ayuda a cocinar con +8 en el tipo de comida que desees, es a energía solar",
    rareza: "B",
    costo: 3600,
    precio:9000
  },
  {
    nombre: "MiKoto Opcs",
    tipo: cyberItem,
    descripcion: "Ojos ampliados",
    efecto: "Esquivar +1, Descubrir +3, Conducir +2, Lanzar +2, Magia -6. Requiere una operación media (un solo ojo no tiene efectos, todo da +1 por LVL usuario)",
    rareza: "A",
    costo: 7500,
    precio:15000
  }, {
    nombre: "MiKoto Scanner",
    tipo: cyberItem,
    descripcion: "Lector de ondas mágicas",
    efecto: "Magia +2, sabe qué % consume cada O-Part tras verla, intenta explicar lo que hace un O-Part en una palabra (3 usos diarios)",
    rareza: "A",
    costo: 6500,
    precio:13000
  },
  {
    nombre: "MiKoto shield",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupa T5, da +7 al bloqueo, -2 Destreza, y tiene 110Hp, que se pueden ir regenerando con Reparar 30 10hp con 70 de chatarra. Los daños por disparos de 34 o menos simplemente no pasan. Se puede Lanzar con Mínimo de FUE 8 y suma +10 de daño lanzar, como tiene giroscopio y estabilizador puede volver o quedarse de pie para servir como cobertura en un roteo. Como uso único se puede activar su autodetonación de 0 a 15 segundos explotando en un daño de área de 40+3D8.",
    rareza: "S",
    costo: 10667,
    precio:16000
  },
  {
    nombre: "Militech M97",
    tipo: cyberItem,
    descripcion: "Camuflaje óptico fullbody",
    efecto: "Mientras estés inmóvil +12 Sigilo, en movimiento VENTAJA",
    rareza: "S",
    costo: 12667,
    precio:19000
  },
  {
    nombre: "Mochila electromagnéca",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Si llevás esto no podés tener mochilas con slots. Cuando detecta disparos de armas te da +8 en Esquivar. Dura 1TL por día.",
    rareza: "A",
    costo: 8500,
    precio:17000
  },
  {
    nombre: "MonoVision",
    tipo: cyberItem,
    descripcion: "Implante óptico 180°",
    efecto: "Ignora aturdimientos visuales, +4 descubrir, +4 alerta, +3 pilotar, -4 magia, +1 inmidar. Cirugía menor",
    rareza: "C",
    costo: 3714,
    precio:13000
  },
  {
    nombre: "Muñequera afilada",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Daño +3D6 solo con PELEA",
    rareza: "C",
    costo: 1714,
    precio: 6000
  },
  {
    nombre: "Muñequera Mortal",
    tipo: cyberItem,
    descripcion: "Vibra (3 veces x día)",
    efecto: "Daño +3D6 solo con PELEA / se puede gastar una carga para sumar +2D10 daño",
    rareza: "A",
    costo: 6000,
    precio:12000
  },
  {
    nombre: "Mustang Arms Mark II",
    tipo: cyberItem,
    descripcion: "Pistola Pesada (13 balas)",
    efecto: "Daño 30+2D6 / 3 ros TC (dificultad 11 x ro) / -2 Arma Distancia",
    rareza: "A",
    costo: 6500,
    precio:13000
  },
  {
    nombre: "Nano Feromonas x8",
    tipo: cyberItem,
    descripcion: "",
    efecto: "C/píldora +3 Seductor. En el acto sexual todas tus radas aumentan 70%. Autocontrol 20 para no generar adicción, a las 3 fallas gana el defecto de adicto",
    rareza: "C",
    costo: 857,
    precio:3000
  },
  {
    nombre: "Nano Gear",
    tipo: cyberItem,
    descripcion: "Armadura fullbody",
    efecto: "Armor+6 en c/parte. Un golpe de 30p lo revienta. C/parte Puede volverse transparente",
    rareza: "S",
    costo: 13333,
    precio:20000
  },
  {
    nombre: "Neuro C4",
    tipo: cyberItem,
    descripcion: "Explosivos a distancia",
    efecto: "Plantá C4 y dinamitá con el pensamiento. Daño 40+6D6",
    rareza: "B",
    costo: 4400,
    precio:11000
  },
  {
    nombre: "Nova 757 Cityhunter",
    tipo: cyberItem,
    descripcion: "Pistola Pesada (6 balas)",
    efecto: "Daño 30+3D6 / 2 ros TC (dificultad 17 x ro) / -2 Arma Distancia",
    rareza: "B",
    costo: 4400,
    precio:11000
  },
  {
    nombre: "Nutrisuplemento",
    tipo: cyberItem,
    descripcion: "Alimento por 24hs",
    efecto: "Te manene perfectamente hidratado, con grasas y calores adicionales. Tirar Res Veneno, si pifia te desmayás por 1TL",
    rareza: "D",
    costo: 429,
    precio:1500
  },
  {
    nombre: "Ojo Remoto",
    tipo: cyberItem,
    descripcion: "Ojo espía",
    efecto: "Tiene Sigilo 40. Recibís la transmisión AV a una CyberTerminal. Si tenés Remote Gear puede desplazarse con Atletismo 20",
    rareza: "C",
    costo: 571,
    precio:2000
  },
  {
    nombre: "Panel solar",
    tipo: cyberItem,
    descripcion: "Ideal para vehículos",
    efecto: "1 panel da energía a un vehículo pequeño (o dos items chicos), 2 paneles a un tanque de criogenia. Al primer golpe se rompe",
    rareza: "D",
    costo: 1143,
    precio:4000
  },
  {
    nombre: "Pies Magnéticos",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Permite caminar o correr sobre superficies metálicas, mediante una cirugía leve",
    rareza: "D",
    costo: 857,
    precio:3000
  },
  {
    nombre: "Pies Rollers",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Atletismo +3",
    rareza: "D",
    costo: 2000,
    precio:7000
  },
  {
    nombre: "Pistolera",
    tipo: cyberItem,
    descripcion: "Espacio extra para 1 pistola",
    efecto: "Se puede ubicar en cualquier extremidad, mediante una cirugía leve",
    rareza: "D",
    costo: 1143,
    precio:4000
  },
  {
    nombre: "Procesador de Lenguaje",
    tipo: cyberItem,
    descripcion: "Interpreta por vos",
    efecto: "Linguisca x2 (antes de rar el dado y sin aplicar espíritu o voluntad)",
    rareza: "D",
    costo: 1714,
    precio:6000
  }, {
    nombre: "Remington Gyro-Rifle",
    tipo: cyberItem,
    descripcion: "Sniper (6 balas",
    efecto: "Daño 35+2D6 / 2 tiros TC (dificultad 30 x tiro) / -4 Arma Dist (moviendose) / +4 Arma Distancia (quieto) / anula negativos x dist hasta -10",
    rareza: "S",
    costo: 20000,
    precio:30000
  },
  {
    nombre: "Remote Gear",
    tipo: cyberItem,
    descripcion: "Maneja cyber items a distancia",
    efecto: "Controla cosas hackeadas. Una vez por mes +1 Espíritu si usás 1TL para jugar",
    rareza: "D",
    costo: 5143,
    precio:18000
  },
  {
    nombre: "Ruger MKII",
    tipo: cyberItem,
    descripcion: "Pistola Ligera (13 balas)",
    efecto: "Daño 25+2D6 / 2 ros TC (dificultad 15 x tiro) / +1 Arma DIstancia",
    rareza: "D",
    costo: 1143,
    precio:4000
  }, {
    nombre: "S&W Handcannon",
    tipo: cyberItem,
    descripcion: "Pistola Pesada (2 balas)",
    efecto: "Daño 40+2D10 / 2 ros TC (dificultad 25 x ro) / -4 Arma Distancia",
    rareza: "A",
    costo: 7500,
    precio:15000
  },
  {
    nombre: "Sonic Shield",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupa T3, da +5 al bloqueo, -1 Destreza, reduce el daño no mágico en un 20% y ene 90Hp, que se pueden ir regenerando con Reparar 30 10hp con 90 de chatarra.",
    rareza: "A",
    costo: 7500,
    precio:14000
  },
  {
    nombre: "Stolbovoy",
    tipo: cyberItem,
    descripcion: "Pistola Media (14 balas)",
    efecto: "Daño 30+2D6 / 3 ros TC (dificultad 14 x ro) / -2 Arma Distancia",
    rareza: "B",
    costo: 3600,
    precio:9000
  },
  {
    nombre: "Tech Raven",
    tipo: cyberItem,
    descripcion: "Soporte para Técnicos",
    efecto: "Reparar/Construír +5, Tecnológico +3, Pilotar +2, Conducir +2",
    rareza: "B",
    costo: 5600,
    precio:14000
  },
  {
    nombre: "Techno Katana 2B",
    tipo: cyberItem,
    descripcion: "Katana Autónoma",
    efecto: "Como Katana normal 11 // +14 / Si tenés CHIP ARMA INTELIGENTE: Ataca por su cuenta emulando LANZAR y puede ocupar T0 en inventario ",
    rareza: "S",
    costo: 16000,
    precio:24000
  },
  {
    nombre: "Tecnoestabilizador",
    tipo: cyberItem,
    descripcion: "Inyector y estabilizador",
    efecto: "Cura 5HP al instante, Médico +3. $500 recarga",
    rareza: "B",
    costo: 3200,
    precio:8000
  },
  {
    nombre: "TeknoBird",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupan T2, permite desplazarse a gran altura y velocidad volando todo un TL, requiere 2TL solares para cargarse. Avanza el triple que si fuera 1TL en auto. Si se usan en combate dan -7 en DES, pero se puede ganar mucha altura o ulizar para escapar",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Torreta solar (1TL",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Viene sin arma, se le puede montar la que gustes. Tiene 80hp, sigilo 18pts , Arma distancia 25pts. Se le pueden cargar figuras aliadas para que no ataque.",
    rareza: "C",
    costo: 2286,
    precio:8000
  },
  {
    nombre: "Trauma Abdomen",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Trauma brazo der",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Trauma brazo izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Trauma casco",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Trauma Pecho",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Trauma pierna izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Trauma pierna der",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333,
    precio:8000
  },
  {
    nombre: "Tsunami Arms Ramjet",
    tipo: cyberItem,
    descripcion: "Rifle de energía (1D4 disparos)",
    efecto: "Daño 40+1D12 / rayo constante permite re tirar con -6 (+2 x lvl) para golpear otra parte u otro PJ / +2 Arma distancia / 1 TC recargar disparos ",
    rareza: "S",
    costo: 18000,
    precio:27000
  },
  {
    nombre: "Tubo de Criogenia",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Mientras esté conectado mantiene vivo algo dentro. Cargada tiene 2tl de autonomía",
    rareza: "S",
    costo: 8000,
    precio:12000
  },
  {
    nombre: "Visor OpTech",
    tipo: cyberItem,
    descripcion: "Binoculares",
    efecto: "Hasta 1500m. Infrarrojo",
    rareza: "D",
    costo: 1714,
    precio:6000
  }

];

export const steamPunkItems = [{
  nombre:"Armor Brazo Izquierdo",
  tipo: steamPunk,
  efecto:"armor 3, a los 20 golpe se rompe",
  precio:900
},
{
  nombre:"Armor Brazo Derecho",
  tipo: steamPunk,
  efecto:"armor 3, a los 20 golpe se rompe",
  precio:900
},
{
  nombre:"Armor Pierna Izquierda",
  tipo: steamPunk,
  efecto:"armor 3, a los 20 golpe se rompe",
  precio:1000
},
{
  nombre:"Armor Pierna Derecha",
  tipo: steamPunk,
  efecto:"armor 3, a los 20 golpe se rompe",
  precio:1000
},
{
  nombre:"Armor Pecho",
  tipo: steamPunk,
  efecto:"-6 daño - resiste 3 golpes",
  precio:1200
},
{
  nombre:"Armor Abdomen",
  tipo: steamPunk,
  efecto:"-5 daño - resiste 5 golpes",
  precio:1200
},
{
  nombre:"Armor Cabeza",
  tipo: steamPunk,
  efecto:"-5 daño - resiste 5 golpes",
  precio:1300
},
{
  nombre: "Brazalete duerme (uso único)",
  tipo: steamPunk,
  efecto: "38pt autocontrol o se duerme",
  precio:7500
},
{
  nombre: "Bobina electrica",
  tipo: steamPunk,
  efecto: "pared electrica invisible 60daño",
  precio:8750
},
{
  nombre: "Pistola de onda (alcance corto)",
  tipo: steamPunk,
  efecto: "10D6 daño, lanza al enemigo",
  precio:6875
},
{
  nombre: "Mina (terrestre y sopapa a la ropa)",
  tipo: steamPunk,
  efecto: "5D10 sin resistencia",
  precio:1875
},
{
  nombre: "Antares paralizante (usa pelea)",
  tipo: steamPunk,
  efecto: "20 vs Res Amb. paraliza miembro. 3 usos totales. C/tc que pasa aumenta 5 la dificultad del veneno. Dura 1D10+3 turnos",
  precio:8750
},
{
  nombre: "Insecto espia",
  tipo: steamPunk,
  efecto: "35 sigilo, graba audio",
  precio:1250
},
{
  nombre: "Pistola de rayos anulador",
  tipo: steamPunk,
  efecto: "Anula 1D10 turnos si pega",
  precio:15625
},
{
  nombre: "Potenciador a vapor",
  tipo: steamPunk,
  efecto: "+3D fuerza (sin limites) +3PELEA",
  precio:13750
},
{
  nombre: "Receptor auditivo (+1D percep)",
  tipo: steamPunk,
  efecto: "Puede recibir señales de radio",
  precio:7500
},
{
  nombre: "Corruptor de maquinaria",
  tipo: steamPunk,
  efecto: "tecno vs tecno creador 3 veces",
  precio:10000
},
{
  nombre: "Los conocimientos de Tim Baker",
  tipo: steamPunk,
  efecto: "Si puede leer +3 en tecno y rep",
  precio:8125
},
{
  nombre: "Camara de fotos con 1 bombita",
  tipo: steamPunk,
  efecto: "1D6 fotos restantes",
  precio:688
},
{
  nombre: "Insecto mecanico de Luddmer",
  tipo: steamPunk,
  efecto: "Graba sonidos, sigilo 11D6",
  precio:2125
},
{
  nombre: "Caminante a vapor",
  tipo: steamPunk,
  efecto: "+3 Destreza (s/limit)",
  precio:13750
},
{
  nombre: "Revolver Samael (2 tiros por turno",
  tipo: steamPunk,
  efecto: "4 balas x cartucho, 3D8 + 35pt daño c/u",
  precio:10000
},
{
  nombre: "The unnatural selector (atk area)",
  tipo: steamPunk,
  efecto: "5D6 sin resistencia en 4x4m",
  precio:11250
},
{
  nombre: "Dado del sueño (area)",
  tipo: steamPunk,
  efecto: "30 vs autoc. Para dormir",
  precio:8750
},
{
  nombre: "Jetpack (Tecno 35 para usar)",
  tipo: steamPunk,
  efecto: "Atlet 40 para usar con una mano",
  precio:11875
},
{
  nombre: "Automail (miembro al azar)",
  tipo: steamPunk,
  efecto: "Fue de 1 a 5D, Res de 30 a 70pt",
  precio:10000
},
{
  nombre: "Cacharro",
  tipo: steamPunk,
  efecto: "Piezas revendibles x 1D10 $50",
  
},
];

export const armasBasicas = [{
  nombre: "Daga Toledo",
  tipo: "T1",
  descripcion: "Dificultad: 5",
  efecto: "Daño: +9 ",
  rareza: "HP: 60 ",
  costo: "-3 ",
  precio:500

}, {
  nombre: "Daga Adiosrubia",
  tipo: "T1",
  descripcion: "Dificultad: 8",
  efecto: "Daño: +7",
  rareza: "HP: 65",
  costo: "-1 ",
  precio:300

},
{
  nombre: "Daga Sastaguino",
  tipo: "T1",
  descripcion: "Dificultad: 7 ",
  efecto: "Daño: +8 ",
  rareza: "HP: 65 ",
  costo: " -2",
  precio:900

},
{
  nombre: "Cuchillo Manchego",
  tipo: "T1",
  descripcion: "Dificultad: 6",
  efecto: "Daño: +9",
  rareza: "HP: 70",
  costo: " -1",
  precio:900

},
{
  nombre: "Espada Viking",
  tipo: "T2",
  descripcion: "Dificultad: 9",
  efecto: "Daño: +11",
  rareza: "HP: 70",
  costo: " -4",
  precio:1200

},
{
  nombre: "Florete",
  tipo: "T1",
  descripcion: "Dificultad: 9",
  efecto: "Daño: +9",
  rareza: "HP: 65",
  costo: " -5",
  precio:1300

},
{
  nombre: "Espada Yatagán",
  tipo: "T1",
  descripcion: "Dificultad: 8",
  efecto: "Daño: +12",
  rareza: "HP: 70",
  costo: " -4",
  precio:2000

},
{
  nombre: "Espada Kopesh",
  tipo: "T2",
  descripcion: "Dificultad: 10",
  efecto: "Daño: +13",
  rareza: "HP: 75",
  costo: " -3",
  precio:2300

},
{
  nombre: "Katana",
  tipo: "T2",
  descripcion: "Dificultad: 11",
  efecto: "Daño: +14",
  rareza: "HP: 80",
  costo: " -5",
  precio:2200

},
{
  nombre: "Hacha Plana",
  tipo: "T3",
  descripcion: "Dificultad: 10",
  efecto: "Daño: +12",
  rareza: "HP: 80",
  costo: " -4",
  precio:3000

},
{
  nombre: "Hacha Plana Doble",
  tipo: "T3",
  descripcion: "Dificultad: 10",
  efecto: "Daño: +13",
  rareza: "HP: 85",
  costo: " -5",
  precio:3700

},
{
  nombre: "Hacha de guerra",
  tipo: "T3",
  descripcion: "Dificultad: 12",
  efecto: "Daño: 15",
  rareza: "HP: 90",
  costo: "-4 ",
  precio:3900

},
{
  nombre: "Alabarda",
  tipo: "T3",
  descripcion: "Dificultad:11 ",
  efecto: "Daño: +14",
  rareza: "HP: 75",
  costo: "-5 ",
  precio:4000

},
{
  nombre: "Lanza Corcesca",
  tipo: "T3",
  descripcion: "Dificultad: 12",
  efecto: "Daño: 16",
  rareza: "HP:75 ",
  costo: "-4 ",
  precio:4500

},
{
  nombre: "Lanza Bisento",
  tipo: "T3",
  descripcion: "Dificultad:13 ",
  efecto: "Daño: 15",
  rareza: "HP: 80",
  costo: " -6",
  precio:6000

},
{
  nombre: "Guadaña",
  tipo: "T3",
  descripcion: "Dificultad: 11",
  efecto: "Daño: +14",
  rareza: "HP: 70",
  costo: " -4",
  precio:5000
},
{
  nombre: "Guadaña Triple Filo",
  tipo: "T3",
  descripcion: "Dificultad: 11",
  efecto: "Daño: +17",
  rareza: "HP: 75",
  costo: " -4",
  precio:5500

},
{
  nombre: "Arco/ flechas (1D12)",
  tipo: "T2",
  descripcion: "Dificultad:12 ",
  efecto: "Daño: 25 + 2D6",
  rareza: "HP: 70",
  costo: " -2 Distancia",
  precio:2500

},
{
  nombre: "Ballesta",
  tipo: "T2",
  descripcion: "Dificultad:12 ",
  efecto: "Daño: 25 + 3D6",
  rareza: "HP: 65",
  costo: " -4 Distancia",
  precio:3500

},
{
  nombre: "Ballesta de Zhuge",
  tipo: "T3",
  descripcion: "Dificultad: 10",
  efecto: "Daño: 25 + 2D6",
  rareza: "HP: 70",
  costo: " -5 Distancia",
  precio:4500

}
];

export const itemsMagicos = [{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "-1pt gasto MP",
  efecto: "Máximo descuento por turno 1mp C/5 Percibir +Magia (cada anillo max descuenta 1mp, esto es con varios)",
  precio:12500
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "+1D6 Fuerza C/1MP",
  efecto: "Máx aplicable 1D6 c/7 en Res mental",
  precio:15000
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "+1D6 Resist C/1MP",
  efecto: "Máx aplicable 1D6 c/7 en Res mental",
  precio:1500
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "+ 1pt Suerte",
  efecto: "Max 5",
  precio:11250
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "Anillo Mejora de Afinidad",
  efecto: "C/1MP - 1 AFIN al costo de una opart por 1TL, Máx aplicable 1 c/7 en Res mental",
  precio:11250
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "Teletransportador",
  efecto: "5MP x C/PJ",
  precio:16250
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "10% Reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "Cura 20HP",
  efecto: "Gasta 10MP",
  precio:9375
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "C/7Hp perdidos gana 1MP",
  efecto: "Acumulable",
  precio:8750
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "-5pt dific. apuntar",
  efecto: "Acumulable",
  precio:10000
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "25 o - HP, da doble turno",
  efecto: "Si te sacaron de 75 a 99 hp tenés doble turno constante",
  precio:11875
},
{
  nombre: "Anillo",
  tipo: magico,
  descripcion: "Al perder todos los HP queda en 1",
  efecto: "-2 Espíritu",
  precio:10625
},
{
  nombre: "Sombrero/Bandana/Pañuelo",
  tipo: magico,
  descripcion: "+1 en un atributo Social",
  efecto: "tira al azar entre Carisma, manipulación y astucia",
  precio:13750
},
{
  nombre: "Sombrero/Bandana/Pañuelo",
  tipo: magico,
  descripcion: "+1 en un atributo Mental ",
  efecto: "tira al azar entre inteligencia, saber y percibi",
  precio:13750
},
{
  nombre: "Sombrero/Bandana/Pañuelo",
  tipo: magico,
  descripcion: "10% Reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Sombrero/Bandana/Pañuelo",
  tipo: magico,
  descripcion: "-5pt dific. apuntar",
  efecto: "Acumulable",
  precio:10000
},
{
  nombre: "Sombrero/Bandana/Pañuelo",
  tipo: magico,
  descripcion: "+1D6 pt de voluntad al ganar combate",
  efecto: "No acumulable",
  precio:10000
},
{
  nombre: "Sombrero/Bandana/Pañuelo",
  tipo: magico,
  descripcion: "25% de ganar 1 espíritu al ganar un combate",
  efecto: "Acumulable hasta 75%",
  precio:10000
},
{
  nombre: "Guantes",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Astucia",
  precio:13750
},
{
  nombre: "Guantes",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Fuerza",
  precio:13750
},
{
  nombre: "Guantes",
  tipo: magico,
  descripcion: "10% Reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Guantes",
  tipo: magico,
  descripcion: "C/7Hp perdidos gana 1MP",
  efecto: "Acumulable",
  precio:8750
},
{
  nombre: "Guantes",
  tipo: magico,
  descripcion: "",
  efecto: "+3 en Bloquear",
  precio:11250
},
{
  nombre: "Guantes",
  tipo: magico,
  descripcion: "",
  efecto: "+3 en Robar",
  precio:11250
},
{
  nombre: "Remera/Camisa",
  tipo: magico,
  descripcion: "+1D4 C/V que gane XP ",
  efecto: "Acumulable",
  precio:13750
},
{
  nombre: "Remera/Camisa",
  tipo: magico,
  descripcion: "25% de ganar 1 espíritu al ganar un combate",
  efecto: "Acumulable hasta 75%",
  precio:10000
},
{
  nombre: "Remera/Camisa",
  tipo: magico,
  descripcion: "10% reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Remera/Camisa",
  tipo: magico,
  descripcion: "+ 1pt Suerte",
  efecto: "Max 5",
  precio:11250
},
{
  nombre: "Remera/Camisa",
  tipo: magico,
  descripcion: "Anula bonif daño pecho/abdomen",
  efecto: "",
  precio:13750
},
{
  nombre: "Remera/Camisa",
  tipo: magico,
  descripcion: "Regenera 1HP y MP x C/asesinato",
  efecto: "Acumulable",
  precio:12500
},
{
  nombre: "Capa/Campera/Saco",
  tipo: magico,
  descripcion: "+3 tiradas liderazgo",
  efecto: "Acumulable",
  precio:11250
},
{
  nombre: "Capa/Campera/Saco",
  tipo: magico,
  descripcion: "+3 tiradas intimidación",
  efecto: "Acumulable",
  precio:11250
},
{
  nombre: "Capa/Campera/Saco",
  tipo: magico,
  descripcion: "10 % reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Capa/Campera/Saco",
  tipo: magico,
  descripcion: "25 o - HP, da doble turno",
  efecto: "Si te sacaron de 75 a 99 hp tenés doble turno constante",
  precio:11875
},
{
  nombre: "Capa/Campera/Saco",
  tipo: magico,
  descripcion: "",
  efecto: "Anula bonif daño pecho/abdomen",
  precio:13750
},
{
  nombre: "Capa/Campera/Saco",
  tipo: magico,
  descripcion: "Regenera 1HP y MP x C/asesinato",
  efecto: "acumulable",
  precio:12500
},
{
  nombre: "Pantalon/Pollera",
  tipo: magico,
  descripcion: "+1 en un atributo Social",
  efecto: "tira al azar entre Carisma, Manipulación y Astucia",
  precio:13750
},
{
  nombre: "Pantalon/Pollera",
  tipo: magico,
  descripcion: "+1 en un atributo Mental",
  efecto: "Tira al azar entre inteligencia, saber y percibir",
  precio:13750
},
{
  nombre: "Pantalon/Pollera",
  tipo: magico,
  descripcion: "10% Reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Pantalon/Pollera",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Destreza",
  precio:13750
},
{
  nombre: "Pantalon/Pollera",
  tipo: magico,
  descripcion: "+ 3 tiradas de Liderazgo",
  efecto: "Acumulable",
  precio:11250
},
{
  nombre: "Pantalon/Pollera",
  tipo: magico,
  descripcion: "+3 Tiradas de Intimidación",
  efecto: "Acumulable",
  precio:11250
},

{
  nombre: "Botas/Zapatos",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Astucia",
  precio:13750
},
{
  nombre: "Botas/Zapatos",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Destreza",
  precio:13750
},
{
  nombre: "Botas/Zapatos",
  tipo: magico,
  descripcion: "10% reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Botas/Zapatos",
  tipo: magico,
  descripcion: "Teletransportador",
  efecto: "5MP x C/PJ",
  precio:12500
},
{
  nombre: "Botas/Zapatos",
  tipo: magico,
  descripcion: "+1pt Suerte",
  efecto: "Max 5",
  precio:11250
},
{
  nombre: "Botas/Zapatos",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Voluntad",
  precio:13750
},
{
  nombre: "Cadena/Collar",
  tipo: magico,
  descripcion: "+ 1pt Suerte ",
  efecto: "Max 5",
  precio:11250
},
{
  nombre: "Cadena/Collar",
  tipo: magico,
  descripcion: "",
  efecto: "+ 1 en Carisma",
  precio:13750
},
{
  nombre: "Cadena/Collar",
  tipo: magico,
  descripcion: "10% Reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Cadena/Collar",
  tipo: magico,
  descripcion: "+1 en Manipulación",
  efecto: "",
  precio:13750
},
{
  nombre: "Cadena/Collar",
  tipo: magico,
  descripcion: "Al perder todos los HP queda en 1",
  efecto: "-2 Espíritu",
  precio:10625
},
{
  nombre: "Cadena/Collar",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Voluntad",
  precio:13750
},
{
  nombre: "Aretes",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Carisma",
  precio:13750
},
{
  nombre: "Aretes",
  tipo: magico,
  descripcion: "+ 1pt Suerte",
  efecto: "Max 5",
  precio:11250
},
{
  nombre: "Aretes",
  tipo: magico,
  descripcion: "10% Reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Aretes",
  tipo: magico,
  descripcion: "Cura 10HP",
  efecto: "Gasta 10MP",
  precio:9375
},
{
  nombre: "Aretes",
  tipo: magico,
  descripcion: "Al perder todos los HP queda en 1",
  efecto: "-2 Espíritu",
  precio:10625
},
{
  nombre: "Aretes",
  tipo: magico,
  descripcion: "C/10Hp perdidos gana 1MP",
  efecto: "Acumulable",
  precio:8750
},
{
  nombre: "Parche",
  tipo: magico,
  descripcion: "+1D4 C/V que gane XP",
  efecto: "Acumulable",
  precio:13750
},
{
  nombre: "Parche",
  tipo: magico,
  descripcion: "+1 en Suerte",
  efecto: "Max 5",
  precio:11250
},
{
  nombre: "Parche",
  tipo: magico,
  descripcion: "10% reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Parche",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Voluntad",
  precio:13750
},
{
  nombre: "Parche",
  tipo: magico,
  descripcion: "+3 tiradas de Liderazgo",
  efecto: "Acumulable",
  precio:11250
},
{
  nombre: "Parche",
  tipo: magico,
  descripcion: "-5pt dificultad apuntar",
  efecto: "Acumulable",
  precio:10000
},
{
  nombre: "Brazalete/Amuleto",
  tipo: magico,
  descripcion: "+1D6 Fuerza C/1MP",
  efecto: "Máx aplicable 1D6 c/7 en Res mental",
  precio:10000
},
{
  nombre: "Brazalete/Amuleto",
  tipo: magico,
  descripcion: "+ 1pt Suerte ",
  efecto: "Max 5",
  precio:11250
},
{
  nombre: "Brazalete/Amuleto",
  tipo: magico,
  descripcion: "10% Reflejo",
  efecto: "Max 150%",
  precio:11250
},
{
  nombre: "Brazalete/Amuleto",
  tipo: magico,
  descripcion: "",
  efecto: "+1 en Astucia",
  precio:13750
},
{
  nombre: "Brazalete/Amuleto",
  tipo: magico,
  descripcion: "-5pt dific. apuntar",
  efecto: "Acumulable",
  precio:8750
},

{
  nombre: "Upgrades",
  tipo: magico,
  descripcion: "+1D6 Reparaciones",
  efecto: "Se tira el dado después del D20 y se suma. No acumulable",
  precio:8000
},
{
  nombre: "Upgrades",
  tipo: magico,
  descripcion: "+1D6 Medicina",
  efecto: "Se tira el dado después del D20 y se suma. No acumulable",
  precio:8000
},
{
  nombre: "Upgrades",
  tipo: magico,
  descripcion: "+1D6 Ciencias",
  efecto: "Se tira el dado después del D20 y se suma. No acumulable",
  precio:8000
},
{
  nombre: "Upgrades",
  tipo: magico,
  descripcion: "+1D6 Expresión Artística",
  efecto: "Se tira el dado después del D20 y se suma. No acumulable",
  precio:8000
},
{
  nombre: "Upgrades",
  tipo: magico,
  descripcion: "+1D6 Orientación",
  efecto: "Se tira el dado después del D20 y se suma. No acumulable",
  precio:8000
},
{
  nombre: "Upgrades",
  tipo: magico,
  descripcion: "+1D6 Lingüística",
  efecto: "Se tira el dado después del D20 y se suma. No acumulable",
  precio:8000
}
];

export const itemsOnlyKundums = [
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Guantelete del Infinito",
    efecto: "Guarda 1 poder x 1 semana"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Amuleto Gilgamesh",
    efecto: "Revive 1hp último hogar"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Gema Excelsior",
    efecto: "Sube de nivel un o-part"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Perfumero",
    efecto: "Revive 1hp si murio en 1hr o -"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Esmeralda del caos",
    efecto: "Consume 1MP para atacar a otro enemigo. 1D4+1 usos"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Cofre de tesoro",
    efecto: "Elige el obj raro que quiera"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Piedra de Lock",
    efecto: "Roba un estado al azar"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Brebaje de Lullaby",
    efecto: "Full hp y mp, duerme 24hs"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Sombrero Toguro",
    efecto: "Anula doble daño cabeza"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Anillo de Morgana",
    efecto: "Anula todos los items de 1pj*"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Anillo Legendarys",
    efecto: "Anula daño reflejo*"
  },
  {
    nombre: "Objetos Raros",
    tipo: magico,
    descripcion: "Anillo de Shawn",
    efecto: "Recupera 1MP x TL"
  }
];

export const efectosMagicos = [{
  nombre: "Daño Elemental",
  efecto: "1MP - X flecha, +5pt daño",
  precio:15000
},
{
  nombre: "Fuego",
  efecto: "Suerte si gana 1d6 daño x turno",
  precio:15000
},
{
  nombre: "Electrico",
  efecto: "Arma CC +4",
  precio:15000
},
{
  nombre: "Tierra",
  efecto: "Ataca furtivo(bajo tierra)",
  precio:15000
},
{
  nombre: "Viento",
  efecto: "DES +2",
  precio:15000
},
{
  nombre: "Agua",
  efecto: "Rival DES -1",
  precio:15000
},
{
  nombre: "Hielo",
  efecto: "Congela localización: el rival tira RES AMB -30, el restante es el negativo. c/TC la tirada rival tiene +5",
  precio:15000
},
{
  nombre: "No elemental",
  efecto: "LANZA una ráfaga extra. Daño (VOLx1.5) en D6",
  precio:15000
},
{
  nombre: "50% elegir el lugar del daño",
  efecto: "",
  precio:12500
},
{
  nombre: "C/5Mp sube 1 vez mas el daño base",
  efecto: "la dificultad sube en un 50%",
  precio:13750
},
{
  nombre: "Roba habilidad opart x 1D10 TC",
  efecto: "Robar vs Res Mental. Si tiene + de 1 o-part se tira al azar. Solo una opart a la vez",
  precio:12500
},
{
  nombre: "Recupera 10% daño en Hp",
  efecto: "C/1mp ataca a un enemigo*",
  precio:12500
},
{
  nombre: "Roba 10% daño en mp",
  efecto: "",
  precio:13750
},
{
  nombre: "El daño que saca no se puede curar",
  efecto: "Hasta la proxima luz de luna",
  precio:12500
},
{
  nombre: "Envenena 1D6 x turno acumulable",
  efecto: "ciencias 20pts curar un estado. Cada TC de curación quita veneno de una sola locación",
  precio:10625
},
{
  nombre: "C/5pjs q mate sube +1daño",
  efecto: "Acumulable x usuario",
  precio:15000
},
{
  nombre: "Rival tiene menos de 100xp que usuario 10% de matar",
  efecto: "Permite robar al mismo tiempo ",
  precio:12500
},
{
  nombre: "tira Robar vs Alerta, si es exitoso el usuario pierde 1 MP, sino no",
  efecto: "",
  precio:10625
},
{
  nombre: "Ataca con sigilo y despues normal",
  efecto: "1 mp",
  precio:10625
},
{
  nombre: "1Mp regenera 4HP",
  efecto: "en el usuario",
  precio:10625
},
{
  nombre: "Si golpeo el turno pasado ",
  efecto: "los daños fisicos hacen 50% -",
  precio:11250
},
{
  nombre: "+1D4 lvls en una opart ",
  efecto: "",
  precio:13750
},
{
  nombre: "anula oparts alrededor",
  efecto: "anula oparts del mismo nivel que la máxima de este usuario. Para lograrlo lanza Perc+magia vs Vol+Afinidad (rival). Gasta 5mp, pero se tira una sola vez por combate",
  precio:12500
},
{
  nombre: "C/enemigo que golpea da 1XP",
  efecto: "1vez x pj cada dia",
  precio:11250
},
{
  nombre: "El 10% de daño se agrega a voluntad",
  efecto: "",
  precio:11250
},
{
  nombre: "Ventaja",
  efecto: "Tira 2D20 para atacar con esta arma, elige el resultado que prefiera",
  precio:12500
},
{
  nombre: "Baja en 1D3 la afin de una opart ",
  efecto: "El D3 se tira una sola vez. La o-part puede cambiarse con la restricción de 24hs",
  precio:16250
},

]

export const vehiculos = [{
  nombre:"Neon Skate",
  precio: randomNumber(15000,23000)
  
},
{
  nombre:"Neon Skate",
  precio: randomNumber(15000,23000)
  
},
{
  nombre:"Neon Skate",
  precio: randomNumber(15000,23000)
  
},
{
  nombre:"Neon Skate",
  precio: randomNumber(15000,23000)
  
},
{
  nombre:"Bípedo",
  precio: randomNumber(17000,24000)
  
},
{
  nombre:"Bípedo",
  precio: randomNumber(17000,24000)
  
},
{
  nombre:"Bípedo",
  precio: randomNumber(17000,24000)
  
},
{
  nombre:"Cuadrúpedo Ligero",
  precio:randomNumber(20000,33000)
  
},
{
  nombre:"Cuadrúpedo Ligero",
  precio:randomNumber(20000,33000)
},
{
  nombre:"Pesados y Especiales",
  precio:randomNumber(25000,55000)
}]

export const kundums = [{
  nombre:"Kundum",
  tipo:"Bronce",
  precio:6500
},
{
  nombre:"Kundum",
  tipo :"Plata",
  precio:9500
},
{
  nombre:"Kundum",
  tipo:"Oro",
  precio:13000
},
{
  nombre:"Kundum",
  tipo:"Antigua",
  precio:15000
},
{
  nombre:"Kundum",
  tipo:`Sangre de mago %${randomNumber(1,8) * 5}`,
  precio: 7500
}]

export const baseProducts = [{
  nombre:"Raciones",
  cantidad:randomNumber(8,40),
  precio:70
},{
  nombre:"Botiquines",
  cantidad:randomNumber(80,500),
  precio: 12
},{
  nombre:"Combustible (1TL manejando)",
  cantidad: randomNumber(2,10),
  precio:1500
},{
  nombre:"Hierba azul",
  cantidad:randomNumber(2,20),
  precio:70
},{
  nombre:"Hierba roja",
  cantidad:randomNumber(2,14),
  precio:100
},{
  nombre:"Hierba verde",
  cantidad:randomNumber(1,12),
  precio:150
},{
  nombre:"Hierba violeta",
  cantidad:randomNumber(0,10),
  precio:200
},{
  nombre:"Hierba amarilla",
  cantidad:randomNumber(0,9),
  precio:300
},{
  nombre:"Mochila 8 slots",
  cantidad:randomNumber(0,4),
  precio:500
},{
  nombre:"Mochila 10 slot",
  cantidad:randomNumber(0,3),
  precio:800
},{
  nombre:"Mochila 12 slot",
  cantidad:randomNumber(0,2),
  precio:1200
}];


export function randomNumber(min,max){
  const randomNumber = Math.floor(Math.random()*(max - min + 1)) + min;
  return randomNumber
}