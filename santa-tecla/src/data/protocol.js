/**
 * PROTOCOL DE LA FESTA MAJOR DE SITGES EN HONOR A SANT BARTOMEU I SANTA TECLA
 * Actualització 2023 · Consell del Patrimoni Festiu de la Festa Major de Sitges
 *
 * Transcripció del PDF oficial, amb la mateixa estructura del sumari:
 * vuit seccions (A–H), cadascuna amb els seus apartats numerats i subapartats.
 *
 * Els blocs de contingut es descriuen amb una forma mínima i recursiva:
 *   { t: 'p',   text }            paràgraf
 *   { t: 'ul',  items: [] }       llista de punts
 *   { t: 'ol',  items: [] }       llista ordenada (ordres de seguici, etc.)
 *   { t: 'sub', text }            subtítol dins d'un apartat
 */

export const PROTOCOL_META = {
  titol: 'Protocol de la Festa Major',
  subtitol: 'En honor a sant Bartomeu i santa Tecla',
  distincio: 'Festa patrimonial d’interès nacional',
  versio: 'Actualització 2023 · 09.04.2023',
  organ: 'Consell del Patrimoni Festiu de la Festa Major de Sitges',
}

/** Documents annexos, publicats a la web oficial. */
export const PROTOCOL_ANNEXOS = {
  titol: 'Documents annexos',
  descripcio:
    'Les fitxes informatives dels balls, les partitures de les músiques, els tocs de timbal i la resta d’annexos del Protocol es publiquen a la web oficial de la Festa Major.',
  enllac: 'https://www.sitgesfestamajor.cat/mes-informacio/el-protocol/',
  etiqueta: 'sitgesfestamajor.cat · El Protocol',
}

