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
  },{
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
  },{
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