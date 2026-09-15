import { useState } from 'react'
import { DIES } from '../data/sortides.js'
import { ELEMENTS_PER_CATEGORIA, RECOMPTE_PER_ELEMENT } from '../data/index.js'
import { ICONA_CATEGORIA, IcCerca, IcCreu, IcFiltre } from './Icones.jsx'

/**
 * Filtre per element festiu o acte: cerca lliure + dia + elements del seguici.
 * Els elements es mostren agrupats per categoria i el filtre és acumulatiu (OR).
 */
export default function BarraFiltres({
  cerca,
  onCerca,
  elements,
  onToggleElement,
  dia,
  onDia,
  onNeteja,
  resultats,
  total,
}) {
  const [desplegat, setDesplegat] = useState(false)
  const filtresActius = elements.length + (dia ? 1 : 0) + (cerca ? 1 : 0)

  return (
    <div className="mb-6 space-y-3.5">
      {/* Cerca */}
      <div className="relative">
        <IcCerca className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={cerca}
          onChange={(e) => onCerca(e.target.value)}
          placeholder="Cerca un acte, un carrer, un ball o una persona…"
          aria-label="Cerca dins les consignes"
          className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pr-12 pl-12 text-sm text-slate-800 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-fm-blau-400 focus:ring-4 focus:ring-fm-blau-100 focus:outline-none"
        />
        {cerca && (
          <button
            type="button"
            onClick={() => onCerca('')}
            aria-label="Esborra la cerca"
            className="absolute top-1/2 right-3 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <IcCreu className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dies */}
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-0.5">
        <BotoFiltre actiu={!dia} onClick={() => onDia(null)}>
          Tots els dies
        </BotoFiltre>
        {DIES.map((d) => (
          <BotoFiltre key={d.id} actiu={dia === d.id} onClick={() => onDia(dia === d.id ? null : d.id)}>
            {d.etiqueta}
          </BotoFiltre>
        ))}
      </div>

      {/* Elements festius */}
      <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4">
        <button
          type="button"
          onClick={() => setDesplegat((v) => !v)}
          aria-expanded={desplegat}
          className="flex w-full items-center gap-2.5 text-left"
        >
          <IcFiltre className="h-4 w-4 text-fm-blau-600" />
          <span className="text-sm font-bold text-slate-800">Filtra per element festiu</span>
          {elements.length > 0 && (
            <span className="rounded-full bg-fm-vermell-600 px-2 py-0.5 text-[11px] font-bold text-white">
              {elements.length}
            </span>
          )}
          <span className="ml-auto text-xs font-semibold text-fm-blau-600">
            {desplegat ? 'Amaga' : 'Mostra'}
          </span>
        </button>

        {/* Selecció activa, visible també amb el panell plegat */}
        {!desplegat && elements.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {elements.map((id) => (
              <XipElement key={id} id={id} actiu onToggle={onToggleElement} />
            ))}
          </div>
        )}

        {desplegat && (
          <div className="anim-entrada mt-4 space-y-4">
            {ELEMENTS_PER_CATEGORIA.map((cat) => {
              const Icona = ICONA_CATEGORIA[cat.id]
              return (
                <div key={cat.id}>
                  <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    {Icona && <Icona className="h-3.5 w-3.5" />}
                    {cat.nom}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.elements.map((el) => (
                      <XipElement
                        key={el.id}
                        id={el.id}
                        nom={el.curt}
                        actiu={elements.includes(el.id)}
                        onToggle={onToggleElement}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Resum de resultats */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        <p className="text-sm text-slate-500">
          <span className="font-bold text-slate-800 tabular-nums">{resultats}</span>
          {resultats === 1 ? ' sortida' : ' sortides'}
          {filtresActius > 0 && <span className="text-slate-400"> de {total}</span>}
        </p>
        {filtresActius > 0 && (
          <button
            type="button"
            onClick={onNeteja}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-fm-vermell-700 transition-colors hover:bg-fm-vermell-50"
          >
            <IcCreu className="h-3.5 w-3.5" />
            Neteja els filtres
          </button>
        )}
      </div>
    </div>
  )
}

function BotoFiltre({ actiu, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={actiu}
      className={`shrink-0 rounded-xl px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
        actiu
          ? 'bg-fm-blau-600 text-white shadow-sm'
          : 'bg-white text-slate-600 ring-1 ring-slate-200 ring-inset hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  )
}

function XipElement({ id, nom, actiu, onToggle }) {
  const etiqueta =
    nom ??
    ELEMENTS_PER_CATEGORIA.flatMap((c) => c.elements).find((e) => e.id === id)?.curt ??
    id
  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      aria-pressed={actiu}
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 ${
        actiu
          ? 'bg-fm-vermell-600 text-white shadow-sm'
          : 'bg-slate-50 text-slate-600 ring-1 ring-slate-200 ring-inset hover:bg-white hover:ring-fm-blau-300'
      }`}
    >
      {etiqueta}
      <span
        className={`rounded px-1 text-[10px] font-bold tabular-nums ${
          actiu ? 'bg-white/25' : 'bg-white text-slate-400'
        }`}
      >
        {RECOMPTE_PER_ELEMENT[id]}
      </span>
    </button>
  )
}
