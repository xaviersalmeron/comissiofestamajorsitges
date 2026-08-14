/**
 * Catàleg d'elements festius del seguici popular.
 *
 * Cada sortida referencia aquests identificadors a `ordre` i a `participants`,
 * de manera que el filtre per element funciona sobre dades normalitzades i no
 * sobre cadenes de text lliure.
 */

export const CATEGORIES = {
  imatgeria: { id: 'imatgeria', nom: 'Imatgeria festiva', color: 'sorra' },
  foc: { id: 'foc', nom: 'Colles de foc i bèsties', color: 'vermell' },
  balls: { id: 'balls', nom: 'Balls blancs i de figures', color: 'blau' },
  musica: { id: 'musica', nom: 'Música i acompanyaments', color: 'slate' },
  castells: { id: 'castells', nom: 'Castells', color: 'sorra' },
}

export const ELEMENTS = [
  // Imatgeria
  { id: 'gegants-vila', nom: 'Gegants de la Vila', curt: 'Gegants Vila', categoria: 'imatgeria' },
  {
    id: 'gegants-americanos',
    nom: 'Gegants Americanos',
    curt: 'G. Americanos',
    categoria: 'imatgeria',
  },
  { id: 'gegants-moros', nom: 'Gegants Moros', curt: 'G. Moros', categoria: 'imatgeria' },
  { id: 'cabecuts', nom: 'Ball de Cabeçuts', curt: 'Cabeçuts', categoria: 'imatgeria' },
  { id: 'aliga', nom: "Àliga", curt: 'Àliga', categoria: 'imatgeria' },

  // Foc i bèsties
  { id: 'drac', nom: 'Drac', curt: 'Drac', categoria: 'foc' },
  {
    id: 'diables-vella',
    nom: 'Ball de Diables Colla Vella',
    curt: 'Diables C. Vella',
    categoria: 'foc',
  },
  {
    id: 'diables-jove',
    nom: 'Ball de Diables Colla Jove',
    curt: 'Diables C. Jove',
    categoria: 'foc',
  },
  {
    id: 'diables-abps',
    nom: 'Ball de Diables Colla ABPS',
    curt: 'Diables ABPS',
    categoria: 'foc',
  },

  // Balls
  {
    id: 'bastons-jove',
    nom: 'Ball de Bastons Colla Jove',
    curt: 'Bastons Jove',
    categoria: 'balls',
  },
  {
    id: 'bastons-noies',
    nom: 'Ball de Bastons Colla Noies',
    curt: 'Bastons Noies',
    categoria: 'balls',
  },
  {
    id: 'bastons-mitjana',
    nom: 'Ball de Bastons Colla Mitjana',
    curt: 'Bastons Mitjana',
    categoria: 'balls',
  },
  {
    id: 'bastons-vella',
    nom: 'Ball de Bastons Colla Vella',
    curt: 'Bastons Vella',
    categoria: 'balls',
  },
  { id: 'cercolets', nom: 'Ball de Cercolets', curt: 'Cercolets', categoria: 'balls' },
  { id: 'panderetes', nom: 'Ball de Panderetes', curt: 'Panderetes', categoria: 'balls' },
  { id: 'pastorets', nom: 'Ball de Pastorets', curt: 'Pastorets', categoria: 'balls' },
  { id: 'cintes', nom: 'Ball de Cintes', curt: 'Cintes', categoria: 'balls' },
  {
    id: 'gitanes-vila',
    nom: 'Ball de Gitanes de la Vila',
    curt: 'Gitanes Vila',
    categoria: 'balls',
  },
  { id: 'gitanes-abps', nom: 'Ball de Gitanes ABPS', curt: 'Gitanes ABPS', categoria: 'balls' },
  { id: 'moixiganga', nom: 'Ball de Moixiganga', curt: 'Moixiganga', categoria: 'balls' },
  { id: 'faixes', nom: 'Ball de Faixes', curt: 'Faixes', categoria: 'balls' },

  // Música
  { id: 'banda', nom: 'Banda (Agrupació Musical Suburband)', curt: 'Banda', categoria: 'musica' },
  { id: 'cobla', nom: 'Cobla', curt: 'Cobla', categoria: 'musica' },
  { id: 'colla-joan-olarte', nom: 'Colla de Sacaires Joan Olarte', curt: 'Joan Olarte', categoria: 'musica' },
  { id: 'colla-filibusters', nom: 'Colla de Sacaires Filibusters', curt: 'Filibusters', categoria: 'musica' },
  { id: 'colla-bon-vent', nom: 'Colla de Sacaires Bon Vent', curt: 'Bon Vent', categoria: 'musica' },
  { id: 'grallers-la-sitja', nom: 'Colla de Grallers La Sitja', curt: 'La Sitja', categoria: 'musica' },
  {
    id: 'escola-grallers',
    nom: 'Escola de Grallers de Sitges',
    curt: 'Escola de Grallers',
    categoria: 'musica',
  },
  { id: 'gts-marcets', nom: 'GTS Marcets', curt: 'GTS Marcets', categoria: 'musica' },

  // Castells
  {
    id: 'castellers',
    nom: 'Colla Jove de Castellers de Sitges',
    curt: 'Castellers Sitges',
    categoria: 'castells',
  },
  { id: 'minyons-terrassa', nom: 'Minyons de Terrassa', curt: 'Minyons', categoria: 'castells' },
  { id: 'nens-vendrell', nom: 'Els Nens del Vendrell', curt: 'Nens del Vendrell', categoria: 'castells' },
  {
    id: 'xiquets-serrallo',
    nom: 'Els Xiquets del Serrallo',
    curt: 'Xiquets del Serrallo',
    categoria: 'castells',
  },
]

/** Mapa id -> element, per a consultes O(1) des dels components. */
export const ELEMENTS_PER_ID = Object.fromEntries(ELEMENTS.map((e) => [e.id, e]))

export const nomElement = (id) => ELEMENTS_PER_ID[id]?.nom ?? id
export const nomCurtElement = (id) => ELEMENTS_PER_ID[id]?.curt ?? id
export const categoriaElement = (id) => ELEMENTS_PER_ID[id]?.categoria ?? 'balls'
