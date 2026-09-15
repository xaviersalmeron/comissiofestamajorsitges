/**
 * PUNTS DE SEGURETAT I D'EMERGÈNCIA, acte per acte.
 *
 * Al document de consignes, cada sortida porta el seu propi quadre amb el
 * desplegament dels cossos que hi intervenen: Policia Local, Seguretat
 * (auxiliars), Creu Roja i Bombers voluntaris.
 *
 * A diferència de la Festa Major de Sant Bartomeu, les consignes de Santa Tecla
 * no porten annex de dispositiu sanitari: aquests quadres són l'única font.
 *
 * Font: Consignes FM Santa Tecla 2026, versió 3.2 (23/09/2026).
 */

/** Els quatre cossos, en l'ordre en què apareixen al document. */
export const COSSOS = [
  { id: 'policia', nom: 'Policia Local', to: 'blau' },
  { id: 'seguretat', nom: 'Seguretat', to: 'sorra', detall: 'auxiliars' },
  { id: 'creuRoja', nom: 'Creu Roja', to: 'vermell' },
  { id: 'bombers', nom: 'Bombers voluntaris', to: 'taronja' },
]

export const SEGURETAT_PER_ACTE = {
  'cercavila-gegants': {
    policia: [],
    seguretat: [],
    creuRoja: [
      '2 socorristes darrere del Ball de Bastons. En arribar a la Fragata, s’hi queden tota la mostra.',
    ],
    bombers: [],
  },

  'cercavila-dracs': {
    policia: [],
    seguretat: [],
    creuRoja: [
      '2 socorristes davant el Ball de Diables, colla ABPS.',
      'Clínica mòbil davant del Ficus amb 2 socorristes.',
    ],
    bombers: [],
  },

  'processo-civica': {
    policia: [
      'Pilotatge del recorregut + parella amb les autoritats.',
      '1 parella al Cap de la Vila.',
      '1 parella a la plaça de l’Ajuntament.',
    ],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) al C/ Sant Francesc amb Cap de la Vila, després a l’Ajuntament. Si no pot pujar a l’Ajuntament es queda a Miramar.',
      '1 Ambulància Classe Assistencial B (Bàsica) al Passatge la Vall / carrer de Port de n’Alegre. Després a l’Ajuntament.',
      '8 socorristes: 2 darrere dels cabeçuts, 2 darrere de diables Colla Jove, 2 darrere de diables Agrupació i 2 darrere de Gitanes de la Vila.',
    ],
    bombers: [
      '1 vehicle d’aigua itinerant al c/ Pompeu Fabra o Isabel Julià, i després es desplaça fins al Passeig de la Ribera a l’altura del Ficus.',
      '1 vehicle al Baluard Vidal Quadres.',
    ],
  },

  'matinal-foc': {
    policia: ['Pilotatge del recorregut.'],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) al Ficus del Passeig de la Ribera.',
      '1 Ambulància Classe Assistencial B (Bàsica) a la plaça del Pou Vedre.',
      '4 socorristes: 2 darrere de Diables colla Jove i 2 darrere de Diables colla ABPS.',
    ],
    bombers: ['Bombers voluntaris situats en diferents punts del recorregut.'],
  },

  'matinal-gran': {
    policia: ['Pilotatge del recorregut.'],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) al Ficus del Passeig de la Ribera.',
      '1 Ambulància Classe Assistencial B (Bàsica) a la plaça del Pou Vedre.',
      '2 socorristes darrere de Gitanes de la Vila colla 2.',
    ],
    bombers: [],
  },

  'matinal-petita': {
    policia: [],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) al Ficus del Passeig de la Ribera.',
      '1 Ambulància Classe Assistencial B (Bàsica) a la plaça del Pou Vedre.',
      '2 socorristes darrere del Ball de Bastons colla 3.',
    ],
    bombers: [],
  },

  'sortida-ofici': {
    policia: ['Pilotatge del recorregut.', 'Custòdia de l’Ajuntament.'],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) i 1 Ambulància Classe Assistencial B (Bàsica) a la plaça de l’Ajuntament fins a finalitzar l’actuació castellera.',
    ],
    bombers: [],
  },

  'pilar-escales': {
    policia: [],
    seguretat: [],
    creuRoja: ['1 Ambulància Classe Assistencial B (Bàsica) a la Fragata.'],
    bombers: [],
  },

  'processo-santa-tecla': {
    policia: [
      'Pilotatge del recorregut + parella amb les autoritats.',
      '1-2 binomis davant el bar El Cable. En acabar, aniran a tancar l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard.',
    ],
    seguretat: [
      '1 parella d’auxiliars impedint accés dels vianants a la plaça del Cable per carrer Barcelona amb carrer Jafra. En acabar aniran a tancar l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard.',
      '1 parella d’auxiliars impedint accés dels vianants a la plaça del Cable pel carrer de l’Aigua amb carrer Sant Domènech. En acabar aniran a tancar l’accés de les escales a la Fragata.',
      '1 parella d’auxiliars al Cap de la Vila. En acabar aniran a tancar l’accés dels vianants al carreró de la plaça de l’Ajuntament amb el Baluard. En acabar aniran a tancar l’accés de les escales a la Fragata.',
    ],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) al Passeig de la Ribera, alçada c/ Bonaire; després va cap a l’Ajuntament.',
      '1 Ambulància Classe Assistencial B (Bàsica) al carrer Sant Bartomeu (segon tram) amb carrer Sant Gaudenci; després va cap a l’Ajuntament.',
      '8 socorristes: 2 darrere dels cabeçuts, 2 darrere de diables Colla Jove, 2 darrere de diables Agrupació i 2 darrere de gitanes de la Vila.',
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

  'exhibicio-castellera': {
    policia: [],
    seguretat: [],
    creuRoja: [
      '1 Ambulància Classe Assistencial C (SVI) i 1 Ambulància Classe Assistencial B (SVB) a la plaça de l’Ajuntament.',
    ],
    bombers: [],
  },
}

/**
 * Actes sense quadre propi al document, amb el desplegament que els cobreix.
 * L'Entrada de la Santa passa al Baluard la mateixa nit i al mateix lloc que la
 * Ballada final, de manera que en queda coberta.
 */
export const SEGURETAT_HERETADA = {
  'entrada-santa': {
    de: 'ballada-final',
    nota: 'El document no dona quadre propi a l’Entrada de la Santa. Es mostra el de la Ballada final, que és la mateixa nit i al mateix lloc.',
  },
}

/** Nombre total d'efectius descrits per a un acte (línies del desplegament). */
export const comptaSeguretat = (bloc) =>
  bloc ? COSSOS.reduce((n, c) => n + (bloc[c.id]?.length ?? 0), 0) : 0

/** Cossos amb contingut real, per no pintar grups buits. */
export const cossosAmbContingut = (bloc) =>
  bloc ? COSSOS.filter((c) => (bloc[c.id]?.length ?? 0) > 0) : []
