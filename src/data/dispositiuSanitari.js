/**
 * ANNEX I — DISPOSITIU SANITARI
 *
 * Resum del desplegament de la Creu Roja acte per acte, amb els totals i el
 * protocol de trucada. És una vista pròpia de l'annex, no la font dels
 * "Punts de seguretat i d'emergència" de cada sortida: aquests surten del
 * quadre de seguretat propi de cada acte (Policia Local, Seguretat, Creu Roja
 * i Bombers voluntaris), a `seguretat.js`.
 *
 * Cada entrada està indexada per l'identificador de la sortida corresponent i
 * serveix de reforç per als actes que no tenen quadre propi al document.
 */

export const TELEFONS_EMERGENCIA = {
  avis: 'En cas d’emergència i no trobar un membre/voluntari de la Comissió de Sant Bartomeu i Santa Tecla, cal dirigir-se immediatament al socorrista o ambulància més propera.',
  restriccio:
    'Només en casos greus, es podrà contactar amb els responsables del dispositiu mèdic de la Creu Roja:',
  contactes: [
    { nom: 'Emergències', rol: 'Telèfon únic d’emergències', telefon: '112', destacat: true },
    { nom: 'Juanjo Martín', rol: 'Responsable dispositiu Creu Roja', telefon: '627 56 35 00' },
    { nom: 'Merche Verdejo', rol: 'Responsable dispositiu Creu Roja', telefon: '678 40 18 87' },
  ],
}

/** Llegenda dels tipus de recurs sanitari que apareixen a l'Annex I. */
export const LLEGENDA_RECURSOS = [
  { sigla: 'SVI', nom: 'Ambulància Classe Assistencial C — Suport Vital Intermedi' },
  { sigla: 'SVA', nom: 'Ambulància Classe Assistencial C — Suport Vital Avançat' },
  { sigla: 'SVB', nom: 'Ambulància Classe Assistencial B — Bàsica' },
  { sigla: 'Socorristes', nom: 'Socorristes a peu, repartits pel recorregut' },
]

