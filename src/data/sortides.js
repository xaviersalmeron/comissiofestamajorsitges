/**
 * Bloc 2 de l'índex:
 * "Consignes detallades per a cada sortida del seguici popular"
 *
 * Per a cada sortida es mantenen sempre els mateixos quatre subapartats
 * operatius, tal com demana el document:
 *   1. Punts d'aigua
 *   2. Punts de seguretat i d'emergència  (desplegament a l'Annex I)
 *   3. Presència de la Comissió de Festa Major
 *   4. Presència del voluntariat
 *
 * Quan un subapartat no té contingut al document original, es deixa buit de
 * manera explícita perquè la interfície en pugui mostrar l'estat corresponent.
 */

export const DIES = [
  { id: '2026-08-22', etiqueta: 'Dissabte 22', llarg: "Dissabte 22 d'agost" },
  { id: '2026-08-23', etiqueta: 'Diumenge 23', llarg: "Diumenge 23 d'agost" },
  { id: '2026-08-24', etiqueta: 'Dilluns 24', llarg: "Dilluns 24 d'agost" },
  { id: '2026-08-29', etiqueta: 'Dissabte 29', llarg: "Dissabte 29 d'agost" },
]

export const SORTIDES = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'patufet',
    titol: 'Presentació de la restauració del cabeçut «El Patufet»',
    tipus: 'Presentació',
    dia: '2026-08-22',
    data: "22 d'agost",
    hora: '19:00',
    horaText: '19 h',
    resum:
      'Presentació de la nova imatge del cabeçut i trasllat del seguici des de la Torreta fins a la plaça de l’Ajuntament.',
    ordre: [
      'cabecuts',
      'banda',
      'gegants-vila',
      'gegants-americanos',
      'gegants-moros',
      'drac',
      'aliga',
    ],
    ordreNota: 'Ordre de sortida a partir de les 19.30 h.',
    desenvolupament: [
      'A partir de les 19 h, presentació de la restauració i nova imatge del cabeçut «El Patufet», acompanyat del Ball de Cabeçuts.',
      'En acabar, a les 19.30 h aprox., arribada de l’Agrupació Musical Suburband, dels Gegants de la Vila, Americanos i Moros, Drac i Àliga, on junts recolliran els Cabeçuts per anar fins a l’Ajuntament ballant a ritme de la Banda.',
      'En arribar a la plaça de l’Ajuntament, els Cabeçuts faran un ball amb una peça musical a càrrec de l’Agrupació Musical Suburband. Un cop finalitzat, entraran dins de la Casa de la Vila i seguidament ho farà la resta del seguici.',
    ],
    indicacions: [
      'A les 19.10 h, la Banda ha d’estar preparada a la Torreta (davant la barra de La Plaça).',
      'Entre les 19.20 i les 19.25 h, els Gegants de la Vila, els Gegants Americanos i els Gegants Moros, el Drac i l’Àliga han d’arribar a la Torreta (davant d’on era el bar Akelarre).',
      'L’acte de Vestim els Gegants Moros comença a les 18 h.',
      'El trasllat dels Gegants de la Vila i Americanos, Drac i Àliga des de l’Espai Festes comença a les 19.15 h.',
      'Quan els Cabeçuts hagin acabat de tocar la 3a peça de gralles, arrancarà la Banda acompanyada dels Gegants de la Vila, Gegants Americanos, Gegants Moros, Drac i Àliga. Els Cabeçuts s’incorporaran davant de la Banda abans que aquesta passi per davant la porta del Miramar.',
      'El recorregut entre la Torreta i la plaça de l’Ajuntament ha de ser àgil i sense aturar-se molta estona.',
      'En arribar a la plaça de l’Ajuntament, a les 19.45 h aprox., els Cabeçuts es planten al centre de la plaça fent un passadís per tal que la Banda pugi fins davant la porta central de l’Ajuntament, deixant de tocar i mirant direcció «Can Pañella». La resta del seguici esperarà al carreró del Dr. Robert fins que acabi la ballada dels Cabeçuts.',
      'Un cop col·locats, la Banda toca una peça musical que serà ballada pels Cabeçuts. Quan acabi, la resta del seguici accedirà a la plaça de l’Ajuntament i immediatament guardaran les peces dins la casa consistorial sense ballar.',
    ],
    recorregut: 'Plaça Vidal i Quadras → Fonollar → Baluard → Pl. de l’Ajuntament.',
    planols: [
      {
        src: './planols/patufet-placa-ajuntament.png',
        titol: 'Col·locació a la plaça de l’Ajuntament',
      },
    ],
    puntsAigua: [{ lloc: 'La Torreta', detall: 'davant la barra de La Plaça' }],
    comissio: [
      {
        lloc: 'La Torreta (escenari de La Plaça)',
        assignacions: [
          {
            descripcio: 'Acompanyament dels Cabeçuts',
            persones: ['Gabri González', 'Aleix Ibàñez', 'Xavier Salmerón (President)'],
          },
        ],
      },
      {
        lloc: 'Palau del Rei Moro',
        assignacions: [
          {
            descripcio: 'Acompanyament dels Gegants Moros',
            persones: ['Maria Junyent', 'Vinyet Baqués'],
          },
        ],
      },
      {
        lloc: 'Espai Festes',
        assignacions: [
          {
            descripcio: 'Acompanyament dels Gegants de la Vila, Drac i Àliga',
            persones: ['Raquel Llorià', 'Irene Martínez'],
          },
        ],
      },
      {
        lloc: 'La Torreta (barres)',
        assignacions: [
          {
            descripcio: 'Acompanyament de l’Agrupació Musical Suburband',
            persones: ['Adrià Ruiz'],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'El document no assigna voluntariat a aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'entrada-grallers',
    titol: 'Entrada de Grallers',
    tipus: 'Entrada',
    dia: '2026-08-23',
    data: "23 d'agost",
    hora: '12:00',
    horaText: '12 h',
    resum:
      'Actuació de les colles de sacaires i grallers des del carrer Sant Francesc fins a la plaça de l’Ajuntament, passant pel Cap de la Vila.',
    ordre: [
      'colla-joan-olarte',
      'colla-filibusters',
      'colla-bon-vent',
      'grallers-la-sitja',
      'escola-grallers',
      'gts-marcets',
    ],
    ordreNota: 'Colles de sacaires primer i, tot seguit, les colles de grallers.',
    indicacions: [
      'Comença a les 12 h puntuals des de la cruïlla del carrer Sant Francesc amb carrer Espalter. Hi haurà un membre de la Comissió que s’encarregarà de donar l’ordre d’arrancada.',
      'Enguany hi ha dos factors que fan especialment important que la sortida de grallers sigui el més àgil possible: el dia 23 d’agost és diumenge i, per tant, s’espera una afluència de gent més important de l’habitual. A més, la Sortida de les Dues començarà de nou un cop esclati el darrer morteret, a les 14.05 h aprox. Per aquest motiu, es prega a les colles de sacaires i grallers que ajustin al màxim possible els temps de les peces interpretades i els espais entre peça i peça, principalment al punt crític del Cap de la Vila, per assegurar acabar amb prou marge i evitar aglomeracions a la plaça de l’Ajuntament.',
      'Recordem que cada colla ha de tocar dues peces i el total de l’actuació ha de tenir una durada màxima de 5 minuts per als sacaires i 10 minuts per a les gralles. Si alguna colla toca més de dues peces, la durada global d’aquestes haurà de ser la mateixa.',
    ],
    recorregut: 'C/ Sant Francesc (amb Espalter) → Cap de la Vila → C/ Major → Pl. de l’Ajuntament.',
    puntsAigua: [
      { lloc: 'C/ Sant Francesc, 18' },
      { lloc: 'Cap de la Vila', detall: 'només en cas d’emergència' },
      { lloc: 'C/ Major amb Pl. de l’Ajuntament', detall: 'Oficina de Mediació' },
    ],
    comissio: [
      {
        lloc: 'C/ Sant Francesc, 60',
        assignacions: [
          {
            descripcio: '1 persona donant la sortida',
            persones: ['Vinyet Baqués'],
            enAcabar: 'Acompanyarà GTS Marcets fins a la Pl. de l’Ajuntament.',
          },
          {
            descripcio:
              '1 persona per colla acompanyant-la des de la sortida fins a la plaça de l’Ajuntament, passant pel Cap de la Vila',
            acompanyaments: [
              { colla: 'Colla Joan Olarte', persona: 'Maria Lluís' },
              { colla: 'Colla Filibusters', persona: 'Marta Juez' },
              { colla: 'Colla Bon Vent', persona: 'Aleix Ibáñez' },
              { colla: 'Colla de Grallers La Sitja', persona: 'Irene Martínez' },
              { colla: 'Escola de Grallers de Sitges', persona: 'Maria Junyent' },
              { colla: 'GTS Marcets', persona: 'Vinyet Baqués' },
            ],
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio:
              '2 persones + President, vetllant pel transcurs de l’actuació i ajudant les colles a entrar i sortir de l’escenari (s’encarreguen del punt d’aigua en cas que fos necessari)',
            persones: ['Gabri González', 'Raquel Llorià', 'Xavier Salmerón (President)'],
            enAcabar: 'Supervisen el desmuntatge de la tarima.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio:
              '3 persones vetllant pel transcurs de l’actuació i del punt accessible per a persones amb cadira de rodes',
            persones: ['Mar Jaime', 'Vinyet Casolivé'],
          },
        ],
      },
    ],
    voluntariat: {
      hiHa: true,
      grups: [
        {
          rol: '4 voluntaris per informar de l’acte i evitar que turistes i cotxets intentin travessar la plaça',
          punts: [
            { lloc: 'Cap de la Vila amb carrer Jesús', persones: ['Maria Lluïsa Saltó', 'Marina Redondo'] },
            {
              lloc: 'Cap de la Vila amb carrer Àngel Vidal',
              persones: ['Cristina Gràcia', 'Andrés Sanz'],
            },
          ],
        },
        {
          rol: '3 voluntaris pel punt habilitat per a persones usuàries de cadira de rodes',
          punts: [
            {
              lloc: 'Plaça de l’Ajuntament',
              persones: ['Raimon Miró', 'Jonatan Martínez', 'Janet Valls'],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'sortida-dues',
    titol: 'Sortida de les Dues',
    tipus: 'Cercavila',
    dia: '2026-08-23',
    data: "23 d'agost",
    hora: '14:00',
    horaText: '14 h',
    resum:
      'Primera cercavila de tot el seguici, amb les mostres a l’Hort de Can Falç i a l’Hospital de Sant Joan.',
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
      'cercolets',
      'panderetes',
      'pastorets',
      'gitanes-vila',
      'bastons-mitjana',
      'bastons-vella',
      'cintes',
      'gitanes-abps',
      'moixiganga',
      'banda',
    ],
    participantsExtra: [
      {
        element: 'cobla',
        nota: 'Al Cap de la Vila, per a la ballada conjunta de la sardana de La Festa Major.',
      },
    ],
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de la cercavila, es convocarà una reunió entre la Comissió i els Caps de Colla a les 13.30 h a l’Auditori del Miramar per debatre la situació i prendre una decisió conjunta i que serà inapel·lable. El protocol contempla la possibilitat de modificar els horaris i recorreguts en funció de la situació. Si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla i als voluntaris dels balls.',
    indicacions: [
      'La cercavila arrancarà a les 14.05 h aprox., en petar l’últim morteret i sempre que l’Àliga hagi sortit de l’Ajuntament.',
      'Els Gegants han d’arribar al Cap de la Vila abans no hagin acabat les sardanes. Un cop estiguin tots junts al capdavall del carrer Major, aniran entrant sense música de gralla. Aquesta entrada serà un cop la Cobla estigui tocant els bisos de la sardana de La Festa Major, d’Enric Morera. La ballada de la sardana serà conjunta a la zona entre l’oficina de CaixaBank i la de Finques Maricel. Hi haurà un membre de la Comissió responsable de donar l’ordre. En finalitzar la ballada de la sardana, cada parella torna a ballar amb les seves gralles per creuar el Cap de la Vila fins a carrer Sant Bartomeu.',
      'És obligatori que tots els entremesos i balls creuin el Cap de la Vila en direcció al carrer Jesús. Per anar a l’Hort de Can Falç caldrà anar per carrer Sant Bartomeu, Sant Gaudenci i Sant Francesc.',
      'En arribar al Cap de la Vila, la Moixiganga farà el seu ball sencer i posteriorment entrarà la Banda tocant un pasdoble.',
      'És important mantenir l’ordre dels balls a l’Hort de Can Falç i a l’Hospital. El ball que no hi sigui en el moment que li toca passarà a ser l’últim.',
    ],
    recorregut: 'Pl. de l’Ajuntament → C/ Major → Cap de la Vila.',
    planols: [
      {
        src: './planols/sortida-dues-cap-de-la-vila.png',
        titol: 'Ballada conjunta de la sardana al Cap de la Vila',
      },
    ],
    horaris: {
      titol: 'Actuació a l’Hort de Can Falç i a l’Hospital',
      columnes: [
        {
          lloc: 'Hort de Can Falç',
          files: [
            { hora: '14:45 h', ball: 'Gegants (tots)' },
            { hora: '14:50 h', ball: 'Cabeçuts' },
            { hora: '14:55 h', ball: 'Drac' },
            { hora: '15:10 h', ball: 'Ball de Diables Colla Vella' },
            { hora: '15:30 h', ball: 'Ball de Bastons Colla Jove i Noies' },
            { hora: '15:35 h', ball: 'Ball de Gitanes de la Vila' },
            { hora: '15:50 h', ball: 'Ball de Diables Colla Jove' },
            { hora: '16:10 h', ball: 'Ball de Panderetes' },
            { hora: '16:15 h', ball: 'Ball de Diables Colla ABPS' },
            { hora: '16:35 h', ball: 'Ball de Pastorets' },
          ],
        },
        {
          lloc: 'Hospital de Sant Joan',
          files: [
            { hora: '15:00 h', ball: 'Ball de Diables Colla Jove' },
            { hora: '15:20 h', ball: 'Àliga' },
            { hora: '15:25 h', ball: 'Ball de Diables Colla ABPS' },
            { hora: '15:45 h', ball: 'Gegants (tots)' },
            { hora: '15:50 h', ball: 'Cabeçuts' },
            { hora: '15:55 h', ball: 'Ball de Cercolets' },
            { hora: '16:10 h', ball: 'Ball de Bastons Colles Mitjana i Vella' },
            { hora: '16:15 h', ball: 'Ball de Diables Colla Vella' },
            { hora: '16:35 h', ball: 'Ball de Cintes' },
            { hora: '16:40 h', ball: 'Ball de Gitanes ABPS' },
            { hora: '16:55 h', ball: 'Ball de Moixiganga' },
          ],
        },
      ],
    },
    puntsAigua: [
      { lloc: 'C/ Major amb Pl. de l’Ajuntament', detall: 'Oficina de Mediació' },
      { lloc: 'C/ Major, 47' },
      { lloc: 'Hort de Can Falç' },
      { lloc: 'Hospital' },
    ],
    comissio: [
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio: '1 parella obrint cercavila amb els Gegants i Cabeçuts',
            persones: ['Raquel Llorià', 'Vinyet Baqués'],
            enAcabar:
              'En arribar els Gegants al Cap de la Vila, una persona es quedarà al Cap de la Vila fins que toqui anar a l’Hospital i l’altra anirà a cobrir l’Hort de Can Falç.',
          },
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la cercavila',
            persones: ['Maria Lluís', 'Vinyet Casolivé'],
            enAcabar:
              'Acompanyaran la banda fins al Cap de la Vila i després aniran a l’Hort de Can Falç.',
          },
        ],
      },
      {
        lloc: 'Carrer Major (tram entre carrer Nou i carrer de l’Aigua)',
        assignacions: [
          {
            descripcio: '4 persones fixes vetllant pel transcurs de la cercavila en aquest punt calent',
            persones: ['Gabri González', 'Aleix Ibàñez', 'Mar Jaime', 'Maria Junyent'],
            enAcabar: 'Aniran a l’Hospital.',
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio:
              '2 persones fixes + President, en contacte amb la Cobla i vetllant pel transcurs de la cercavila',
            persones: ['Adrià Ruiz', 'Marta Juez', 'Xavier Salmerón (President)'],
            enAcabar: 'Aniran a l’Hort de Can Falç.',
          },
        ],
      },
      {
        lloc: 'Hort de Can Falç',
        assignacions: [
          {
            descripcio: '2 persones d’inici, repartint tiquets i aigües',
            persones: ['Raquel Llorià', 'Irene Martínez'],
          },
        ],
      },
      {
        lloc: 'Hospital',
        assignacions: [
          {
            descripcio: '1 persona d’inici vetllant per la mostra i repartint aigües',
            persones: ['Vinyet Baqués'],
          },
        ],
      },
    ],
    voluntariat: {
      hiHa: true,
      grups: [
        {
          rol: '3 voluntaris pel punt habilitat per a persones usuàries de cadira de rodes',
          punts: [
            {
              lloc: 'Hort de Can Falç',
              persones: ['Raimon Miró', 'Jonatan Martínez', 'Janet Valls'],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'castellera-vigilia',
    titol: 'Actuació castellera de la vigília',
    tipus: 'Actuació',
    dia: '2026-08-23',
    data: "23 d'agost",
    hora: '18:00',
    horaText: '18 h',
    resum: 'Actuació de la Colla Jove de Castellers de Sitges al Cap de la Vila.',
    ordre: ['castellers'],
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de l’actuació, es realitzarà una trucada a les 17 h entre el president de la Comissió i el representant de la Colla Jove de Castellers de Sitges. Si plou un cop iniciada l’actuació, la Colla Jove de Castellers de Sitges prendrà les decisions oportunes i ho comunicarà al president de la Comissió.',
    indicacions: ['Hora: a les 18 h puntuals al Cap de la Vila.'],
    puntsAigua: [{ lloc: 'Cap de la Vila', detall: 's’han de recollir a la Granja' }],
    comissio: [
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          { descripcio: '1 persona vetllant pel transcurs de l’actuació', persones: ['Clàudia Sauret'] },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'El document no assigna voluntariat a aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'processo-bandera',
    titol: 'Processó Cívica de la Bandera',
    tipus: 'Processó',
    dia: '2026-08-23',
    data: "23 d'agost",
    hora: '19:00',
    horaText: '19 h',
    resum:
      'Processó cívica des de casa del President fins al Baluard, amb la incorporació del Sant a casa del Pendonista.',
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
      'Hora: a les 19 h puntuals des del portal del carrer Illes Balears, 9 (placeta on està la terrassa del Restaurant Casa Raimundo).',
      'Els Gegants estaran col·locats a la façana de l’edifici del carrer Aragó, 25, que dona a la placeta on està el Restaurant Casa Raimundo. El Drac i l’Àliga també estaran col·locats a la plaça entre l’olivera i la façana de l’edifici del carrer Sant Honorat, 52. La resta del seguici estarà col·locat al carrer Illes Balears i entraran pel lateral del Restaurant Casa Raimundo.',
      'Tots els entremesos i balls (incloses les colles de foc) han de començar la seva cercavila amb el seu ball i les seves músiques des del domicili del President (a la placeta del Restaurant Casa Raimundo), i giraran pel carreró que dona al carrer Aragó.',
      'ATENCIÓ! Es demana no aturar ni fer cap encesa especial sempre que no s’hagi comunicat prèviament. Al pont dels Ocells s’ha de passar amb foc horitzontal. Tampoc es pot aturar la cercavila davant del Sant per tal de no entorpir ni tallar la totalitat de la processó. Les colles de foc no podran encendre davant del Sant.',
      'La Banda tocarà La Processó de Sant Bartomeu un cop el Sant s’incorpori a la Processó Cívica de la Bandera a casa del Pendonista (Can Falç).',
      'Tots els balls i entremesos esperaran el Sant entre el Baluard Miquel Utrillo i el Baluard seguint la disposició del plànol.',
      'Els balls arribaran ballant fins a arribar a la seva ubicació. Els diables i bèsties hauran de fer l’última encesa al Racó de la Calma i els timbalers podran continuar tocant fins a arribar a la seva ubicació sense fer cap parada.',
      'Els balls hauran de romandre a la posició fins que el Sant arribi al Baluard, i en el moment que arribin les pubilles, hereus, tabernacle, pendonista i autoritats, tots els músics dels balls han de tocar i les colles intentar fer una adaptació del seu ball.',
      'La Banda entrarà al Baluard darrere les autoritats i tocarà durant l’entrada fins a la porta del Baluard.',
    ],
    recorregut:
      'Illes Balears, 9 → Aragó → corraló de Can Pau Xic → Sant Honorat → Emili Picó → Jesús → Cap de la Vila → Parellades → Sant Pau → Passeig de la Ribera → Carreta → Major → plaça de l’Ajuntament → Davallada → Sant Joan → Fonollar → Baluard Miquel Utrillo.',
    planols: [
      { src: './planols/processo-bandera-sortida.png', titol: 'Col·locació a la sortida' },
      {
        src: './planols/processo-bandera-baluard.png',
        titol: 'Disposició d’espera del Sant al Baluard',
      },
    ],
    accessibilitat: [
      { lloc: 'Corraló de Can Pau Xic amb Aragó' },
      { lloc: 'C/ Jesús amb Francesc Gumà' },
    ],
    puntsAigua: [
      { lloc: 'C/ Illes Balears, 9', detall: 'inici de la Processó' },
      { lloc: 'C/ Sant Honorat, 26-28', detall: 'davant del Centre de Formació d’Adults' },
      { lloc: 'C/ Jesús amb C/ Illa de Cuba' },
      { lloc: 'C/ Sant Pau amb Passeig de la Ribera' },
      { lloc: 'C/ Major amb C/ Aigua' },
      { lloc: 'C/ Sant Joan, 1', detall: 'davant l’oficina de Tradicions i Festes' },
      { lloc: 'Baluard Miquel Utrillo' },
    ],
    comissio: [
      {
        lloc: 'C/ Illes Balears, 9',
        assignacions: [
          {
            descripcio: 'President + 1 parella fixa vetllant pel transcurs de la Processó',
            persones: ['Xavier Salmerón (President)', 'Vinyet Casolivé', 'Marta Juez'],
            enAcabar:
              'El President portarà la bandera fins al Baluard, i la parella l’acompanyarà fins al carrer Sant Honorat (Pont dels Ocells). Un cop fet el relleu, aniran a Can Falç.',
          },
          {
            descripcio: '1 persona obrint cercavila amb els Gegants',
            persones: ['Raquel Llorià'],
            enAcabar:
              'Es quedarà a la zona del Baluard Miquel Utrillo facilitant l’accés dels balls en el tram final.',
          },
          {
            descripcio: '1 parella acompanyant les colles de Foc fins al Cap de la Vila',
            persones: ['Aleix Ibàñez', 'Vinyet Baqués'],
          },
        ],
      },
      {
        lloc: 'C/ Sant Honorat (Pont dels Ocells)',
        assignacions: [
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la Processó',
            persones: ['Irene Martínez', 'Maria Junyent'],
            enAcabar:
              'Acompanyaran el President portant la bandera fins al Cap de la Vila. Un cop fet el relleu, aniran a la Plaça de l’Ajuntament.',
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '1 parella fixa vetllant pel transcurs de la Processó',
            persones: ['Aleix Ibàñez', 'Vinyet Baqués'],
            enAcabar:
              'Acompanyaran el President portant la bandera fins a la Plaça de l’Ajuntament. Un cop fet el relleu, aniran a la zona del Baluard Miquel Utrillo facilitant l’accés dels balls en el tram final.',
          },
        ],
      },
      {
        lloc: 'Can Falç (Pendonista)',
        assignacions: [
          {
            descripcio: '1 parella vetllant pel transcurs de la Processó',
            persones: ['Vinyet Casolivé', 'Marta Juez'],
            enAcabar:
              'Aniran a la zona del Baluard Miquel Utrillo facilitant l’accés dels balls en el tram final.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio: '4 persones vetllant pel transcurs de la Processó',
            persones: ['Marta Artigas', 'Gabri González', 'Irene Martínez', 'Maria Junyent'],
            enAcabar: 'Acompanyaran el President portant la bandera fins a la Parròquia.',
          },
        ],
      },
      {
        lloc: 'Baluard Miquel Utrillo',
        assignacions: [
          {
            descripcio:
              '7 persones vetllant pel transcurs de la Processó, repartint aigües i col·locant els balls',
            persones: [
              'Raquel Llorià',
              'Maria Lluís',
              'Mar Jaime',
              'Aleix Ibàñez',
              'Vinyet Baqués',
              'Vinyet Casolivé',
              'Marta Juez',
            ],
          },
        ],
      },
    ],
    voluntariat: {
      hiHa: true,
      grups: [
        {
          rol: '10 voluntaris acompanyant el seguici',
          punts: [
            { lloc: 'Ball de Cabeçuts', persones: ['Cristina Gràcia'] },
            {
              lloc: 'Colles de Foc',
              persones: ['Raimon Miró'],
              nota: 'Només fins al Cap de la Vila.',
            },
            {
              lloc: 'Ball de Bastons Colla Jove; Colla Noies; i Gitanes Vila',
              persones: [],
              pendent: '2 voluntaris/es per cercavila (pendent d’assignar)',
            },
            { lloc: 'Ball de Bastons Colla Mitjana; i Colla Vella', persones: ['Maria Carreras'] },
            {
              lloc: 'Cercolets, Pastorets, Panderetes i Cintes',
              persones: [],
              pendent: '2 voluntaris/es per cercavila (pendent d’assignar)',
            },
            { lloc: 'Gitanes ABPS i Moixiganga', persones: ['Josep Maria Esteban'] },
          ],
        },
        {
          rol: '4 voluntaris pels punts habilitats per a persones usuàries de cadira de rodes',
          punts: [
            {
              lloc: 'Corraló de Can Pau Xic',
              persones: ['Jep Estrada', 'Jordi Sabaté', 'Mirta Zubeldia'],
            },
            {
              lloc: 'C/ Jesús amb C/ Francesc Gumà',
              persones: ['Dylan Bernal', 'Miguel Bernal', 'Diana Fernández de la Reguera Taya'],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'baixada-escales',
    titol: 'Baixada de les Escales',
    tipus: 'Cercavila',
    dia: '2026-08-23',
    data: "23 d'agost",
    hora: '23:30',
    horaText: '23.30 h aprox.',
    resum:
      'Baixada pel Passeig de la Ribera just en acabar el Castell de Foc, amb tornada fins al carrer Nou.',
    ordre: [
      'gegants-vila',
      'gegants-americanos',
      'gegants-moros',
      'cabecuts',
      'cercolets',
      'panderetes',
      'bastons-jove',
      'bastons-noies',
      'bastons-mitjana',
      'bastons-vella',
      'gitanes-vila',
      'gitanes-abps',
      'pastorets',
      'cintes',
      'moixiganga',
      'drac',
      'aliga',
      'diables-abps',
      'diables-jove',
      'diables-vella',
    ],
    ordreNota:
      'Baixada conjunta de totes les Colles de Bastons (Jove, Noies, Mitjana i Vella) i baixada conjunta de les dues colles de Gitanes (Gitanes Vila i Gitanes ABPS).',
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència o imprevist que pugui afectar el desenvolupament de la cercavila, es convocarà una reunió entre la Comissió i els Caps de Colla tot just hagi acabat el Castell de Foc, al vestíbul de l’Ajuntament, per prendre una decisió conjunta i que serà inapel·lable. Si prèviament no s’ha pogut llançar el Castell de Foc, la cercavila quedarà suspesa automàticament. Si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla i als voluntaris dels balls.',
    indicacions: [
      'Hora: la sortida s’iniciarà just en acabar el Castell de Foc, un cop que la seguretat ens ho permeti (a les 23.40 h aprox.).',
      'S’ha de procurar que sigui una sortida molt dinàmica. S’ha d’intentar no fer balls parats i arribar fins a l’inici del carrer Nou com a mínim, ballant.',
    ],
    recorregut:
      'Passeig de la Ribera, des de les escales fins al Greco (davant del carrer Sant Pau); la tornada finalitza al carrer Nou.',
    puntsAigua: [{ lloc: 'Baluard', detall: 'abans de l’inici de la baixada' }],
    comissio: [
      {
        lloc: 'Baluard (inici de les escales)',
        assignacions: [
          {
            descripcio: '1 parella fixa donant la sortida',
            persones: ['Mar Jaime', 'Aleix Ibàñez'],
            enAcabar: 'Acompanyen les colles del foc.',
          },
          {
            descripcio: '1 parella obrint cercavila amb els Gegants',
            persones: ['Raquel Llorià', 'Adrià Ruiz'],
          },
        ],
      },
      {
        lloc: 'Fragata (final de les escales)',
        assignacions: [
          {
            descripcio: 'President + 4 persones fixes vetllant pel transcurs de la cercavila',
            persones: [
              'Xavier Salmerón (President)',
              'Gabri González',
              'Marta Artigas',
              'Vinyet Baqués',
              'Maria Junyent',
            ],
          },
        ],
      },
      {
        lloc: 'Entre els balls',
        assignacions: [
          {
            descripcio: '1 persona fixa entre els Gegants Americanos i les Panderetes',
            persones: ['Maria Lluís'],
          },
          { descripcio: '1 persona fixa entre les colles de Bastons', persones: ['Marta Juez'] },
          {
            descripcio: '1 persona fixa entre les Gitanes Vila i la Moixiganga',
            persones: ['Irene Martínez'],
          },
          { descripcio: '1 parella fixa amb les colles de foc', persones: ['Mar Jaime', 'Aleix Ibàñez'] },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'No hi haurà voluntariat en aquesta sortida.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'matinal',
    titol: 'Alegre i Festiva Matinal',
    tipus: 'Cercavila',
    dia: '2026-08-24',
    data: "24 d'agost",
    hora: '06:00',
    horaText: '6 h',
    resum:
      'Cercavila matinal per tot el nucli antic, amb esmorzar de la Comissió al vestíbul de l’Ajuntament.',
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
      'bastons-mitjana',
      'bastons-vella',
      'gitanes-vila',
      'panderetes',
      'pastorets',
      'cintes',
      'gitanes-abps',
      'moixiganga',
      'faixes',
    ],
    protocolPluja:
      'En cas de pluja abundant o de qualsevol emergència que pugui afectar el desenvolupament de la cercavila, aquesta quedarà suspesa automàticament mitja hora abans de començar. La decisió serà inapel·lable. En cas de pluja de baixa intensitat, previsió de pluja o si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla.',
    indicacions: [
      'Hora: a les 6 h puntuals des de la plaça de l’Ajuntament.',
      'Tots els entremesos i balls (incloses les colles de foc) han de començar la seva cercavila amb el seu ball i les seves músiques des de la plaça de l’Ajuntament (abans del monument Dr. Robert), segons el plànol de col·locació.',
      'En acabar la Matinal a la plaça de l’Ajuntament, els balls i músics han de procurar no entorpir el transcurs dels balls que encara no han acabat la cercavila i estan pujant pel carrer Major. Es prega, en la mesura del possible, marxar per algun altre carrer. La Comissió obsequiarà amb un petit esmorzar al vestíbul de l’Ajuntament segons vagin arribant els balls.',
    ],
    recorregut:
      'Ajuntament → Baluard → Fonollar → Baluard Vidal i Quadras → Port de n’Alegre → Rafael Llopart → Sant Damià → Sant Sebastià → Jesús → Sant Bartomeu → Sant Gaudenci → Sant Josep → Espalter → plaça del Pou Vedre → Parellades → Cap de la Vila → Major → Ajuntament.',
    planols: [
      { src: './planols/matinal-sortida.png', titol: 'Col·locació de sortida a la plaça de l’Ajuntament' },
    ],
    puntsAigua: [
      { lloc: 'Plaça de l’Ajuntament', detall: 'inici' },
      { lloc: 'C/ Port de n’Alegre amb C/ Rafael Llopart' },
      { lloc: 'C/ Jesús amb C/ Illa de Cuba' },
      { lloc: 'C/ Sant Gaudenci amb C/ Sant Josep' },
      { lloc: 'C/ Parellades amb pl. Pou Vedre' },
      { lloc: 'C/ Major, 47' },
      { lloc: 'Dins de l’Ajuntament', detall: 'final' },
    ],
    comissio: [
      {
        lloc: 'Ajuntament (inici de la cercavila)',
        assignacions: [
          {
            descripcio: '1 parella fixa donant la sortida i repartint aigües',
            persones: ['Marta Juez', 'Vinyet Casolivé'],
            enAcabar: 'Aniran a la plaça de l’Ajuntament a preparar l’esmorzar.',
          },
          {
            descripcio: '1 persona fixa obrint cercavila amb els Gegants',
            persones: ['Raquel Llorià'],
            enAcabar:
              'En arribar a l’Ajuntament, col·labora en la preparació i repartiment de l’esmorzar.',
          },
        ],
      },
      {
        lloc: 'Baluard Vidal i Quadras',
        assignacions: [
          {
            descripcio: 'President + 2 persones fixes vetllant pel transcurs de la cercavila',
            persones: ['Xavier Salmerón (President)', 'Aleix Ibáñez', 'Vinyet Baqués'],
            enAcabar:
              'S’incorporaran entre els balls per acompanyar-los fins a arribar a l’Ajuntament.',
          },
        ],
      },
      {
        lloc: 'C/ Sant Damià amb C/ Sant Sebastià',
        assignacions: [
          {
            descripcio: '3 persones fixes vetllant pel transcurs de la cercavila',
            persones: ['Maria Lluís', 'Maria Junyent', 'Irene Martínez'],
            enAcabar: 'S’incorporen al carro de la Comissió que reparteix flor.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio: '4 persones repartint aigües, l’esmorzar i vetllant pel transcurs de la cercavila',
            persones: ['Marta Juez', 'Vinyet Casolivé', 'Raquel Llorià', 'Marta Artigas'],
          },
        ],
      },
    ],
    voluntariat: {
      hiHa: true,
      grups: [
        {
          rol: '10 voluntaris a l’Ajuntament amb el repartiment de l’esmorzar',
          punts: [{ lloc: 'Ajuntament', persones: [], pendent: 'Pendent d’assignar' }],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'sortida-ofici',
    titol: 'Sortida d’Ofici',
    tipus: 'Sortida',
    dia: '2026-08-24',
    data: "24 d'agost",
    hora: '12:00',
    horaText: '12 h aprox.',
    resum:
      'Sortida des del Baluard amb dues passades davant l’Ajuntament, pilar caminant i «Els Segadors».',
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
      'banda',
    ],
    participantsExtra: [
      { element: 'cobla', nota: 'A la tarima habilitada als Jardins del Doctor Robert.' },
    ],
    ordreNota:
      'Les tres colles del Ball de Diables surten amb els seus timbalers. Encapçala el seguici la Banda, que acompanya les autoritats.',
    protocolPluja:
      'En cas de pluja abundant o de qualsevol emergència que pugui afectar el desenvolupament de la cercavila, aquesta quedarà suspesa automàticament quinze minuts abans de començar. La decisió serà inapel·lable. En cas de previsió de pluja o si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla.',
    indicacions: [
      'Hora: a les 12 h aproximadament. Tothom ha de ser puntual i es comença des del Baluard.',
      'La Cobla, abans de l’inici de la Sortida d’Ofici, es col·locarà a la tarima habilitada als Jardins del Doctor Robert i haurà de tocar tota l’estona fins que els Cabeçuts entrin a plaça a la segona passada (només està permès deixar de tocar quan està el foc).',
      'Els Gegants, Drac i Àliga quedaran plantats durant tot l’Ofici en un lateral de la Parròquia, excepte els Gegants Americanos que, per seguretat, es quedaran dins de l’Ajuntament.',
      'Encapçala el seguici de la Sortida d’Ofici la Banda, que acompanya les autoritats fins a l’Ajuntament. La Banda dona la volta i es col·loca davant la palmera.',
      'Comença la primera passada: les tres colles de Gegants i els Cabeçuts passen per davant l’Ajuntament i donen la volta fins passat la palmera, preparats per a la segona passada.',
      'El Drac, primer, i l’Àliga, seguidament, fan només una encesa en el transcurs d’una única passada. Abans del Drac passen els seus timbalers sense aturar-se, i quan acaba l’Àliga passen els seus timbalers també sense aturar-se.',
      'Les tres colles de diables fan una passada conjunta. Sortiran des de davant el Baluard en formació i carregats amb una única encesa que s’encendrà a l’entrada de la plaça de l’Ajuntament, passat el monument del Dr. Robert. Els timbalers de les tres colles han de tocar plegats i sense aturar-se des de davant el Baluard.',
      'Cada colla de foc haurà de comunicar prèviament a la Regidoria de Tradicions i Festes la relació de membres agregats (no habituals) que participaran en l’acte, i garantir que tots disposin del curs de pirotècnia vigent. L’ús d’agregats no podrà, en cap cas, fer superar el nombre màxim de diables o integrants de bèsties per colla establert al Protocol de Festa Major.',
      'Es recomana evitar l’excés de càrrega a cada maça i llançar 2 o 3 carretilles per diable (excepte Llucifer). Aquesta mesura contribueix a garantir la seguretat i facilita reservar el foc per a altres cercaviles més llargues. Demanem que no es llencin a terra les carretilles.',
      'Els timbalers de totes les colles de foc, en el decurs de la Sortida d’Ofici, hauran de fer obligatòriament el toc tradicional.',
      'Els balls blancs han d’executar obligatòriament el seu ball amb les músiques tradicionals i sense agregats que no estiguin vestits amb la indumentària habitual del ball. Abans de començar, els músics hauran d’estar en tot moment pendents del seu ball per no endarrerir la sortida.',
      'La Colla Jove de Castellers farà el pilar caminant, que començarà a muntar a l’altura del carreró que va del Baluard a la plaça de l’Ajuntament (no al Baluard). La colla haurà d’estar preparada quan el Ball de les Gitanes ABPS comenci el seu ball.',
      'Les Cintes, Gitanes, Pastorets, Moixiganga, Cercolets i Castells queden muntats davant l’Ajuntament fins que tornin a passar els Gegants per davant.',
      'Els balls que no queden parats i muntats (Bastons i Panderetes) han de fer el ball des del Baluard fins davant del Mercat Vell, el màxim de seguits i sense talls. Per tal que així sigui, tots els balls hauran d’estar preparats en fila un cop que arranquin la Colla Jove de Bastons.',
      'Seguidament, arranquen les tres parelles de Gegants i una representació de 6/9 Cabeçuts per fer la segona passada, sense aturar-se, fins a Can Quildo (Pastisseria Sabaté). Els Gegants hauran de ballar de forma molt junta i parar gairebé junts, per deixar espai a què els Cabeçuts i la Banda puguin entrar a plaça.',
      'Durant la segona passada, la Banda anirà al darrere dels Cabeçuts. Començarà a tocar quan els Cabeçuts entrin a plaça. Quan acabin les peces musicals tradicionals amb gralla dels Gegants i Cabeçuts, aquests hauran d’intentar continuar ballant fins que acabi la peça musical de la banda. En finalitzar, la banda interpretarà «Els Segadors» davant de l’Ajuntament.',
      'En acabar, la Colla Jove de Castellers de Sitges farà una exhibició castellera a la plaça de l’Ajuntament.',
    ],
    recorregut: 'Baluard → Plaça de l’Ajuntament (dues passades).',
    planols: [
      {
        src: './planols/ofici-segona-passada.png',
        titol: 'Posicions dels balls a la segona passada, abans dels Segadors',
      },
    ],
    puntsAigua: [
      { lloc: 'Baluard', detall: 'inici' },
      { lloc: 'Ajuntament', detall: 'pels castells' },
    ],
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
            persones: ['Gabri González', 'Adrià Ruiz'],
            enAcabar:
              'Acompanyaran la Colla Jove de Castellers i obriran pas per a la segona passada dels Gegants.',
          },
          {
            descripcio:
              '1 persona acompanyant els Gegants durant tota la Sortida d’Ofici i, en arribar a la Palmera, repartint les aigües',
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
              'En passar la Colla Jove de Castellers, anirà a obrir pas per a la segona passada dels Gegants.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament (escenari Cobla)',
        assignacions: [
          {
            descripcio:
              '1 persona fixa vetllant pel transcurs de la Sortida d’Ofici, donant les ordres a la Cobla i ajudant a obrir pas als Gegants i la Banda',
            persones: ['Vinyet Baqués'],
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament (davant de l’Ajuntament)',
        assignacions: [
          {
            descripcio:
              '4 persones fixes vetllant pel transcurs de la Sortida d’Ofici i col·locant els balls al seu lloc',
            persones: ['Aleix Ibañez', 'Marta Juez', 'Irene Martínez', 'Maria Junyent'],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'No hi haurà voluntariat en aquesta sortida.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'processo-sant-bartomeu',
    titol: 'Processó de Sant Bartomeu',
    tipus: 'Processó',
    dia: '2026-08-24',
    data: "24 d'agost",
    hora: '19:30',
    horaText: '19.30 h',
    resum:
      'Processó del dia del Sant, amb Tram en Calma al carrer Sant Gaudenci i sardana dels Gegants davant la Cobla.',
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
    participantsExtra: [
      {
        element: 'cobla',
        nota: 'Al Passeig de la Ribera, per a la sardana conjunta de les tres colles de Gegants.',
      },
    ],
    tramCalma: {
      tram: 'Carrer de Sant Gaudenci, amb inici a la meitat del carrer Sant Bartomeu i final passada la cruïlla amb carrer Sant Francesc.',
      nota: 'Hi haurà una persona de la Comissió donant l’ordre per començar el tram en calma. Consignes per colla a l’Annex II.',
    },
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de la processó, es convocarà una reunió entre la Comissió i els Caps de Colla a les 18.45 h a l’Auditori del Miramar per debatre la situació, ja que mitja hora abans de la Processó, la pròpia Comissió, l’Ajuntament i la Parròquia hauran de prendre una decisió conjunta i que serà inapel·lable. El protocol contempla la possibilitat de modificar els horaris i recorreguts en funció de la situació. Si plou un cop iniciada la cercavila, la Comissió prendrà les decisions oportunes i ho comunicarà als caps de colla i als voluntaris dels balls.',
    indicacions: [
      'Hora: a les 19.30 h puntuals des del Baluard. A les 19.15 h els Gegants, Drac i Àliga hauran d’estar plantats en posició de sortida. Es prega als Geganters si prèviament poden col·locar les tarimes per als músics de la ballada final.',
      'Tots els entremesos i balls han de començar la seva cercavila amb el seu ball i les seves músiques des del Baluard (davant de la porta de la Parròquia). Les colles de foc també hauran d’iniciar la cercavila al Baluard, però no encendran fins davant el canó.',
      'A la pseudo-plaça d’El Cable i al Cap de la Vila s’haurà d’anar sortint ràpidament del lloc de ball perquè la cercavila pugui continuar.',
      'Cal especial atenció als trams entre El Cable i el Cap de la Vila, i entre aquesta plaça i Casa Roy Sitges. No fer talls excessius. La consigna és sempre estar atents al ball del davant i al del darrere i no separar-nos. Es demana aturar-se un màxim de 2 minuts davant de Casa Roy.',
      'No es pot deixar de ballar i tirar foc al carrer Sant Francesc per preparar l’entrada al Cap de la Vila.',
      'En sortir del Cap de la Vila, cal tenir present que no s’ha acabat la Processó. En el punt conflictiu del Cap de la Vila i carrer Parellades no es pot entorpir l’evolució de la processó. No s’ha d’anar caminant fins al carrer Bonaire, perquè aquest tram també forma part de la Processó.',
      'Al capdavall del carrer Bonaire no hi ha d’haver aturades.',
      'Les tres colles de Gegants ballaran a la vegada la sardana en passar per davant de la Cobla. La Cobla no començarà a tocar fins que les tres colles de Gegants estiguin ben disposades davant.',
      'Els Bastons no deixaran espais entre ells. En general, s’ha d’anar amb compte en tot el tram que va des del Passeig de la Ribera fins al Baluard: no s’ha d’arrencar a córrer ni tampoc aturar-se en excés, per evitar l’efecte acordió.',
      'Les colles de foc no s’han d’aturar al Passeig de la Ribera, cantonada amb el carrer Nou.',
      'Els Gegants no entraran a la plaça de l’Ajuntament fins que el foc estigui pujant pel capdavall del carrer Nou. És important que la Colla Vella de Diables deixi el mínim espai possible amb els Cabeçuts en aquest tram.',
    ],
    recorregut:
      'Baluard → Fonollar → Sant Joan → Davallada → Barcelona → Santiago Rusiñol → Jesús → Sant Bartomeu → Sant Gaudenci* → Sant Francesc → Cap de la Vila → Parellades → Bonaire → Passeig de la Ribera → Nou → Major → plaça de l’Ajuntament → Baluard.',
    recorregutNota: '* Tram en Calma.',
    planols: [
      {
        src: './planols/processo-sant-bartomeu-sortida.png',
        titol: 'Col·locació del seguici abans de la sortida',
      },
    ],
    accessibilitat: [
      { lloc: 'C/ Jesús amb Francesc Gumà' },
      { lloc: 'Passeig de la Ribera', detall: 'al costat de la Cobla' },
    ],
    puntsAigua: [
      { lloc: 'Baluard', detall: 'inici' },
      { lloc: 'C/ Sant Joan', detall: 'davant l’oficina de Tradicions i Festes' },
      { lloc: 'C/ Santiago Rusiñol amb C/ Jesús' },
      { lloc: 'C/ Sant Bartomeu', detall: 'inici del Tram en Calma' },
      { lloc: 'Passeig de la Ribera amb C/ Bonaire' },
      { lloc: 'Passeig de la Ribera amb C/ Nou' },
      { lloc: 'Baluard', detall: 'on es col·loca el Ball de Cercolets' },
    ],
    comissio: [
      {
        lloc: 'Baluard (inici de la cercavila)',
        assignacions: [
          {
            descripcio: 'President + 1 parella fixa donant la sortida de la Processó i repartint aigües',
            persones: ['Xavier Salmerón (President)', 'Vinyet Baqués', 'Irene Martínez'],
            enAcabar: 'Aniran a donar suport al Cap de la Vila.',
          },
          {
            descripcio: '1 persona fixa obrint la Processó amb els Gegants',
            persones: ['Raquel Llorià'],
            enAcabar: 'En arribar al Baluard, col·labora en la col·locació dels balls i a donar aigües.',
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
        lloc: 'C/ Sant Gaudenci, 19 (Tram en Calma)',
        assignacions: [
          {
            descripcio:
              '1 parella fixa vetllant pel transcurs de la Processó i el funcionament del Tram en Calma',
            persones: ['Mar Jaime', 'Vinyet Casolivé'],
            enAcabar: 'Aniran a la plaça de l’Ajuntament, a vetllar pel transcurs de la Processó.',
          },
        ],
      },
      {
        lloc: 'Cap de la Vila',
        assignacions: [
          {
            descripcio: '3 persones de suport amb el President vetllant pel transcurs de la Processó',
            persones: ['Xavier Salmerón (President)', 'Vinyet Baqués', 'Irene Martínez'],
            enAcabar: 'Aniran a la plaça de l’Ajuntament i al Baluard a donar suport.',
          },
        ],
      },
      {
        lloc: 'Passeig de la Ribera (Cobla)',
        assignacions: [
          {
            descripcio: '1 parella vetllant pel transcurs de la Processó',
            persones: ['Marta Artigas', 'Marta Juez'],
            enAcabar: 'Aniran a la plaça de l’Ajuntament a donar suport.',
          },
        ],
      },
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          {
            descripcio: '7 persones + President vetllant pel transcurs de la Processó',
            persones: [
              'Aleix Ibáñez',
              'Maria Junyent',
              'Irene Martínez',
              'Mar Jaime',
              'Gabri González',
              'Marta Juez',
              'Marta Artigas',
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
          rol: '10 voluntaris acompanyant el seguici',
          punts: [
            { lloc: 'Ball de Cabeçuts', persones: ['Biel Domènech', 'Pol Meseguer'] },
            {
              lloc: 'Colles de Foc',
              persones: ['Jordi Salmerón', 'Enric Massó', 'Joan Mas', 'Jesus Eroles', 'Raimon Miró'],
            },
            {
              lloc: 'Ball de Bastons Colla Jove; Colla Noies; i Gitanes Vila',
              persones: ['Maria Carreras'],
            },
            { lloc: 'Ball de Bastons Colla Mitjana; i Colla Vella', persones: ['Andrés Sanz'] },
            {
              lloc: 'Cercolets, Pastorets, Panderetes i Cintes',
              persones: ['Judit Virgili', 'Maria Boy'],
            },
            { lloc: 'Gitanes ABPS i Moixiganga', persones: ['Josep Maria Esteban'] },
          ],
        },
        {
          rol: '4 voluntaris pels punts habilitats per a persones usuàries de cadira de rodes',
          punts: [
            {
              lloc: 'C/ Jesús amb C/ Francesc Gumà',
              persones: ['Jep Estrada', 'Jordi Sabaté', 'Mirta Zubeldia'],
            },
            {
              lloc: 'Passeig de la Ribera amb carrer Sant Pere',
              persones: ['Dylan Bernal', 'Miguel Bernal', 'Diana Fernández de la Reguera Taya'],
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'entrada-del-sant',
    titol: 'Entrada del Sant',
    tipus: 'Acte',
    dia: '2026-08-24',
    data: "24 d'agost",
    hora: '23:30',
    horaText: 'Nit',
    resum: 'Espera i entrada del Sant al Baluard, amb foc fred a l’inici del Castell de Foc.',
    // No hi ha ordre de sortida: el document només en dona el plànol de
    // disposició al Baluard, i és d'allà que surten els elements. Es llisten
    // seguint l'ordre de la Processó de Sant Bartomeu, de la qual venen; els
    // Castells, que no hi surten, van darrere la Moixiganga com a la Sortida
    // d'Ofici.
    disposicio: true,
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
      'gitanes-vila',
      'cercolets',
      'pastorets',
      'panderetes',
      'cintes',
      'gitanes-abps',
      'moixiganga',
      'castellers',
      'banda',
    ],
    ordreNota:
      'Els elements segueixen l’ordre de la Processó de Sant Bartomeu. El plànol situa un únic bloc de Bastons («1 colla de bastons»), tot i que el text parla de «les colles del Ball de Bastons» en plural.',
    indicacions: [
      'Els balls es prepararan per esperar el Sant en la disposició del plànol. Les colles del Ball de Bastons han de finalitzar el seu ball quan arribi el seu cap davant de la porta de la Parròquia. El Ball de Cercolets es posicionarà entre el Ball de Pastorets i la Geganta Mora.',
      'La Banda entrarà a plaça darrere les autoritats i tocarà durant l’entrada. Hi ha d’haver lloc per a tots i cal evitar les baralles, respectant-nos i ajudant-nos.',
      'El foc encendrà foc fred quan comenci el Castell de Foc.',
    ],
    planols: [
      { src: './planols/entrada-del-sant.png', titol: 'Disposició dels balls per esperar el Sant' },
    ],
    puntsAigua: [],
    comissio: [
      {
        lloc: 'Baluard',
        assignacions: [
          {
            descripcio: '4 persones al Baluard',
            persones: ['Raquel Llorià', 'Adrià Ruiz', 'Vinyet Baqués', 'Maria Lluís'],
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
    titol: 'Ballada Final',
    tipus: 'Acte',
    dia: '2026-08-24',
    data: "24 d'agost",
    hora: '23:59',
    horaText: 'Nit',
    resum:
      'Ballada conjunta del Drac i l’Àliga i, tot seguit, ballada conjunta de les tres colles de Gegants.',
    ordre: ['drac', 'aliga', 'gegants-moros', 'gegants-americanos', 'gegants-vila'],
    ordreNota:
      'Ordre d’entrada dels Gegants a la plaça des del Baluard: Gegants Moros, Gegants Americanos i Gegants de la Vila.',
    indicacions: [
      'Un cop finalitzi la ballada conjunta del Drac i l’Àliga, aquests, juntament amb els seus timbalers, marxaran pel Mercat Vell. Sempre es farà la sortida amb les bèsties apagades.',
      'Els timbalers han de marxar tocant el toc tradicional dels timbals, darrere de les bèsties, quedant totalment prohibida la parada al mig de la plaça de l’Ajuntament.',
      'Un cop que han marxat el Drac i l’Àliga, hauran d’entrar amb la màxima brevetat possible els Gegants a la plaça de l’Ajuntament des del Baluard, pel següent ordre: Gegants Moros, Gegants Americanos i Gegants de la Vila.',
      'Els grallers es posaran sobre les tarimes habilitades davant la porta de l’Ajuntament. És recomanable que els grallers entrin a plaça pel darrere.',
    ],
    puntsAigua: [],
    comissio: [
      {
        lloc: 'Ballada conjunta del Drac i l’Àliga',
        assignacions: [
          {
            descripcio: '4 persones a Can Quildo',
            persones: ['Aleix Ibáñez', 'Marta Juez', 'Vinyet Baqués', 'Adrià Ruiz'],
          },
          {
            descripcio: '5 persones davant del Dr. Robert',
            persones: [
              'Xavier Salmerón (President)',
              'Gabri González',
              'Maria Junyent',
              'Raquel Llorià',
              'Irene Martínez',
            ],
          },
        ],
      },
      {
        lloc: 'Ballada conjunta dels Gegants',
        assignacions: [
          {
            descripcio: '9 persones amb els Gegants Americanos',
            persones: [
              'Xavier Salmerón (President)',
              'Raquel Llorià',
              'Irene Martínez',
              'Marta Juez',
              'Aleix Ibáñez',
              'Vinyet Baqués',
              'Adrià Ruiz',
              'Gabri González',
              'Maria Junyent',
            ],
          },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'El document no assigna voluntariat a aquest acte.' },
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'exhibicio-castellera',
    titol: 'Exhibició castellera de Sant Bartomeu',
    tipus: 'Actuació',
    dia: '2026-08-29',
    data: "29 d'agost",
    hora: '18:00',
    horaText: '18 h',
    resum: 'Exhibició castellera a la plaça de l’Ajuntament amb tres colles convidades.',
    ordre: ['minyons-terrassa', 'nens-vendrell', 'xiquets-serrallo', 'castellers'],
    ordreNota:
      'Actuació per ordre: Minyons de Terrassa, els Nens del Vendrell, els Xiquets del Serrallo i la Colla Jove de Castellers de Sitges.',
    protocolPluja:
      'En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de l’actuació, es realitzarà una trucada a les 17 h entre el president de la Comissió i el representant de la Colla Jove de Castellers de Sitges. Si plou un cop iniciada l’exhibició, la Colla Jove de Castellers de Sitges prendrà les decisions oportunes i ho comunicarà al president de la Comissió.',
    indicacions: ['Hora: a les 18 h puntuals a la plaça de l’Ajuntament.'],
    puntsAigua: [
      { lloc: 'Plaça de l’Ajuntament', detall: 's’han de recollir del Mercat Vell' },
    ],
    comissio: [
      {
        lloc: 'Plaça de l’Ajuntament',
        assignacions: [
          { descripcio: '1 persona vetllant pel transcurs de l’actuació', persones: ['Clàudia Sauret'] },
        ],
      },
    ],
    voluntariat: { hiHa: false, nota: 'El document no assigna voluntariat a aquest acte.' },
  },
]