export const PROTOCOL = [
  // ───────────────────────────────────────────────────────────────── B ──
  {
    id: 'b',
    lletra: 'B',
    titol: 'Introducció',
    apartats: [
      {
        id: 'b-1',
        contingut: [
          {
            t: 'p',
            text: 'La Festa Major de Sitges en honor a sant Bartomeu i santa Tecla, declarada per la Generalitat de Catalunya Festa patrimonial d’interès nacional en la resolució del 19 de juliol de 2016 publicada al Diari Oficial de la Generalitat de Catalunya núm. 7167 (21 de juliol de 2016), és la festa més important i significada dels sitgetans. Per això, cal que des de l’Ajuntament s’estableixi un protocol que la defineixi, en el qual s’expliquin els trets més destacats, les relacions institucionals, es fixin les diades i el calendari d’actuacions, així com la presència dels balls, dels entremesos, de la imatgeria festiva, de la música i tot allò que es cregui oportú per al seu millor funcionament.',
          },
          {
            t: 'p',
            text: 'La finalitat del protocol és fixar el conjunt d’actes i de costums que al llarg dels anys han anat configurant els rituals i els seus elements. És a dir, fixar l’estructura de la festa, el seu patrimoni material i immaterial i les regles a complir, sens perjudici que es puguin elaborar o tenir en compte més endavant reglaments de les pròpies colles o elaborats per l’Ajuntament per regular l’alternança dels membres de cada colla.',
          },
          {
            t: 'p',
            text: 'Els criteris que es descriuen en aquest protocol regulen el bon funcionament de la Festa Major i volen evitar arbitrarietats i conflictes d’interessos entre les institucions i els grups i col·lectius que hi participen i ajuden en la seva organització i celebració.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────── C ──
  {
    id: 'c',
    lletra: 'C',
    titol: 'Definició de la presència institucional',
    apartats: [
      {
        id: 'c-1',
        contingut: [
          {
            t: 'p',
            text: 'La Festa Major se celebra en honor a sant Bartomeu i santa Tecla. És una celebració tradicional on els estaments civil i eclesiàstic presideixen els actes que corresponen. Els civils són presidits pels representants de l’Ajuntament i els eclesiàstics ho són pels de la Parròquia.',
          },
          {
            t: 'p',
            text: 'L’organització de la Festa Major recau en la Comissió Municipal de sant Bartomeu i santa Tecla (a partir d’aquí, la Comissió).',
          },
          {
            t: 'p',
            text: 'Els actes i les celebracions religioses comptaran sempre amb la presència del representant de l’Església a Sitges, és a dir, el senyor rector de la Parròquia de sant Bartomeu i santa Tecla.',
          },
          { t: 'sub', text: 'Els actes i les celebracions religioses són' },
          {
            t: 'ul',
            items: [
              'Els solemnes oficis concelebrats, en honor a sant Bartomeu el dia 24 d’agost i en honor a santa Tecla el 23 de setembre.',
              'La processó en honor a sant Bartomeu, el 24 d’agost, i en honor a santa Tecla, el 23 de setembre.',
              'El lliurament de les imatges dels sants patrons.',
              'La missa en sufragi dels difunts de la vila, el 25 d’agost.',
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────── D ──
  {
    id: 'd',
    lletra: 'D',
    titol: 'La imatge corporativa',
    apartats: [
      {
        id: 'd-1',
        contingut: [
          {
            t: 'p',
            text: 'La imatge corporativa de la Festa Major engloba sota un únic referent visual els diversos àmbits i publicacions de la Festa: els cartells, els programes, la web oficial, el Centre d’Interpretació, la Comissió, etc. En el cas que hi hagi marxandatge oficial també haurà de dur la imatge corporativa, així com complir els requisits que en el seu moment s’estableixin.',
          },
          {
            t: 'p',
            text: 'El logotip és una imatge atomitzada de les tradicionals espardenyes de veta que calcen els nostres balladors. A la imatge hi ha un total de trenta-sis punts, que remeten a les trenta-sis hores centrals del folklore sitgetà, les dels actes tradicionals que la vila celebra en honor als seus patrons.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────── E ──
  {
    id: 'e',
    lletra: 'E',
    titol: 'Els patrons de la vila i el funcionament de la Festa',
    apartats: [
      {
        id: 'e-1',
        num: '1',
        titol: 'La Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'La parròquia de Sitges està sota l’advocació dels sants Bartomeu i Tecla; les seves diades són Festa Major a la vila. Les imatges de sant Bartomeu i de santa Tecla, dipositades a la parròquia i custodiades per ella mateixa, són propietat del poble de Sitges.',
          },
          { t: 'sub', text: '1.1 sant Bartomeu' },
          {
            t: 'p',
            text: 'La celebració de sant Bartomeu està documentada almenys des de 1353. La Confraria de sant Bartomeu i santa Tecla n’era la primitiva administradora i, amb la seva desaparició posterior el primer terç del segle XIX, l’Ajuntament de Sitges passa a assumir-ne l’organització cap al 1839.',
          },
          {
            t: 'p',
            text: 'Primerament, l’Ajuntament delega l’organització de la Festa Major a la figura d’uns administradors municipals. Més tard, a partir de 1893, la delegació és a una comissió municipal. Finalment, a partir de 1931, la Festa Major és organitzada per una comissió cívica encapçalada per un president.',
          },
          {
            t: 'p',
            text: 'Els balls, els entremesos, la imatgeria festiva i els músics desfilen en cercaviles i processons acompanyant la imatge i el penó del sant patró i les autoritats. Segueixen antics costums documentats des de 1734. Al llarg del segle XVIII i principis del XIX s’estructuren els actes religiosos i populars de la Festa que, amb més o menys canvis, han perdurat fins a l’actualitat, conformant un llegat patrimonial de gran valor històric.',
          },
          { t: 'sub', text: '1.2 santa Tecla' },
          {
            t: 'p',
            text: 'El primer patronatge conegut de la parròquia de Sitges està documentat almenys des de 1135 i correspon a la figura de santa Tecla. Pel que fa a la diada festiva, aquesta apareix documentada almenys des de 1709.',
          },
          {
            t: 'p',
            text: 'La Confraria de sant Bartomeu i santa Tecla n’era l’antiga administradora i, amb la seva desaparició posterior el primer terç del segle XIX, l’Ajuntament de Sitges passa a assumir-ne l’organització el 1839. Durant bona part de la segona meitat del segle XIX i la primera meitat del segle XX, la Festa queda reclosa als actes religiosos parroquials. El 1948 es recuperen oficialment els actes folklòrics i populars, organitzats ja per una comissió municipal.',
          },
          {
            t: 'p',
            text: 'Igual que per sant Bartomeu, els balls, la imatgeria festiva, els entremesos i els músics desfilen en cercaviles i processons acompanyant la imatge i el penó de la santa patrona i les autoritats. El programa d’actes és similar al de sant Bartomeu, atesa la idèntica gènesi de les dues celebracions i el paral·lelisme que comporta que ambdós sants siguin copatrons. Des de finals del segle XIX hi ha referències documentals esporàdiques de la presència de balls representats per infants a la diada de santa Tecla, fet que s’ordena de forma oficial el 1980 amb la creació de la Matinal infantil.',
          },
        ],
      },
      {
        id: 'e-2',
        num: '2',
        titol: 'La Comissió Municipal de sant Bartomeu i santa Tecla',
        contingut: [
          {
            t: 'p',
            text: 'La Comissió, per delegació de l’Ajuntament, juntament amb la Parròquia, és l’encarregada d’organitzar la Festa Major en honor a sant Bartomeu i santa Tecla. Col·laboren en aquesta organització els caps de colla dels balls i els representants de les associacions participants.',
          },
          {
            t: 'p',
            text: 'La Comissió estarà integrada per la Presidència i les vocalies. També en formaran part dos representants nomenats per l’Ajuntament, per tal de donar-li suport tècnic i logístic i assessorament econòmic.',
          },
          { t: 'sub', text: '2.1 De la presidència' },
          { t: 'p', text: 'La presidència serà nomenada, a proposta de la regidoria corresponent, pel Ple Municipal.' },
          {
            t: 'p',
            text: '2.1.1 Representativitat de la presidència. La persona nomenada representarà l’organització de la Festa Major en honor a sant Bartomeu i santa Tecla.',
          },
          { t: 'sub', text: '2.2 De les vocalies' },
          {
            t: 'p',
            text: 'Els vocals de la Comissió els escollirà la presidència. Preferiblement, han d’estar vinculats amb la Festa Major i han de representar els diversos àmbits de la Festa.',
          },
          { t: 'sub', text: '2.3 Durada dels mandats de la presidència i de les vocalies' },
          {
            t: 'p',
            text: 'La durada del mandat de la presidència i de les vocalies serà de dos anys. Aquest mandat es podrà prorrogar dos anys més, a proposta de la regidoria corresponent.',
          },
          { t: 'sub', text: '2.4 Drets i obligacions de la presidència i de les vocalies' },
          { t: 'p', text: 'De la presidència:' },
          {
            t: 'ul',
            items: [
              'a) Escollir les vocalies de la Comissió. Un cop ha fet la tria, ha de fer-la arribar a la regidoria corresponent perquè aquesta en proposi el nomenament al Ple municipal.',
              'b) Representar l’organització de la Festa Major en honor a sant Bartomeu i santa Tecla.',
              'c) Acordar amb la Parròquia la solució a adoptar davant una incidència que es produeixi en el desenvolupament d’un acte organitzat per ambdues parts. La decisió que es prengui serà inapel·lable.',
              'd) Informar la Parròquia de les decisions preses per la Comissió en referència a l’organització de la Festa Major.',
              'e) Fer saber a l’Ajuntament i als representants de les colles la solució presa, d’acord amb la Parròquia, davant qualsevol incidència relacionada amb el desenvolupament de la Festa.',
              'f) Durant el seu mandat, formar part del Consell del Patrimoni Festiu de la Festa Major de Sitges.',
              'g) Rebre el penó de sant Bartomeu en el decurs de l’acte de lliurament de la Bandera i exposar-lo al seu domicili o espai públic o privat que aquest designi, des d’aquest moment fins que hi surti la Processó Cívica.',
            ],
          },
          { t: 'p', text: 'De la presidència i de les vocalies:' },
          {
            t: 'ul',
            items: [
              'a) Organitzar la Festa Major conjuntament amb la regidoria corresponent i la Parròquia, respectant sempre el pressupost establert per l’Ajuntament per a l’any en curs i procurant l’equilibri pressupostari.',
              'b) Nomenar les persones designades com a pendonistes de sant Bartomeu i de santa Tecla, en l’any alternatiu al que les anomeni la Parròquia, i proposar qui fa el pregó de sant Bartomeu.',
              'c) En cas que la presidència visqui en un lloc allunyat de la parròquia, buscar un espai públic o privat, consensuat amb la regidoria corresponent, per exposar el penó de sant Bartomeu i ser el punt de partida de la Processó Cívica.',
              'd) En cas que el/la pendonista visqui en un lloc allunyat del centre de la vila, a proposta seva, la Comissió, d’acord amb la Parròquia, buscarà un espai públic o privat on s’exposi la imatge del patró o de la patrona.',
              'e) Fer complir, en tot moment, aquest protocol i interpretar, conjuntament amb el Consell del Patrimoni Festiu, tot allò que no hi estigui recollit.',
              'f) Preparar el programa d’actes de la Festa Major, conjuntament amb la regidoria corresponent i les associacions.',
              'g) Mantenir informats els caps de colla de les possibles modificacions en els recorreguts o en les activitats en les quals les colles hi tinguin una presència activa.',
              'h) Coordinar els grups de músiques del seguici.',
              'i) Amb l’Ajuntament, preparar i proposar el lloc de celebració en cas que es decideixi organitzar un acte de reconeixement a la trajectòria d’una o vàries persones vinculades a la Festa Major.',
              'j) Decidir qui dispararà els morterets dels dies 23 d’agost i 22 de setembre.',
              'k) Decidir quin és l’ordre d’actuació dels balls, dels entremesos i de la imatgeria festiva tant a l’Hort de Can Falç com a l’Hospital de sant Joan Baptista a la Sortida de les dues.',
              'l) Determinar el recorregut de la Processó Cívica del dia 23 d’agost, tenint en compte la situació dels domicilis o dels espais públics o privats que designin la presidència de la Comissió i el pendonista. També indicarà de quina manera els balls, els entremesos i la imatgeria festiva rebran la imatge de sant Bartomeu al final d’aquesta processó.',
              'm) Convidar persones que estan o han estat vinculades a la Festa Major a desfilar en un dels brecs a la Matinal.',
              'n) Obsequiar els assistents a les processons de sant Bartomeu i de santa Tecla amb un mocador on hi ha estampats la imatge del sant o de la santa i el nom de la persona designada com a pendonista, respectivament.',
              'o) Determinar el recorregut de la Processó Cívica del dia 22 de setembre, tenint en compte la situació del domicili o de l’espai públic o privat que designi la persona designada com a pendonista. També indicarà de quina manera els balls, els entremesos i la imatgeria festiva rebran la imatge de santa Tecla al final d’aquesta processó.',
              'p) Informar els representants de les colles infantils i l’Agrupació de Balls Populars de Sitges sobre tots aquells aspectes del desenvolupament de la Festa en els quals les colles infantils hi tenen una presència activa.',
              'q) Concretar cada any el recorregut de la Matinal infantil.',
            ],
          },
          { t: 'sub', text: '2.5 Drets i obligacions de la Parròquia i de qui fa d’enllaç amb la Comissió' },
          { t: 'p', text: 'De la Parròquia:' },
          {
            t: 'ul',
            items: [
              'a) Acordar amb la Comissió la solució a adoptar davant una incidència que es produeixi en el desenvolupament d’un acte organitzat per ambdues parts. La decisió que es prengui serà inapel·lable.',
              'b) Informar la Comissió de les decisions preses per la Parròquia en referència a l’organització de la Festa Major.',
              'c) Fer saber a l’Ajuntament i als representants de les colles la solució presa, d’acord amb la Comissió, davant qualsevol incidència relacionada amb el desenvolupament de la Festa.',
              'd) Nomenar la persona que fa d’enllaç entre la Parròquia i la Comissió i la representa al Consell del Patrimoni Festiu de la Festa Major.',
              'e) Presidir les processons en honor a sant Bartomeu, el 24 d’agost, i a santa Tecla, el 23 de setembre.',
              'f) Donar la seva conformitat a la sortida i al recorregut de les processons de sant Bartomeu i santa Tecla.',
              'g) Nomenar les persones designades com a pendonistes de sant Bartomeu i de santa Tecla, en l’any alternatiu al que les anomeni la Comissió.',
              'h) Estar sempre informada dels nomenaments de la Comissió.',
              'i) Nomenar les persones o el grup que portaran els tabernacles de sant Bartomeu i de santa Tecla a les respectives processons.',
              'j) Ésser convidada a tots els actes oficials que programin l’Ajuntament i la Comissió.',
              'k) Participar amb la imatgeria religiosa a les processons.',
              'l) Deixar els espais necessaris de la Parròquia per al Castell de foc, previ compromís per part de la Comissió que ni al campanar ni als teulats s’instal·larà pirotècnia que pugui malmetre el temple.',
              'm) Col·laborar en l’organització del repic de campanes, tant per sant Bartomeu com per santa Tecla.',
              'n) Guarnir, d’acord amb la persona designada com a pendonista, el tabernacle i els espais on s’exposin les imatges de sant Bartomeu i de santa Tecla, procurant sempre l’equilibri pressupostari.',
              'o) Obrir les respectives processons en honor a sant Bartomeu i a santa Tecla amb el gonfanó.',
            ],
          },
          { t: 'p', text: 'De qui fa d’enllaç amb la Comissió:' },
          {
            t: 'ul',
            items: [
              'a) Mantenir informada la Comissió de tots aquells aspectes relacionats amb els drets i obligacions de la Parròquia.',
            ],
          },
          { t: 'sub', text: '2.6 Accions compartides entre la Parròquia, l’Ajuntament i la Comissió' },
          {
            t: 'ul',
            items: [
              'a) Mantenir la tradició de cantar els goigs de sant Bartomeu i els de santa Tecla i promoure’n el coneixement.',
              'b) Consensuar les modificacions excepcionals dels horaris dels oficis i de les processons i dels seus recorreguts.',
              'c) En cas de pluja, previsió de pluja o de qualsevol emergència que pugui afectar el desenvolupament de les cercaviles i de les processons, mitja hora abans es reuniran l’Ajuntament, la Comissió (prèvia consulta als caps de colla) i la Parròquia per prendre una decisió. Aquest protocol contempla la possibilitat de modificar els horaris i recorreguts en funció de la situació. La decisió s’ha de prendre conjuntament i serà inapel·lable. Si plou un cop iniciada la cercavila, la Comissió prendrà les decisions que consideri més oportunes.',
            ],
          },
        ],
      },
      {
        id: 'e-3',
        num: '3',
        titol: 'Dates d’inici i d’acabament de la Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'La celebració dels actes oficials de sant Bartomeu és del 19 al 26 d’agost. El pregó és l’acte que en marca l’inici. Tradicionalment, les festes solemnes tenen una durada de 8 dies.',
          },
          {
            t: 'p',
            text: 'La celebració dels actes oficials de santa Tecla comença el cap de setmana abans del 23 de setembre i acaba la mateixa diada de la santa.',
          },
          {
            t: 'p',
            text: 'Els caps de setmana més propers, passades les diades de sant Bartomeu i de santa Tecla, se celebren les respectives exhibicions castelleres de Festa Major.',
          },
        ],
      },
      {
        id: 'e-4',
        num: '4',
        titol: 'Designació dels pendonistes i de qui fa el pregó',
        contingut: [
          { t: 'sub', text: '4.1 Els pendonistes' },
          {
            t: 'p',
            text: 'Des de 1906, l’elecció la fan conjuntament i per consens l’Ajuntament i la Parròquia. L’Ajuntament l’escull a proposta de la Comissió.',
          },
          {
            t: 'p',
            text: 'Si per sant Bartomeu fa la proposta la Parròquia, per santa Tecla la fa l’Ajuntament. L’any següent, per sant Bartomeu la fa l’Ajuntament i per santa Tecla la Parròquia.',
          },
          {
            t: 'p',
            text: 'L’elecció de les persones designades com a pendonistes es formalitzarà en una reunió entre el/la President/a de la Comissió, el/la regidor/a de festes, el Rector i un/a representant de la Parròquia. Tradicionalment s’ha escollit un home per sant Bartomeu i una dona per santa Tecla.',
          },
          { t: 'sub', text: '4.1.1 Responsabilitats i representativitat de les persones designades com a pendonistes' },
          {
            t: 'ul',
            items: [
              'a) Tenen una presència activa a la Festa. Són convidades a assistir al Pregó i als actes de més relleu.',
              'b) Les imatges de sant Bartomeu i de santa Tecla són exposades als seus domicilis o als espais públics o privats que designin.',
              'c) Són les encarregades de dur els penons dels sants patrons a les processons respectives.',
              'd) Nomenen els/les cordonistes. Han de notificar aquest nomenament a la Comissió i a la Parròquia.',
              'e) En cas que visquin en un lloc allunyat del centre de la vila, a proposta seva, la Comissió, d’acord amb la Parròquia, buscarà un espai públic o privat on s’exposi la imatge del patró o de la patrona.',
              'f) L’Ajuntament assumirà les despeses del guarniment floral i decoració d’aquest espai, d’acord amb les possibilitats pressupostàries.',
              'g) L’Ajuntament i la Parròquia es faran càrrec del cost econòmic dels mocadors i dels ciris que portarà el seguici religiós.',
            ],
          },
          { t: 'sub', text: '4.2 De la persona que fa el pregó' },
          {
            t: 'ul',
            items: [
              'a) Obre els actes de la Festa Major amb la lectura d’una glossa sobre la Festa.',
              'b) La designa l’Ajuntament a proposta de la Comissió.',
              'c) Té una presència activa a la Festa. És convidada als actes de més relleu.',
            ],
          },
        ],
      },
      {
        id: 'e-5',
        num: '5',
        titol: 'Els balls, els entremesos i la imatgeria festiva',
        contingut: [
          { t: 'p', text: 'Els balls, els entremesos i la imatgeria festiva són:' },
          {
            t: 'ul',
            items: [
              'L’Àliga',
              'El Ball de Bastons',
              'El Ball de Cercolets',
              'El Ball de Cintes',
              'El Ball de Diables',
              'El Ball de Gitanes',
              'El Ball de Panderetes',
              'El Ball de Pastorets',
              'Els Cabeçuts',
              'Els Castellers',
              'La Fera foguera (o el Drac)',
              'Els Gegants americanos',
              'Els Gegants moros',
              'Els Gegants de la vila (vells i nous)',
              'La Moixiganga',
            ],
          },
          {
            t: 'p',
            text: 'En el moment de l’aprovació d’aquest protocol, la representació d’aquests balls, entremesos i imatgeria festiva és a càrrec de:',
          },
          {
            t: 'ul',
            items: [
              'L’Àliga (Ajuntament de Sitges)',
              'El Ball de Bastons, Colla Noies (Ajuntament de Sitges)',
              'El Ball de Bastons, Colla Jove (Ajuntament de Sitges)',
              'El Ball de Bastons, Colla Mitjana (Ajuntament de Sitges)',
              'El Ball de Bastons, Colla Vella (Ajuntament de Sitges)',
              'El Ball de Cercolets (Agrupació de Balls Populars de Sitges)',
              'El Ball de Cintes (Agrupació de Balls Populars de Sitges)',
              'El Ball de Diables, Colla Agrupació de Balls Populars de Sitges (ABPS)',
              'El Ball de Diables, Colla Jove (Ajuntament de Sitges)',
              'El Ball de Diables, Colla Vella (Ajuntament de Sitges)',
              'El Ball de Gitanes (Ajuntament de Sitges)',
              'El Ball de Gitanes (Agrupació de Balls Populars de Sitges)',
              'El Ball de Panderetes (Agrupació de Balls Populars de Sitges)',
              'El Ball de Pastorets (Agrupació de Balls Populars de Sitges)',
              'Els cabeçuts (Agrupació de Balls Populars de Sitges)',
              'La Colla Jove de Castellers de Sitges',
              'La Fera foguera (o el Drac) (Ajuntament de Sitges)',
              'Els Gegants americanos (Ajuntament de Sitges)',
              'Els Gegants moros (Agrupació de Balls Populars de Sitges)',
              'Els Gegants de la vila (vells i nous) (Ajuntament de Sitges)',
              'La Moixiganga (Agrupació de Balls Populars de Sitges)',
            ],
          },
          { t: 'p', text: 'Els que participen a la Matinal infantil són:' },
          {
            t: 'ul',
            items: [
              'El Ball de Bastons',
              'El Ball de Cercolets',
              'El Ball de Cintes',
              'El Ball de Diables',
              'El Ball de Gitanes',
              'El Ball de Panderetes',
              'El Ball de Pastorets',
              'El bestiari',
              'Els cabeçuts',
              'Els gegants',
              'La Moixiganga',
            ],
          },
          { t: 'sub', text: '5.1 Fitxes informatives' },
          {
            t: 'p',
            text: 'A l’Annex 1 del protocol i a la part «Elements del seguici popular» de la web oficial Sitges Festa Major hi ha disponibles les fitxes informatives dels balls, dels entremesos i de la imatgeria festiva.',
          },
          { t: 'sub', text: '5.2 Responsabilitats dels components i dels caps de colla' },
          { t: 'p', text: 'Dels components:' },
          {
            t: 'ul',
            items: [
              'a) Participar activament en el desenvolupament de la Festa i en les sortides que l’Ajuntament els sol·liciti.',
              'b) Mantenir en tot moment el civisme en les cercaviles i les processons, no desviar-se del recorregut oficial, no aturar-les més enllà de l’indispensable i respectar el públic.',
              'c) Les colles que representen els balls de Cercolets, de Gitanes i de Pastorets recitaran exclusivament els versos tradicionals. Les colles que representen el Ball de Diables mantindran la part tradicional dels versos amb els deu d’estil satíric i sarcàstic. La colla de la Fera foguera (o el Drac) recita uns versos que inclouen també una part satírica i sarcàstica.',
              'd) Mantenir el vestuari en perfectes condicions durant les cercaviles i les processons, sense afegir-hi cap element que el distorsioni. Qualsevol proposta de canvi caldrà adreçar-la, mitjançant proposta escrita i documentada, a la regidoria responsable de les tradicions i les festes per ser estudiada amb l’assessorament del Consell del Patrimoni Festiu.',
              'e) Atendre les indicacions dels representants de l’organització de la Festa, per al bon desenvolupament dels actes.',
              'f) Mantenir reunions amb qui fa d’enllaç de la Parròquia i amb la Comissió, en cas que se’ls demani.',
              'g) No entorpir amb actuacions no consensuades les cercaviles i les processons.',
              'h) Les colles de foc, per motius de seguretat, tiraran només les carretilles i els sortidors tradicionals, en totes les seves variants, facilitats pel fabricant, sense manipulacions ni modificacions i sota coneixement de la Comissió.',
              'i) Acceptar com a inapel·lables les decisions acordades entre la Parròquia, l’Ajuntament i la Comissió, pel que fa a horaris, recorreguts, actuacions i situacions imprevistes.',
              'j) Escollir cap de colla.',
              'k) Fer propostes de modificacions o esmenes al Protocol, a través del seu cap de colla.',
            ],
          },
          { t: 'p', text: 'Dels caps de colla:' },
          {
            t: 'ul',
            items: [
              'a) Tenir cura que la seva colla representi el ball d’acord amb el que regula la corresponent fitxa informativa.',
              'b) Vetllar perquè la seva colla compleixi aquest Protocol.',
              'c) Vetllar perquè la processó o cercavila vagi seguida, procurant que els balls, entremesos o imatgeria festiva vagin l’un darrere l’altre i sense provocar talls.',
              'd) Desenvolupar els papers de representant de la colla i d’interlocutor amb la Comissió i el Consell del Patrimoni Festiu.',
              'e) Col·laborar en l’organització de la Festa Major en aquells moments puntuals que la Comissió li ho requereixi.',
              'f) Ésser informat sobre tots aquells aspectes del desenvolupament de la Festa en els quals les colles hi tenen una presència activa.',
              'g) Posar-se en contacte amb els interessats a formar part d’un ball, per informar-los de les possibles vacants que hi hagi i de les normes de participació.',
              'h) Autoritzar els «agregats» de la seva colla a participar a la Matinal i vetllar perquè duguin el vestuari del ball, el representin correctament i d’acord amb aquest Protocol.',
              'i) En cas que rebi directament una invitació o una sol·licitud de participació en un esdeveniment, informar-ne, amb una antelació mínima d’una setmana, la regidoria responsable de les tradicions i les festes.',
              'j) Recollir les propostes de modificacions o esmenes al Protocol que li facin els membres de la seva colla i traslladar-les al seu representant al Consell del Patrimoni Festiu.',
            ],
          },
          { t: 'p', text: 'Dels representants de les colles infantils:' },
          {
            t: 'ul',
            items: [
              'a) Col·laborar amb la Comissió per al bon funcionament d’aquells actes en els quals hi participen les colles infantils.',
              'b) Ésser informats sobre tots aquells aspectes del desenvolupament de la Festa en els quals les colles infantils hi tenen una presència activa.',
              'c) Col·laborar amb la Comissió en l’organització de la Matinal infantil.',
              'd) Els representants de les colles infantils de foc es responsabilitzaran de formar els infants en matèria de manipulació de pirotècnia i seguretat, impartint-los el curs de CRE (Consumidor Reconegut com Expert).',
            ],
          },
          { t: 'sub', text: '5.3 Nombre de persones que participen en cada ball' },
          {
            t: 'p',
            text: 'El nombre de participants en cada ball, entremès i imatgeria festiva queda normalitzat a l’annex d’aquest protocol, on hi ha disponibles les respectives fitxes informatives. L’incompliment d’aquesta norma es regula a l’apartat H.',
          },
          { t: 'sub', text: '5.3.1 Els «agregats» a la Matinal' },
          {
            t: 'p',
            text: 'És tradició que a la Matinal hi participin «agregats» als balls, als entremesos i a la imatgeria festiva, els quals són persones que no formen part de les colles. S’hi podran incorporar prèvia autorització del cap de colla. Han de dur el vestuari del ball i representar-lo correctament i d’acord amb aquest Protocol. Els «agregats» als balls que fan les passades de faixes han d’anar amb pantalons i camisa blancs, espardenyes de betes blaves i vermelles i una faixa negra, blava o vermella.',
          },
          { t: 'sub', text: '5.3.2 La participació a les cercaviles i a la Matinal infantil' },
          { t: 'p', text: 'Els infants i els joves hi participen en els següents actes:' },
          {
            t: 'ul',
            items: [
              'La cercavila de gegants i cabeçuts i l’exhibició de balls i entremesos infantils.',
              'La cercavila de diables i bestiari infantils i la representació del Ball de diables (colles infantils).',
              'La Matinal infantil.',
            ],
          },
          {
            t: 'p',
            text: 'Aquests actes estan oberts a infants i joves fins als 16 anys. L’organització de cada ball indicarà les edats òptimes. En el cas del Ball de Diables i del bestiari amb carretilles infantils, l’edat mínima per participar-hi és de 10 anys. A partir dels 8 anys, però, els infants hi poden participar com a timbalers. Els infants i els joves han d’haver complert o complir l’edat durant l’any que volen sortir.',
          },
          {
            t: 'p',
            text: 'Cada any, l’Ajuntament, mitjançant una crida pública als mitjans de comunicació, obrirà un període d’inscripcions per participar amb bestiari, gegants o cabeçuts.',
          },
          { t: 'p', text: 'En funció de les edats, la participació queda regulada de la següent manera:' },
          {
            t: 'ul',
            items: [
              'Gegants, cabeçuts i bestiari que no llança carretilles: entre 5 i 16 anys.',
              'Bestiari que llança carretilles infantils: entre els 10 i els 16 anys, amb el curs CRE vigent o allò que reguli la normativa vigent. Timbalers entre 8 i 16 anys.',
            ],
          },
          {
            t: 'p',
            text: 'La sol·licitud per participar a la resta de balls serà lliurada als caps de les colles infantils, els quals es posaran en contacte amb els interessats per informar-los de les normes de participació. Les colles que representen el Ball de Diables i que tenen una colla infantil són: Agrupació de Balls Populars de Sitges, Colla Jove i Colla Vella. En els actes regulats en aquest apartat només hi poden participar els infants i els joves que formen part dels balls.',
          },
          { t: 'sub', text: '5.4 Ordre de participació a les cercaviles i processons' },
          {
            t: 'ol',
            items: [
              'Els Gegants de la vila (vells o nous)',
              'Els Gegants americanos',
              'Els Gegants moros',
              'Els cabeçuts',
              'El Ball de Diables, Colla Vella',
              'La Fera foguera (o el Drac)',
              'El Ball de Diables, Colla Jove',
              'L’Àliga',
              'El Ball de Diables (Agrupació de Balls Populars de Sitges)',
              'El Ball de Bastons, Colla Jove',
              'El Ball de Bastons, Colla Noies',
              'El Ball de Gitanes',
              'El Ball de Bastons, Colla Mitjana',
              'El Ball de Bastons, Colla Vella',
              'El Ball de Pastorets',
              'El Ball de Cercolets',
              'El Ball de Panderetes',
              'El Ball de Cintes',
              'El Ball de Gitanes (Agrupació de Balls Populars de Sitges)',
              'La Moixiganga',
            ],
          },
          { t: 'p', text: 'L’ordre a la sortida de les 14 h és:' },
          {
            t: 'ol',
            items: [
              'Els Gegants de la vila (vells o nous)',
              'Els Gegants americanos',
              'Els Gegants moros',
              'Els cabeçuts',
              'El Ball de Diables, Colla Vella',
              'La Fera foguera (o el Drac)',
              'El Ball de Diables, Colla Jove',
              'L’Àliga',
              'El Ball de Diables, Colla ABPS',
              'El Ball de Bastons, Colla Jove',
              'El Ball de Bastons, Colla Noies',
              'El Ball de Cercolets',
              'El Ball de Panderetes',
              'El Ball de Pastorets',
              'El Ball de Gitanes',
              'El Ball de Bastons, Colla Mitjana',
              'El Ball de Bastons, Colla Vella',
              'El Ball de Cintes',
              'El Ball de Gitanes (Agrupació de Balls Populars de Sitges)',
              'La Moixiganga',
            ],
          },
          { t: 'p', text: 'L’ordre a la sortida d’Ofici és:' },
          {
            t: 'ol',
            items: [
              'Els Gegants de la vila (vells o nous)',
              'Els Gegants americanos',
              'Els Gegants moros',
              'Els cabeçuts',
              'El bestiari: la Fera foguera (o el Drac) i l’Àliga',
              'Les tres colles que representen el Ball de Diables (Vella, Jove i ABPS)',
              'El Ball de Bastons, Colla Jove',
              'El Ball de Bastons, Colla Noies',
              'El Ball de Panderetes',
              'El Ball de Bastons, Colla Mitjana',
              'El Ball de Bastons, Colla Vella',
              'El Ball de Cintes',
              'El Ball de Gitanes',
              'El Ball de Gitanes (Agrupació de Balls Populars de Sitges)',
              'El Ball de Pastorets',
              'La Moixiganga',
              'El Ball de Cercolets',
              'Els castellers (Colla Jove de Castellers de Sitges)',
            ],
          },
          { t: 'p', text: 'L’ordre a la baixada per les escales de la Punta és:' },
          {
            t: 'ol',
            items: [
              'Els Gegants de la vila (vells o nous)',
              'Els Gegants americanos',
              'Els Gegants moros',
              'Els cabeçuts',
              'El Ball de Cercolets',
              'El Ball de Panderetes',
              'El Ball de Bastons, Colla Jove',
              'El Ball de Bastons, Colla Noies',
              'El Ball de Bastons, Colla Mitjana',
              'El Ball de Bastons, Colla Vella',
              'El Ball de Gitanes',
              'El Ball de Gitanes (Agrupació de Balls Populars de Sitges)',
              'El Ball de Pastorets',
              'El Ball de Cintes',
              'La Moixiganga',
              'El bestiari: la Fera foguera (o el Drac) i l’Àliga',
              'Les tres colles que representen el Ball de Diables (Vella, Jove i ABPS)',
            ],
          },
          {
            t: 'p',
            text: 'En el cas que una o vàries colles de castellers participin en alguna sortida, ho faran darrere de la Moixiganga.',
          },
          { t: 'sub', text: '5.5 Nous balls, entremesos i imatgeria festiva' },
          {
            t: 'p',
            text: 'És el Consell del Patrimoni Festiu qui decideix la incorporació de noves colles i de nous balls, entremesos i imatgeria festiva, prèvia proposta escrita i documentada de l’associació o grup que la promogui. No s’acceptarà la incorporació de cap colla, ball, entremès o imatgeria festiva que representi la repetició d’un dels ja existents en la data d’aprovació d’aquest protocol.',
          },
          { t: 'sub', text: '5.6 Canvis en el vestuari, els elements, la coreografia i els versos' },
          {
            t: 'p',
            text: 'Qualsevol proposta de canvi caldrà adreçar-la, mitjançant proposta escrita i documentada, a la regidoria corresponent. La proposta serà valorada per la regidoria responsable de les tradicions i les festes, els consells municipals de les festes implicades i qualsevol altre estament i/o persona que considerin necessària les parts anteriors. La decisió presa ha de ser fruit d’un ampli consens entre les parts.',
          },
          {
            t: 'p',
            text: 'El fet que es dugui a terme un canvi sense seguir el que estableix aquest apartat queda regulat en l’apartat H.',
          },
          { t: 'sub', text: '5.7 Futurs participants' },
          {
            t: 'p',
            text: 'Amb l’objectiu d’aconseguir una major transparència i equitat en l’accés a participar als balls, totes aquelles persones interessades hauran d’omplir una sol·licitud general, on indicaran les dades personals i el ball o balls en els quals volen participar, adreçada a la regidoria corresponent. La sol·licitud serà lliurada posteriorment als caps de colla, els quals es posaran en contacte amb els interessats.',
          },
          { t: 'p', text: 'L’edat mínima per formar part d’un ball és la de 18 anys, amb les excepcions següents:' },
          {
            t: 'ul',
            items: [
              'Ball de Cercolets: els balladors han de tenir com a mínim 9 anys, a excepció de l’angelet.',
              'Ball de Diables: els personatges de sant Miquel i l’àngel.',
              'Ball de Pastorets: l’edat mínima per participar-hi és la de 16 anys.',
              'Ball de Panderetes: l’edat mínima per participar-hi és la de 16 anys.',
              'Castellers: canalla castellera.',
            ],
          },
          {
            t: 'p',
            text: 'És indispensable que la persona que vulgui entrar a formar part d’un ball respecti la Festa, els seus organitzadors i les indicacions del seu cap de colla.',
          },
          { t: 'sub', text: '5.8 Representativitat dins i fora del municipi' },
          {
            t: 'p',
            text: 'La decisió sobre la sortida o no dels balls, dels entremesos i de la imatgeria festiva dins i fora de Sitges és de la regidoria responsable de les tradicions i les festes, la qual ho comunicarà als consells municipals de les festes implicades.',
          },
          {
            t: 'p',
            text: 'En cas que l’Ajuntament rebi una invitació o una sol·licitud factibles, la regidoria informarà tots els caps de colla dels balls pertinents. Si la invitació la rep directament una colla, el cap de colla informarà de la sortida a la regidoria, la qual prendrà la decisió que cregui oportuna; aquesta decisió haurà de ser acatada per la colla.',
          },
          {
            t: 'p',
            text: 'Sempre que siguin convidats per una institució o una associació han de demanar que es faci una pòlissa de Responsabilitat Civil.',
          },
          { t: 'p', text: 'Sortides tradicionals a Sitges:' },
          { t: 'ul', items: ['Aplec de la Trinitat', 'Corpus', 'Festa Major de Campdàsens'] },
          {
            t: 'p',
            text: 'Se celebraran només de forma oficial els aniversaris dels balls, dels entremesos i de la imatgeria festiva cada 25 anys i prèvia sol·licitud a la regidoria corresponent.',
          },
          { t: 'sub', text: '5.9 El seguiment de l’activitat' },
          {
            t: 'p',
            text: 'El seguiment de l’activitat dels balls, dels entremesos i de la imatgeria festiva és responsabilitat del Consell del Patrimoni Festiu de la Festa Major de Sitges. El Consell farà aquest seguiment tenint en compte aquest protocol amb els respectius annexos, les fitxes informatives de la web oficial i el Reglament del propi Consell. A Sitges, si existeix un protocol específic d’una altra festa, aquest segon serà el que prevaldrà per a la festa en qüestió.',
          },
        ],
      },
      {
        id: 'e-6',
        num: '6',
        titol: 'Les músiques',
        contingut: [
          {
            t: 'p',
            text: 'La música és un patrimoni fonamental de la festa. A Sitges hi ha diferents expressions musicals que participen a la Festa Major. Als annexos d’aquest protocol hi ha la transcripció de les partitures amb les músiques dels balls, dels entremesos i de la imatgeria festiva i la transcripció dels tocs de timbal. També hi ha la descripció de les formacions habituals amb les quals es ballen aquestes músiques.',
          },
          {
            t: 'p',
            text: 'Els músics —la banda, la cobla, els grallers, els sonadors de sac de gemecs i els flabiolaires— assumiran la seva responsabilitat segons el contracte signat amb l’Ajuntament.',
          },
          { t: 'sub', text: '6.1 Les músiques dels balls, dels entremesos i de la imatgeria festiva' },
          {
            t: 'p',
            text: 'Els balls, els entremesos i la imatgeria festiva que participen a les cercaviles i a les processons van acompanyats dels grups de músics corresponents, que fan sonar gralles, timbals, sac de gemecs o flabiol i tamborí, segons la tradició del ball. El Ball de Diables, la Fera foguera (o el Drac) i l’Àliga van acompanyats cadascun d’un estol de timbalers que interpreta el toc corresponent. Els balls han de ballar amb les músiques que són pròpies de cadascun.',
          },
          { t: 'sub', text: '6.2 La banda de música' },
          { t: 'p', text: 'És present en els següents actes:' },
          {
            t: 'ul',
            items: [
              'El lliurament, el trasllat i la inauguració de l’exposició de les imatges de sant Bartomeu i de santa Tecla.',
              'El lliurament de la Bandera.',
              'La sortida de les dues del dia 23 d’agost.',
              'La Processó Cívica dels dies 23 d’agost i 22 de setembre.',
              'L’anada a Ofici dels dies 24 d’agost i 23 de setembre.',
              'La Sortida d’Ofici dels dies 24 d’agost i 23 de setembre.',
              'El concert vermut i el cafè concert dels dies 24 d’agost i 23 de setembre.',
              'Les processons en honor a sant Bartomeu i a santa Tecla, dels dies 24 d’agost i 23 de setembre.',
            ],
          },
          { t: 'sub', text: '6.3 La cobla' },
          { t: 'p', text: 'És present en els següents actes:' },
          {
            t: 'ul',
            items: [
              'La ballada de sardanes al Cap de la Vila del dia 23 d’agost.',
              'Les revetlles de Festa Major dels dies 23 d’agost i 22 de setembre.',
              'La Sortida d’Ofici dels dies 24 d’agost i 23 de setembre.',
              'El concert vermut i el cafè concert dels dies 24 d’agost i 23 de setembre.',
              'Les processons en honor a sant Bartomeu i a santa Tecla, dels dies 24 d’agost i 23 de setembre.',
              'La revetlla sardanista de cloenda.',
            ],
          },
          { t: 'sub', text: '6.4 El repic de campanes' },
          {
            t: 'p',
            text: 'Són els campaners els que fan sonar les campanes de l’església parroquial. Els repics habituals de la Festa Major són:',
          },
          {
            t: 'ul',
            items: [
              'A les dues de la tarda dels dies 23 d’agost i 22 de setembre.',
              'Mitja hora abans dels solemnes oficis del dia 24 d’agost i del dia 23 de setembre.',
              'Mitja hora abans de la processó del dia 24 d’agost i de la del 23 de setembre, com a anunci de la seva sortida.',
              'Quan el principi d’aquestes processons gira el carrer de Bonaire, a l’alçada del passeig de la Ribera, les comencen a repicar de forma intermitent fins que arriben al Baluard.',
              'A l’entrada del tabernacle a la parròquia en finalitzar la processó del dia 24 d’agost i la del 23 de setembre.',
            ],
          },
          { t: 'sub', text: '6.5 Els goigs a sant Bartomeu i a santa Tecla' },
          {
            t: 'p',
            text: 'En acabar la celebració dels solemnes oficis en honor a sant Bartomeu i a santa Tecla, es canten els goigs al sant patró corresponent. A més, els de sant Bartomeu també es canten a l’acte del lliurament de la Bandera.',
          },
        ],
      },
      {
        id: 'e-7',
        num: '7',
        titol: 'Els reconeixements',
        contingut: [
          {
            t: 'p',
            text: 'Es faran en un acte públic i en un espai adient per a la comoditat dels assistents. No cal que sigui cada any. L’Ajuntament i la Comissió prepararan l’acte i en proposaran el lloc de celebració.',
          },
        ],
      },
      {
        id: 'e-8',
        num: '8',
        titol: 'La participació de les pubilles i dels hereus',
        contingut: [
          {
            t: 'p',
            text: 'La participació de la pubilla i l’hereu de Sitges i de la resta del pubillatge en els actes de la Festa Major queda regulada només per aquest protocol. En funció de cada acte, seguiran les indicacions de la Comissió, de l’Ajuntament o de la Parròquia.',
          },
          {
            t: 'p',
            text: 'En el cas que una pubilla o un hereu de Sitges obtingui un títol de pubillatge nacional, serà automàticament convidat/da als mateixos actes que la pubilla i l’hereu de Sitges vigents. Les pubilles i els hereus, mentre representen aquest càrrec, s’abstindran de fer cap ball.',
          },
          { t: 'p', text: 'Aquest col·lectiu participa en aquests actes i de la següent forma:' },
          {
            t: 'ul',
            items: [
              'a) El trasllat de la imatge de sant Bartomeu: hi assisteixen la pubilla i l’hereu de Sitges i la resta del pubillatge.',
              'b) L’anada a l’Ofici en honor a sant Bartomeu: hi participen la pubilla i l’hereu de Sitges. La resta del pubillatge va directament a la parròquia mitja hora abans.',
              'c) El solemne Ofici en honor a sant Bartomeu: la pubilla i l’hereu de Sitges i la resta del pubillatge hi són convidats.',
              'd) La Sortida d’Ofici del dia de sant Bartomeu: la pubilla i l’hereu de Sitges formen part del seguici de les autoritats.',
              'e) El trasllat de la imatge de santa Tecla: el pubillatge de Sitges acompanya la imatge al lloc triat per la persona designada pendonista. Les pubilles porten el tabernacle.',
              'f) La Processó Cívica: el pubillatge de Sitges acompanya la imatge de santa Tecla. Les pubilles porten el tabernacle.',
              'g) L’anada a l’Ofici en honor a santa Tecla: hi participen la pubilla i l’hereu de Sitges i la resta del pubillatge.',
              'h) El solemne Ofici en honor a santa Tecla: la pubilla i l’hereu de Sitges i la resta del pubillatge hi són convidats.',
              'i) La Sortida d’Ofici del dia de santa Tecla: la pubilla i l’hereu de Sitges i la resta del pubillatge formen part del seguici de les autoritats.',
              'j) La Processó en honor a santa Tecla: el pubillatge de Sitges acompanya la imatge. Les pubilles porten el tabernacle.',
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────── F ──
  {
    id: 'f',
    lletra: 'F',
    titol: 'Actes, cercaviles i processons de sant Bartomeu',
    apartats: [
      {
        id: 'f-1',
        num: '1',
        titol: 'El pregó',
        contingut: [
          {
            t: 'p',
            text: 'És l’acte que obre la Festa Major. Se celebra el 19 d’agost en un espai públic. En cas de pluja, es buscarà un espai alternatiu.',
          },
        ],
      },
      {
        id: 'f-2',
        num: '2',
        titol: 'El lliurament, el trasllat i la inauguració de l’exposició de la imatge',
        contingut: [
          {
            t: 'p',
            text: 'Des del dia 21 d’agost i fins a la tarda de la vigília, la imatge de sant Bartomeu és exposada al domicili de la persona designada com a pendonista o a l’espai públic o privat que designi, en cas que visqui en un lloc allunyat de la parròquia, i sempre amb el vist-i-plau de la parròquia i de la Comissió.',
          },
          {
            t: 'p',
            text: 'El lliurament, el trasllat i la inauguració de l’exposició seran després del dia del pregó. El lliurament de la imatge és després de la missa del vespre. La banda de música tanca el seguici del trasllat. A la parròquia el rector lliura la imatge a la Comissió; al domicili de la persona designada com a pendonista el rector torna a lliurar-la a la Comissió i aquesta a la persona designada com a pendonista.',
          },
        ],
      },
      {
        id: 'f-3',
        num: '3',
        titol: 'El lliurament de la Bandera',
        contingut: [
          {
            t: 'p',
            text: 'Se celebra el dia 22 d’agost a la parròquia. En aquest acte es llegeixen poemes dedicats a la Bandera i es canten els goigs en honor a sant Bartomeu. El rector lliura la Bandera a la presidència de la Comissió, qui la porta després en cercavila fins al seu domicili o espai públic o privat que designi, amb l’acompanyament de la banda de música. La Bandera romandrà exposada al balcó fins que surti la Processó Cívica.',
          },
          {
            t: 'p',
            text: 'En l’acte del lliurament de la Bandera, la banda de música interpreta La Processó de sant Bartomeu, d’Antoni Català, a la parròquia i al domicili de la presidència de la Comissió.',
          },
        ],
      },
      {
        id: 'f-4',
        num: '4',
        titol: 'L’entrada de grallers',
        contingut: [
          {
            t: 'p',
            text: 'A les dotze del migdia del dia 23 d’agost, les colles de grallers, els sonadors de sac de gemecs i els flabiolaires que acompanyaran els balls, els entremesos i la imatgeria festiva fan l’entrada a la vila des del passeig de Vilafranca, passant pel carrer de sant Francesc, el Cap de la Vila, el carrer Major i acabant a la plaça de l’Ajuntament. Obren l’entrada les mitges cobles, les quals són seguides per les colles de grallers.',
          },
          {
            t: 'p',
            text: 'Durant el recorregut, les colles de grallers interpreten el Toc de Matinades. Excepte al Cap de la Vila, on cada colla de músics actua en homenatge als fundadors i mantenidors de la Festa Major, i a la plaça de l’Ajuntament, on l’actuació és en honor a les autoritats.',
          },
        ],
      },
      {
        id: 'f-5',
        num: '5',
        titol: 'L’inici de la Festa',
        contingut: [
          { t: 'sub', text: '5.1 El llançament dels 21 morterets i el repic de campanes' },
          {
            t: 'p',
            text: 'A les dues de la tarda del dia 23 d’agost, vigília de sant Bartomeu, els 21 morterets i el repic de les campanes de la parròquia anuncien l’inici de la Festa. La Comissió decideix qui dispararà els morterets.',
          },
          { t: 'sub', text: '5.2 La ballada de sardanes al Cap de la Vila' },
          {
            t: 'p',
            text: 'També a les dues de la tarda, al Cap de la Vila hi ha la ballada de sardanes, en la qual la cobla interpreta La Processó de sant Bartomeu, d’Antoni Català, i La Festa Major, d’Enric Morera. Aquesta darrera amb repetició inclosa.',
          },
          { t: 'sub', text: '5.3 La sortida de les dues' },
          {
            t: 'p',
            text: 'Simultàniament, i mentre es llancen els morterets i repiquen les campanes, els gegants i el bestiari són trets de la Casa de la Vila, des d’on sortirà la cercavila dels balls, entremesos i la imatgeria festiva, a un quart de tres i amb l’ordre establert. També hi participa la banda de música, que la tanca. El recorregut és: plaça de l’Ajuntament, carrer Major i Cap de la Vila.',
          },
          {
            t: 'p',
            text: 'Els balls, els entremesos i la imatgeria festiva passen ballant pel Cap de la Vila, amb l’excepció de la Moixiganga, que hi representa el ball complet. Després d’aquesta representació, la banda farà la seva passada pel Cap de la Vila.',
          },
          {
            t: 'p',
            text: 'Després es divideixen en dos grups. Un es dirigeix a l’Hort de Can Falç, on hi fan el ball sencer en honor a l’alcalde o alcaldessa, a les autoritats i a tots els assistents. L’altre grup es dirigeix a l’Hospital de sant Joan Baptista, on també hi fan el ball sencer. En ambdós espais, els balls que en tinguin representaran el ball amb parlaments. Les colles que representen el Ball de Diables, seguint l’ordre que disposi la Comissió, actuaran en ambdós llocs, on representaran el ball parlat sencer.',
          },
        ],
      },
      {
        id: 'f-6',
        num: '6',
        titol: 'L’actuació castellera',
        contingut: [
          {
            t: 'p',
            text: 'El dia 23 d’agost a la tarda, abans de la Processó Cívica, hi ha una actuació castellera al Cap de la Vila a càrrec de la colla local de castellers.',
          },
        ],
      },
      {
        id: 'f-7',
        num: '7',
        titol: 'La Processó Cívica',
        contingut: [
          {
            t: 'p',
            text: 'Seguint l’ordre establert dels balls, els entremesos i la imatgeria festiva, la Processó Cívica surt a la tarda del dia 23 d’agost del domicili de la presidència de la Comissió o de l’espai públic o privat que aquesta designi.',
          },
          {
            t: 'p',
            text: 'A la processó, després de la Moixiganga, hi participen la presidència de la Comissió, qui du el penó de sant Bartomeu, i les autoritats municipals. La tanca la banda de música.',
          },
          {
            t: 'p',
            text: 'La Processó Cívica passa pel domicili de la persona designada com a pendonista o per l’espai que designi, on s’hi incorpora la imatge de sant Bartomeu, duta pel Cos de Portants de sant Bartomeu i santa Tecla.',
          },
          {
            t: 'p',
            text: 'La processó continua fins a la parròquia, on la imatge és rebuda pels balls, els entremesos i la imatgeria festiva i el rector. El ball, entremès o col·lectiu que fa l’ofrena al Solemne Ofici acompanya l’entrada de la imatge al temple fins a l’altar. En arribar a la parròquia, el president de la Comissió retorna el penó al rector. En aquest moment, la imatge de sant Bartomeu i la Bandera es col·loquen a l’altar major per presidir els actes litúrgics de l’endemà.',
          },
          {
            t: 'p',
            text: 'El recorregut depèn dels domicilis o dels espais que designin la presidència de la Comissió i la persona designada com a pendonista. Serà determinat cada any per la Comissió, que el consultarà amb la regidoria responsable de les tradicions i les festes.',
          },
        ],
      },
      {
        id: 'f-8',
        num: '8',
        titol: 'El castell de foc',
        contingut: [
          {
            t: 'p',
            text: 'Es dispara a les onze de la nit del dia 23 d’agost, des de la zona de La Fragata: espigó de Llevant, Parròquia i el Baluard.',
          },
        ],
      },
      {
        id: 'f-9',
        num: '9',
        titol: 'La baixada per les escales de la Punta',
        contingut: [
          {
            t: 'p',
            text: 'Un cop acabat el castell de foc i l’indret estigui net de material pirotècnic, els balls, els entremesos i la imatgeria festiva baixen per les escales de la Punta, seguint l’ordre establert. Habitualment, aquesta cercavila comença al Baluard i, baixades les escales, continua pel passeig de la Ribera fins al monument al Greco, on gira fins al capdavall del carrer Nou.',
          },
        ],
      },
      {
        id: 'f-10',
        num: '10',
        titol: 'La revetlla de Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'El dia 23 d’agost, després del castell de focs artificials, se celebra la revetlla de Festa Major, amb el ball amenitzat per una orquestra o grup de ball i l’audició ballada de sardanes, que habitualment tenen lloc al passeig de la Ribera i al Cap de la Vila, respectivament.',
          },
        ],
      },
      {
        id: 'f-11',
        num: '11',
        titol: 'La Matinal',
        contingut: [
          {
            t: 'p',
            text: 'És una cercavila que surt a les sis del matí del dia de sant Bartomeu. És costum entre els components dels balls, els entremesos i la imatgeria festiva dur pomells d’alfàbrega. L’aroma d’aquesta herba és un dels elements de la Matinal.',
          },
          {
            t: 'p',
            text: 'El seu recorregut habitual és: Ajuntament, Baluard, Fonollar, Baluard Vidal i Quadras, Port de n’Alegre, Rafael Llopart, sant Damià, sant Sebastià, Jesús, sant Bartomeu, sant Gaudenci, sant Josep, Espalter, plaça del Pou Vedre, Parellades, Cap de la Vila, Major i Ajuntament. La Comissió, però, concretarà cada any el recorregut.',
          },
          {
            t: 'p',
            text: 'A la Matinal, els balls de Pastorets, Cintes, Gitanes, Panderetes i Moixiganga no ballen el seu ball corresponent, sinó que fan passades de faixes. Degut a l’edat dels seus components, el Ball de Cercolets no hi participa. Davant dels brecs hi anirà un acompanyament musical.',
          },
          {
            t: 'p',
            text: 'És tradició que a la Matinal surtin «agregats» als balls, als entremesos i a la imatgeria festiva. La participació d’aquest col·lectiu es regula a l’apartat que tracta del nombre de persones que participen en cada ball.',
          },
          {
            t: 'p',
            text: 'Tanquen aquesta cercavila els brecs, des dels quals s’obsequia amb flors el públic. Hi van representants de l’Ajuntament, de la Comissió, membres del Cos de Portants de sant Bartomeu i santa Tecla i les persones convidades per la Comissió.',
          },
        ],
      },
      {
        id: 'f-12',
        num: '12',
        titol: 'L’anada a l’Ofici',
        contingut: [
          {
            t: 'p',
            text: 'L’alcalde/ssa, els/les regidors/es, les persones convidades per l’Ajuntament, els/les membres de la Comissió, la persona designada com a pendonista, els/les cordonistes, el/la pregoner/a, el/la autor/a del cartell, el/la jutge/ssa de pau, el/la Cronista Oficial de la Vila i la Pubilla i l’Hereu de Sitges sortiran de la Casa de la Vila, acompanyats per la banda de música, tot anant a la Parròquia per assistir al solemne Ofici concelebrat en honor a sant Bartomeu. El rector els rebrà a l’entrada del temple.',
          },
        ],
      },
      {
        id: 'f-13',
        num: '13',
        titol: 'El solemne Ofici concelebrat',
        contingut: [
          {
            t: 'p',
            text: 'Comença a dos quarts d’onze del matí de la diada de sant Bartomeu. És concelebrat per diversos sacerdots, generalment amb vincles familiars o pastorals a la vila. El presideix el rector de la parròquia, qui pot delegar aquesta presidència en un altre sacerdot. En acabar l’ofici, es canten els goigs en honor al sant i es venera la seva relíquia.',
          },
          {
            t: 'p',
            text: 'Les ofrenes de l’ofici les preparen conjuntament la Comissió de Litúrgia de la Parròquia i el ball, l’entremès, l’element d’imatgeria festiva o una associació vinculada a la Festa Major designat a tal efecte. La Comissió decideix qui fa l’ofrena.',
          },
        ],
      },
      {
        id: 'f-14',
        num: '14',
        titol: 'La sortida d’Ofici',
        contingut: [
          {
            t: 'p',
            text: 'En acabar l’Ofici, les autoritats civils i eclesiàstiques i les persones convidades surten de la parròquia per la porta principal en direcció a la Casa de la Vila. Obre la comitiva la banda de música. Des del balcó de la Casa de la Vila, les autoritats i les persones convidades presideixen la sortida d’Ofici.',
          },
          {
            t: 'p',
            text: 'En el transcurs de la sortida, la banda de música fa la volta per davant de la Casa de la Vila i se situa davant de la rectoria, i la cobla al jardí del monument al Dr. Bartomeu Robert, des d’on interpreta la sardana d’Enric Morera La Festa Major.',
          },
          {
            t: 'p',
            text: 'Quan les autoritats i les persones convidades surten al balcó, els balls, els entremesos i la imatgeria festiva fan la corresponent passada per davant, sense aturar-se, seguint l’ordre establert. Les tres parelles de gegants continuaran fins al davant de la rectoria per fer després una segona passada.',
          },
          {
            t: 'p',
            text: 'La Fera foguera (o el Drac), primer, i l’Àliga, seguidament, fan només una encesa en el transcurs d’una única passada. Els timbalers no s’aturen. Les tres colles que representen el Ball de Diables fan una passada conjunta, acompanyats dels timbalers, que tampoc no s’aturen.',
          },
          {
            t: 'p',
            text: 'El Ball de Pastorets, la Moixiganga i el Ball de Cercolets queden muntats davant de la Casa de la Vila i els castellers fan un pilar. Tots ells queden muntats fins que la banda de música torna a entrar a la plaça.',
          },
          {
            t: 'p',
            text: 'Després de la passada de tots els balls, els entremesos, la imatgeria festiva i els castellers, les tres colles de gegants fan una segona passada. Clou la sortida d’Ofici la interpretació d’Els segadors, himne nacional de Catalunya, a càrrec de la banda de música.',
          },
        ],
      },
      {
        id: 'f-15',
        num: '15',
        titol: 'L’actuació castellera',
        contingut: [
          {
            t: 'p',
            text: 'En acabar la Sortida d’Ofici, la colla local de castellers, Colla Jove de Castellers de Sitges, fa una exhibició castellera a la plaça de l’Ajuntament, que consisteix en dues rondes i pilars de comiat.',
          },
        ],
      },
      {
        id: 'f-16',
        num: '16',
        titol: 'El concert vermut i el cafè concert',
        contingut: [
          {
            t: 'p',
            text: 'Aquests dos concerts es fan als jardins de la Societat Recreativa El Retiro i del Casino Prado Suburense. El concert vermut es fa després de l’actuació castellera i el cafè concert abans de la Processó en honor a sant Bartomeu.',
          },
          {
            t: 'p',
            text: 'La banda de música i la cobla s’alternen els concerts. Com mana la tradició, quan el concert vermut d’una de les dues societats el fa la banda de música, el de l’altra el fa la cobla. Al cafè concert és a l’inrevés. L’any següent canvien les tornes perquè no hi hagi repetició.',
          },
        ],
      },
      {
        id: 'f-17',
        num: '17',
        titol: 'La Processó en honor a sant Bartomeu',
        contingut: [
          {
            t: 'p',
            text: 'Surt a dos quarts de vuit de la tarda del dia de sant Bartomeu. El recorregut tradicional és: Baluard, baluard Miquel Utrillo, carrer de Fonollar, de sant Joan, de la Davallada, de Barcelona, de santiago Rusiñol, de Jesús, de sant Bartomeu, de sant Gaudenci, de sant Francesc, Cap de la Vila, de les Parellades, de Bonaire, passeig de la Ribera, Nou, Major, plaça de l’Ajuntament i Baluard. L’ordre dels balls és l’establert anteriorment.',
          },
          {
            t: 'p',
            text: 'Mitja hora abans, un repic de campanes anuncia la seva sortida. El llançament d’un morteret anuncia la incorporació del tabernacle de sant Bartomeu a la processó des de la parròquia. Durant el recorregut, es va llançant un morteret de forma intermitent fins que el tabernacle arriba al Baluard.',
          },
          { t: 'p', text: 'L’ordre de la processó després dels balls, els entremesos i la imatgeria festiva és:' },
          {
            t: 'ol',
            items: [
              'El gonfanó parroquial.',
              'Els assistents a la processó. La Comissió els obsequia amb un mocador on hi ha estampats la imatge de sant Bartomeu i el nom de la persona designada com a pendonista d’aquell any.',
              'El tabernacle de sant Bartomeu, portat pel Cos de Portants de sant Bartomeu i santa Tecla.',
              'La bandera de sant Bartomeu, duta per la persona designada com a pendonista i els/les cordonistes.',
              'Els representants de la Parròquia.',
              'L’alcalde/ssa, els/les regidors/res, la Comissió, el/la pregoner/a, el/la autor/a del cartell, el/la jutge/ssa de pau, el/la Cronista Oficial de la Vila i les persones convidades.',
              'La banda de música tanca la processó. Interpreta diferents peces, entre elles la sardana La Processó de sant Bartomeu, d’Antoni Català i Vidal. Com a mínim, la interpretarà a la sortida i a l’arribada del tabernacle a la Parròquia i en passar pel carrer de sant Bartomeu.',
            ],
          },
          {
            t: 'p',
            text: 'Mentre passa la processó, al passeig de la Ribera una cobla interpreta la sardana Els Gegants de Sitges, de Tomàs Gil i Membrado. Les tres colles de gegants la ballen conjuntament. Seguidament, i fins que acaba de passar la processó per davant de la cobla, aquesta va interpretant la sardana La Processó de sant Bartomeu.',
          },
          {
            t: 'p',
            text: 'A mesura que els balls arriben al Baluard es van situant al lloc que tenen destinat davant de la parròquia. Quan el tabernacle entra al Baluard, tots ballen alhora. El Ball de Diables i el bestiari fan una encesa conjunta. Simultàniament, es llança un petit castell de foc. Al punt d’entrar el tabernacle a la parròquia, aquest fa una breu aturada, acompanyada d’un lleu gir a mode d’agraïment cap als balls que l’han acompanyat. Mentre el tabernacle entra a la parròquia, repiquen les campanes i una colla de grallers, situats a banda i banda del cancell, interpreta el Toc de matinades, acompanyats per l’orgue del temple, alhora que també es fa sonar la roda de campanes. Clou la processó una pregària de comiat.',
          },
        ],
      },
      {
        id: 'f-18',
        num: '18',
        titol: 'La ballada final del bestiari i dels gegants',
        contingut: [
          {
            t: 'p',
            text: 'Un cop el rector ha acomiadat la processó, l’Àliga i la Fera foguera (o el Drac), primer, i els gegants, després, fan el ball de comiat davant la Casa de la Vila. El bestiari fa 5 enceses conjuntes i les tres parelles de gegants fan 10 ballades conjuntes.',
          },
        ],
      },
      {
        id: 'f-19',
        num: '19',
        titol: 'El ball de Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'Després de la ballada final del bestiari i dels gegants, se celebra el ball de Festa Major, amenitzat per orquestra, que habitualment té lloc al passeig de la Ribera.',
          },
        ],
      },
      {
        id: 'f-20',
        num: '20',
        titol: 'La celebració de sant Lli',
        contingut: [
          {
            t: 'p',
            text: 'Arran d’un vot de vila i per tal d’afavorir les collites, se celebra la festa de sant Lli el dia 25 d’agost, com a tornaboda de la diada de sant Bartomeu. Sant Lli és patró secundari de la vila i la seva festivitat es va celebrar fins el 1978. En record d’aquella celebració, el dia 25 d’agost es fa el vermut de sant Lli. El mateix dia se celebra una missa en sufragi dels difunts de la vila.',
          },
          { t: 'sub', text: '20.1 El vermut de sant Lli' },
          { t: 'p', text: 'Al migdia, se celebra un vermut popular.' },
          { t: 'sub', text: '20.2 La missa en sufragi dels difunts de la vila' },
          {
            t: 'p',
            text: 'Se celebra el 25 d’agost al vespre a la parròquia de sant Bartomeu i santa Tecla. En aquesta missa es recorden els difunts que visqueren amb goig la nostra Festa Major.',
          },
          { t: 'sub', text: '20.3 El concert ball de sant Lli' },
          { t: 'buit', text: 'El sumari del Protocol recull aquest subapartat, però el cos del document no en desenvolupa el text.' },
        ],
      },
      {
        id: 'f-21',
        num: '21',
        titol: 'El ball per a la gent gran',
        contingut: [
          { t: 'buit', text: 'El sumari del Protocol recull aquest apartat, però el cos del document no en desenvolupa el text.' },
        ],
      },
      {
        id: 'f-22',
        num: '22',
        titol: 'La revetlla sardanista de cloenda',
        contingut: [
          {
            t: 'p',
            text: 'El dia 26 d’agost a la nit se celebra a la platja de sant Sebastià la revetlla sardanista, que clou la Festa Major de sant Bartomeu i durant la qual són interpretades les sardanes La Processó de sant Bartomeu, d’Antoni Català, i La Festa Major, d’Enric Morera. Acaba amb un petit castell de focs artificials.',
          },
        ],
      },
      {
        id: 'f-23',
        num: '23',
        titol: 'L’exhibició castellera de Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'El cap de setmana més proper, passada la diada de sant Bartomeu, se celebra l’exhibició castellera de Festa Major en la qual hi prenen part la colla local, actualment la Colla Jove de Castellers de Sitges, i unes colles convidades. Se celebra a la plaça de l’Ajuntament.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────── G ──
  {
    id: 'g',
    lletra: 'G',
    titol: 'Actes, cercaviles i processons de santa Tecla',
    apartats: [
      {
        id: 'g-1',
        num: '1',
        titol: 'La Nit de foc',
        contingut: [
          {
            t: 'p',
            text: 'Un dels actes previs a la diada de santa Tecla és la Nit de foc, que se celebra durant el cap de setmana abans de la diada. Comença al vespre i s’allarga fins a la nit. Hi participen les colles locals de foc i altres grups de foc de fora de la vila convidats. Consisteix en una timbalada, a càrrec dels timbalers de les colles esmentades, l’Espetegafoc (espectacle pirotècnic) i un correfoc, amb una encesa final conjunta. L’acte acaba amb un concert.',
          },
        ],
      },
      {
        id: 'g-2',
        num: '2',
        titol: 'La cercavila de gegants i cabeçuts i l’exhibició de balls infantils',
        contingut: [
          {
            t: 'p',
            text: 'El diumenge anterior a la festivitat de santa Tecla, al matí, se celebren la cercavila i l’exhibició. A la cercavila hi participen els gegants i els cabeçuts fets per infants de la vila. Al final, fan una ballada conjunta. Seguidament, comença l’exhibició de balls i entremesos infantils.',
          },
        ],
      },
      {
        id: 'g-3',
        num: '3',
        titol: 'La cercavila de diables i bestiari infantils',
        contingut: [
          {
            t: 'p',
            text: 'El diumenge anterior a la festivitat de santa Tecla, a la tarda, se celebra la cercavila de dracs infantils construïts per infants de la vila, la qual acaba amb una encesa final. Seguidament, al mateix lloc de l’encesa, hi ha la representació del Ball de diables a càrrec de les colles infantils de les colles locals que fan el Ball de diables.',
          },
        ],
      },
      {
        id: 'g-4',
        num: '4',
        titol: 'El lliurament, el trasllat i la inauguració de l’exposició de la imatge',
        contingut: [
          {
            t: 'p',
            text: 'Des del dia 20 de setembre i fins a la tarda de la vigília, la imatge de santa Tecla és exposada al domicili de la persona designada com a pendonista o a l’espai públic o privat que aquesta designi, en cas que visqui en un lloc allunyat de la parròquia, i sempre amb el vist-i-plau de la parròquia i de la Comissió.',
          },
          {
            t: 'p',
            text: 'El lliurament, el trasllat i la inauguració de l’exposició seran el mateix dia 20 de setembre. El lliurament de la imatge és després de la missa del vespre. La banda de música tanca el seguici del trasllat. A la parròquia el rector lliura la imatge a la Comissió; al domicili de la persona designada com a pendonista el rector torna a lliurar-la a la Comissió i aquesta a la persona designada com a pendonista.',
          },
        ],
      },
      {
        id: 'g-5',
        num: '5',
        titol: 'L’inici de la Festa',
        contingut: [
          { t: 'sub', text: '5.1 El llançament dels 21 morterets i el repic de campanes' },
          {
            t: 'p',
            text: 'A les dues de la tarda del dia 22 de setembre, vigília de santa Tecla, els 21 morterets i el repic de les campanes de la parròquia anuncien l’inici de la Festa. La Comissió decideix qui dispararà els morterets.',
          },
        ],
      },
      {
        id: 'g-6',
        num: '6',
        titol: 'La Processó Cívica',
        contingut: [
          {
            t: 'p',
            text: 'Seguint l’ordre establert dels balls, els entremesos i la imatgeria festiva, la Processó Cívica surt a la tarda del dia 22 de setembre del domicili de la persona designada com a pendonista o de l’espai públic o privat que aquesta designi.',
          },
          {
            t: 'p',
            text: 'A la processó, després de la Moixiganga, hi participen la persona designada com a pendonista i els/les cordonistes, la imatge de santa Tecla duta per les pubilles, acompanyades pels hereus, i les autoritats municipals. La tanca la banda de música.',
          },
          {
            t: 'p',
            text: 'La processó continua fins a la parròquia, on la imatge és rebuda pels balls, els entremesos i la imatgeria festiva i el rector. El ball, entremès o col·lectiu que fa l’ofrena al Solemne Ofici acompanya l’entrada de la imatge al temple fins a l’altar. En aquest moment, la imatge de santa Tecla i el penó es col·loquen a l’altar major per presidir els actes litúrgics de l’endemà.',
          },
          {
            t: 'p',
            text: 'El recorregut depèn del domicili o de l’espai que designi la pendonista i serà determinat cada any per la Comissió.',
          },
        ],
      },
      {
        id: 'g-7',
        num: '7',
        titol: 'El castell de foc',
        contingut: [
          {
            t: 'p',
            text: 'Es dispara a les onze de la nit del dia 22 de setembre, des de la zona de La Fragata: espigó de Llevant, la Parròquia i el Baluard.',
          },
        ],
      },
      {
        id: 'g-8',
        num: '8',
        titol: 'La revetlla de Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'El 22 de setembre, després del castell de focs artificials, se celebra la revetlla de Festa Major, amb actuacions d’orquestres i grups de ball i l’audició ballada de sardanes. Habitualment, les actuacions són al passeig de la Ribera i l’audició ballada al Cap de la Vila.',
          },
        ],
      },
      {
        id: 'g-9',
        num: '9',
        titol: 'La Matinal infantil',
        contingut: [
          {
            t: 'p',
            text: 'La Matinal infantil és la cercavila on els infants són els protagonistes. Hi participen en diferents balls i entremesos i amb imatgeria festiva feta per ells mateixos. Aquesta cercavila es va crear per a:',
          },
          {
            t: 'ul',
            items: [
              'Iniciar les noves generacions en el ritus col·lectiu de la Festa Major.',
              'Transmetre el costumari patrimonial i vivencial.',
              'Fomentar l’aprenentatge dels balls, dels entremesos i de les músiques.',
              'Integrar els infants a la Festa Major.',
            ],
          },
          {
            t: 'p',
            text: 'Surt a primera hora del matí de la diada de santa Tecla. Per organitzar-la, la Comissió rep la col·laboració dels representants de les colles infantils. La Comissió concreta el recorregut; habitualment, acaba a la Fragata.',
          },
          {
            t: 'p',
            text: 'L’ordre de les colles que representen el Ball de Diables és rotatiu i es decideix en una reunió entre la Comissió i els representants de les colles infantils.',
          },
        ],
      },
      {
        id: 'g-10',
        num: '10',
        titol: 'L’anada a l’Ofici',
        contingut: [
          {
            t: 'p',
            text: 'L’alcalde/ssa, els/les regidors/es, les persones convidades per l’Ajuntament, els/les membres de la Comissió, la persona designada com a pendonista, els/les cordonistes, el/la pregoner/a, el/la autor/a del cartell, el/la jutge/ssa de pau, el/la Cronista Oficial de la Vila, la Pubilla i l’Hereu de Sitges i la resta de pubilles i hereus sortiran de la Casa de la Vila, acompanyats per la banda de música, tot anant a la Parròquia per assistir al solemne Ofici concelebrat en honor a santa Tecla. El rector els rebrà a l’entrada del temple.',
          },
        ],
      },
      {
        id: 'g-11',
        num: '11',
        titol: 'El solemne Ofici concelebrat',
        contingut: [
          {
            t: 'p',
            text: 'Comença a les onze del matí de la diada de santa Tecla. És concelebrat per diversos sacerdots, generalment amb vincles familiars o pastorals a la vila. El presideix el rector de la parròquia, qui pot delegar aquesta presidència en un altre sacerdot. En acabar l’ofici, es canten els goigs en honor a la santa.',
          },
          {
            t: 'p',
            text: 'Les ofrenes les preparen conjuntament la Comissió de Litúrgia de la Parròquia i el ball, l’entremès o l’element d’imatgeria festiva designat a tal efecte. La Comissió decideix qui fa l’ofrena.',
          },
        ],
      },
      {
        id: 'g-12',
        num: '12',
        titol: 'La sortida d’Ofici',
        contingut: [
          {
            t: 'p',
            text: 'En acabar l’Ofici, les autoritats civils i eclesiàstiques i les persones convidades surten de la parròquia per la porta principal en direcció a la Casa de la Vila. Obre la comitiva la banda de música. Des del balcó, les autoritats i les persones convidades presideixen la sortida d’Ofici.',
          },
          {
            t: 'p',
            text: 'La banda de música fa la volta per davant de la Casa de la Vila i se situa davant de la rectoria, i la cobla al jardí del monument al Dr. Bartomeu Robert, des d’on interpreta la sardana d’Enric Morera La Festa Major.',
          },
          {
            t: 'p',
            text: 'Quan les autoritats surten al balcó, els balls, els entremesos i la imatgeria festiva fan la corresponent passada per davant sense aturar-se, seguint l’ordre establert. Les tres parelles de gegants continuaran fins al davant de la rectoria per fer després una segona passada.',
          },
          {
            t: 'p',
            text: 'La Fera foguera (o el Drac), primer, i l’Àliga, seguidament, fan només una encesa en el transcurs d’una única passada. Els timbalers no s’aturen. Les tres colles que representen el Ball de Diables fan una passada conjunta, acompanyats dels timbalers, que tampoc no s’aturen.',
          },
          {
            t: 'p',
            text: 'El Ball de Pastorets, la Moixiganga i el Ball de Cercolets queden muntats davant de la Casa de la Vila i els castellers fan un pilar, fins que la banda torna a entrar a la plaça. Després de la passada de tots, les tres colles de gegants fan una segona passada. Clou la sortida d’Ofici la interpretació d’Els segadors, a càrrec de la banda de música.',
          },
        ],
      },
      {
        id: 'g-13',
        num: '13',
        titol: 'L’actuació castellera',
        contingut: [
          {
            t: 'p',
            text: 'En acabar la Sortida d’Ofici, la colla local de castellers, Colla Jove de Castellers de Sitges, fa una exhibició castellera a la plaça de l’Ajuntament, que consisteix en dues rondes i pilars de comiat.',
          },
        ],
      },
      {
        id: 'g-14',
        num: '14',
        titol: 'El concert vermut i el cafè concert',
        contingut: [
          {
            t: 'p',
            text: 'Aquests dos concerts es fan als jardins de la Societat Recreativa El Retiro i del Casino Prado Suburense. El concert vermut es fa després de l’actuació castellera i el cafè concert abans de la Processó en honor a santa Tecla.',
          },
          {
            t: 'p',
            text: 'La banda de música i la cobla s’alternen els concerts: quan el concert vermut d’una de les dues societats el fa la banda, el de l’altra el fa la cobla. Al cafè concert és a l’inrevés. L’any següent canvien les tornes perquè no hi hagi repetició.',
          },
        ],
      },
      {
        id: 'g-15',
        num: '15',
        titol: 'La baixada del pilar caminant per les escales de la Punta',
        contingut: [
          {
            t: 'p',
            text: 'A la tarda, abans de la Processó en honor a santa Tecla, la colla local de castellers, Colla Jove de Castellers de Sitges, baixa un pilar per les escales de la Punta, des del Baluard fins a la Fragata.',
          },
        ],
      },
      {
        id: 'g-16',
        num: '16',
        titol: 'La Processó en honor a santa Tecla',
        contingut: [
          {
            t: 'p',
            text: 'Surt a les set de la tarda del dia de santa Tecla. El recorregut tradicional és: Baluard, baluard Miquel Utrillo, carrer de Fonollar, de sant Joan, de la Davallada, de Barcelona, de santiago Rusiñol, de Jesús, de sant Bartomeu, de sant Gaudenci, de sant Francesc, Cap de la Vila, de les Parellades, de Bonaire, passeig de la Ribera, Nou, Major, plaça de l’Ajuntament i Baluard. L’ordre dels balls és l’establert anteriorment.',
          },
          {
            t: 'p',
            text: 'Mitja hora abans, un repic de campanes anuncia la seva sortida. El llançament d’un morteret anuncia la incorporació del tabernacle de santa Tecla a la processó des de la parròquia. Durant el recorregut, es va llançant un morteret de forma intermitent fins que el tabernacle arriba al Baluard.',
          },
          { t: 'p', text: 'L’ordre de la processó després dels balls és:' },
          {
            t: 'ol',
            items: [
              'El gonfanó parroquial.',
              'Els assistents a la processó. La Comissió els obsequia amb un mocador on hi ha estampats la imatge de santa Tecla i el nom de la pendonista d’aquell any.',
              'El tabernacle de santa Tecla, portat per les pubilles de les associacions i barris de Sitges, acompanyades pels hereus.',
              'El penó de santa Tecla, dut per la persona designada com a pendonista i els/les cordonistes.',
              'Els representants de la Parròquia.',
              'L’alcalde/ssa, els/les regidors/res, la Comissió, el/la pregoner/a, el/la autor/a del cartell, el/la jutge/ssa de pau, el/la Cronista Oficial de la Vila i les persones convidades.',
              'La banda de música tanca la processó.',
            ],
          },
          {
            t: 'p',
            text: 'Mentre passa la processó, al passeig de la Ribera una cobla interpreta la sardana Els Gegants de Sitges, de Tomàs Gil i Membrado. Les tres colles de gegants la ballen conjuntament. Seguidament, i fins que acaba de passar la processó per davant de la cobla, aquesta va interpretant la sardana La Processó de santa Tecla, de Jordi Pañella i Virella.',
          },
          {
            t: 'p',
            text: 'A mesura que els balls arriben al Baluard es van situant al lloc que tenen destinat davant de la parròquia. Quan el tabernacle entra al Baluard, tots ballen alhora. El Ball de Diables i el bestiari fan una encesa conjunta. Simultàniament, es llança un petit castell de foc. Al punt d’entrar el tabernacle a la parròquia, aquest fa una breu aturada, acompanyada d’un lleu gir a mode d’agraïment. Mentre entra a la parròquia, repiquen les campanes i una colla de grallers, situats a banda i banda del cancell, interpreta el Toc de matinades, acompanyats per l’orgue del temple, alhora que també es fa sonar la roda de campanes. Clou la processó la lectura de la pregària «Us he mirat santa Tecla».',
          },
        ],
      },
      {
        id: 'g-17',
        num: '17',
        titol: 'La ballada final del bestiari i dels gegants',
        contingut: [
          {
            t: 'p',
            text: 'Un cop el rector ha acomiadat la processó, l’Àliga i la Fera foguera (o el Drac), primer, i els gegants, després, fan el ball de comiat davant la Casa de la Vila. El bestiari fa 5 enceses conjuntes i les tres parelles de gegants fan 10 ballades conjuntes.',
          },
        ],
      },
      {
        id: 'g-18',
        num: '18',
        titol: 'El ball de Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'Després de la ballada final del bestiari i dels gegants, és costum celebrar el ball de Festa Major, amenitzat per una orquestra, que tradicionalment té lloc al passeig de la Ribera.',
          },
        ],
      },
      {
        id: 'g-19',
        num: '19',
        titol: 'L’exhibició castellera de Festa Major',
        contingut: [
          {
            t: 'p',
            text: 'El cap de setmana més proper, passada la diada de santa Tecla, se celebra l’exhibició castellera de Festa Major en la qual hi prenen part la colla local, Colla Jove de Castellers de Sitges, i unes colles convidades. Se celebra a la plaça de l’Ajuntament.',
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────── H ──
  {
    id: 'h',
    lletra: 'H',
    titol: 'D’aquest Protocol',
    apartats: [
      {
        id: 'h-1',
        num: '1',
        titol: 'Aprovació',
        contingut: [
          {
            t: 'p',
            text: 'Aquest protocol serà aprovat, en primera instància, per la majoria simple dels vots dels membres del Consell del Patrimoni Festiu de la Festa Major de Sitges.',
          },
          { t: 'p', text: 'En són membres:' },
          {
            t: 'ul',
            items: [
              'President/a: per delegació de l’alcaldia, el/la regidor/a competent en matèria de Tradicions i Festes o el/la regidor/a delegat/da.',
              'Vocals: cinc persones proposades pels membres de les diferents colles de balls, inclosa la colla local de castellers.',
              'Vocals: una persona proposada per les colles de grallers de Sitges.',
              'Vocals: una persona proposada per la Parròquia.',
              'Vocals: l’expresident/a de la Comissió o un membre de la seva comissió delegat.',
              'Vocals: el/la president/a de la Comissió en curs.',
              'Vocals: quatre persones que siguin estudioses de la Festa Major de Sitges.',
              'Vocals: una persona no vinculada directament amb la Festa Major de Sitges, amb coneixements de folklore i en especial del model festiu del Penedès i Camp de Tarragona.',
              'Secretari/ària: en funció de fe pública i assessorament, amb veu i sense vot. Desenvolupa aquesta funció el Secretari General de l’Ajuntament, o funcionari/a en qui delegui, preferentment adscrit a una de les àrees de competència del Consell: Tradicions i Festes, Cultura o Participació.',
            ],
          },
          {
            t: 'p',
            text: 'Quan el Consell del Patrimoni Festiu l’hagi aprovat, el Protocol es lliurarà a la regidoria corresponent perquè el faci arribar a la Corporació Municipal per a la seva aprovació definitiva, seguint els tràmits corresponents.',
          },
        ],
      },
      {
        id: 'h-2',
        num: '2',
        titol: 'Modificacions o esmenes',
        contingut: [
          { t: 'p', text: 'Podran fer propostes de modificacions o esmenes al Protocol:' },
          {
            t: 'ul',
            items: [
              'L’Ajuntament de Sitges.',
              'La Comissió.',
              'La Parròquia.',
              'Els membres del Consell del Patrimoni Festiu.',
              'Les colles que conformen els balls, els entremesos i la imatgeria festiva, a través dels seus representants al Consell del Patrimoni Festiu. Les propostes les faran els respectius caps de colla.',
              'Les associacions i els col·lectius vinculats a la Festa Major de Sitges en honor a sant Bartomeu i santa Tecla.',
            ],
          },
          {
            t: 'p',
            text: 'Les modificacions i les esmenes seran estudiades en primera instància pel Consell del Patrimoni Festiu. Si el Consell ho considera oportú, després seran lliurades a la regidoria corresponent perquè les faci arribar a la Corporació Municipal per a la seva aprovació definitiva.',
          },
        ],
      },
      {
        id: 'h-3',
        num: '3',
        titol: 'Altres consideracions',
        contingut: [
          {
            t: 'p',
            text: 'Passat un temps, el Consell del Patrimoni Festiu acordarà, en primera instància, si les activitats lúdiques que s’han afegit al programa d’actes de la Festa Major s’inclouen en aquest Protocol. Si s’acorda que sí, el Consell lliurarà la proposta d’inclusió a la regidoria corresponent perquè la faci arribar a la Corporació Municipal per a la seva ratificació definitiva.',
          },
          {
            t: 'p',
            text: 'Qualsevol persona, col·lectiu o associació que vulgui posar-se en contacte amb el Consell del Patrimoni ho ha de fer mitjançant el registre general d’entrada de documents de l’Ajuntament.',
          },
        ],
      },
    ],
  },
]

/** Text consultable de cada secció, per a la cerca dins del Protocol. */
export const textDeSeccio = (seccio) =>
  [
    seccio.titol,
    ...seccio.apartats.flatMap((a) => [
      a.titol ?? '',
      ...a.contingut.flatMap((c) => (c.t === 'ul' || c.t === 'ol' ? c.items : [c.text])),
    ]),
  ]
    .filter(Boolean)
    .join(' · ')
