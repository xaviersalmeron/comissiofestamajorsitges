import { SORTIDES, DIES } from './sortides.js'
import { CONSIGNES_GENERALS, CONSIGNES_GENERALS_SUBTITOL } from './consignesGenerals.js'
import { TRAM_EN_CALMA } from './tramEnCalma.js'
import { ELEMENTS, ELEMENTS_PER_ID, CATEGORIES, nomElement, nomCurtElement } from './elements.js'
import {
  SEGURETAT_PER_ACTE,
  SEGURETAT_HERETADA,
  COSSOS,
  comptaSeguretat,
  cossosAmbContingut,
} from './seguretat.js'
import {
  ACOMPANYAMENT_MUSICAL,
  BALLS_PER_COLLA,
  acompanyamentDeSortida,
  collaTocaA,
  perInstrument,
  TOTAL_MUSICS,
} from './acompanyamentMusical.js'
import { CONTACTES, TOTAL_CONTACTES, telHref } from './contactes.js'

export {
  SORTIDES,
  DIES,
  CONSIGNES_GENERALS,
  CONSIGNES_GENERALS_SUBTITOL,
  TRAM_EN_CALMA,
  ELEMENTS,
  ELEMENTS_PER_ID,
  CATEGORIES,
  nomElement,
  nomCurtElement,
  SEGURETAT_PER_ACTE,
  SEGURETAT_HERETADA,
  COSSOS,
  comptaSeguretat,
  cossosAmbContingut,
  ACOMPANYAMENT_MUSICAL,
  BALLS_PER_COLLA,
  acompanyamentDeSortida,
  collaTocaA,
  perInstrument,
  TOTAL_MUSICS,
  CONTACTES,
  TOTAL_CONTACTES,
  telHref,
}

export const TELEFONS_EMERGENCIA = {
  avis: 'En cas d’emergència i no trobar un membre/voluntari de la Comissió de Sant Bartomeu i Santa Tecla, cal dirigir-se immediatament al socorrista o ambulància més propera.',
  restriccio:
    'Només en casos greus es pot trucar als responsables del dispositiu mèdic de la Creu Roja: els trobareu a Contactes.',
  contactes: [
    { nom: 'Emergències', rol: 'Telèfon únic d’emergències', telefon: '112', destacat: true },
  ],
}

/** Llegenda dels tipus de recurs sanitari que apareixen als quadres de Creu Roja. */
export const LLEGENDA_RECURSOS = [
  { sigla: 'SVI', nom: 'Ambulància Classe Assistencial C — Suport Vital Intermedi' },
  { sigla: 'SVB', nom: 'Ambulància Classe Assistencial B — Bàsica' },
  { sigla: 'Socorristes', nom: 'Socorristes a peu, repartits pel recorregut' },
  { sigla: 'Clínica mòbil', nom: 'Unitat assistencial fixa durant l’acte' },
]

/**
 * Quadre de seguretat d'un acte. Si no en té de propi, cau al de l'acte que
 * el cobreix i ho indica.
 */
export function seguretatDeSortida(id) {
  if (SEGURETAT_PER_ACTE[id]) return { bloc: SEGURETAT_PER_ACTE[id], heretat: null }
  const h = SEGURETAT_HERETADA[id]
  if (h && SEGURETAT_PER_ACTE[h.de]) {
    return { bloc: SEGURETAT_PER_ACTE[h.de], heretat: h }
  }
  return { bloc: null, heretat: null }
}

export const META = {
  titol: 'Consignes de la Festa Major',
  sant: 'Santa Tecla 2026',
  versio: 'Versió 2.2 · 16/09/2026',
  entitat: 'Comissió Municipal de Sant Bartomeu i Santa Tecla',
}

