/**
 * PUNTS DE SEGURETAT I D'EMERGÈNCIA, acte per acte.
 *
 * Al document de consignes, cada sortida porta el seu propi quadre de
 * seguretat amb el desplegament dels quatre cossos que hi intervenen:
 * Policia Local, Seguretat (auxiliars), Creu Roja i Bombers voluntaris.
 *
 * Aquest és el contingut autoritatiu per a cada acte. L'Annex I (dispositiu
 * sanitari) és un resum a part, només de Creu Roja, amb els totals i el
 * protocol de trucada; es manté com a vista pròpia.
 *
 * Font: Consignes FM Sant Bartomeu 2026, versió 3.0 (14/08/2026).
 */

/** Els quatre cossos, en l'ordre en què apareixen al document. */
export const COSSOS = [
  { id: 'policia', nom: 'Policia Local', to: 'blau' },
  { id: 'seguretat', nom: 'Seguretat', to: 'sorra', detall: 'auxiliars' },
  { id: 'creuRoja', nom: 'Creu Roja', to: 'vermell' },
  { id: 'bombers', nom: 'Bombers voluntaris', to: 'taronja' },
]

export const SEGURETAT_PER_ACTE = {
  'entrada-grallers': {
    policia: [
      'A les 11.30 h, tallant accés de cotxes al carrer Sant Francesc (Can Perico) i notificant a locals per endarrerir el muntatge de les terrasses fins a finalització de l’acte. Important: s’han de desmuntar les terrasses de la Granja i de la cafeteria CINC.',
      '3 agents al Cap de la Vila facilitant l’accés de grallers a l’escenari.',
    ],
    seguretat: [
      '1 parella d’auxiliars tallant accés de cotxes al carrer Sant Francesc (Can Perico).',
      '1 parella d’auxiliars a la cruïlla de carrer Sant Francesc amb St. Gaudenci.',
    ],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI), davant de l’Hort de Can Falç (Parellades – carrer Sant Pau).',
      '1 Ambulància Classe Assistencial B (Bàsica) al carrer Sant Bartomeu.',
      '2 socorristes per carrer Sant Francesc.',
      '2 socorristes per carrer Major.',
    ],
    bombers: [],
  },

  'sortida-dues': {
    policia: ['1 parella itinerant carrer Major i Cap de la Vila.'],
    seguretat: [
      '1 auxiliar tallant accés als vianants al carrer Nou des del Passeig.',
      '1 auxiliar tallant accés als vianants al carrer Tacó des del Passeig.',
      '1 auxiliar tallant accés als vianants al carrer Carreta des del Passeig.',
      'De 15 a 17 h a les Magnòlies, tall de carril de circulació amb presència d’auxiliars.',
    ],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI), davant de l’Hort de Can Falç (Parellades – carrer Sant Pau).',
      '1 Ambulància Classe Assistencial B (Bàsica) al carrer Sant Bartomeu; un cop passin tots els balls va a l’Hospital Sant Joan Baptista.',
      '4 socorristes pel carrer Major, des de l’Ajuntament fins al Cap de la Vila; posteriorment 2 van a l’Hort de Can Falç i 2 van a l’Hospital Sant Joan Baptista.',
    ],
    bombers: [],
  },

  'processo-bandera': {
    policia: [
      'Pilotatge del recorregut + parella amb les autoritats.',
      '1 patrulla com a punt de referència, a carrer Pompeu Fabra amb Emili Picó.',
      '1 parella al Cap de la Vila.',
      '1 parella a la plaça de l’Ajuntament.',
    ],
    seguretat: [
      '1 parella d’auxiliars tancant l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard, un cop arribin els Gegants al Baluard.',
      '1 parella d’auxiliars tancant l’accés dels vianants al carreró de la rectoria amb plaça de l’Ajuntament, un cop arribin els Gegants al Baluard.',
      '2 parelles d’auxiliars tancant l’accés dels vianants al carrer Fonollar amb carrer Sant Joan, un cop arribin els Gegants al Baluard.',
    ],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI), entre carrer Pompeu Fabra amb Isabel Julià. Després marxa cap a la plaça de l’Ajuntament.',
      '1 Ambulància Classe Assistencial B (Bàsica) al carrer Sant Bartomeu. Després marxa cap al Passatge la Vall / carrer de Port de n’Alegre.',
      '8 socorristes: 2 darrere dels Cabeçuts, 2 darrere de Diables Colla Jove, 2 darrere de Diables Agrupació i 2 darrere de Gitanes de la Vila.',
    ],
    bombers: [
      '1 vehicle d’aigua itinerant al c/ Pompeu Fabra o Isabel Julià, i després es desplaça fins al Passeig de la Ribera, a l’altura del Ficus.',
      '1 vehicle al Baluard Vidal i Quadras.',
    ],
  },

  'baixada-escales': {
    policia: ['Pilotatge del recorregut.'],
    seguretat: [
      'Personal de seguretat del Castell de Foc col·labora al tram final de les escales, on es col·locaran tanques per canalitzar l’inici.',
    ],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) al Ficus (Passeig de la Ribera amb Sant Pau).',
      '4 socorristes: 2 darrere de Bastons Colla Noies i 2 darrere de l’Àliga de Sitges.',
    ],
    bombers: ['1 vehicle d’aigua al Passeig de la Ribera, a l’altura del Ficus.'],
  },

  matinal: {
    policia: ['Pilotatge del recorregut.', 'Suport d’auxiliars en cas de necessitat.'],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) a la plaça de l’Ajuntament.',
      '1 Ambulància Classe Assistencial B (Bàsica) a la platja de Sant Sebastià. Després marxa cap a la plaça del Pou Vedre.',
      '8 socorristes: 2 darrere dels Cabeçuts, 2 darrere de Diables Colla Jove, 2 darrere de Diables Agrupació i 2 darrere de Gitanes de la Vila.',
    ],
    bombers: [
      '1 vehicle d’aigua itinerant al carrer Rafael Llopart amb Sant Damià i després al carrer Bonaire.',
    ],
  },

  'sortida-ofici': {
    policia: ['Pilotatge del recorregut.', 'Custòdia Ajuntament.'],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) i 1 Ambulància Classe Assistencial B (Bàsica) a la plaça de l’Ajuntament, fins a finalitzar l’actuació castellera.',
    ],
    bombers: [],
  },

  'processo-sant-bartomeu': {
    policia: [
      'Pilotatge del recorregut + parella amb les autoritats.',
      '1-2 binomis davant el bar El Cable. En acabar, aniran a tancar l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard.',
    ],
    seguretat: [
      '1 parella d’auxiliars impedint l’accés dels turistes/visitants al carrer Fonollar amb carrer Sant Joan. En acabar aniran a tancar l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard.',
      '1 parella d’auxiliars impedint l’accés dels vianants a la plaça del Cable per carrer Barcelona amb carrer Jafra. En acabar aniran a tancar l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard.',
      '1 parella d’auxiliars impedint l’accés dels vianants a la plaça del Cable pel carrer de l’Aigua amb carrer Sant Domènech. En acabar aniran a tancar l’accés de les escales a la Fragata.',
      '1 parella d’auxiliars al Cap de la Vila. En acabar aniran a tancar l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard i, tot seguit, l’accés de les escales a la Fragata.',
    ],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) al Passeig de la Ribera, a l’alçada del c/ Bonaire; després va cap a l’Ajuntament.',
      '1 Ambulància Classe Assistencial B (Bàsica) al carrer Sant Bartomeu (segon tram) amb carrer Sant Gaudenci; després va cap a l’Ajuntament.',
      '8 socorristes: 2 darrere dels Cabeçuts, 2 darrere de Diables Colla Jove, 2 darrere de Diables Agrupació i 2 darrere de Gitanes de la Vila.',
    ],
    bombers: [
      '1 vehicle d’aigua itinerant al carrer Jesús amb carrer Santiago Rusiñol. Després marxa cap al Passeig.',
    ],
  },

  'ballada-final': {
    policia: ['1 parella a la porta principal de l’Ajuntament.'],
    seguretat: [
      'Els auxiliars que vagin finalitzant el seu punt aniran sumant efectius a l’Ajuntament (zona de la Palmera).',
    ],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) a la plaça de l’Ajuntament.',
      '1 Ambulància Classe Assistencial B (Bàsica) a la plaça de l’Ajuntament.',
    ],
    bombers: ['1 vehicle d’aigua al Baluard Miquel Utrillo.'],
  },
}

/** Nombre total d'efectius descrits per a un acte (línies del desplegament). */
export const comptaSeguretat = (bloc) =>
  bloc ? COSSOS.reduce((n, c) => n + (bloc[c.id]?.length ?? 0), 0) : 0

/** Cossos amb contingut real, per no pintar grups buits. */
export const cossosAmbContingut = (bloc) =>
  bloc ? COSSOS.filter((c) => (bloc[c.id]?.length ?? 0) > 0) : []
