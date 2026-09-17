/**
 * Bloc 2 de l'índex:
 * "Consignes detallades per a cada sortida del seguici popular"
 *
 * Per a cada sortida es mantenen sempre els mateixos quatre subapartats
 * operatius, tal com demana el document:
 *   1. Punts d'aigua
 *   2. Punts de seguretat i d'emergència
 *   3. Presència de la Comissió de Festa Major
 *   4. Presència del voluntariat
 *
 * Quan un subapartat no té contingut al document original, es deixa buit de
 * manera explícita perquè la interfície en pugui mostrar l'estat corresponent.
 *
 * L'índex del document agrupa les tres matinals del 23 sota un sol epígraf
 * («MATINALS DE SANTA TECLA»). Aquí surten com a tres sortides independents
 * perquè tenen hora, recorregut, participants i desplegament propis; les
 * indicacions generals i el voluntariat comuns es repeteixen a totes tres.
 */

export const DIES = [
  { id: '2026-09-20', etiqueta: 'Diumenge 20', llarg: 'Diumenge 20 de setembre' },
  { id: '2026-09-22', etiqueta: 'Dimarts 22', llarg: 'Dimarts 22 de setembre' },
  { id: '2026-09-23', etiqueta: 'Dimecres 23', llarg: 'Dimecres 23 de setembre' },
  { id: '2026-09-26', etiqueta: 'Dissabte 26', llarg: 'Dissabte 26 de setembre' },
]

/** Indicacions i voluntariat comuns a les tres Matinals de Santa Tecla. */
const MATINALS_GENERALS = [
  'En cas de pluja abundant o de qualsevol emergència que pugui afectar el desenvolupament de la cercavila, aquesta quedarà suspesa automàticament mitja hora abans de començar la primera de les matinals. La decisió serà inapel·lable. En cas de pluja de baixa intensitat, previsió de pluja o si plou un cop iniciada qualsevol cercavila de la Matinal, la Comissió prendrà les decisions oportunes i ho comunicarà als diversos grups per WhatsApp.',
  'Es demana que l’acompanyament de Gegants, Cabeçuts, Bèsties i Balls Populars per part de familiars d’infants sigui el mínim imprescindible per tal de realitzar unes cercaviles lluïdes i on el públic pugui gaudir-ne.',
  'En acabar la Matinal a la Fragata, la Comissió obsequiarà els infants participants amb un petit esmorzar segons vagin arribant els balls. Prèviament es repartiran tiquets per colla.',
]

const MATINALS_VOLUNTARIAT = {
  hiHa: true,
  nota: 'Voluntariat comú a les tres Matinals de Santa Tecla.',
  grups: [
    {
      rol: '5 voluntaris per l’esmorzar',
      punts: [
        {
          lloc: 'Fragata',
          persones: [
            'Jesús Miramon',
            'Jep Estrada',
            'David Harding',
            'Jonatan Martínez',
            'Pol Meseguer',
          ],
        },
      ],
    },
  ],
}

const IMPORTANT_PIROTECNIA =
  'IMPORTANT: la pirotècnia de les bèsties infantils ha d’estar emmagatzemada en pots metàl·lics no hermètics. Queden prohibides les bosses de plàstic o de tela, capses de cartó, motxilles i altres elements tèxtils. Tanmateix, segons el Reglament de Pirotècnia i la Instrucció Tècnica Complementària ITC-18, les colles amb infants entre 10 i 16 anys han de portar carretilles infantils, siguin sense tro o amb tro reduït. En cap dels casos poden llançar carretilles de la categoria F3 (les d’adult), que requereixen la majoria d’edat (18 anys). Si es detecta que no es compleix amb aquestes indicacions, la bèstia quedarà exclosa de la cercavila i el responsable de la inscripció podrà ser sancionable.'

