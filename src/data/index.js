import { SORTIDES, DIES } from './sortides.js'
import { CONSIGNES_GENERALS } from './consignesGenerals.js'
import { DISPOSITIU_SANITARI, dispositiuDeSortida, TELEFONS_EMERGENCIA } from './dispositiuSanitari.js'
import { TRAM_EN_CALMA } from './tramEnCalma.js'
import { ELEMENTS, ELEMENTS_PER_ID, CATEGORIES, nomElement, nomCurtElement } from './elements.js'

export {
  SORTIDES,
  DIES,
  CONSIGNES_GENERALS,
  DISPOSITIU_SANITARI,
  dispositiuDeSortida,
  TELEFONS_EMERGENCIA,
  TRAM_EN_CALMA,
  ELEMENTS,
  ELEMENTS_PER_ID,
  CATEGORIES,
  nomElement,
  nomCurtElement,
}

export const META = {
  titol: 'Consignes de la Festa Major',
  sant: 'Sant Bartomeu 2026',
  versio: 'Versió 2.1 · 02/08/2026',
  entitat: 'Comissió Municipal de Sant Bartomeu i Santa Tecla',
}

/** Normalitza text per cercar sense accents ni majúscules. */
export const normalitza = (text) =>
  (text ?? '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")

/** Només els elements que apareixen realment en alguna sortida. */
export const ELEMENTS_ACTIUS = ELEMENTS.filter((el) =>
  SORTIDES.some((s) => s.ordre?.includes(el.id)),
)

/** Elements agrupats per categoria, per pintar el filtre. */
export const ELEMENTS_PER_CATEGORIA = Object.values(CATEGORIES)
  .map((cat) => ({
    ...cat,
    elements: ELEMENTS_ACTIUS.filter((el) => el.categoria === cat.id),
  }))
  .filter((cat) => cat.elements.length > 0)

/** Nombre de sortides en què participa cada element. */
export const RECOMPTE_PER_ELEMENT = Object.fromEntries(
  ELEMENTS.map((el) => [el.id, SORTIDES.filter((s) => s.ordre?.includes(el.id)).length]),
)

/**
 * Índex de cerca: concatena tot el text consultable de cada sortida
 * (títol, indicacions, punts d'aigua, persones de la Comissió i voluntariat…)
 * per poder fer cerca lliure sobre el contingut sencer i no només pel títol.
 */
const textDeSortida = (s) =>
  [
    s.titol,
    s.tipus,
    s.data,
    s.horaText,
    s.resum,
    s.recorregut,
    s.ordreNota,
    s.protocolPluja,
    ...(s.ordre ?? []).map(nomElement),
    ...(s.desenvolupament ?? []),
    ...(s.indicacions ?? []),
    ...(s.puntsAigua ?? []).map((p) => `${p.lloc} ${p.detall ?? ''}`),
    ...(s.accessibilitat ?? []).map((p) => `${p.lloc} ${p.detall ?? ''}`),
    ...(s.comissio ?? []).flatMap((bloc) => [
      bloc.lloc,
      ...bloc.assignacions.flatMap((a) => [
        a.descripcio,
        a.enAcabar ?? '',
        ...(a.persones ?? []),
        ...(a.acompanyaments ?? []).flatMap((ac) => [ac.colla, ac.persona]),
      ]),
    ]),
    ...(s.voluntariat?.grups ?? []).flatMap((g) => [
      g.rol,
      ...g.punts.flatMap((p) => [p.lloc, p.pendent ?? '', ...(p.persones ?? [])]),
    ]),
    s.voluntariat?.nota ?? '',
  ]
    .filter(Boolean)
    .join(' · ')

export const INDEX_CERCA = Object.fromEntries(
  SORTIDES.map((s) => [s.id, normalitza(textDeSortida(s))]),
)

/**
 * Filtra les sortides per text lliure, elements festius i dia.
 * Els elements s'acumulen amb OR: marcar Gegants i Drac mostra les sortides
 * on hi participi qualsevol dels dos.
 */
export function filtraSortides({ cerca = '', elements = [], dia = null } = {}) {
  const q = normalitza(cerca).trim()
  return SORTIDES.filter((s) => {
    if (dia && s.dia !== dia) return false
    if (elements.length && !elements.some((id) => s.ordre?.includes(id))) return false
    if (q && !q.split(/\s+/).every((token) => INDEX_CERCA[s.id].includes(token))) return false
    return true
  })
}

/** Tots els punts d'aigua de la Festa, agrupats per sortida. */
export const PUNTS_AIGUA_PER_SORTIDA = SORTIDES.filter((s) => (s.puntsAigua ?? []).length > 0).map(
  (s) => ({
    sortidaId: s.id,
    titol: s.titol,
    data: s.data,
    horaText: s.horaText,
    dia: s.dia,
    punts: s.puntsAigua,
  }),
)

export const TOTAL_PUNTS_AIGUA = PUNTS_AIGUA_PER_SORTIDA.reduce(
  (n, s) => n + s.punts.length,
  0,
)

/** Tots els punts de seguretat i emergència (Annex I), lligats a la seva sortida. */
export const SEGURETAT_PER_SORTIDA = SORTIDES.map((s) => ({
  sortidaId: s.id,
  titol: s.titol,
  data: s.data,
  horaText: s.horaText,
  dia: s.dia,
  dispositiu: dispositiuDeSortida(s.id),
})).filter((s) => s.dispositiu)

/** Punts habilitats per a persones usuàries de cadira de rodes. */
export const PUNTS_ACCESSIBLES = SORTIDES.filter((s) => (s.accessibilitat ?? []).length > 0).map(
  (s) => ({ sortidaId: s.id, titol: s.titol, punts: s.accessibilitat }),
)

/** Sortides que travessen el Tram en Calma. */
export const SORTIDES_TRAM_CALMA = SORTIDES.filter((s) => s.tramCalma)

export const getSortida = (id) => SORTIDES.find((s) => s.id === id)
