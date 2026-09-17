import { useId, useState } from 'react'
import Planol from './Planol.jsx'
import { BlocSubapartat, Etiqueta, XipPersona } from './ui.jsx'
import {
  ICONA_COS,
  IcAigua,
  IcCadiraRodes,
  IcCalma,
  IcComissio,
  IcEmergencia,
  IcFletxa,
  IcLlista,
  IcMapa,
  IcMusica,
  IcPluja,
  IcRellotge,
  IcVoluntariat,
} from './Icones.jsx'
import { comptaSeguretat, cossosAmbContingut } from '../data/seguretat.js'
import { ELEMENTS_PER_ID, nomElement } from '../data/elements.js'
import { acompanyamentDeSortida, perInstrument } from '../data/acompanyamentMusical.js'
import { seguretatDeSortida } from '../data/index.js'

const TONS_TIPUS = {
  Processó: 'vermell',
  Cercavila: 'blau',
  Actuació: 'sorra',
  Acte: 'slate',
}

/** Xips de l'ordre de sortida, ressaltant els elements filtrats per l'usuari. */
function OrdreSortida({ ordre, destacats, disposicio }) {
  const Llista = disposicio ? 'ul' : 'ol'
  return (
    <Llista className="flex flex-wrap gap-1.5">
      {ordre.map((id, i) => {
        const destacat = destacats.includes(id)
        const el = ELEMENTS_PER_ID[id]
        return (
          <li
            key={`${id}-${i}`}
            className={`inline-flex items-center gap-1.5 rounded-lg py-1 pr-2.5 text-xs font-medium transition-colors duration-200 ${
              disposicio ? 'pl-2.5' : 'pl-1.5'
            } ${
              destacat
                ? 'bg-fm-vermell-600 text-white shadow-sm'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 ring-inset'
            }`}
          >
            {/* La numeració només s'ha de llegir com a ordre quan n'hi ha */}
            {!disposicio && (
              <span
                className={`grid h-5 w-5 place-items-center rounded-md text-[10px] font-bold tabular-nums ${
                  destacat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {i + 1}
              </span>
            )}
            {el?.curt ?? id}
          </li>
        )
      })}
    </Llista>
  )
}

/** Una parella ball → colla, que es desplega amb els integrants del grup. */
function FilaAcompanyament({ a, destacat }) {
  const [obert, setObert] = useState(false)
  const teIntegrants = a.integrants.length > 0

  return (
    <li
      className={`overflow-hidden rounded-lg transition-colors duration-200 ${
        destacat ? 'bg-fm-vermell-50 ring-1 ring-fm-vermell-200 ring-inset' : 'bg-slate-50'
      }`}
    >
      <button
        type="button"
        onClick={() => teIntegrants && setObert((v) => !v)}
        aria-expanded={teIntegrants ? obert : undefined}
        disabled={!teIntegrants}
        className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-xs ${
          teIntegrants ? 'cursor-pointer' : 'cursor-default'
        }`}
      >
        <span className="min-w-0 flex-1 text-slate-600">{nomElement(a.ball)}</span>
        <span className="shrink-0 text-right font-semibold text-fm-blau-800">
          {nomElement(a.colla)}
          {a.grup && <span className="font-normal text-slate-400"> · {a.grup}</span>}
          <span className="block text-[10px] font-normal text-slate-400 italic">
            {teIntegrants
              ? `${a.integrants.length} músics`
              : (a.plantilla ?? 'integrants pendents')}
          </span>
        </span>
        {teIntegrants && (
          <IcFletxa
            className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-300 ${
              obert ? 'rotate-90' : ''
            }`}
          />
        )}
      </button>

      {obert && (
        <div className="anim-entrada space-y-2 border-t border-white/70 px-3 py-2.5">
          {perInstrument(a.integrants).map((grup) => (
            <div key={grup.instrument}>
              <p className="mb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                {grup.instrument}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {grup.membres.map((m) => (
                  <li
                    key={m.nom}
                    className="rounded-md bg-white px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200 ring-inset"
                  >
                    {m.nom}
                    {m.titular && <span className="ml-1 text-[10px] text-slate-400">titular</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

/**
 * Ordre de sortida de les cercaviles obertes a colles convidades i infantils.
 * El document les llista per blocs i escriu, després de cada bloc, la colla de
 * músics que l'acompanya; aquí cada bloc surt amb la seva colla al costat.
 */
function OrdreLliure({ seccions, destacats }) {
  let n = 0
  return (
    <div className="space-y-4">
      {seccions.map((seccio, si) => (
        <section key={si}>
          {seccio.titol && (
            <h5 className="mb-1 text-xs font-bold tracking-wider text-slate-500 uppercase">
              {seccio.titol}
            </h5>
          )}
          {seccio.nota && <p className="mb-2 text-xs text-slate-500 italic">{seccio.nota}</p>}
          <ul className="space-y-1.5">
            {seccio.blocs.map((bloc, bi) => {
              const destacatMusica = bloc.musica && destacats.includes(bloc.musica)
              return (
                <li
                  key={bi}
                  className={`rounded-xl px-3 py-2.5 transition-colors duration-200 ${
                    destacatMusica
                      ? 'bg-fm-vermell-50 ring-1 ring-fm-vermell-200 ring-inset'
                      : 'bg-slate-50'
                  }`}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <ol className="order-last flex min-w-0 flex-1 flex-wrap gap-1.5 sm:order-first">
                      {bloc.colles.map((c, ci) => {
                        n += 1
                        const destacat = c.element && destacats.includes(c.element)
                        return (
                          <li
                            key={ci}
                            className={`inline-flex items-center gap-1.5 rounded-lg py-1 pr-2.5 pl-1.5 text-xs font-medium transition-colors duration-200 ${
                              destacat
                                ? 'bg-fm-vermell-600 text-white shadow-sm'
                                : 'bg-white text-slate-600 ring-1 ring-slate-200 ring-inset'
                            }`}
                          >
                            <span
                              className={`grid h-5 w-5 place-items-center rounded-md text-[10px] font-bold tabular-nums ${
                                destacat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {n}
                            </span>
                            <span>
                              {c.nom ?? (c.element ? nomElement(c.element) : '')}
                              {c.nota && (
                                <span className={destacat ? 'text-white/70' : 'text-slate-400'}>
                                  {' '}
                                  · {c.nota}
                                </span>
                              )}
                            </span>
                          </li>
                        )
                      })}
                    </ol>
                    <p className="order-first shrink-0 text-xs sm:order-last sm:text-right">
                      {bloc.musica ? (
                        <span className="font-semibold text-fm-blau-800">
                          {nomElement(bloc.musica)}
                        </span>
                      ) : (
                        <span className="text-slate-400 italic">
                          {bloc.musicaNota ?? 'sense colla de m\u00fasics al document'}
                        </span>
                      )}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
          {seccio.avis && <p className="mt-2 text-xs text-slate-500 italic">{seccio.avis}</p>}
        </section>
      ))}
    </div>
  )
}

/** Quadre d'acompanyament musical: quina colla toca per a cada ball. */
function BlocAcompanyament({ parelles, destacats }) {
  return (
    <section>
      <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-slate-800">
        <IcMusica className="h-4 w-4 text-fm-blau-600" /> Acompanyament musical dels balls
      </h4>
      <ul className="grid gap-1.5 sm:grid-cols-2">
        {parelles.map((a) => (
          <FilaAcompanyament
            key={a.ball}
            a={a}
            destacat={destacats.includes(a.ball) || destacats.includes(a.colla)}
          />
        ))}
      </ul>
    </section>
  )
}

function LlistaPunts({ punts, className = '' }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {punts.map((text, i) => (
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fm-sorra-400" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}

/** 1. Punts d'aigua */
function BlocAigua({ punts, nota }) {
  return (
    <BlocSubapartat
      titol="Punts d’aigua"
      icona={IcAigua}
      to="cel"
      recompte={punts.length || null}
      buit={punts.length === 0 ? 'El document no fixa punts d’aigua per a aquest acte.' : null}
    >
      <ul className="grid gap-2 sm:grid-cols-2">
        {punts.map((p, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 rounded-xl bg-white px-3 py-2.5 ring-1 ring-sky-100 ring-inset"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700">
              {i + 1}
            </span>
            <span className="text-sm">
              <span className="font-semibold text-slate-800">{p.lloc}</span>
              {p.detall && <span className="block text-xs text-slate-500">{p.detall}</span>}
            </span>
          </li>
        ))}
      </ul>
      {nota && <p className="mt-2.5 text-xs text-slate-500 italic">{nota}</p>}
    </BlocSubapartat>
  )
}

/** Tons de cada cos del desplegament de seguretat. */
const TONS_COS = {
  blau: { cap: 'text-fm-blau-800', punt: 'bg-fm-blau-600', vora: 'ring-fm-blau-100' },
  sorra: { cap: 'text-fm-sorra-800', punt: 'bg-fm-sorra-500', vora: 'ring-fm-sorra-200' },
  vermell: { cap: 'text-fm-vermell-800', punt: 'bg-fm-vermell-600', vora: 'ring-fm-vermell-100' },
  taronja: { cap: 'text-orange-800', punt: 'bg-orange-500', vora: 'ring-orange-200' },
}

/** Un cos del desplegament: Policia Local, Seguretat, Creu Roja o Bombers. */
export function GrupCos({ cos, linies }) {
  const t = TONS_COS[cos.to]
  const Icona = ICONA_COS[cos.id]
  return (
    <div className={`rounded-xl bg-white p-3.5 ring-1 ring-inset ${t.vora}`}>
      <p className={`mb-2.5 flex items-center gap-2 text-sm font-bold ${t.cap}`}>
        <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg text-white ${t.punt}`}>
          <Icona className="h-3.5 w-3.5" />
        </span>
        {cos.nom}
        {cos.detall && <span className="font-normal text-slate-400">· {cos.detall}</span>}
        <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500 tabular-nums">
          {linies.length}
        </span>
      </p>
      <ul className="space-y-2">
        {linies.map((text, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${t.punt}`} />
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * 2. Punts de seguretat i d'emergència.
 * Fa servir el quadre propi de l'acte (Policia Local, Seguretat, Creu Roja i
 * Bombers voluntaris). Les consignes de Santa Tecla no porten annex sanitari:
 * l'únic acte sense quadre propi queda cobert pel de la mateixa nit i lloc.
 */
function BlocSeguretat({ sortidaId }) {
  const { bloc, heretat } = seguretatDeSortida(sortidaId)
  const cossos = cossosAmbContingut(bloc)

  return (
    <BlocSubapartat
      titol="Punts de seguretat i d’emergència"
      icona={IcEmergencia}
      to="vermell"
      recompte={cossos.length ? `${comptaSeguretat(bloc)} efectius` : null}
      buit={
        cossos.length
          ? null
          : 'El document no preveu desplegament propi per a aquest acte. En cas d’emergència, truqueu al 112.'
      }
    >
      <div className="space-y-3">
        {heretat && <p className="text-xs font-medium text-fm-vermell-700">{heretat.nota}</p>}
        {cossos.map((cos) => (
          <GrupCos key={cos.id} cos={cos} linies={bloc[cos.id]} />
        ))}
      </div>
    </BlocSubapartat>
  )
}

/** 3. Presència de la Comissió de Festa Major */
function BlocComissio({ blocs }) {
  const total = blocs.reduce(
    (n, b) => n + b.assignacions.reduce((m, a) => m + (a.persones?.length ?? 0), 0),
    0,
  )

  return (
    <BlocSubapartat
      titol="Presència de la Comissió de Festa Major"
      icona={IcComissio}
      to="blau"
      recompte={blocs.length ? `${blocs.length} ${blocs.length === 1 ? 'punt' : 'punts'}` : null}
      buit={blocs.length === 0 ? 'Sense assignacions de la Comissió en aquest acte.' : null}
    >
      <div className="space-y-3">
        {blocs.map((bloc, i) => (
          <div key={i} className="rounded-xl bg-white p-3.5 ring-1 ring-fm-blau-100 ring-inset">
            <p className="mb-2.5 flex items-center gap-2 text-sm font-bold text-fm-blau-800">
              <span className="h-4 w-1 rounded-full bg-fm-blau-600" />
              {bloc.lloc}
            </p>
            {bloc.nota && <p className="mb-2 text-xs text-slate-500 italic">{bloc.nota}</p>}
            <div className="space-y-3">
              {bloc.assignacions.map((a, j) => (
                <div key={j} className="border-l-2 border-fm-blau-100 pl-3">
                  <p className="text-sm text-slate-700">{a.descripcio}</p>
                  {a.persones?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {a.persones.map((p) => (
                        <XipPersona key={p} nom={p} />
                      ))}
                    </div>
                  )}
                  {a.acompanyaments?.length > 0 && (
                    <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      {a.acompanyaments.map((ac) => (
                        <li
                          key={ac.colla}
                          className="flex items-center justify-between gap-2 rounded-lg bg-fm-blau-50/70 px-2.5 py-1.5 text-xs"
                        >
                          <span className="text-slate-600">{ac.colla}</span>
                          <span className="font-semibold text-fm-blau-800">{ac.persona}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {a.enAcabar && (
                    <p className="mt-2 flex gap-1.5 text-xs text-slate-500 italic">
                      <IcFletxa className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      {a.enAcabar}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {total > 0 && (
          <p className="text-xs text-slate-500">
            {total} assignacions nominals de la Comissió en aquest acte.
          </p>
        )}
      </div>
    </BlocSubapartat>
  )
}

/** 4. Presència del voluntariat */
function BlocVoluntariat({ voluntariat }) {
  const grups = voluntariat?.grups ?? []

  return (
    <BlocSubapartat
      titol="Presència del voluntariat"
      icona={IcVoluntariat}
      to="sorra"
      recompte={grups.length ? `${grups.length} ${grups.length === 1 ? 'grup' : 'grups'}` : null}
      buit={grups.length === 0 ? (voluntariat?.nota ?? 'No hi haurà voluntariat.') : null}
    >
      <div className="space-y-3">
        {grups.map((g, i) => (
          <div key={i} className="rounded-xl bg-white p-3.5 ring-1 ring-fm-sorra-200 ring-inset">
            <p className="mb-2.5 flex items-center gap-2 text-sm font-bold text-fm-sorra-800">
              <span className="h-4 w-1 rounded-full bg-fm-sorra-500" />
              {g.rol}
            </p>
            <ul className="space-y-2">
              {g.punts.map((p, j) => (
                <li key={j} className="border-l-2 border-fm-sorra-200 pl-3">
                  <p className="text-sm font-medium text-slate-700">{p.lloc}</p>
                  {p.persones?.length > 0 ? (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {p.persones.map((n) => (
                        <XipPersona key={n} nom={n} to="sorra" />
                      ))}
                    </div>
                  ) : (
                    <p className="mt-1 text-xs text-slate-500 italic">
                      {p.pendent ?? 'Pendent d’assignar'}
                    </p>
                  )}
                  {p.nota && <p className="mt-1 text-xs text-slate-500 italic">{p.nota}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {voluntariat?.nota && grups.length > 0 && (
          <p className="rounded-lg bg-fm-sorra-50 px-3 py-2 text-xs text-fm-sorra-800">
            {voluntariat.nota}
          </p>
        )}
      </div>
    </BlocSubapartat>
  )
}

/** Resum compacte dels quatre subapartats, visible amb la targeta plegada. */
function Comptadors({ sortida }) {
  const items = [
    {
      icona: IcAigua,
      valor: sortida.puntsAigua?.length ?? 0,
      etiqueta: 'aigua',
      to: 'text-sky-600',
    },
    {
      icona: IcEmergencia,
      valor: comptaSeguretat(seguretatDeSortida(sortida.id).bloc) || '—',
      etiqueta: 'seguretat',
      to: 'text-fm-vermell-600',
    },
    {
      icona: IcComissio,
      valor: sortida.comissio?.length ?? 0,
      etiqueta: 'Comissió',
      to: 'text-fm-blau-600',
    },
    {
      icona: IcVoluntariat,
      valor: sortida.voluntariat?.grups?.length ?? 0,
      etiqueta: 'voluntariat',
      to: 'text-fm-sorra-600',
    },
  ]
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
      {items.map((it) => (
        <li key={it.etiqueta} className="flex items-center gap-1.5 text-xs text-slate-500">
          <it.icona className={`h-4 w-4 ${it.to}`} />
          <span className="font-bold text-slate-700 tabular-nums">{it.valor}</span>
          {it.etiqueta}
        </li>
      ))}
    </ul>
  )
}

export default function SortidaTargeta({ sortida, obert, onToggle, destacats = [] }) {
  const idPanell = useId()
  const to = TONS_TIPUS[sortida.tipus] ?? 'slate'
  const acompanyament = acompanyamentDeSortida(sortida)

  return (
    <article
      id={`sortida-${sortida.id}`}
      className={`anim-puja scroll-mt-28 overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
        obert
          ? 'border-fm-blau-200 shadow-lg shadow-fm-blau-900/5'
          : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={obert}
        aria-controls={idPanell}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Etiqueta to={to}>{sortida.tipus}</Etiqueta>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <IcRellotge className="h-3.5 w-3.5" />
              {sortida.data} · {sortida.horaText}
            </span>
            {sortida.grup && <Etiqueta to="verd">{sortida.grup}</Etiqueta>}
            {sortida.tramCalma && (
              <Etiqueta to="verd">
                <IcCalma className="h-3.5 w-3.5" /> Tram en Calma
              </Etiqueta>
            )}
          </div>
          <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            {sortida.titol}
          </h3>
          <p className="mt-1.5 text-sm text-slate-600">{sortida.resum}</p>
          {sortida.horaNota && (
            <p className="mt-1 text-xs text-slate-500 italic">{sortida.horaNota}</p>
          )}
          <div className="mt-3.5">
            <Comptadors sortida={sortida} />
          </div>
        </div>
        <span
          className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            obert ? 'rotate-90 bg-fm-blau-600 text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <IcFletxa />
        </span>
      </button>

      {obert && (
        <div id={idPanell} className="anim-entrada space-y-5 border-t border-slate-100 p-5 sm:p-6">
          {sortida.desenvolupament && (
            <section>
              <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-slate-800">
                <IcLlista className="h-4 w-4 text-fm-blau-600" /> Desenvolupament de l’acte
              </h4>
              <LlistaPunts punts={sortida.desenvolupament} />
            </section>
          )}

          {sortida.ordre?.length > 0 && (
            <section>
              <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-slate-800">
                <IcLlista className="h-4 w-4 text-fm-blau-600" />
                {sortida.disposicio ? 'Disposició dels balls' : 'Ordre de sortida'}
              </h4>
              <OrdreSortida
                ordre={sortida.ordre}
                destacats={destacats}
                disposicio={sortida.disposicio}
              />
              {sortida.ordreNota && (
                <p className="mt-2 text-xs text-slate-500 italic">{sortida.ordreNota}</p>
              )}

              {/* Elements presents que no desfilen: toquen des d'un punt fix */}
              {sortida.participantsExtra?.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {sortida.participantsExtra.map((p) => (
                    <li
                      key={p.element}
                      className={`flex flex-wrap items-baseline gap-x-2 gap-y-0.5 rounded-lg px-3 py-2 text-xs transition-colors duration-200 ${
                        destacats.includes(p.element)
                          ? 'bg-fm-vermell-50 ring-1 ring-fm-vermell-200 ring-inset'
                          : 'bg-slate-50'
                      }`}
                    >
                      <span className="font-semibold text-slate-700">
                        {nomElement(p.element)}
                      </span>
                      <span className="text-slate-500">{p.nota}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {sortida.ordreLliure?.length > 0 && (
            <section>
              <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-slate-800">
                <IcLlista className="h-4 w-4 text-fm-blau-600" /> Ordre de sortida i acompanyament
                musical
              </h4>
              <OrdreLliure seccions={sortida.ordreLliure} destacats={destacats} />
            </section>
          )}

          {acompanyament.length > 0 && (
            <BlocAcompanyament parelles={acompanyament} destacats={destacats} />
          )}

          {sortida.recorregut && (
            <section className="rounded-2xl bg-slate-50 p-4">
              <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-slate-800">
                <IcMapa className="h-4 w-4 text-fm-blau-600" /> Recorregut
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">{sortida.recorregut}</p>
              {sortida.recorregutNota && (
                <p className="mt-1.5 text-xs text-slate-500">{sortida.recorregutNota}</p>
              )}
            </section>
          )}

          {sortida.tramCalma && (
            <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
              <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-emerald-800">
                <IcCalma className="h-4 w-4" /> Tram en Calma
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">{sortida.tramCalma.tram}</p>
              <p className="mt-1.5 text-xs text-emerald-800">{sortida.tramCalma.nota}</p>
            </section>
          )}

          {sortida.indicacions?.length > 0 && (
            <section>
              <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-slate-800">
                <IcLlista className="h-4 w-4 text-fm-blau-600" /> Indicacions
              </h4>
              <LlistaPunts punts={sortida.indicacions} />
            </section>
          )}

          {sortida.horaris && (
            <section>
              <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-slate-800">
                <IcRellotge className="h-4 w-4 text-fm-blau-600" /> {sortida.horaris.titol}
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {sortida.horaris.columnes.map((col) => (
                  <div
                    key={col.lloc}
                    className="overflow-hidden rounded-2xl border border-slate-200"
                  >
                    <p className="bg-fm-blau-600 px-3.5 py-2 text-xs font-bold tracking-wide text-white uppercase">
                      {col.lloc}
                    </p>
                    <ul className="divide-y divide-slate-100">
                      {col.files.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 px-3.5 py-2 text-sm">
                          <span className="w-16 shrink-0 font-bold text-fm-blau-700 tabular-nums">
                            {f.hora}
                          </span>
                          <span className="text-slate-700">{f.ball}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {sortida.planols?.length > 0 && (
            <section className="grid gap-4 sm:grid-cols-2">
              {sortida.planols.map((p) => (
                <Planol key={p.src} {...p} />
              ))}
            </section>
          )}

          {sortida.protocolPluja && (
            <section className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
              <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-amber-900">
                <IcPluja className="h-4 w-4" /> En cas de pluja o emergència
              </h4>
              <p className="text-sm leading-relaxed text-amber-900/90">{sortida.protocolPluja}</p>
            </section>
          )}

          {sortida.accessibilitat?.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800">
                <IcCadiraRodes className="h-4 w-4 text-fm-blau-600" /> Punts habilitats per a
                persones usuàries de cadira de rodes
              </h4>
              <ul className="flex flex-wrap gap-2">
                {sortida.accessibilitat.map((p, i) => (
                  <li
                    key={i}
                    className="rounded-lg bg-white px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200 ring-inset"
                  >
                    {p.lloc}
                    {p.detall && <span className="text-slate-400"> · {p.detall}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Els quatre subapartats operatius, sempre en el mateix ordre */}
          <div className="grid items-start gap-4 pt-1 lg:grid-cols-2">
            <BlocAigua punts={sortida.puntsAigua ?? []} nota={sortida.puntsAiguaNota} />
            <BlocSeguretat sortidaId={sortida.id} />
            <BlocComissio blocs={sortida.comissio ?? []} />
            <BlocVoluntariat voluntariat={sortida.voluntariat} />
          </div>
        </div>
      )}
    </article>
  )
}

export { OrdreSortida, LlistaPunts }