export const DISPOSITIU_SANITARI = {
  'entrada-grallers': {
    acte: 'Entrada de Gralles',
    dia: "23 d'agost",
    franja: 'de 12:00 h a 13:45 h',
    recorregut: 'Sant Francesc, Cap de la Vila, Major, pl. Ajuntament.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI), Hort de Can Falç (Parellades – carrer Sant Pau).',
      },
      {
        tipus: 'SVB',
        text: '1 Ambulància Classe Assistencial B (Bàsica), carrer Àngel Vidal / Cap de la Vila.',
      },
      { tipus: 'Socorristes', text: '2 socorristes per carrer Sant Francesc, després van a l’Ajuntament.' },
      { tipus: 'Socorristes', text: '2 socorristes per carrer Major, després van a l’Ajuntament.' },
    ],
    total: '1 SVI, 1 SVB, 4 socorristes',
  },

  'sortida-dues': {
    acte: 'Sortida dels balls populars i mostres',
    dia: "23 d'agost",
    franja: 'de 14:00 h a 17:30 h',
    recorregut: 'Pl. Ajuntament, Major, Cap de la Vila.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI), Hort de Can Falç (Parellades – carrer Sant Pau).',
      },
      {
        tipus: 'SVB',
        text: '1 Ambulància Classe Assistencial B (Bàsica) al carrer Sant Bartomeu; un cop passin tots els balls va a l’Hospital Sant Joan Baptista.',
      },
      {
        tipus: 'Socorristes',
        text: '4 socorristes pel carrer Major, des de l’Ajuntament al Cap de la Vila; posteriorment 2 van a Can Falç i 2 a l’Hospital Sant Joan Baptista.',
      },
    ],
    total: '1 SVI, 1 SVB, 4 socorristes',
  },

  'castellera-vigilia': {
    acte: 'Actuació Colla Jove de Castellers',
    dia: "23 d'agost",
    franja: 'de 18:00 h a 19:00 h',
    lloc: 'Cap de la Vila.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI) al carrer Sant Bartomeu amb Jesús.',
      },
    ],
    total: '1 SVI',
  },

  'processo-bandera': {
    acte: 'Processó Cívica de Sant Bartomeu',
    dia: "23 d'agost",
    franja: 'de 19:00 h a 22:30 h',
    recorregut:
      'Illes Balears 9, Aragó, corraló de Can Pau Xic, Sant Honorat, Emili Picó, Jesús, Cap de la Vila, Parellades, Sant Pau, pg. de la Ribera, Carreta, Major, pl. Ajuntament, Davallada, Sant Joan, Fonollar i Baluard Miquel Utrillo.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI) al carrer Pompeu Fabra / Isabel Julià. Després marxa cap a la plaça de l’Ajuntament.',
      },
      {
        tipus: 'SVB',
        text: '1 Ambulància Classe Assistencial B (Bàsica) al carrer Sant Bartomeu. Després marxa cap al Passatge de la Vall / Port de n’Alegre.',
      },
      {
        tipus: 'Socorristes',
        text: '8 socorristes: 2 darrere dels Cabeçuts, 2 darrere de Diables Colla Jove, 2 darrere de Diables Agrupació i 2 darrere de Gitanes de la Vila.',
      },
    ],
    total: '1 SVI, 1 SVB, 8 socorristes',
  },

  'baixada-escales': {
    acte: 'Castell de Focs i baixada dels balls',
    dia: "23 d'agost",
    franja: 'de 23:00 h a 00:30 h',
    lloc: 'Espigó de llevant i entorn de la Parròquia.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI) al ficus (Passeig de la Ribera); un cop acabat el Castell de Foc es queda per la baixada de les escales.',
      },
      {
        tipus: 'SVB',
        text: '2 Ambulàncies Classe Assistencial B (Bàsica): 1 a Sport Bar (Passeig de la Ribera amb Bassa Rodona) i 1 al Pic Nic.',
      },
      {
        tipus: 'Socorristes',
        text: '4 socorristes per la baixada d’escales i voltants de l’ambulància Classe C.',
      },
    ],
    total: '1 SVI, 2 SVB, 4 socorristes',
  },

  matinal: {
    acte: 'Matinal',
    dia: "24 d'agost",
    franja: 'de 6:00 h a 9:30 h',
    recorregut:
      'Baluard, Fonollar, Baluard Vidal i Quadras, Port de n’Alegre, Rafael Llopart, Sant Damià, Sant Sebastià, Jesús, Sant Bartomeu, Sant Gaudenci, Sant Josep, Espalter, pl. del Pou Vedre, Parellades, Cap de la Vila, Major i Ajuntament.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI) a la Platja Sant Sebastià. Quan passi la 4a colla dels Bastons, marxa cap a la plaça del Pou Vedre.',
      },
      {
        tipus: 'SVB',
        text: '1 Ambulància Classe Assistencial B (Bàsica) a la plaça de l’Ajuntament.',
      },
      {
        tipus: 'Socorristes',
        text: '8 socorristes: 2 darrere dels Cabeçuts, 2 darrere de Diables Colla Jove, 2 darrere de Diables de l’Agrupació i 2 darrere de Gitanes de la Vila.',
      },
    ],
    total: '1 SVI, 1 SVB, 8 socorristes',
  },

  'sortida-ofici': {
    acte: 'Sortida d’Ofici',
    dia: "24 d'agost",
    franja: 'de 11:30 h a 13:30 h',
    lloc: 'Baluard i pl. Ajuntament.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI) a la plaça de l’Ajuntament, fins a la fi de l’actuació castellera.',
      },
      {
        tipus: 'SVB',
        text: '1 Ambulància Classe Assistencial B (SVB) a la plaça de l’Ajuntament, fins a la fi de l’actuació castellera.',
      },
    ],
    total: '1 SVI, 1 SVB',
  },

  'processo-sant-bartomeu': {
    acte: 'Processó de Sant Bartomeu',
    dia: "24 d'agost",
    franja: 'de 19:30 h a 23:00 h',
    recorregut:
      'Baluard, Fonollar, Sant Joan, Davallada, Barcelona, Santiago Rusiñol, Jesús, Sant Bartomeu, Sant Gaudenci, Sant Francesc, Cap de la Vila, Parellades, Bonaire, Passeig de la Ribera, Nou, Major, plaça de l’Ajuntament i Baluard.',
    recursos: [
      {
        tipus: 'SVI',
        text: '1 Ambulància Classe Assistencial C (SVI) al Passeig de la Ribera, a l’alçada del c/ Bonaire; després va cap a l’Ajuntament.',
      },
      {
        tipus: 'SVB',
        text: '1 Ambulància Classe Assistencial B (Bàsica) a Sant Bartomeu (segon tram) amb Sant Gaudenci; després va cap a l’Ajuntament.',
      },
      {
        tipus: 'Socorristes',
        text: '8 socorristes: 2 darrere dels Cabeçuts, 2 darrere de Diables Colla Jove, 2 darrere dels Diables de l’Agrupació i 2 darrere de Gitanes de la Vila.',
      },
    ],
    total: '1 SVI, 1 SVB, 8 socorristes',
    cobreixTambe: ['entrada-del-sant', 'ballada-final'],
  },

  'exhibicio-castellera': {
    acte: 'Actuació Colla Jove de Castellers',
    dia: "29 d'agost",
    franja: 'de 18:00 h a 20:00 h',
    lloc: 'Plaça de l’Ajuntament. Minyons de Terrassa, els Nens del Vendrell i la Colla Jove de Castellers de Sitges.',
    recursos: [
      { tipus: 'SVA', text: '1 Ambulància Classe Assistencial C (SVA).' },
      { tipus: 'SVB', text: '1 Ambulància Classe Assistencial B (Bàsica).' },
    ],
    total: '1 SVA, 1 SVB',
  },
}

/**
 * Retorna el dispositiu sanitari aplicable a una sortida, ja sigui perquè hi té
 * entrada pròpia o perquè queda coberta pel dispositiu d'un altre acte encadenat
 * (p. ex. l'Entrada del Sant, dins la franja de la Processó de Sant Bartomeu).
 */
export function dispositiuDeSortida(sortidaId) {
  if (DISPOSITIU_SANITARI[sortidaId]) {
    return { ...DISPOSITIU_SANITARI[sortidaId], heretat: null }
  }
  const pare = Object.entries(DISPOSITIU_SANITARI).find(([, d]) =>
    d.cobreixTambe?.includes(sortidaId),
  )
  return pare ? { ...pare[1], heretat: pare[1].acte } : null
}