/** Normalitza text per cercar sense accents ni majúscules. */
export const normalitza = (text) =>
  (text ?? '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, "'")

/** Totes les colles d'una sortida amb ordre lliure, aplanades. */
export const collesLliures = (s) =>
  (s.ordreLliure ?? []).flatMap((seccio) => seccio.blocs.flatMap((b) => b.colles))

/** Colles de música que toquen en una sortida amb ordre lliure. */
export const musiquesLliures = (s) =>
  (s.ordreLliure ?? []).flatMap((seccio) => seccio.blocs.map((b) => b.musica).filter(Boolean))

/** Només els elements que apareixen realment en alguna sortida. */
export const participaA = (elementId, sortida) =>
  !!sortida.ordre?.includes(elementId) ||
  !!sortida.participantsExtra?.some((p) => p.element === elementId) ||
  collesLliures(sortida).some((c) => c.element === elementId) ||
  musiquesLliures(sortida).includes(elementId) ||
  collaTocaA(elementId, sortida)

export const ELEMENTS_ACTIUS = ELEMENTS.filter((el) => SORTIDES.some((s) => participaA(el.id, s)))

/** Elements agrupats per categoria, per pintar el filtre. */
export const ELEMENTS_PER_CATEGORIA = Object.values(CATEGORIES)
  .map((cat) => ({
    ...cat,
    elements: ELEMENTS_ACTIUS.filter((el) => el.categoria === cat.id),
  }))
  .filter((cat) => cat.elements.length > 0)

/** Nombre de sortides en què participa cada element. */
export const RECOMPTE_PER_ELEMENT = Object.fromEntries(
  ELEMENTS.map((el) => [el.id, SORTIDES.filter((s) => participaA(el.id, s)).length]),
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
    s.grup ?? '',
    s.data,
    s.horaText,
    s.resum,
    s.recorregut,
    s.ordreNota,
    s.protocolPluja,
    ...(s.ordre ?? []).map(nomElement),
    ...(s.ordreLliure ?? []).flatMap((seccio) => [seccio.titol ?? '', seccio.nota ?? '']),
    ...collesLliures(s).flatMap((c) => [c.nom ?? '', c.element ? nomElement(c.element) : '']),
    ...musiquesLliures(s).map(nomElement),
    ...(s.desenvolupament ?? []),
    ...(s.indicacions ?? []),
    ...(s.puntsAigua ?? []).map((p) => `${p.lloc} ${p.detall ?? ''}`),
    ...(s.accessibilitat ?? []).map((p) => `${p.lloc} ${p.detall ?? ''}`),
    ...(s.comissio ?? []).flatMap((bloc) => [
      bloc.lloc,
      bloc.nota ?? '',
      ...bloc.assignacions.flatMap((a) => [
        a.descripcio,
        a.enAcabar ?? '',
        ...(a.persones ?? []),
      ]),
    ]),
    ...(s.voluntariat?.grups ?? []).flatMap((g) => [
      g.rol,
      ...g.punts.flatMap((p) => [p.lloc, p.pendent ?? '', ...(p.persones ?? [])]),
    ]),
    s.voluntariat?.nota ?? '',
    ...(s.participantsExtra ?? []).flatMap((p) => [nomElement(p.element), p.nota]),
    ...acompanyamentDeSortida(s).flatMap((a) => [
      nomElement(a.ball),
      nomElement(a.colla),
      a.grup ?? '',
      ...a.integrants.map((i) => i.nom),
    ]),
    ...COSSOS.flatMap((c) => [
      SEGURETAT_PER_ACTE[s.id]?.[c.id]?.length ? c.nom : '',
      ...(SEGURETAT_PER_ACTE[s.id]?.[c.id] ?? []),
    ]),
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
    if (elements.length && !elements.some((id) => participaA(id, s))) return false
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

export const TOTAL_PUNTS_AIGUA = PUNTS_AIGUA_PER_SORTIDA.reduce((n, s) => n + s.punts.length, 0)

/** Tots els punts de seguretat i emergència, lligats a la seva sortida. */
export const SEGURETAT_PER_SORTIDA = SORTIDES.map((s) => ({
  sortidaId: s.id,
  titol: s.titol,
  data: s.data,
  horaText: s.horaText,
  dia: s.dia,
  ...seguretatDeSortida(s.id),
})).filter((s) => s.bloc)

/** Actes on hi ha desplegament de Bombers voluntaris. */
export const SORTIDES_AMB_BOMBERS = SORTIDES.filter(
  (s) => (SEGURETAT_PER_ACTE[s.id]?.bombers?.length ?? 0) > 0,
)

/** Punts habilitats per a persones usuàries de cadira de rodes. */
export const PUNTS_ACCESSIBLES = SORTIDES.filter((s) => (s.accessibilitat ?? []).length > 0).map(
  (s) => ({ sortidaId: s.id, titol: s.titol, punts: s.accessibilitat }),
)

/** Sortides on una colla de música acompanya algun ball. */
export const SORTIDES_AMB_ACOMPANYAMENT = SORTIDES.filter(
  (s) => acompanyamentDeSortida(s).length > 0,
)

/** Sortides que travessen el Tram en Calma. */
export const SORTIDES_TRAM_CALMA = SORTIDES.filter((s) => s.tramCalma)

export const getSortida = (id) => SORTIDES.find((s) => s.id === id)
