/**
 * ACOMPANYAMENT MUSICAL DELS BALLS
 *
 * Quadre facilitat per la Comissió, a banda del document de consignes: assigna
 * a cada ball la colla de grallers o sacaires que l'acompanya. S'aplica a tots
 * els actes tradicionals excepte la presentació del cabeçut «El Patufet».
 *
 * `integrantsPendents` marca els balls dels quals encara no s'han indicat els
 * integrants concrets de la colla.
 */

/** Acte que queda fora del quadre. */
export const ACTES_SENSE_ACOMPANYAMENT = ['patufet']

export const ACOMPANYAMENT_MUSICAL = {
  'gegants-vila': { colla: 'escola-grallers', integrantsPendents: true },
  'gegants-americanos': { colla: 'gts-marcets', integrantsPendents: true },
  'gegants-moros': { colla: 'gts-marcets', integrantsPendents: true },
  cabecuts: { colla: 'gts-marcets', integrantsPendents: true },
  'bastons-jove': { colla: 'escola-grallers', integrantsPendents: true },
  'bastons-noies': { colla: 'escola-grallers', integrantsPendents: true },
  'gitanes-vila': { colla: 'escola-grallers', integrantsPendents: true },
  'bastons-mitjana': { colla: 'gts-marcets', integrantsPendents: true },
  'bastons-vella': { colla: 'grallers-la-sitja', integrantsPendents: true },
  cercolets: { colla: 'colla-bon-vent', integrantsPendents: false },
  pastorets: { colla: 'colla-filibusters', integrantsPendents: false },
  panderetes: { colla: 'colla-joan-olarte', integrantsPendents: false },
  cintes: { colla: 'escola-grallers', integrantsPendents: true },
  'gitanes-abps': { colla: 'escola-grallers', integrantsPendents: true },
  moixiganga: { colla: 'escola-grallers', integrantsPendents: true },
  castellers: { colla: 'escola-grallers', integrantsPendents: true },
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
    .map((id) => ({ ball: id, ...ACOMPANYAMENT_MUSICAL[id] }))
}

/** Cert si la colla de música acompanya algun ball present a la sortida. */
export function collaTocaA(collaId, sortida) {
  return acompanyamentDeSortida(sortida).some((a) => a.colla === collaId)
}
