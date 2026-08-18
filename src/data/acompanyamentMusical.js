/**
 * ACOMPANYAMENT MUSICAL DELS BALLS
 *
 * Quadre facilitat per la Comissió, a banda del document de consignes: assigna
 * a cada ball la colla de grallers o sacaires que l'acompanya, el grup concret
 * dins de la colla i els seus integrants amb l'instrument que toquen.
 *
 * Font: «Llistat músics 2026». Només s'hi recullen gralles i sacaires; els
 * timbalers de les colles de foc no en formen part.
 *
 * S'aplica a tots els actes tradicionals excepte la presentació del cabeçut
 * «El Patufet».
 */

/** Acte que queda fora del quadre. */
export const ACTES_SENSE_ACOMPANYAMENT = ['patufet']

const g = (nom, titular) => ({ nom, instrument: 'Gralla', titular })
const t = (nom, titular) => ({ nom, instrument: 'Timbal', titular })

export const ACOMPANYAMENT_MUSICAL = {
  // ── Escola de Grallers de Sitges ──
  'gegants-vila': {
    colla: 'escola-grallers',
    grup: 'Colla 1',
    integrants: [g('Sergi Valls'), g('Adrià Saumell'), g('Edgar Castellanos'), t('Martí Pascual')],
  },
  'bastons-jove': {
    colla: 'escola-grallers',
    grup: 'Colla 2',
    integrants: [g('Gabriel Méndez'), g('Nil Calvo'), g('Arnau Molina'), t('Nil Gonzalvo')],
  },
  'bastons-noies': {
    colla: 'escola-grallers',
    grup: 'Colla 3',
    integrants: [g('Àlex Virgili'), g('Àlex Ferré'), g('Enric Castelló'), t('Marc Ferret')],
  },
  'gitanes-vila': {
    colla: 'escola-grallers',
    grup: 'Colla 4',
    integrants: [
      g('Aitor Marin'),
      g('Marc Barnés'),
      g('Artur Font'),
      g('Salvador Vilà'),
      g('Dani Martínez'),
      t('Blai Saumell'),
    ],
  },
  cintes: {
    colla: 'escola-grallers',
    grup: 'Colla 5',
    integrants: [g('Carlota Neblaza'), g('Jordina Neblaza'), g('Arnau Guillaumes'), t('Àlex Colom')],
  },
  'gitanes-abps': {
    colla: 'escola-grallers',
    grup: 'Colla 6',
    integrants: [
      g('Gerard Palma'),
      g('Isaac Pérez'),
      g('Àlex Quintana'),
      g('Adrià Ruiz'),
      t('Gerard Ruiz'),
    ],
  },
  moixiganga: {
    colla: 'escola-grallers',
    grup: 'Colla 7',
    integrants: [g('Ot Sauret'), g('Víctor Porras'), t('Marco Fuentes')],
  },

  // ── GTS Marcets ──
  'gegants-americanos': {
    colla: 'gts-marcets',
    grup: 'Colla 1',
    integrants: [
      g('Jesús Coines', true),
      g('Isaac Carbonell', true),
      g('Maiol Massip', true),
      g('Gabri González', true),
      g('Jordi Triquell', true),
      t('Albert Soler', true),
      t('Ramon Fullera', true),
    ],
  },
  'gegants-moros': {
    colla: 'gts-marcets',
    grup: 'Colla 2',
    integrants: [
      g('Rafel Marcet', true),
      g('Joan Carbonell', true),
      g('Josep Soler', true),
      t('Pitu Valera', true),
      t('Miquel Marcet', true),
    ],
  },
  cabecuts: {
    colla: 'gts-marcets',
    grup: 'Colla 3',
    integrants: [
      g('Pere Sabaté'),
      g('Carles Arola'),
      g('Oleguer Arola'),
      g('Bernat Pinar'),
      g('Àlex Valle'),
      g('Àlex Espejo'),
      t('Marçal Valera', true),
      t('Axel Torrente', true),
    ],
  },
  'bastons-mitjana': {
    colla: 'gts-marcets',
    grup: 'Colla 4',
    integrants: [
      g('Manel Lázaro'),
      g('Pere Sallent'),
      g('Gerard Feliu'),
      g('Àlex Paco'),
      g('Vinyet Esteban'),
      g('Anna Colet'),
      g('Oriol López'),
      t('Tomàs Pedregosa', true),
      t('Aitor Planella', true),
    ],
  },

  // ── Colles de sacaires ──
  panderetes: {
    colla: 'colla-joan-olarte',
    integrants: [
      { nom: 'Pol Lari', instrument: 'Sac de gemecs', titular: true },
      { nom: 'Joan Olarte', instrument: 'Flabiol i tamborí', titular: true },
    ],
  },
  pastorets: {
    colla: 'colla-filibusters',
    integrants: [
      { nom: 'Marcel Martínez Manyé', instrument: 'Sac de gemecs', titular: true },
      { nom: 'Raimon Santacana Miret', instrument: 'Flabiol i tamborí', titular: true },
    ],
  },
  cercolets: {
    colla: 'colla-bon-vent',
    // El llistat hi preveu 2 sacaires titulars, encara sense nom assignat.
    integrants: [],
    plantilla: '2 sacaires (sac de gemecs)',
  },

  // ── Colla de Grallers La Sitja ──
  // Llistat facilitat per la Comissió (18/08/2026). Els titulars són els 5
  // grallers i 2 timbalers que preveia la plantilla; la resta són suplents.
  'bastons-vella': {
    colla: 'grallers-la-sitja',
    integrants: [
      g('Jordi Olaria', true),
      g('Lluc Lopez', true),
      g('Isidro Calvo', true),
      g('Jesus Lopez', true),
      g('Manel Martinez', true),
      g('Rafael Morillas'),
      g('Sofia Aldeco'),
      g('Inés Polonio'),
      g('Andrea Alcazar'),
      g('Rafa Garcia'),
      t('David Fernández', true),
      t('Joan Galindo', true),
      t('Íñigo Ferran'),
    ],
  },

  // ── Castells ──
  castellers: {
    colla: 'escola-grallers',
    integrants: [],
  },
}

