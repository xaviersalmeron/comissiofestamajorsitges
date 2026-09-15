/**
 * Catàleg d'elements festius de la Festa Major de Santa Tecla.
 *
 * Cada sortida referencia aquests identificadors a `ordre` i a
 * `participantsExtra`, de manera que el filtre per element funciona sobre dades
 * normalitzades i no sobre cadenes de text lliure.
 *
 * A banda del seguici adult, Santa Tecla incorpora les colles infantils i
 * convidades que participen a les cercaviles del 20 de setembre i a les
 * Matinals: hi consten amb el nom exacte del document i formen la seva pròpia
 * categoria, perquè el filtre del seguici adult no quedi ofegat.
 */

export const CATEGORIES = {
  imatgeria: { id: 'imatgeria', nom: 'Imatgeria festiva', color: 'sorra' },
  foc: { id: 'foc', nom: 'Colles de foc i bèsties', color: 'vermell' },
  balls: { id: 'balls', nom: 'Balls blancs i de figures', color: 'blau' },
  musica: { id: 'musica', nom: 'Música i acompanyaments', color: 'slate' },
  castells: { id: 'castells', nom: 'Castells', color: 'sorra' },
  infantil: { id: 'infantil', nom: 'Colles infantils i convidades', color: 'verd' },
}

export const ELEMENTS = [
  // ── Imatgeria ──
  { id: 'gegants-vila', nom: 'Gegants de la Vila', curt: 'Gegants Vila', categoria: 'imatgeria' },
  {
    id: 'gegants-americanos',
    nom: 'Gegants Americanos',
    curt: 'G. Americanos',
    categoria: 'imatgeria',
  },
  { id: 'gegants-moros', nom: 'Gegants Moros', curt: 'G. Moros', categoria: 'imatgeria' },
  { id: 'cabecuts', nom: 'Ball de Cabeçuts', curt: 'Cabeçuts', categoria: 'imatgeria' },

  // ── Foc i bèsties ──
  { id: 'drac', nom: 'Drac', curt: 'Drac', categoria: 'foc' },
  { id: 'aliga', nom: 'Àliga', curt: 'Àliga', categoria: 'foc' },
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

  // ── Balls ──
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

  // ── Música ──
  { id: 'banda', nom: 'Banda (Agrupació Musical Suburband)', curt: 'Banda', categoria: 'musica' },
  { id: 'cobla', nom: 'Cobla', curt: 'Cobla', categoria: 'musica' },
  {
    id: 'escola-grallers',
    nom: 'Escola de Grallers de Sitges',
    curt: 'Escola de Grallers',
    categoria: 'musica',
  },
  { id: 'gts-marcets', nom: 'GTS Marcets', curt: 'GTS Marcets', categoria: 'musica' },
  {
    id: 'grallers-la-sitja',
    nom: 'Colla de Grallers La Sitja',
    curt: 'La Sitja',
    categoria: 'musica',
  },
  {
    id: 'colla-bon-vent',
    nom: 'Colla de Sacaires Bon Vent',
    curt: 'Bon Vent',
    categoria: 'musica',
  },
  {
    id: 'colla-joan-olarte',
    nom: 'Colla de Sacaires Joan Olarte',
    curt: 'Joan Olarte',
    categoria: 'musica',
  },
  {
    id: 'colla-filibusters',
    nom: 'Colla de Sacaires Filibusters',
    curt: 'Filibusters',
    categoria: 'musica',
  },
  // El document només en dona el nom curt; no consta la denominació completa.
  { id: 'colla-guillaumes', nom: 'Guillaumes', curt: 'Guillaumes', categoria: 'musica' },
  { id: 'colla-julian', nom: 'Julián', curt: 'Julián', categoria: 'musica' },
  { id: 'colla-jan-lleida', nom: 'Jan Lleida', curt: 'Jan Lleida', categoria: 'musica' },
  { id: 'colla-manel-vazquez', nom: 'Manel Vazquez', curt: 'Manel Vazquez', categoria: 'musica' },
  {
    id: 'colla-oriol-carbonell',
    nom: 'Oriol Carbonell',
    curt: 'Oriol Carbonell',
    categoria: 'musica',
  },

  // ── Castells ──
  {
    id: 'castellers',
    nom: 'Colla Jove de Castellers de Sitges',
    curt: 'Castellers Sitges',
    categoria: 'castells',
  },
  { id: 'xicots-vilafranca', nom: 'Xicots de Vilafranca', curt: 'Xicots', categoria: 'castells' },
  {
    id: 'castellers-sant-cugat',
    nom: 'Castellers de Sant Cugat',
    curt: 'Sant Cugat',
    categoria: 'castells',
  },
  {
    id: 'nois-de-la-torre',
    nom: 'Els Nois de la Torre',
    curt: 'Nois de la Torre',
    categoria: 'castells',
  },
]