export const SORTIDES = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'cercavila-gegants',
    titol: 'Cercavila de Gegants i Cabeçuts, i exhibició de balls populars',
    tipus: 'Cercavila',
    dia: '2026-09-20',
    data: '20 de setembre',
    hora: '10:00',
    horaText: '10 h',
    resum:
      'Cercavila infantil de gegants, cabeçuts i dracs sense foc des de la plaça de l’Ajuntament fins a la Fragata, i exhibició de balls populars.',
    ordreLliure: [
      {
        titol: 'Gegants, cabeçuts i dracs sense foc',
        nota: 'Exposats a la plaça de l’Ajuntament entre les 9.30 i les 9.45 h, per ordre d’inscripció.',
        blocs: [
          {
            musica: 'escola-grallers',
            colles: [
              { element: 'gegants-montornes' },
              { element: 'gegants-vila-infantils' },
              { element: 'gegants-moros-petits' },
              { element: 'gegants-moros-mitjans' },
            ],
          },
          {
            musica: 'gts-marcets',
            colles: [
              { element: 'gegant-rodolf' },
              { element: 'la-pepita' },
              { element: 'gegant-bs' },
              { element: 'tiet-evaristo' },
              { element: 'colla-jove-ripoll' },
              { element: 'cubanitos-mojito' },
            ],
          },
          {
            musica: 'grallers-la-sitja',
            colles: [
              { element: 'cubanita-xalet' },
              { element: 'pagesos-can-pei' },
              { element: 'poc-a-poc' },
              { element: 'mil-quatrecents' },
              { element: 'jordi-jovenet' },
              { element: 'colla-pesigolla' },
            ],
          },
          {
            musica: 'gts-marcets',
            colles: [
              { element: 'drac-verdet', nota: 'bestiari sense foc' },
              { element: 'colla-espurnes', nota: 'bestiari sense foc' },
              { element: 'giravols', nota: 'bestiari sense foc' },
              { element: 'draguipatis', nota: 'bestiari sense foc' },
              { element: 'ferafocs', nota: 'bestiari sense foc' },
              { element: 'mini-dracs', nota: 'bestiari sense foc' },
            ],
          },
          {
            musica: null,
            musicaNota: 'El document no els assigna cap colla de músics.',
            colles: [
              { element: 'colla-paao', nota: 'bestiari sense foc' },
              { element: 'escalat-amics', nota: 'bestiari sense foc' },
              { element: 'drac-gorra-blava', nota: 'bestiari sense foc' },
              { element: 'colla-espurna', nota: 'bestiari sense foc' },
              { element: 'somnis-fm', nota: 'bestiari sense foc' },
              { element: 'dragonet', nota: 'bestiari sense foc' },
            ],
          },
        ],
      },
      {
        titol: 'Balls populars',
        nota: 'Es preparen a la Palmera, segons ordre de sortida.',
        blocs: [
          { musica: 'gts-marcets', colles: [{ element: 'cabecuts', nom: 'Ball de Cabeçuts' }] },
          { musica: 'gts-marcets', colles: [{ nom: 'Ball de Bastons' }] },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de Gitanes de la Vila' }] },
          { musica: 'colla-bon-vent', colles: [{ nom: 'Ball de Cercolets' }] },
          { musica: 'colla-guillaumes', colles: [{ nom: 'Ball de Pastorets' }] },
          { musica: 'colla-joan-olarte', colles: [{ nom: 'Ball de Panderetes' }] },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de Cintes' }] },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de Gitanes ABPS' }] },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de la Moixiganga' }] },
        ],
      },
    ],
    desenvolupament: [
      'Entre les 9.30 i les 9.45 h, tots els gegants, cabeçuts infantils i dracs sense foc han d’estar exposats a la plaça de l’Ajuntament en posició de sortida (per ordre d’inscripció).',
      'Els gegants, cabeçuts i dracs sense foc que estiguin exposats al Mercat Vell els podran treure entre les 9.30 i les 9.45 h.',
      'A partir de les 10 h i des de la plaça de l’Ajuntament s’inicia la cercavila dels Gegants i cabeçuts. En paral·lel, la resta de balls populars es prepara a la Palmera segons ordre de sortida.',
      'La Cercavila de Balls Populars arrancarà seguidament de la sortida dels Gegants i cabeçuts infantils.',
      'En arribar tots els Gegants, Cabeçuts i Dracs infantils sense foc a la plaça de la Fragata, faran 1 ballada conjunta. En finalitzar, es demana que s’abandoni l’espai i els que estaven exposats al Mercat Vell tornin a lloc quan acabi la cercavila.',
      'Quan arribin els balls a la Fragata, i un cop finalitzada la ballada final de Gegants, Cabeçuts i Dracs infantils sense foc, es donarà tret de sortida a l’Exhibició de Balls Populars, començant amb els Cabeçuts i seguint amb el mateix ordre que la cercavila, afegint-se al final una demostració de la Colla Jove de Castellers de Sitges acompanyats de l’Escola de Grallers de Sitges.',
    ],
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de la cercavila i/o la mostra, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla i familiars per WhatsApp.',
    indicacions: [],
    recorregut:
      'Plaça de l’Ajuntament → Cap de la Vila → Parellades → Sant Pau → Passeig de la Ribera (banda muntanya) → Fragata.',
    participantsExtra: [
      {
        element: 'castellers',
        nota: 'Tanquen l’exhibició amb una demostració, acompanyats de l’Escola de Grallers de Sitges.',
      },
    ],
    puntsAigua: [
      { lloc: 'Plaça de l’Ajuntament', detall: 'font de la Palmera' },
      { lloc: 'Fragata' },
    ],
    comissio: [
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio: '1 persona + President obrint cercavila amb els Gegants',
            persones: ['Raquel Llorià', 'Xavier Salmerón (President)'],
            enAcabar:
              'Es queden a la Fragata a controlar l’ordre d’actuacions dels balls populars en l’exhibició.',
          },
          {
            descripcio: '1 parella fixa donant el tret de sortida i vetllant pel transcurs de la cercavila',
            persones: ['Adrià Ruiz', 'Vinyet Casolivé'],
            enAcabar: 'Acompanyaran les Gitanes ABPS i la Moixiganga fins a la Fragata.',
          },
        ],
      },
      {
        lloc: 'Entre els Bastons, Gitanes Vila i Cercolets',
        assignacions: [
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la cercavila',
            persones: ['Marta Juez', 'Irene Martínez'],
          },
        ],
      },
      {
        lloc: 'Entre els Pastorets, Panderetes i Cintes',
        assignacions: [
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la cercavila',
            persones: ['Clàudia Sauret', 'Maria Lluís'],
          },
        ],
      },
      {
        lloc: 'Entre Gitanes ABPS i la Moixiganga',
        assignacions: [
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la cercavila',
            persones: ['Adrià Ruiz', 'Vinyet Casolivé'],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'El document no assigna voluntariat a aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'cercavila-dracs',
    titol: 'Cercavila de Dracs i exhibició dels Diables infantils',
    tipus: 'Cercavila',
    dia: '2026-09-20',
    data: '20 de setembre',
    hora: '11:30',
    horaText: '11.30 h',
    resum:
      'Cercavila de bèsties infantils amb foc des del Pont d’en Domènech fins a la Fragata, i exhibició del ball parlat dels Diables.',
    ordreLliure: [
      {
        titol: 'Bèsties infantils amb foc',
        nota: 'Exposades al Pont d’en Domènech entre les 11 i les 11.15 h, per ordre d’inscripció. Encapçalen la cercavila l’Àliga infantil i el Drac Bèstia.',
        blocs: [
          {
            musica: null,
            colles: [
              { element: 'aliga-infantil' },
              { element: 'drac-bestia' },
              { element: 'drac-croqueta' },
              { element: 'piranya' },
              { element: 'drac-juvenil-ribes' },
              { element: 'mega-trosky' },
              { element: 'trosky' },
              { element: 'drac-gronkel' },
              { element: 'drac-cremat' },
              { element: 'gatosaurio' },
              { element: 'drac-pelat' },
              { element: 'puff' },
              { element: 'llampec-mort-pudent' },
            ],
          },
        ],
      },
      {
        titol: 'Colles de Diables',
        nota: 'Es preparen al Passeig, davant dels gronxadors, segons ordre de sortida.',
        blocs: [
          {
            musica: null,
            colles: [
              { element: 'diables-vella' },
              { element: 'diables-jove' },
              { element: 'diables-abps' },
            ],
          },
        ],
      },
    ],
    desenvolupament: [
      'Entre les 11 i les 11.15 h, totes les Bèsties infantils amb foc han d’estar exposades al Pont d’en Domènech en posició de sortida (per ordre d’inscripció).',
      'Les Bèsties que estiguin exposades al Mercat Vell s’hauran de treure entre les 10.45 i les 11 h.',
      'A partir de les 11.30 h i des del Pont d’en Domènech s’inicia la cercavila de Bèsties participants segons ordre de col·locació al Passeig, i encapçalant la cercavila l’Àliga infantil i el Drac Bèstia.',
      'La Cercavila de les colles de Diables arrancarà seguidament de la sortida de les Bèsties infantils. Els primers coets es llancen a partir del Pont d’en Domènech.',
      'La cercavila s’acabarà abans d’arribar a la Fragata (a l’altura de l’inici de les embarcacions del Club Nàutic). Un cop hagi arribat l’última bèstia, i sempre que la mostra de balls infantils hagi acabat, es farà 1 encesa conjunta a la plaça de la Fragata. En finalitzar, es demana que s’abandoni l’espai i les Bèsties que estaven exposades al Mercat Vell tornin a lloc de forma immediata.',
      'Quan finalitzi la mostra de balls blancs (13 h aprox.), es donarà tret de sortida a l’Exhibició del Ball parlat dels Diables amb el mateix ordre que la cercavila.',
    ],
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de la cercavila i/o la mostra, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla i familiars per WhatsApp.',
    indicacions: [IMPORTANT_PIROTECNIA],
    recorregut: 'Pont d’en Domènech → Passeig de la Ribera → Fragata.',
    puntsAigua: [{ lloc: 'Fragata' }],
    comissio: [
      {
        lloc: 'Pont d’en Domènech',
        assignacions: [
          {
            descripcio: 'President obrint cercavila amb les Bèsties',
            persones: ['Xavier Salmerón (President)'],
            enAcabar: 'Es queda a la Fragata a controlar l’ordre d’actuacions de les colles de Diables.',
          },
          {
            descripcio: '1 parella fixa donant el tret de sortida i vetllant pel transcurs de la cercavila',
            persones: ['Gabri González', 'Mar Jaime'],
            enAcabar: 'Acompanyaran les colles de Diables.',
          },
        ],
      },
      {
        lloc: 'Entre les Bèsties',
        assignacions: [
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la cercavila',
            persones: ['Vinyet Baqués', 'Maria Junyent'],
          },
        ],
      },
      {
        lloc: 'Entre les Colles de Diables',
        assignacions: [
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la cercavila',
            persones: ['Gabri González', 'Mar Jaime'],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'El document no assigna voluntariat a aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'processo-civica',
    titol: 'Processó Cívica',
    tipus: 'Processó',
    dia: '2026-09-22',
    data: '22 de setembre',
    hora: '19:00',
    horaText: '19 h',
    resum:
      'Processó cívica des de l’ermita de Sant Sebastià, domicili de la Pendonista, fins a la plaça de l’Ajuntament.',
    ordre: [
      'gegants-vila',
      'gegants-americanos',
      'gegants-moros',
      'cabecuts',
      'diables-vella',
      'drac',
      'diables-jove',
      'aliga',
      'diables-abps',
      'bastons-jove',
      'bastons-noies',
      'gitanes-vila',
      'bastons-mitjana',
      'bastons-vella',
      'cercolets',
      'pastorets',
      'panderetes',
      'cintes',
      'gitanes-abps',
      'moixiganga',
      'banda',
    ],
    ordreNota: 'La Banda tanca el seguici amb les autoritats.',
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de la processó, es convocarà una reunió entre la Comissió i els Caps de Colla a les 18.15 h a l’Auditori del Miramar per debatre la situació, ja que mitja hora abans de la Processó, la mateixa Comissió, l’Ajuntament i la Parròquia hauran de prendre una decisió conjunta i que serà inapel·lable. El protocol contempla la possibilitat de modificar els horaris i recorreguts en funció de la situació. Si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla i als voluntaris dels balls.',
    indicacions: [
      'HORA I LLOC: a les 19 h puntuals des de l’ermita de Sant Sebastià, a l’Av. Balmins, 21, lloc triat com a domicili per part de la Pendonista de Santa Tecla i on estarà exposat el tabernacle de Santa Tecla a l’hora de sortir.',
      'Els Gegants, Drac i Àliga hauran d’estar col·locats a les 18.30 h a la façana de l’ermita de Sant Sebastià. La resta del seguici estarà col·locat al corraló de darrere del cementiri. IMPORTANT: es prega que els balladors vagin arribant pel darrere un cop iniciada la cercavila, especialment timbalers de les colles de foc.',
      'Tots els entremesos i balls (incloses les colles de foc, però sense llançar coets) han de començar la seva cercavila amb el seu ball i les seves músiques des de davant de la porta de l’Ermita de Sant Sebastià. El foc podrà llançar coets uns 30 m més avall (hi haurà una persona de la Comissió indicant l’inici). Al carrer de Port de n’Alegre es passarà per la banda de mar.',
      'ATENCIÓ! Es demana no aturar ni fer cap encesa especial sempre que no s’hagi comunicat prèviament.',
      'La Banda tocarà una peça un cop la Santa s’incorpori a la Processó Cívica des del lloc designat per la Pendonista.',
      'Tots els balls i entremesos (excepte les Gitanes de la Vila i la Moixiganga) esperaran la Santa a la plaça de l’Ajuntament fins que arribi al Baluard seguint la disposició del plànol.',
      'Els balls arribaran ballant fins a arribar a la seva ubicació. Els diables i bèsties hauran de fer l’última encesa davant de Can Quildo (Pastisseria Sabaté) i els timbalers podran continuar tocant fins a arribar a la seva ubicació sense fer cap parada.',
      'Les Gitanes de la Vila i la Moixiganga ballaran fins a la porta de la Parròquia. La Moixiganga s’hi quedarà plantada allà fins que entrin les autoritats. Les Gitanes de la Vila tornaran a ballar dins de la Parròquia, des del portal fins a l’altar, un cop arribi el tabernacle de Santa Tecla.',
      'La Banda entrarà al Baluard darrere les autoritats i tocarà durant l’entrada fins a la porta del Baluard.',
    ],
    recorregut:
      'Av. Balmins, 21 → Port de n’Alegre → Rafael Llopart → Sant Damià → Àngel Vidal → Cap de la Vila → Major → pl. de l’Ajuntament.',
    planols: [
      { src: './planols/processo-civica-sortida.png', titol: 'Col·locació a la sortida' },
      {
        src: './planols/processo-civica-ajuntament.png',
        titol: 'Disposició a la plaça de l’Ajuntament',
      },
    ],
    accessibilitat: [{ lloc: 'Carrer Rafel Llopart amb carrer Sant Damià' }],
    puntsAigua: [
      { lloc: 'Cantonada de mar de l’Ermita de Sant Sebastià', detall: 'inici de la Processó' },
      { lloc: 'C/ Sant Sebastià amb C/ Sant Damià' },
      { lloc: 'C/ Major, 47' },
      { lloc: 'Plaça de l’Ajuntament', detall: 'Oficina de Mediació' },
    ],
    comissio: [
      {
        lloc: 'Ermita de Sant Sebastià (inici de la cercavila)',
        assignacions: [
          {
            descripcio: 'President + 1 persona fixa donant la sortida de la Processó',
            persones: ['Xavier Salmerón (President)', 'Vinyet Baqués'],
            enAcabar: 'Aniran al Cap de la Vila.',
          },
          {
            descripcio: '1 persona fixa obrint la Processó amb els Gegants de la Vila i Gegants Americanos',
            persones: ['Raquel Llorià'],
            enAcabar: 'En arribar a l’Ajuntament, col·labora en la col·locació dels balls.',
          },
          {
            descripcio: '1 persona acompanyant els Gegants Moros i els Cabeçuts',
            persones: ['Adrià Ruiz'],
            enAcabar: 'En arribar a l’Ajuntament, col·labora en la col·locació dels balls.',
          },
          {
            descripcio:
              '1 parella acompanyant el Ball de Bastons colla jove, colla noies, i Gitanes de la Vila',
            persones: ['Irene Martínez', 'Marta Juez'],
            enAcabar: 'En arribar al Cap de la Vila, s’hi queden. Després van a la pl. de l’Ajuntament.',
          },
          {
            descripcio:
              '3 persones acompanyant el Ball de Bastons colla vella, Cercolets, Pastorets i Panderetes',
            persones: ['Paula Hidalgo', 'Maria Lluís', 'Vinyet Casolivé'],
            enAcabar:
              'En arribar a l’Ajuntament, s’hi queden a donar suport i col·laboren en la col·locació dels balls.',
          },
        ],
      },
      {
        lloc: 'Cable',
        assignacions: [
          {
            descripcio: '4 persones fixes vetllant pel transcurs de la Processó',
            persones: ['Gabri González', 'Maria Junyent', 'Aleix Ibáñez', 'Marta Artigas'],
            enAcabar:
              'Aniran a l’Ajuntament a donar suport i col·laboren en la col·locació dels balls.',
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '4 persones vetllant pel transcurs de la Processó',
            persones: ['Xavier Salmerón', 'Vinyet Baqués', 'Irene Martínez', 'Marta Juez'],
            enAcabar:
              'Aniran a l’Ajuntament a donar suport i col·laboren en la col·locació dels balls.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio: '12 persones + President vetllant pel transcurs de la Processó',
            persones: [
              'Raquel Llorià',
              'Adrià Ruiz',
              'Gabri Gónzalez',
              'Maria Junyent',
              'Irene Martínez',
              'Vinyet Baqués',
              'Aleix Ibáñez',
              'Marta Juez',
              'Paula Hidalgo',
              'Marta Lluís',
              'Vinyet Casolivé',
              'Xavier Salmerón (President)',
            ],
          },
        ],
      },
    ],
    voluntariat: {
      hiHa: true,
      grups: [
        {
          rol: '6 voluntaris acompanyant el seguici',
          punts: [
            { lloc: 'Ball de Cabeçuts', persones: ['Cristina Gràcia'] },
            {
              lloc: 'Colles de Foc',
              persones: ['Jordi Salmerón', 'Enric Massó', 'Joan Mas', 'Jesús Eroles'],
            },
            {
              lloc: 'Ball de Cintes, Gitanes ABPS, Moixiganga i Banda',
              persones: ['Pepi Martínez'],
            },
          ],
        },
        {
          rol: '3 voluntaris pels punts habilitats per a persones usuàries de cadira de rodes',
          punts: [
            {
              lloc: 'C/ Rafel Llopart amb C/ Sant Damià',
              persones: ['Jep Estrada', 'Jordi Sabaté', 'Jordi Izquierdo'],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'matinal-foc',
    titol: 'Matinal de Foc',
    tipus: 'Cercavila',
    grup: 'Matinals de Santa Tecla',
    dia: '2026-09-23',
    data: '23 de setembre',
    hora: '06:30',
    horaText: '6.30 h',
    resum:
      'Primera de les tres Matinals: bèsties infantils amb foc alternades amb les tres colles de Diables, des de la Biblioteca Santiago Rusiñol fins a la Fragata.',
    ordreLliure: [
      {
        titol: 'Ordre de les colles',
        nota: 'S’alternen les bèsties infantils amb les colles de diables que participen.',
        blocs: [
          {
            musica: null,
            colles: [
              { element: 'diables-vella' },
              { element: 'aliga-infantil' },
              { element: 'drac-bestia' },
              { element: 'drac-croqueta' },
              { element: 'piranya' },
              { element: 'drac-juvenil-ribes' },
              { element: 'mega-trosky' },
              { element: 'trosky' },
              { element: 'diables-jove' },
              { element: 'drac-gronkel' },
              { element: 'drac-cremat' },
              { element: 'gatosaurio' },
              { element: 'drac-pelat' },
              { element: 'escatat-de-mar' },
              { element: 'puff' },
              { element: 'llampec-mort-pudent' },
              { element: 'diables-abps' },
            ],
          },
        ],
      },
    ],
    indicacions: [
      'HORA I LLOC: a les 6.30 h puntuals des de la Biblioteca Santiago Rusiñol a la plaça de l’Ajuntament.',
      'Les Bèsties que estiguin exposades al Mercat Vell s’hauran de treure entre les 6.15 i les 6.30 h.',
      IMPORTANT_PIROTECNIA,
      ...MATINALS_GENERALS,
    ],
    recorregut:
      'Davallada → Barcelona → Àngel Vidal → Cap de la Vila → Parellades → Sant Josep → Espalter → pl. Pou Vedre → Bassa Rodona → Santa Tecla → Primer de Maig → pg. de la Ribera (tocant a mar) → Fragata.',
    puntsAigua: [
      { lloc: 'Plaça de l’Ajuntament', detall: 'font de la Palmera' },
      { lloc: 'Fragata' },
    ],
    puntsAiguaNota:
      'Al Mercat Vell també n’hi haurà per recollir, sota responsabilitat dels caps de colla.',
    comissio: [
      {
        lloc: 'Biblioteca Santiago Rusiñol (inici de la cercavila)',
        assignacions: [
          {
            descripcio: '1 parella fixa donant la sortida',
            persones: ['Vinyet Baqués', 'Marta Juez'],
            enAcabar: 'Anirà a la Fragata a col·laborar en la preparació i repartiment de l’esmorzar.',
          },
          {
            descripcio: '1 parella fixa obrint cercavila entre la colla Vella de Diables i l’Àliga Infantil',
            persones: ['Aleix Ibáñez', 'Mar Jaime'],
            enAcabar:
              'En arribar a la Fragata, col·laboren en la preparació i repartiment de l’esmorzar.',
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '2 persones fixes vetllant pel transcurs de la cercavila',
            persones: ['Irene Martínez', 'Vinyet Casolivé'],
            enAcabar: 'Aniran a la Fragata a col·laborar en la preparació i repartiment de l’esmorzar.',
          },
        ],
      },
    ],
    voluntariat: MATINALS_VOLUNTARIAT,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'matinal-gran',
    titol: 'Matinal Gran',
    tipus: 'Cercavila',
    grup: 'Matinals de Santa Tecla',
    dia: '2026-09-23',
    data: '23 de setembre',
    hora: '07:00',
    horaText: '7 h',
    resum:
      'Segona de les tres Matinals: gegants infantils i colles infantils dels balls populars, des del Baluard fins a la Fragata.',
    ordreLliure: [
      {
        titol: 'Ordre de les colles',
        blocs: [
          {
            musica: 'gts-marcets',
            colles: [
              { element: 'gegants-montornes' },
              { element: 'gegants-vila-infantils' },
              { element: 'gegants-moros-mitjans' },
            ],
          },
          {
            musica: 'escola-grallers',
            colles: [
              { element: 'colla-jove-ripoll' },
              { element: 'pagesos-can-pei' },
              { element: 'colla-pesigolla' },
            ],
          },
          {
            musica: null,
            musicaNota: 'El document no els assigna cap colla de músics.',
            colles: [
              { element: 'giravols', nota: 'bestiari sense foc' },
              { element: 'mini-dracs', nota: 'bestiari sense foc' },
              { element: 'colla-paao', nota: 'bestiari sense foc' },
            ],
          },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de Bastons. Colla 4' }] },
          { musica: 'gts-marcets', colles: [{ nom: 'Ball de Bastons. Colla 5' }] },
          { musica: 'colla-musixs', colles: [{ nom: 'Ball de Bastons. Colla 6' }] },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de Gitanes de la Vila. Colla 1' }] },
          { musica: 'colla-jan-lleida', colles: [{ nom: 'Ball de Gitanes de la Vila. Colla 2' }] },
          { musica: 'gts-marcets', colles: [{ nom: 'Ball de Bastons. Colla 7' }] },
          { musica: 'grallers-la-sitja', colles: [{ nom: 'Ball de Bastons. Colla 8' }] },
          { musica: 'colla-julian', colles: [{ nom: 'Ball de Cercolets. Colla 2' }] },
          {
            musica: 'colla-filibusters',
            colles: [{ nom: 'Ball de Pastorets. Colla 2' }, { nom: 'Ball de Pastorets. Colla 3' }],
          },
          { musica: 'colla-joan-olarte', colles: [{ nom: 'Ball de Panderetes' }] },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de Cintes. Colla 1' }] },
          { musica: 'colla-manel-vazquez', colles: [{ nom: 'Ball de Cintes. Colla 2' }] },
          {
            musica: 'escola-grallers',
            colles: [
              { nom: 'Ball de Gitanes ABPS. Colla 1' },
              { nom: 'Ball de Gitanes ABPS. Colla 2' },
            ],
          },
          { musica: 'escola-grallers', colles: [{ nom: 'Ball de la Moixiganga' }] },
        ],
        avis: 'El document escriu la colla de músics just després del ball que acompanya. Les dues colles de Gitanes ABPS i les dues de Pastorets comparteixen, cadascuna, una sola marca.',
      },
    ],
    indicacions: [
      'HORA I LLOC: a les 7 h puntuals des del Baluard.',
      'Els Gegants i cabeçuts que estiguin exposats al Mercat Vell s’hauran de treure entre les 6.30 i les 7 h.',
      ...MATINALS_GENERALS,
    ],
    recorregut:
      'Fonollar → Baluard Vidal i Quadras → Port de n’Alegre → Rafel Llopart → Sant Damià → Sant Sebastià → Jesús → Sant Bartomeu → Sant Gaudenci → Sant Francesc → Cap de la Vila → Parellades → Sant Pere → pg. de la Ribera (banda de muntanya) → Fragata.',
    puntsAigua: [
      { lloc: 'Plaça de l’Ajuntament', detall: 'font de la Palmera' },
      { lloc: 'Fragata' },
    ],
    puntsAiguaNota:
      'Al Mercat Vell també n’hi haurà per recollir, sota responsabilitat dels caps de colla.',
    comissio: [
      {
        lloc: 'Baluard amb C/ Fonollar (inici de la cercavila)',
        assignacions: [
          {
            descripcio: '1 persona fixa donant la sortida',
            persones: ['Maria Lluís'],
            enAcabar: 'Anirà al Cap de la Vila.',
          },
          {
            descripcio: '1 persona fixa obrint cercavila amb els Gegants d’en Montornès',
            persones: ['Raquel Llorià'],
            enAcabar:
              'En arribar a la Fragata, col·laboren en la preparació i repartiment de l’esmorzar.',
          },
          { descripcio: '1 persona controlant els músics', persones: ['Adrià Ruiz'] },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '2 persones fixes vetllant pel transcurs de la cercavila',
            persones: ['Irene Martínez', 'Vinyet Casolivé'],
            enAcabar: 'Aniran a la Fragata a col·laborar en la preparació i repartiment de l’esmorzar.',
          },
        ],
      },
    ],
    voluntariat: MATINALS_VOLUNTARIAT,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'matinal-petita',
    titol: 'Matinal Petita',
    tipus: 'Cercavila',
    grup: 'Matinals de Santa Tecla',
    dia: '2026-09-23',
    data: '23 de setembre',
    hora: '08:00',
    horaText: '8 h',
    resum:
      'Tercera de les tres Matinals: gegants petits, bestiari sense foc i les colles més petites dels balls, des de la plaça de l’Ajuntament fins a la Fragata.',
    ordreLliure: [
      {
        titol: 'Ordre de les colles',
        blocs: [
          {
            musica: 'escola-grallers',
            colles: [
              { element: 'gegants-moros-petits', nom: 'Gegants Moros petits de Sitges' },
              { element: 'gegant-rodolf' },
              { element: 'la-pepita' },
              { element: 'gegant-bs' },
              { element: 'tiet-evaristo' },
              { element: 'cubanitos-mojito', nom: 'Cubanito Moito' },
            ],
          },
          {
            musica: 'escola-grallers',
            colles: [
              { element: 'cubanita-xalet' },
              { element: 'poc-a-poc' },
              { element: 'mil-quatrecents' },
              { element: 'colla-espurnes' },
              { element: 'draguipatis' },
              { element: 'ferafocs' },
            ],
          },
          {
            musica: 'gts-marcets',
            colles: [
              { element: 'drac-verdet' },
              { element: 'escalat-amics' },
              { element: 'drac-gorra-blava' },
              { element: 'colla-espurna' },
              { element: 'somnis-fm' },
              { element: 'dragonet' },
            ],
          },
          { musica: 'gts-marcets', colles: [{ element: 'cabecuts', nom: 'Ball de Cabeçuts' }] },
          { musica: 'grallers-la-sitja', colles: [{ nom: 'Ball de Bastons. Colla 2' }] },
          { musica: 'colla-oriol-carbonell', colles: [{ nom: 'Ball de Bastons. Colla 3' }] },
          { musica: 'colla-bon-vent', colles: [{ nom: 'Ball de Cercolets. Colla 1' }] },
          { musica: 'colla-guillaumes', colles: [{ nom: 'Ball de Pastorets. Colla 1' }] },
        ],
      },
    ],
    indicacions: [
      'HORA I LLOC: a les 8 h puntuals des de la plaça de l’Ajuntament.',
      'Els Gegants i cabeçuts que estiguin exposats al Mercat Vell s’hauran de treure entre les 7.30 i les 8 h.',
      ...MATINALS_GENERALS,
    ],
    recorregut:
      'Pl. de l’Ajuntament → d’en Bosch → Davallada → Barcelona → Àngel Vidal → Cap de la Vila → Major → Nou → pg. de la Ribera → Fragata.',
    puntsAigua: [
      { lloc: 'Plaça de l’Ajuntament', detall: 'font de la Palmera' },
      { lloc: 'Fragata' },
    ],
    puntsAiguaNota:
      'Al Mercat Vell també n’hi haurà per recollir, sota responsabilitat dels caps de colla.',
    comissio: [
      {
        lloc: 'Plaça de l’Ajuntament (inici de la cercavila)',
        assignacions: [
          {
            descripcio: '1 persona fixa donant la sortida i controlant els músics',
            persones: ['Adrià Ruiz'],
            enAcabar: 'Anirà al Cap de la Vila.',
          },
          {
            descripcio: 'President obrint cercavila amb els Gegants',
            persones: ['Xavier Salmerón (President)'],
            enAcabar:
              'En arribar a la Fragata, col·labora en la preparació i repartiment de l’esmorzar.',
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '2 persones fixes vetllant pel transcurs de la cercavila',
            persones: ['Irene Martínez', 'Vinyet Casolivé'],
            enAcabar: 'Aniran a la Fragata a col·laborar en la preparació i repartiment de l’esmorzar.',
          },
        ],
      },
    ],
    voluntariat: MATINALS_VOLUNTARIAT,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'sortida-ofici',
    titol: 'Sortida d’Ofici',
    tipus: 'Acte',
    dia: '2026-09-23',
    data: '23 de setembre',
    hora: '12:00',
    horaText: '12 h',
    resum:
      'Sortida d’Ofici a la plaça de l’Ajuntament, amb dues passades dels Gegants i Cabeçuts, «Els Segadors» i exhibició castellera.',
    ordre: [
      'gegants-vila',
      'gegants-americanos',
      'gegants-moros',
      'cabecuts',
      'drac',
      'aliga',
      'diables-vella',
      'diables-jove',
      'diables-abps',
      'bastons-jove',
      'bastons-noies',
      'panderetes',
      'bastons-mitjana',
      'bastons-vella',
      'cintes',
      'gitanes-vila',
      'gitanes-abps',
      'pastorets',
      'moixiganga',
      'cercolets',
      'castellers',
    ],
    ordreNota: 'Les tres Colles del Ball de Diables surten amb els seus timbalers.',
    protocolPluja:
      'En cas de pluja abundant o de qualsevol emergència que pugui afectar el desenvolupament de la cercavila, aquesta quedarà suspesa automàticament quinze minuts abans de començar. La decisió serà inapel·lable. En cas de previsió de pluja o si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla.',
    indicacions: [
      'HORA: a les 12 h aproximadament. Tothom ha de ser puntual i es comença des del Baluard.',
      'La Cobla, abans de l’inici de la Sortida d’Ofici, es col·locarà a la tarima habilitada als Jardins del Doctor Robert i haurà de tocar tota l’estona fins que els Cabeçuts entrin a plaça a la segona passada (només està permès deixar de tocar quan està el foc).',
      'Els gegants, drac i àliga quedaran plantats durant tot l’Ofici en un lateral de la Parròquia excepte els Gegants Americanos, que per seguretat es quedaran dins de l’Ajuntament.',
      'Encapçala el seguici de la Sortida d’Ofici la Banda, que acompanya les autoritats fins a l’Ajuntament. La Banda dona la volta i es col·loca davant la palmera.',
      'Comença la primera passada: les tres colles de Gegants i els Cabeçuts passen per davant l’Ajuntament i donen la volta fins passat la palmera, preparats per a la segona passada.',
      'El Drac, primer, i l’Àliga, seguidament, fan només una encesa en el transcurs d’una única passada. Abans del Drac passen els seus timbalers sense aturar-se, i quan acaba l’Àliga passen els seus timbalers també sense aturar-se.',
      'Les tres colles de diables fan una passada conjunta. Sortiran des de davant el Baluard en formació i carregats amb una única encesa que s’encendrà a l’entrada de la plaça de l’Ajuntament passat el monument del Dr. Robert. Els timbalers de les tres colles han de tocar plegats i sense aturar-se des de davant el Baluard.',
      'Cada colla de foc haurà de comunicar prèviament a la Regidoria de Tradicions i Festes la relació de membres agregats (no habituals) que participaran en l’acte, i garantir que tots disposin del curs de pirotècnia vigent. L’ús d’agregats no podrà, en cap cas, fer superar el nombre màxim de diables o integrants de bèsties per colla establert al Protocol de Festa Major.',
      'Es recomana evitar l’excés de càrrega a cada maça i llançar 2 o 3 carretilles per diable (excepte Llucifer). Aquesta mesura contribueix a garantir la seguretat i facilita reservar el foc per altres cercaviles més llargues. Demanem que no es llencin a terra les carretilles.',
      'Els timbalers de totes les colles de foc, en el decurs de la sortida d’ofici, hauran de fer obligatòriament el toc tradicional.',
      'Els balls blancs han d’executar obligatòriament el seu ball amb les músiques tradicionals i sense agregats que no estiguin vestits amb la indumentària habitual del ball. Abans de començar, els músics hauran d’estar en tot moment pendents del seu ball per no endarrerir la sortida.',
      'La Colla Jove de Castellers farà el pilar sense caminar, i la colla estarà preparada a l’espai que li pertoca de la plaça de l’Ajuntament. Començarà a muntar el pilar abans que passi el Ball de Cercolets.',
      'Les Cintes, Gitanes, Pastorets, Moixiganga, Cercolets i Castells queden muntats davant l’Ajuntament fins que tornin a passar els Gegants per davant. IMPORTANT: ni els Pastorets ni els Cercolets han de dir el vers en muntar la bota.',
      'Els balls que no queden parats i muntats (Bastons i Panderetes) han de fer el ball des del Baluard fins davant del Mercat Vell, el màxim de seguits i sense talls. Per tal que així sigui, tots els balls hauran d’estar preparats en fila un cop arranquin la Colla Jove de Bastons.',
      'Seguidament arranquen les tres parelles de Gegants i una representació de 6/9 Cabeçuts per fer la segona passada, sense aturar-se, fins a Can Quildo (Pastisseria Sabaté). Els Gegants hauran de ballar de forma molt junta i parar gairebé junts, per deixar espai a què els Cabeçuts i la Banda puguin entrar a plaça.',
      'Durant la segona passada, la Banda anirà al darrere dels cabeçuts. Començarà a tocar quan els Cabeçuts entrin a plaça. Quan acabin les peces musicals tradicionals amb gralla dels Gegants i Cabeçuts, aquests hauran d’intentar continuar ballant fins que acabi la peça musical de la banda. En finalitzar, la banda interpretarà «Els Segadors» davant de l’Ajuntament.',
      'En acabar, la Colla Jove de Castellers de Sitges farà una exhibició castellera a la plaça de l’Ajuntament.',
    ],
    planols: [
      {
        src: './planols/ofici-segona-passada.png',
        titol: 'Posicions dels balls a la segona passada, abans dels Segadors',
      },
    ],
    participantsExtra: [
      {
        element: 'cobla',
        nota: 'A la tarima dels Jardins del Doctor Robert, tocant fins que els Cabeçuts entrin a plaça a la segona passada.',
      },
      { element: 'banda', nota: 'Encapçala el seguici amb les autoritats i tanca amb «Els Segadors».' },
    ],
    puntsAigua: [{ lloc: 'Baluard', detall: 'inici' }, { lloc: 'Mercat Vell', detall: 'pels castells' }],
    comissio: [
      {
        lloc: 'Balcó de l’Ajuntament',
        assignacions: [
          {
            descripcio:
              'President vetllant pel transcurs de la Sortida d’Ofici i en contacte amb la resta de la Comissió',
            persones: ['Xavier Salmerón (President)'],
          },
        ],
      },
      {
        lloc: 'Baluard (inici)',
        assignacions: [
          {
            descripcio:
              '1 persona fixa vetllant pel transcurs de la Sortida d’Ofici i repartint les aigües',
            persones: ['Gabri González'],
            enAcabar:
              'Acompanyarà els Cercolets per poder obrir pas per la segona passada dels Gegants.',
          },
          {
            descripcio:
              '1 persona acompanyant els Gegants durant tota la Sortida d’Ofici i en arribar a la Palmera',
            persones: ['Raquel Llorià'],
          },
        ],
      },
      {
        lloc: 'Monument Dr. Robert (carreró entre l’Ajuntament i el Baluard)',
        assignacions: [
          {
            descripcio: '1 persona fixa vetllant pel transcurs de la Sortida d’Ofici',
            persones: ['Vinyet Casolivé'],
            enAcabar:
              'En passar els Cercolets, anirà a donar suport per poder obrir pas per la segona passada dels Gegants.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament (escenari Cobla)',
        assignacions: [
          {
            descripcio:
              '1 persona fixa vetllant pel transcurs de la Sortida d’Ofici, donant les ordres a la Cobla i ajudant a obrir pas als Gegants i la banda',
            persones: ['Vinyet Baqués'],
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament (davant de l’Ajuntament)',
        assignacions: [
          {
            descripcio:
              '3 persones fixes vetllant pel transcurs de la Sortida d’Ofici i col·locant els balls al seu lloc',
            persones: ['Aleix Ibañez', 'Marta Juez', 'Marta Artigas'],
          },
        ],
      },
    ],
    voluntariat: {
      hiHa: true,
      grups: [
        {
          rol: '3 voluntaris repartint aigües',
          punts: [
            {
              lloc: 'Plaça de l’Ajuntament',
              persones: ['Maria Carreras', 'Josep Maria Fernandez', 'Pol Meseguer'],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'pilar-escales',
    titol: 'Pilar de castells a les escales',
    tipus: 'Actuació',
    dia: '2026-09-23',
    data: '23 de setembre',
    hora: '18:30',
    horaText: '18.30 h',
    resum: 'Pilar de la Colla Jove de Castellers de Sitges a les escales del Baluard.',
    ordre: ['castellers'],
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de l’actuació, es realitzarà una trucada a les 18 h entre el president de la Comissió i el representant de la Colla Jove de Castellers de Sitges. Si plou un cop iniciada l’actuació, la Colla Jove de Castellers de Sitges prendrà les decisions oportunes i ho comunicarà al president de la Comissió.',
    indicacions: ['HORA I LLOC: a les 18.30 h puntuals al Baluard.'],
    puntsAigua: [{ lloc: 'Baluard' }],
    comissio: [
      {
        lloc: 'Baluard',
        assignacions: [
          {
            descripcio: '1 responsable de la Comissió vetllant pel transcurs de l’actuació',
            persones: ['Clàudia Sauret'],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'El document no assigna voluntariat a aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'processo-santa-tecla',
    titol: 'Processó de Santa Tecla',
    tipus: 'Processó',
    dia: '2026-09-23',
    data: '23 de setembre',
    hora: '19:00',
    horaText: '19 h',
    resum:
      'Processó del dia de la Santa, amb Tram en Calma al carrer Sant Gaudenci i sardana de les tres colles de Gegants davant la Cobla.',
    ordre: [
      'gegants-vila',
      'gegants-americanos',
      'gegants-moros',
      'cabecuts',
      'diables-vella',
      'drac',
      'diables-jove',
      'aliga',
      'diables-abps',
      'bastons-jove',
      'bastons-noies',
      'gitanes-vila',
      'bastons-mitjana',
      'bastons-vella',
      'cercolets',
      'pastorets',
      'panderetes',
      'cintes',
      'gitanes-abps',
      'moixiganga',
      'banda',
    ],
    ordreNota: 'La Banda tanca el seguici amb les autoritats.',
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de la processó, es convocarà una reunió entre la Comissió i els Caps de Colla a les 18.15 h a l’Auditori del Miramar per debatre la situació, ja que mitja hora abans de la Processó, la pròpia Comissió, l’Ajuntament i la Parròquia hauran de prendre una decisió conjunta i que serà inapel·lable. El protocol contempla la possibilitat de modificar els horaris i recorreguts en funció de la situació. Si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla i als voluntaris dels balls.',
    indicacions: [
      'HORA: a les 19 h puntuals des del Baluard. A les 18.45 h els Gegants, Drac i Àliga hauran d’estar plantats en posició de sortida. Es prega als Geganters si prèviament poden col·locar les tarimes pels músics de la ballada final.',
      'Tots els entremesos i balls han de començar la seva cercavila amb el seu ball i les seves músiques des del Baluard (davant de la porta de la Parròquia). Les colles de foc també hauran d’iniciar la cercavila al Baluard, però no encendran fins davant el canó.',
      'A la pseudo-plaça d’El Cable i al Cap de la Vila s’haurà d’anar sortint ràpidament del lloc de ball perquè la cercavila pugui continuar.',
      'Cal especial atenció als trams entre El Cable i el Cap de la Vila, i entre aquesta plaça i Casa Roy Sitges. No fer talls excessius. La consigna és sempre estar atents al ball del davant i al del darrere i no separar-nos. Es demana aturar-se màxim 2 minuts davant de Casa Roy.',
      'No es pot deixar de ballar i tirar foc al carrer Sant Francesc per preparar l’entrada al Cap de la Vila.',
      'En sortir del Cap de la Vila, cal tenir present que no s’ha acabat la Processó. En el punt conflictiu del Cap de la Vila i carrer Parellades no es pot entorpir l’evolució de la processó. No s’ha d’anar caminant fins al carrer Bonaire, perquè aquest tram també forma part de la Processó.',
      'Al capdavall del carrer Bonaire no hi ha d’haver aturades.',
      'Les tres colles de gegants ballaran a la vegada la sardana en passar per davant de la Cobla. La Cobla no començarà a tocar fins que les tres colles de gegants estiguin ben disposades davant.',
      'Els Bastons no deixaran espais entre ells. En general, s’ha d’anar amb compte en tot el tram que va des del Passeig de la Ribera fins al Baluard: no s’ha d’arrencar a córrer ni tampoc aturar-se en excés per evitar l’efecte acordió.',
      'Les colles de foc no s’han d’aturar al Passeig de la Ribera cantonada amb el carrer Nou.',
      'Els Gegants no entraran a la plaça de l’Ajuntament fins que el foc estigui pujant pel capdavall del carrer Nou. És important que la Colla Vella de Diables deixi el mínim espai possible amb els Cabeçuts en aquest tram.',
    ],
    recorregut:
      'Baluard → Fonollar → Sant Joan → Davallada → Barcelona → Santiago Rusiñol → Jesús → Sant Bartomeu → Sant Gaudenci* → Sant Francesc → Cap de la Vila → Parellades → Bonaire → Passeig.',
    recorregutNota: '* Tram en Calma.',
    tramCalma: {
      tram: 'Carrer de Sant Gaudenci, amb inici a la meitat del carrer Sant Bartomeu i final passada la cruïlla amb carrer Sant Francesc.',
      nota: 'Hi haurà una persona de la Comissió donant l’ordre per començar el tram en calma. Més informació a la secció Calma.',
    },
    planols: [
      {
        src: './planols/processo-santa-tecla-sortida.png',
        titol: 'Col·locació del seguici abans de la sortida',
      },
    ],
    accessibilitat: [
      { lloc: 'Carrer Jesús amb Francesc Gumà' },
      { lloc: 'Passeig de la Ribera', detall: 'al costat de la Cobla' },
    ],
    participantsExtra: [
      {
        element: 'cobla',
        nota: 'Al Passeig de la Ribera, per a la sardana conjunta de les tres colles de Gegants.',
      },
    ],
    puntsAigua: [
      { lloc: 'Baluard', detall: 'inici' },
      { lloc: 'C/ Sant Joan', detall: 'davant oficina de Tradicions i Festes' },
      { lloc: 'C/ Santiago Rusiñol amb C/ Jesús' },
      { lloc: 'C/ Sant Bartomeu', detall: 'inici del Tram en Calma' },
      { lloc: 'Passeig de la Ribera amb C/ Bonaire' },
      { lloc: 'Passeig de la Ribera amb C/ Nou' },
    ],
    comissio: [
      {
        lloc: 'Baluard (inici de la cercavila)',
        assignacions: [
          {
            descripcio: 'President + 1 parella fixa donant la sortida de la Processó',
            persones: ['Xavier Salmerón (President)', 'Vinyet Baqués', 'Irene Martinez'],
            enAcabar: 'Aniran a donar suport al Cap de la Vila.',
          },
          {
            descripcio: '1 persona fixa + 1 persona de suport obrint la Processó amb els Gegants i Cabeçuts',
            persones: ['Raquel Llorià', 'Adrià Ruiz'],
            enAcabar: 'En arribar al Baluard, col·laboren en la col·locació dels balls.',
          },
        ],
      },
      {
        lloc: 'El Cable',
        assignacions: [
          {
            descripcio: '4 persones fixes vetllant pel transcurs de la Processó',
            persones: ['Marta Artigas', 'Maria Junyent', 'Marta Juez', 'Aleix Ibáñez'],
            enAcabar:
              '1 parella anirà al C/ Bonaire, 19-21, i l’altra parella anirà al Passeig de la Ribera (Cobla).',
          },
        ],
      },
      {
        lloc: 'C/ Sant Gaudenci, 19 (tram en calma)',
        assignacions: [
          {
            descripcio:
              '3 persones fixes vetllant pel transcurs de la Processó i el funcionament del Tram en Calma',
            persones: ['Mar Jaime', 'Vinyet Casolivé', 'Paula Hidalgo'],
            enAcabar: 'Aniran a la plaça de l’Ajuntament, a vetllar pel transcurs de la Processó.',
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '3 persones de suport amb el president vetllant pel transcurs de la Processó',
            persones: ['Xavier Salmerón', 'Vinyet Baqués', 'Irene Martinez'],
            enAcabar: 'Aniran a la plaça de l’Ajuntament i al Baluard a donar suport.',
          },
        ],
      },
      {
        lloc: 'Passeig de la Ribera (Cobla)',
        assignacions: [
          {
            descripcio: '1 persona vetllant pel transcurs de la Processó',
            persones: ['Adrià Ruiz'],
            enAcabar: 'Acompanyarà la Moixiganga i la Banda fins a la plaça de l’Ajuntament.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio: '9 persones + President vetllant pel transcurs de la Processó',
            persones: [
              'Aleix Ibáñez',
              'Maria Junyent',
              'Irene Martínez',
              'Mar Jaime',
              'Paula Hidalgo',
              'Marta Juez',
              'Marta Artigas',
              'Adrià Ruiz',
              'Xavier Salmerón (President)',
            ],
          },
        ],
      },
    ],
    voluntariat: {
      hiHa: true,
      nota: 'Un cop arribin els voluntaris a l’Ajuntament, s’encarregaran de fer passadís perquè els balls puguin arribar fins al Baluard.',
      grups: [
        {
          rol: '5 voluntaris acompanyant el seguici',
          punts: [
            { lloc: 'Ball de Cabeçuts', persones: ['Maria Carreras'] },
            { lloc: 'Colles de Foc', persones: ['Jordi Salmerón'] },
            { lloc: 'Colles de Bastons i Gitanes Vila', persones: ['Cristina Gràcia'] },
            { lloc: 'Ball de Cercolets, Pastorets i Panderetes', persones: ['Aleix Gràcia'] },
            { lloc: 'Ball de Cintes, Gitanes ABPS i Moixiganga', persones: ['Judit Virgili'] },
          ],
        },
        {
          rol: '4 voluntaris pels punts habilitats per a persones usuàries de cadira de rodes',
          punts: [
            { lloc: 'C/ Jesús amb C/ Francesc Gumà', persones: ['Jep Estrada', 'Jordi Sabaté'] },
            {
              lloc: 'Passeig de la Ribera amb carrer Sant Pere',
              persones: ['Jonatan Martínez', 'Joan Vidal'],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'entrada-santa',
    titol: 'Entrada de la Santa',
    tipus: 'Acte',
    dia: '2026-09-23',
    data: '23 de setembre',
    horaText: 'Nit',
    resum:
      'Els balls esperen la Santa al Baluard segons la disposició del plànol, i amb l’encesa de foc fred comença el Castell de Foc.',
    disposicio: true,
    ordre: [
      'banda',
      'cabecuts',
      'gegants-vila',
      'gegants-americanos',
      'gegants-moros',
      'gitanes-abps',
      'panderetes',
      'cintes',
      'moixiganga',
      'gitanes-vila',
      'pastorets',
      'cercolets',
      'bastons-jove',
      'castellers',
      'drac',
      'aliga',
      'diables-vella',
      'diables-jove',
      'diables-abps',
    ],
    ordreNota:
      'Disposició llegida del plànol del Baluard: no és un ordre de marxa. El plànol hi situa un únic bloc de Bastons («1 colla de bastons») i no distingeix les quatre colles.',
    indicacions: [
      'Els balls es prepararan per esperar la Santa en la disposició del plànol. Les colles del Ball de Bastons han de finalitzar el seu ball quan arribi el seu cap al davant de la porta de la Parròquia. El Ball de Cercolets es posicionarà entre el Ball de Pastorets i la Geganta Mora. IMPORTANT: la Moixiganga no cal que apagui les atxes en entrar al Baluard.',
      'La Banda entrarà a plaça darrere les autoritats i tocarà durant l’entrada. Hi ha d’haver lloc per a tots i cal evitar les baralles, respectant-nos i ajudant-nos.',
      'Amb l’encesa del foc fred dels diables i drac i àliga, es donarà la indicació per tal que comenci el Castell de Foc.',
    ],
    planols: [
      { src: './planols/entrada-de-la-santa.png', titol: 'Disposició dels balls al Baluard' },
    ],
    puntsAigua: [],
    comissio: [
      {
        lloc: 'Baluard',
        assignacions: [
          {
            descripcio: '3 persones al Baluard',
            persones: ['Raquel Llorià', 'Vinyet Baqués', 'Vinyet Casolivé'],
            enAcabar: 'La resta que està a la plaça de l’Ajuntament entraran amb les autoritats.',
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'No hi haurà voluntariat en aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'ballada-final',
    titol: 'Ballada final',
    tipus: 'Acte',
    dia: '2026-09-23',
    data: '23 de setembre',
    horaText: 'Nit',
    resum:
      'Ballada conjunta del Drac i l’Àliga i, en acabar, dels tres Gegants a la plaça de l’Ajuntament.',
    ordre: ['drac', 'aliga', 'gegants-moros', 'gegants-americanos', 'gegants-vila'],
    ordreNota:
      'Els Gegants entren des del Baluard en aquest ordre: Gegants Moros, Gegants Americanos i Gegants de la Vila.',
    participantsExtra: [
      {
        element: 'banda',
        nota: 'NOVETAT: obre el camí als Gegants des del Baluard, un cop acabi la ballada del Drac i l’Àliga.',
      },
    ],
    indicacions: [
      'Un cop que finalitzi la ballada conjunta del Drac i l’Àliga, aquests, juntament amb els seus timbalers, marxaran pel Mercat Vell. Sempre es farà la sortida amb les bèsties apagades.',
      'Els timbalers han de marxar tocant el toc tradicional dels timbals, darrere de les bèsties, quedant totalment prohibida la parada al mig de la plaça de l’Ajuntament.',
      'Un cop que han marxat el Drac i l’Àliga, hauran d’entrar amb la màxima brevetat possible els Gegants a la plaça de l’Ajuntament des del Baluard pel següent ordre: Gegants Moros, Gegants Americanos i Gegants de la Vila. NOVETAT: l’entrada dels Gegants a la plaça des del Baluard serà acompanyada de la Suburband, que obrirà el camí un cop acabi la ballada del Drac i l’Àliga.',
      'Els grallers es posaran sobre les tarimes habilitades davant la porta de l’Ajuntament. És recomanable que els grallers entrin a plaça pel darrere.',
    ],
    puntsAigua: [],
    comissio: [
      {
        lloc: 'Baluard (donant el tret de sortida)',
        assignacions: [
          { descripcio: '2 persones', persones: ['Irene Martínez', 'Paula Hidalgo'] },
        ],
      },
      {
        lloc: 'Ballada conjunta del Drac i l’Àliga',
        assignacions: [
          {
            descripcio: '4 persones a Can Quildo',
            persones: ['Aleix Ibáñez', 'Marta Juez', 'Vinyet Baqués', 'Adrià Ruiz'],
          },
          {
            descripcio: '4 persones davant del Dr. Robert',
            persones: ['Xavier Salmerón', 'Maria Junyent', 'Raquel Llorià', 'Mar Jaime'],
          },
        ],
      },
      {
        lloc: 'Ballada conjunta dels Gegants',
        assignacions: [
          {
            descripcio: '10 persones amb els Gegants Americanos',
            persones: [
              'Xavier Salmerón',
              'Maria Junyent',
              'Raquel Llorià',
              'Mar Jaime',
              'Aleix Ibáñez',
              'Marta Juez',
              'Vinyet Baqués',
              'Adrià Ruiz',
              'Irene Martínez',
              'Paula Hidalgo',
            ],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'No hi haurà voluntariat en aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'exhibicio-castellera',
    titol: 'Exhibició castellera de Santa Tecla',
    tipus: 'Actuació',
    dia: '2026-09-26',
    data: '26 de setembre',
    hora: '18:00',
    horaText: '18 h',
    resum: 'Exhibició castellera al Cap de la Vila amb quatre colles.',
    ordre: ['xicots-vilafranca', 'castellers-sant-cugat', 'nois-de-la-torre', 'castellers'],
    ordreNota: 'Actuació per ordre.',
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de l’actuació, es realitzarà una trucada a les 17 h entre el president de la Comissió i el representant de la Colla Jove de Castellers de Sitges. Si plou un cop iniciada l’exhibició, la Colla Jove de Castellers de Sitges prendrà les decisions oportunes i ho comunicarà al president de la Comissió.',
    indicacions: ['HORA: a les 18 h puntuals al Cap de la Vila.'],
    puntsAigua: [{ lloc: 'Cap de la Vila amb carrer Major' }],
    comissio: [
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '1 persona vetllant pel transcurs de l’actuació',
            persones: ['Clàudia Sauret'],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'No hi haurà voluntariat en aquest acte.' },
  },
]