/** Balls que acompanya una colla de música concreta. */
export const BALLS_PER_COLLA = Object.entries(ACOMPANYAMENT_MUSICAL).reduce(
  (acc, [ball, { colla }]) => {
    ;(acc[colla] ??= []).push(ball)
    return acc
  },
  {},
)

/**
 * Parelles ball → colla que apliquen a una sortida concreta, en el mateix
 * ordre en què hi surten els elements. Retorna [] si l'acte queda fora del
 * quadre o si no hi participa cap ball acompanyat.
 */
export function acompanyamentDeSortida(sortida) {
  if (!sortida || ACTES_SENSE_ACOMPANYAMENT.includes(sortida.id)) return []
  return (sortida.ordre ?? [])
    .filter((id) => ACOMPANYAMENT_MUSICAL[id])
    .map((id) => {
      const a = ACOMPANYAMENT_MUSICAL[id]
      return { ball: id, ...a, integrantsPendents: a.integrants.length === 0 }
    })
}

/** Cert si la colla de música acompanya algun ball present a la sortida. */
export function collaTocaA(collaId, sortida) {
  return acompanyamentDeSortida(sortida).some((a) => a.colla === collaId)
}

/** Integrants agrupats per instrument, en l'ordre en què hi consten. */
export function perInstrument(integrants) {
  const ordre = []
  const grups = {}
  for (const i of integrants) {
    if (!grups[i.instrument]) {
      grups[i.instrument] = []
      ordre.push(i.instrument)
    }
    grups[i.instrument].push(i)
  }
  return ordre.map((instrument) => ({ instrument, membres: grups[instrument] }))
}

/** Total de músics amb nom assignat al llistat. */
export const TOTAL_MUSICS = Object.values(ACOMPANYAMENT_MUSICAL).reduce(
  (n, a) => n + a.integrants.length,
  0,
)