/**
 * Colles infantils i convidades de les cercaviles del 20 de setembre i de les
 * Matinals. Els noms són els del document, sense normalitzar.
 */
const INFANTILS = [
  // Gegants i capgrossos
  ['gegants-montornes', 'Gegants d’en Montornès'],
  ['gegants-vila-infantils', 'Gegants de la Vila infantils'],
  ['gegants-moros-petits', 'Gegants Moros petits de Sitges (petits)'],
  ['gegants-moros-mitjans', 'Gegants Moros petits de Sitges (mitjans)'],
  ['gegant-rodolf', 'Gegant Rodolf'],
  ['la-pepita', 'La Pepita'],
  ['gegant-bs', 'Gegant BS'],
  ['tiet-evaristo', 'Tiet Evaristo i Roseta'],
  ['colla-jove-ripoll', 'Colla Jove Ripoll'],
  ['cubanitos-mojito', 'Cubanitos Mojito'],
  ['cubanita-xalet', 'La Cubanita del Xalet i la geganta Elsa'],
  ['pagesos-can-pei', 'Els pagesos de Can Pei'],
  ['poc-a-poc', 'Poc a poc'],
  ['mil-quatrecents', '1400X4'],
  ['jordi-jovenet', 'Jordi Jovenet'],
  ['colla-pesigolla', 'Colla Pesigolla'],
  // Bestiari sense foc
  ['drac-verdet', 'Drac verdet'],
  ['colla-espurnes', 'Colla Espurnes'],
  ['giravols', 'Giravols'],
  ['draguipatis', 'Draguipatis'],
  ['ferafocs', 'Ferafocs'],
  ['mini-dracs', 'Mini Dracs'],
  ['colla-paao', 'Colla les PAAO'],
  ['escalat-amics', 'L’escalat i els seus amics'],
  ['drac-gorra-blava', 'El drac de la gorra blava'],
  ['colla-espurna', 'Colla Espurna'],
  ['somnis-fm', 'Somnis de FM'],
  ['dragonet', 'Dragonet'],
  // Bèsties infantils amb foc
  ['aliga-infantil', 'Àliga infantil'],
  ['drac-bestia', 'Drac Bèstia'],
  ['drac-croqueta', 'Drac Croqueta'],
  ['piranya', 'Piranya'],
  ['drac-juvenil-ribes', 'Drac Juvenil de Ribes'],
  ['mega-trosky', 'Mega Trosky'],
  ['trosky', 'Trosky'],
  ['drac-gronkel', 'Drac Gronkel'],
  ['drac-cremat', 'Drac Cremat'],
  ['gatosaurio', 'Gatosaurio'],
  ['drac-pelat', 'Drac Pelat'],
  ['escatat-de-mar', 'Escatat de Mar'],
  ['puff', 'Puff'],
  ['llampec-mort-pudent', 'El llampec del mort pudent'],
]

for (const [id, nom] of INFANTILS) {
  ELEMENTS.push({ id, nom, curt: nom, categoria: 'infantil' })
}

/** Mapa id -> element, per a consultes O(1) des dels components. */
export const ELEMENTS_PER_ID = Object.fromEntries(ELEMENTS.map((e) => [e.id, e]))

export const nomElement = (id) => ELEMENTS_PER_ID[id]?.nom ?? id
export const nomCurtElement = (id) => ELEMENTS_PER_ID[id]?.curt ?? id
export const categoriaElement = (id) => ELEMENTS_PER_ID[id]?.categoria ?? 'balls'
