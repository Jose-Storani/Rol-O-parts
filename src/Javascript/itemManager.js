const cyberItem = "Cyber Item",
  vehiculo = "Vehículo",
  kundum = "Kundum";

const data = [
  {
    nombre: "",
    tipo: null,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  },

  {
    nombre: "Analizador GeoAmbiental ",
    tipo: cyberItem,
    descripcion: "Dron de reconocimiento",
    efecto: "+2 supervivencia, +3 Orientarse. Cargado tiene 1 semana de autonomía. HP 60",
    rareza: "B",
    costo: 3200
  },
  {
    nombre: "Armor sónica Abdómen",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800
  },
  {
    nombre: "Armor sónica Brazo Derecho",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800
  },
  {
    nombre: "Armor sónica Brazo Izquierdo",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800
  },
  {
    nombre: "Armor sónica casco",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "S",
    costo: 4667
  },
  {
    nombre: "Armor sónica Pecho",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "A",
    costo: 3500
  },
  {
    nombre: "Armor sónica Pierna Izquierda",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800
  },
  {
    nombre: "Armor sónica Pierna Derecha",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(reduce todo daño no mágico en 20%) y después aplica -6 de daño.",
    rareza: "B",
    costo: 2800
  },

  {
    nombre: "Astra Style-36",
    tipo: cyberItem,
    descripcion: "Pistola Ligera 6 balas",
    efecto: "Daño 25+2D4 / 2 ros TC (dificultad 15 x ro) / +3 Arma DIstancia",
    rareza: "D",
    costo: 857
  },
  {
    nombre: "Avenger",
    tipo: cyberItem,
    descripcion: "Pistola Media 8 balas",
    efecto: "Daño 30+2D4 / 2 ros TC (dificultad 12 x ro) / +2 Arma DIstancia",
    rareza: "c",
    costo: 2286
  },

  {
    nombre: "BioHormonal",
    tipo: cyberItem,
    descripcion: "Perfume",
    efecto: "Durante 1TL +6 seducir",
    rareza: "C",
    costo: 200
  },
  {
    nombre: "Bomba de humo",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Permite el sigilo en un radio de 5M.",
    rareza: "D",
    costo: 571
  },
  {
    nombre: "Bomba de luz",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Los cercanos que la vean sufren una penalización en movimientos de -1D10 (cada uno ra el suyo) por 1D3 tc.",
    rareza: "D",
    costo: 1286
  },
  {
    nombre: "Chadran Jungle Reaper",
    tipo: null,
    descripcion: "Ametralladora Pesada (30 balas)",
    efecto: "Daño 38+2D10 / 3 ros TC (dificultad 25 x ro) / -3 Arma Distancia /Ráfaga 1D20",
    rareza: "S",
    costo: 15333
  },

  {
    nombre: "Collar de detención",
    tipo: cyberItem,
    descripcion: "Genera Descargas",
    efecto: "",
    rareza: "",
    costo: 0,
  },
  {
    nombre: "Combat Magnun",
    tipo: cyberItem,
    descripcion: "Pistola Media (6 balas)",
    efecto: "",
    rareza: "",
    costo: 0,
  },
  {
    nombre: "Cyber Arco",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0,
  },
  {
    nombre: "Chip arma inteligente",
    tipo: cyberItem,
    descripcion: "Ayuda a la precisión",
    efecto: "Arma Dist +3, requiere una cirugía leve",
    rareza: "C",
    costo: 2286
  },
  {
    nombre: "Columna de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Posee 4 slots para diferentes Alquimias y con un pensamiento el usuario se aplica las que desee en medio turno. Son muy llamativas y con un golpe las rompen. Requiere cirugía mayor",
    rareza: "A",
    costo: 7500
  },
  {
    nombre: "Constitution Deluge",
    tipo: cyberItem,
    descripcion: "Lanza Granadas (8 granadas)",
    efecto: "Daño 45+3D6 / 1 ro TC (dificultad 40 daño %100, 35 %75 daño, 30 50% daño, 25 25% daño) / -3 Arma Distancia",
    rareza: "S",
    costo: 19333
  },
  {
    nombre: "Cyber Esqueleto",
    tipo: cyberItem,
    descripcion: "1D8 para ver la parte, si 8 elige",
    efecto: "Armor +10 la parte y suma +1D8 FUE. Si de un golpe le hacen 40p revienta. Destrezas -1",
    rareza: "S",
    costo: 8667
  }, 
  {
    nombre: "Cyber látigo",
    tipo: cyberItem,
    descripcion: "Látigo disparado de muñeca",
    efecto: "Dispara a Lanzar +5, FUE 35p",
    rareza: "B",
    costo: 3600
  }, 
  {
    nombre: "Cyber Mano",
    tipo: cyberItem,
    descripcion: "Mano muluso",
    efecto: "FUE +3D, ene lintena, 5 ros de 30+2D6, 5 dedos bomba (30+6D6), aerosol paralizante (-10 mov x 1D3 tc), Ganzúa (+3 abrir cerradura)",
    rareza: "B",
    costo: 8800
  }, 
  {
    nombre: "Cyber Terminal",
    tipo: cyberItem,
    descripcion: "Medio de comunicación",
    efecto: "Conecta con otras cyberterminales en un radio de 100-150 km. Cargada ene 1tl de autonomía",
    rareza: "C",
    costo: 3143
  }, 
  {
    nombre: "CyberCam EX3",
    tipo: cyberItem,
    descripcion: "Analiza en vivo al enemigo",
    efecto: "Cada turno que hayas pasado combaendo contra un rival te da a dar un bonificador de (+1D3) en atacar o esquivar. Max +6. HP=50",
    rareza: "S",
    costo: 14667
  }, 
  {
    nombre: "CyberConmocion",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Al recibir 20 o más puntos de daño suelta una descarga eléctrica que causa 5d8 a todos en un radio de 3x3 metros, solo una vez por día. Requiere cirugía mayor",
    rareza: "A",
    costo: 8000
  }, 
  {
    nombre: "Cyberimplante Brazo Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500
  }, 
  {
    nombre: "Cyberimplante Brazo Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500
  }, 
  {
    nombre: "Cyberimplante Brazo Der",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500
  }, 
  {
    nombre: "Cyberimplante Pierna Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500
  }, 
  {
    nombre: "Cyberimplante Pierna Izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "80hp, ra suerte vs DM. C/3+ ene una mejora al azar. Consultar: mejoras automail abajo",
    rareza: "A",
    costo: 7500
  }, 
  {
    nombre: "Cybrer Escudo Retractil",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupa T1, se despliega desde un brazo, da +3 al bloqueo y ene 80Hp, que se pueden ir regenerando con Reparar 30 10hp con 50 de chatarra.",
    rareza: "A",
    costo: 6000
  }, 
  {
    nombre: "Czar Skorpion",
    tipo: cyberItem,
    descripcion: "Ametralladora ligera (25 balas)",
    efecto: "Daño 25+2D4 / 4 ros TC (dificultad 15 x ro) / +3 Arma DIstancia/ Ráfaga 1D20+6",
    rareza: "A",
    costo: 9500
  }, 
  {
    nombre: "Daga de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armaduras ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 7 // +7 // 200hp // Bonif +2 //",
    rareza: "B",
    costo: 1800
  }, 
  {
    nombre: "Dai Lung Cybermag",
    tipo: cyberItem,
    descripcion: "Pistola Ligera (9 balas)",
    efecto: "Daño 30+2D4 / 2 ros TC (dificultad 18 x ro) / +2 Arma Distancia",
    rareza: "C",
    costo: 1714
  }, 
  {
    nombre: "Detector de radiación/enfermedades",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Disposivo autónomo solar (conque 1TL le de sol funciona todo el día) que avisa los porcentajes de enfermedades o radiaciones cercanos, configurable para que suene alertando o no haga ningún ruido para mayor discreción. Pequeña pantalla usualmente en el antebrazo. ",
    rareza: "C",
    costo: 2000
  }, 
  {
    nombre: "Droide Médico",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Medicina +8 o puede cargarse hasta con 30% de boquín y curar con una rada de 20. (es más lento que una persona, 3TC una curación rápida).",
    rareza: "A",
    costo: 6000
  },
   {
    nombre: "Drug Dealer",
    tipo: cyberItem,
    descripcion: "Implante de uso único",
    efecto: "Cuando caes inconciente por HP te cura 4D6, +3 Fortaleza, +2 Destreza por 1D4+2 tc. Luego perdés 1 Espíritu",
    rareza: "A",
    costo: 3000
  }, 
  {
    nombre: "Espada de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armaduras ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 12 // +11 // 70hp // Bonif +4 //",
    rareza: "A",
    costo: 4750
  }, 
  {
    nombre: "FlashHand",
    tipo: cyberItem,
    descripcion: "Luz aturdidora bajo muñeca",
    efecto: "Los cercanos que la vean sufren una penalización en movimientos de -1D10 (cada uno ra el suyo) por 1D3 tc",
    rareza: "D",
    costo: 1429
  }, 
  {
    nombre: "Founder 90001",
    tipo: cyberItem,
    descripcion: "Rastreador tecnológico",
    efecto: "Encuentra CUALQUIER item CP en 10m a la redonda (si por alguna razón mágica está oculto no). 2 turnos quieto",
    rareza: "D",
    costo: 2857
  }, {
    nombre: "Granada",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Explosión 40+3D6",
    rareza: "B",
    costo: 1800
  }, 
  {
    nombre: "Granada de pulso",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Toda la tecnología CP deja de funcionar en un radio de 5M, durante 1D4+1 TC",
    rareza: "A",
    costo: 3250
  }, 
  {
    nombre: "Guadaña de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armaduras ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 12 // +14 // 400hp // Bonif +2 //",
    rareza: "A",
    costo: 5500
  },
  {
    nombre: "Hacha de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "(el filo vibra, al cortar traspasa cualquier armaduras ignorando su bonif, a las 3 veces que golpea en la misma parte derrite el armor) 12 // +14 // 400hp // Bonif +2 /",
    rareza: "A",
    costo: 5500
  },
  {
    nombre: "Hammer FIST",
    tipo: cyberItem,
    descripcion: "Módulo de ataque propulsado",
    efecto: "Carga 1tc, el próximo golpe a mano limpia tendrá +4 Pelea +8D6 daño. HP=40",
    rareza: "C",
    costo: 4000
  },
  {
    nombre: "HeadGear",
    tipo: cyberItem,
    descripcion: "Casco para hackear ",
    efecto: "Tiradas tecnológicas +4, +8pt RES",
    rareza: "B",
    costo: 3600
  }, 
  {
    nombre: "Heavy SMG",
    tipo: cyberItem,
    descripcion: "Ametralladora Media (30 balas)",
    efecto: "Daño 30+1D10 / 4 ros TC (dificultad 20 x ro) / -1 Arma Distancia /Ráfaga 2D20",
    rareza: "A",
    costo: 10500
  }, 
  {
    nombre: "Holo Academycs",
    tipo: cyberItem,
    descripcion: "Sistema holográfico aprendizaje ",
    efecto: "Se puede usar en party. +3 Aprendizaje, +3 Enseñanza. Cargado ene 1tl de autonomía",
    rareza: "C",
    costo: 2857
  }, 
  {
    nombre: "Holo Clothes",
    tipo: cyberItem,
    descripcion: "Ocupa 1 equipamiento magic",
    efecto: "Los cambios de temperatura te afectan 50% menos. Tenés 40% de que Alquimias y enferemedades no te afecten.",
    rareza: "B",
    costo: 5600
  }, 
  {
    nombre: "Holo Proyector",
    tipo: cyberItem,
    descripcion: "Crea una pantalla holográfica",
    efecto: "Crea una copia holográfica tuya para evitar un ataque sorpresivo.",
    rareza: "C",
    costo: 571
  }, 
  {
    nombre: "Hydro Subsidium",
    tipo: cyberItem,
    descripcion: "Traje de buzo avanzado",
    efecto: "Puede soportar profundidades alsimas, fríos bajos y hasta un TL sin salir a la superficie",
    rareza: "B",
    costo: 6000
  }, 
  {
    nombre: "Infrareloj Datatel",
    tipo: cyberItem,
    descripcion: "Localiza cosas",
    efecto: "Siempre que res por LOOT hacé 2 radas y quedate con tu favorita",
    rareza: "A",
    costo: 3500
  }, 
  {
    nombre: "Kan-Eda 4cm Rail Cannon",
    tipo: cyberItem,
    descripcion: "Rifle Láser (1 Tiro)",
    efecto: "Daño 50+2D10 / rayo constante permite re rar con -6 (+2xlvl) para golpear otra parte u otro PJ / -4 Arma distancia / 1 TC recargar disparos",
    rareza: "S",
    costo: 22000
  }, 
  {
    nombre: "Lanza de Neon",
    tipo: cyberItem,
    descripcion: "",
    efecto: "13 // +15 // 80hp // Bonif +4 // al cortar traspasa cualquier armadura no mágica ",
    rareza: "S",
    costo: 8000
  }, 
  {
    nombre: "Latom Shin-RA",
    tipo: cyberItem,
    descripcion: "Lanzallamas (1D4+3 TC)",
    efecto: "Daño 20+2D6 / Este daño va a 1D6 locaciones al mismo empo/ 50% de prolongarse otro TC, -20% por c/TC que pase /-3 Arma Dist.",
    rareza: "A",
    costo: 10000
  }, 
  {
    nombre: "Lector de magia agresiva (lentes)",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Le permite al usuario ver los efectos invisibles y tratar de esquivarlos",
    rareza: "S",
    costo: 7333
  }, 
  {
    nombre: "Log Pose",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Set de 2 Brújulas digitales con diseño de Radar, cada una marca hacia dónde está la otra. Disposivo autónomo solar (conque 1TL le de sol funciona todo el día)",
    rareza: "A",
    costo: 3500
  }, 
  {
    nombre: "MedicGear Abs+Pecho",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "S",
    costo: 6667
  },
  {
    nombre: "MedicGear Brazos",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "A",
    costo: 5000
  },
  {
    nombre: "MedicGear Casco",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "A",
    costo: 3000
  },
  {
    nombre: "MedicGear Piernas",
    tipo: cyberItem,
    descripcion: "Armadura médica",
    efecto: "Armor +7, Médico +1. Si de un golpe le hacen 35p revienta",
    rareza: "A",
    costo: 5000
  },
   {
    nombre: "Meta Warhammer",
    tipo: cyberItem,
    descripcion: "Shotgun (8 balas)",
    efecto: "Distancia Daño 35+1D12/ cerca Daño 35+2D12 / 2 ros TC (dif a distancia 35 x ro, cerca 15) / -5 Arma Distancia",
    rareza: "S",
    costo: 16667
  }, 
  {
    nombre: "MiKoto Casco Omega",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Casco al que se le pueden comprar chips de mejoras en cualquier mercader, da +6 a RES si se rompe de golpes los upgrades se salvan, tirada de Tecnología 20. UPGRADES: $4000. NightVision $5000 // Purificador de aire $6000 // Percibir +3 $8000 // Rastrear +4 $8000 // Senr magia +3 $8000 //Reconocimiento de Bountys por rostro $5000 // Análisis facial Empáco +3 $8000 // Filmación úlmos 15 min $6000 // Apertura sombrilla para evitar lluvias $3000 // Tasación +4 $7000 // Nulifica el efecto de las bombas de humo o luz $5000 ",
    rareza: "S",
    costo: 16667
  }, 
  {
    nombre: "MiKoto Chip",
    tipo: cyberItem,
    descripcion: "Detector de mentiras",
    efecto: "Empático +4",
    rareza: "A",
    costo: 4000
  }, 
  {
    nombre: "MiKoto Controlador",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Brazalete autónomo solar (conque 1TL le de sol funciona todo el día) que controla las pulsaciones y ritmos cardíacos. Cuando el usario se altera le dá una pequeña descarga de 1Hp en cada parte del cuerpo y le permite rar autocontrol+8 para calmarse",
    rareza: "C",
    costo: 1714
  }, {
    nombre: "MiKoto HoloLens",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Permite marcar a un objevo y da Descubrir +5 para encontrarlo si se esconde o mueve. Nulifica el efecto de las bombas de humo o luz.",
    rareza: "A",
    costo: 4150
  }, 
  {
    nombre: "MiKoto Ignis",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ideal para viajeros, un droide que una vez al día cocina o te ayuda a cocinar con +8 en el tipo de comida que desees, es a energía solar",
    rareza: "B",
    costo: 3600
  }, 
  {
    nombre: "MiKoto Opcs",
    tipo: cyberItem,
    descripcion: "Ojos ampliados",
    efecto: "Esquivar +1, Descubrir +3, Conducir +2, Lanzar +2, Magia -6. Requiere una operación media (un solo ojo no ene efectos, todo da +1 por LVL usuario)",
    rareza: "A",
    costo: 7500
  },{
    nombre: "MiKoto Scanner",
    tipo: cyberItem,
    descripcion: "Lector de ondas mágicas",
    efecto: "Magia +2, sabe qué % consume cada O-Part tras verla, intenta explicar lo que hace un O-Part en una palabra (3 usos diarios)",
    rareza: "A",
    costo: 6500
  },
  {
    nombre: "MiKoto shield",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupa T5, da +7 al bloqueo, -2 Destreza, y ene 110Hp, que se pueden ir regenerando con Reparar 30 10hp con 70 de chatarra. Los daños por disparos de 34 o menos simplemente no pasan. Se puede Lanzar con Mínimo de FUE 8 y suma +10 de daño lanzar, como ene giroscopio y estabilizador puede volver o quedarse de pie para servir como cobertura en un roteo. Como uso único se puede activar su autodetonación de 0 a 15 segundos explotando en un daño de área de 40+3D8.",
    rareza: "S",
    costo: 10667
  },
  {
    nombre: "Militech M97",
    tipo: cyberItem,
    descripcion: "Camuflaje óptico fullbody",
    efecto: "Mientras estés inmóvil +12 Sigilo, en movimiento VENTAJA",
    rareza: "S",
    costo: 12667
  }, 
  {
    nombre: "Mochila electromagnéca",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Si llevás esto no podés tener mochilas con slots. Cuando detecta disparos de armas te da +8 en Esquivar. Dura 1TL por día.",
    rareza: "A",
    costo: 8500
  }, 
  {
    nombre: "MonoVision",
    tipo: cyberItem,
    descripcion: "Implante óptico 180°",
    efecto: "Ignora aturdimientos visuales, +4 descubrir, +4 alerta, +3 pilotar, -4 magia, +1 inmidar. Cirugía menor",
    rareza: "C",
    costo: 3714
  }, 
  {
    nombre: "Muñequera afilada",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Daño +3D6 solo con PELEA",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "Muñequera Mortal",
    tipo: cyberItem,
    descripcion: "Vibra (3 veces x día)",
    efecto: "Daño +3D6 solo con PELEA / se puede gastar una carga para sumar +2D10 daño",
    rareza: "A",
    costo: 6000
  }, 
  {
    nombre: "Mustang Arms Mark II",
    tipo: cyberItem,
    descripcion: "Pistola Pesada (13 balas)",
    efecto: "Daño 30+2D6 / 3 ros TC (dificultad 11 x ro) / -2 Arma Distancia",
    rareza: "A",
    costo: 6500
  }, 
  {
    nombre: "Nano Feromonas x8",
    tipo: cyberItem,
    descripcion: "",
    efecto: "C/píldora +3 Seductor. En el acto sexual todas tus radas aumentan 70%. Autocontrol 20 para no generar adicción, a las 3 fallas gana el defecto de adicto",
    rareza: "C",
    costo: 857
  }, 
  {
    nombre: "Nano Gear",
    tipo: cyberItem,
    descripcion: "Armadura fullbody",
    efecto: "Armor+6 en c/parte. Un golpe de 30p lo revienta. C/parte Puede volverse transparente",
    rareza: "S",
    costo: 13333
  }, 
  {
    nombre: "Neuro C4",
    tipo: cyberItem,
    descripcion: "Explosivos a distancia",
    efecto: "Plantá C4 y dinamitá con el pensamiento. Daño 40+6D6",
    rareza: "B",
    costo: 4400
  }, 
  {
    nombre: "Nova 757 Cityhunter",
    tipo: cyberItem,
    descripcion: "Pistola Pesada (6 balas)",
    efecto: "Daño 30+3D6 / 2 ros TC (dificultad 17 x ro) / -2 Arma Distancia",
    rareza: "B",
    costo: 4400
  }, 
  {
    nombre: "Nutrisuplemento",
    tipo: cyberItem,
    descripcion: "Alimento por 24hs",
    efecto: "Te manene perfectamente hidratado, con grasas y calores adicionales. Tirar Res Veneno, si pifia te desmayás por 1TL",
    rareza: "D",
    costo: 429
  }, 
  {
    nombre: "Ojo Remoto",
    tipo: cyberItem,
    descripcion: "Ojo espía",
    efecto: "Tiene Sigilo 40. Recibís la transmisión AV a una CyberTerminal. Si tenés Remote Gear puede desplazarse con Atlesmo 20",
    rareza: "C",
    costo: 571
  }, 
  {
    nombre: "Panel solar",
    tipo: cyberItem,
    descripcion: "Ideal para vehículos",
    efecto: "1 panel da energía a un vehículo pequeño (o dos items chicos), 2 paneles a un tanque de criogenia. Al primer golpe se rompe",
    rareza: "D",
    costo: 1143
  },
   {
    nombre: "Pies Magnécos",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Permite caminar o correr sobre superficies metálicas, mediante una cirugía leve",
    rareza: "D",
    costo: 857
  }, 
  {
    nombre: "Pies Rollers",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Atlesmo +3",
    rareza: "D",
    costo: 2000
  }, 
  {
    nombre: "Pistolera",
    tipo: cyberItem,
    descripcion: "Espacio extra para 1 pistola",
    efecto: "Se puede ubicar en cualquier extremidad, mediante una cirugía leve",
    rareza: "D",
    costo: 1143
  }, 
  {
    nombre: "Procesador de Lenguaje",
    tipo: cyberItem,
    descripcion: "Interpreta por vos",
    efecto: "Linguisca x2 (antes de rar el dado y sin aplicar espíritu o voluntad)",
    rareza: "D",
    costo: 1714
  }, {
    nombre: "Remington Gyro-Rifle",
    tipo: cyberItem,
    descripcion: "Sniper (6 balas",
    efecto: "Daño 35+2D6 / 2 tiros TC (dificultad 30 x tiro) / -4 Arma Dist (moviendose) / +4 Arma Distancia (quieto) / anula negativos x dist hasta -10",
    rareza: "S",
    costo: 20000
  }, 
  {
    nombre: "Remote Gear",
    tipo: cyberItem,
    descripcion: "Maneja cyber items a distancia",
    efecto: "Controla cosas hackeadas. Una vez por mes +1 Espíritu si usás 1TL para jugar",
    rareza: "D",
    costo: 5143
  }, 
  {
    nombre: "Ruger MKII",
    tipo: cyberItem,
    descripcion: "Pistola Ligera (13 balas)",
    efecto: "Daño 25+2D6 / 2 ros TC (dificultad 15 x tiro) / +1 Arma DIstancia",
    rareza: "D",
    costo: 1143
  },{
    nombre: "S&W Handcannon",
    tipo: cyberItem,
    descripcion: "Pistola Pesada (2 balas)",
    efecto: "Daño 40+2D10 / 2 ros TC (dificultad 25 x ro) / -4 Arma Distancia",
    rareza: "A",
    costo: 7500
  },
  {
    nombre: "Sonic Shield",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupa T3, da +5 al bloqueo, -1 Destreza, reduce el daño no mágico en un 20% y ene 90Hp, que se pueden ir regenerando con Reparar 30 10hp con 90 de chatarra.",
    rareza: "A",
    costo: 7500
  },
  {
    nombre: "Stolbovoy",
    tipo: cyberItem,
    descripcion: "Pistola Media (14 balas)",
    efecto: "Daño 30+2D6 / 3 ros TC (dificultad 14 x ro) / -2 Arma Distancia",
    rareza: "B",
    costo: 3600
  }, 
  {
    nombre: "Tech Raven",
    tipo: cyberItem,
    descripcion: "Soporte para Técnicos",
    efecto: "Reparar/Construír +5, Tecnológico +3, Pilotar +2, Conducir +2",
    rareza: "B",
    costo: 5600
  }, 
  {
    nombre: "Techno Katana 2B",
    tipo: cyberItem,
    descripcion: "Katana Autónoma",
    efecto: "Como Katana normal 11 // +14 / Si tenés CHIP ARMA INTELIGENTE: Ataca por su cuenta emulando LANZAR y puede ocupar T0 en inventario ",
    rareza: "S",
    costo: 16000
  }, 
  {
    nombre: "Tecnoestabilizador",
    tipo: cyberItem,
    descripcion: "Inyector y estabilizador",
    efecto: "Cura 5HP al instante, Médico +3. $500 recarga",
    rareza: "B",
    costo: 3200
  }, 
  {
    nombre: "TeknoBird",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Ocupan T2, permite desplazarse a gran altura y velocidad volando todo un TL, requiere 2TL solares para cargarse. Avanza el triple que si fuera 1TL en auto. Si se usan en combate dan -7 en DES, pero se puede ganar mucha altura o ulizar para escapar",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Torreta solar (1TL",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Viene sin arma, se le puede montar la que gustes. Tiene 80hp, sigilo 18pts , Arma distancia 25pts. Se le pueden cargar figuras aliadas para que no ataque.",
    rareza: "C",
    costo: 2286
  }, 
  {
    nombre: "Trauma Abdomen",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Trauma brazo der",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Trauma brazo izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Trauma casco",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Trauma Pecho",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Trauma pierna izq",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Trauma pierna der",
    tipo: cyberItem,
    descripcion: "",
    efecto: "-9 daño, +1 medicina, cada dos partes - 1 DES",
    rareza: "S",
    costo: 5333
  }, 
  {
    nombre: "Tsunami Arms Ramjet",
    tipo: cyberItem,
    descripcion: "Rifle de energía (1D4 disparos)",
    efecto: "Daño 40+1D12 / rayo constante permite re tirar con -6 (+2 x lvl) para golpear otra parte u otro PJ / +2 Arma distancia / 1 TC recargar disparos ",
    rareza: "S",
    costo: 18000
  }, 
  {
    nombre: "Tubo de Criogenia",
    tipo: cyberItem,
    descripcion: "",
    efecto: "Mientras esté conectado manene vivo algo dentro. Cargada ene 2tl de autonomía",
    rareza: "S",
    costo: 8000
  }, 
  {
    nombre: "Visor OpTech",
    tipo: cyberItem,
    descripcion: "Binoculares",
    efecto: "Hasta 1500m. Infrarrojo",
    rareza: "D",
    costo: 1714
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  },
   {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  }, 
  {
    nombre: "",
    tipo: cyberItem,
    descripcion: "",
    efecto: "",
    rareza: "",
    costo: 0
  },

]

export default data