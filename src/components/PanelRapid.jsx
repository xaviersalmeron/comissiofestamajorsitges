import { useEffect } from 'react'
import {
  PUNTS_AIGUA_PER_SORTIDA,
  SEGURETAT_PER_SORTIDA,
  TELEFONS_EMERGENCIA,
  TOTAL_PUNTS_AIGUA,
  PUNTS_ACCESSIBLES,
  cossosAmbContingut,
  CONTACTES,
  TOTAL_CONTACTES,
  telHref,
} from '../data/index.js'
import { LLEGENDA_RECURSOS } from '../data/dispositiuSanitari.js'

import { IcAigua, IcAvis, IcCadiraRodes, IcCreu, IcEmergencia, IcFletxa, IcTelefon } from './Icones.jsx'

/** Tons de cada cos, alineats amb els de la targeta de sortida. */
const TEXT_COS = {
  blau: 'text-fm-blau-800',
  sorra: 'text-fm-sorra-800',
  vermell: 'text-fm-vermell-800',
  taronja: 'text-orange-800',
}
const FONS_COS = {
  blau: 'bg-fm-blau-600',
  sorra: 'bg-fm-sorra-500',
  vermell: 'bg-fm-vermell-600',
  taronja: 'bg-orange-500',
}


/**
 * Accés directe (funcionalitat 2): calaix lateral amb tots els punts de
 * seguretat i emergència o tots els punts d'aigua de la Festa, agrupats per
 * sortida i sense haver de navegar acte per acte.
 */
export default function PanelRapid({ mode, onTanca, onVesASortida, onContactes }) {
  useEffect(() => {
    if (!mode) return
    const tecla = (e) => e.key === 'Escape' && onTanca()
    document.addEventListener('keydown', tecla)
    const previ = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', tecla)
      document.body.style.overflow = previ
    }
  }, [mode, onTanca])

  if (!mode) return null

  const MODES = {
    emergencies: {
      titol: 'Seguretat i emergències',
      subtitol: `Policia, Seguretat, Creu Roja i Bombers · ${SEGURETAT_PER_SORTIDA.length} actes`,
      fons: 'bg-fm-vermell-600',
      icona: IcEmergencia,
    },
    aigua: {
      titol: 'Punts d’aigua',
      subtitol: `${TOTAL_PUNTS_AIGUA} punts en ${PUNTS_AIGUA_PER_SORTIDA.length} sortides`,
      fons: 'bg-sky-600',
      icona: IcAigua,
    },
    contactes: {
      titol: 'Contactes',
      subtitol: `${TOTAL_CONTACTES} telèfons de la Festa Major`,
      fons: 'bg-fm-blau-600',
      icona: IcTelefon,
    },
  }
  const m = MODES[mode]
  const Icona = m.icona

  return (
    <div className="fixed inset-0 z-40 flex justify-end" role="dialog" aria-modal="true">
      <div
        className="anim-entrada absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
        onClick={onTanca}
      />
      <aside className="anim-entrada relative flex h-full w-full max-w-lg flex-col bg-slate-50 shadow-2xl">
        <header className={`flex items-center gap-3 px-5 py-4 text-white ${m.fons}`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
            <Icona />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold">{m.titol}</h2>
            <p className="text-xs text-white/80">{m.subtitol}</p>
          </div>
          <button
            type="button"
            onClick={onTanca}
            aria-label="Tanca el panell"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
          >
            <IcCreu />
          </button>
        </header>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4 pb-10">
          {mode === 'emergencies' && (
            <PanellEmergencies
              onVesASortida={onVesASortida}
              onTanca={onTanca}
              onContactes={onContactes}
            />
          )}
          {mode === 'aigua' && <PanellAigua onVesASortida={onVesASortida} onTanca={onTanca} />}
          {mode === 'contactes' && <PanellContactes />}
        </div>
      </aside>
    </div>
  )
}

function PanellEmergencies({ onVesASortida, onTanca, onContactes }) {
  return (
    <>
      {/* Telèfons: el més urgent, sempre a dalt */}
      <section className="space-y-2">
        {TELEFONS_EMERGENCIA.contactes.map((c) => (
          <a
            key={c.telefon}
            href={`tel:${c.telefon.replace(/\s/g, '')}`}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200 active:scale-[0.99] ${
              c.destacat
                ? 'bg-fm-vermell-600 text-white shadow-md shadow-fm-vermell-900/20 hover:bg-fm-vermell-700'
                : 'border border-slate-200 bg-white hover:border-fm-vermell-300 hover:bg-fm-vermell-50/50'
            }`}
          >
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                c.destacat ? 'bg-white/20' : 'bg-fm-vermell-50 text-fm-vermell-600'
              }`}
            >
              <IcTelefon />
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={`block text-sm font-bold ${c.destacat ? 'text-white' : 'text-slate-800'}`}
              >
                {c.nom}
              </span>
              <span className={`block text-xs ${c.destacat ? 'text-white/80' : 'text-slate-500'}`}>
                {c.rol}
              </span>
            </span>
            <span
              className={`shrink-0 text-base font-bold tabular-nums ${
                c.destacat ? 'text-white' : 'text-fm-vermell-700'
              }`}
            >
              {c.telefon}
            </span>
          </a>
        ))}
      </section>

      <section className="space-y-2 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="flex gap-2 text-sm leading-relaxed text-amber-900">
          <IcAvis className="mt-0.5 h-4 w-4 shrink-0" />
          {TELEFONS_EMERGENCIA.avis}
        </p>
        <p className="text-xs text-amber-800/90">{TELEFONS_EMERGENCIA.restriccio}</p>
        <button
          type="button"
          onClick={onContactes}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-fm-blau-700 ring-1 ring-amber-200 ring-inset transition-colors hover:bg-fm-blau-50"
        >
          <IcTelefon className="h-3.5 w-3.5" />
          Obre els contactes
        </button>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h3 className="mb-2.5 text-xs font-bold tracking-wider text-slate-400 uppercase">
          Llegenda dels recursos
        </h3>
        <ul className="space-y-1.5">
          {LLEGENDA_RECURSOS.map((l) => (
            <li key={l.sigla} className="flex items-start gap-2 text-xs text-slate-600">
              <span className="mt-px inline-flex shrink-0 rounded bg-fm-vermell-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                {l.sigla}
              </span>
              {l.nom}
            </li>
          ))}
        </ul>
      </section>

      {/* Desplegament de seguretat per acte */}
      <section className="space-y-3">
        <h3 className="px-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
          Desplegament per acte
        </h3>
        {SEGURETAT_PER_SORTIDA.map((s) => {
          const cossos = cossosAmbContingut(s.bloc)
          return (
            <article key={s.sortidaId} className="rounded-2xl border border-slate-200 bg-white p-4">
              <button
                type="button"
                onClick={() => {
                  onTanca()
                  onVesASortida(s.sortidaId)
                }}
                className="group flex w-full items-start gap-2 text-left"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-slate-800 group-hover:text-fm-blau-700">
                    {s.titol}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {s.data} · {s.dispositiu?.franja ?? s.horaText}
                  </span>
                </span>
                <IcFletxa className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-fm-blau-600" />
              </button>

              {cossos.length > 0 ? (
                <div className="mt-3 space-y-2.5">
                  {cossos.map((cos) => (
                    <div key={cos.id}>
                      <p className={`mb-1 flex items-center gap-1.5 text-xs font-bold ${TEXT_COS[cos.to]}`}>
                        <span className={`h-3 w-1 rounded-full ${FONS_COS[cos.to]}`} />
                        {cos.nom}
                      </p>
                      <ul className="space-y-1">
                        {s.bloc[cos.id].map((t, i) => (
                          <li key={i} className="pl-3.5 text-xs text-slate-600">
                            · {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                s.dispositiu && (
                  <>
                    {s.dispositiu.heretat && (
                      <p className="mt-2 rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-500">
                        Cobert pel dispositiu de «{s.dispositiu.heretat}».
                      </p>
                    )}
                    <ul className="mt-3 space-y-1.5">
                      {s.dispositiu.recursos.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="mt-px inline-flex shrink-0 rounded bg-fm-vermell-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                            {r.tipus}
                          </span>
                          {r.text}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2.5 border-t border-slate-100 pt-2 text-xs font-semibold text-slate-700">
                      Total: {s.dispositiu.total}
                    </p>
                  </>
                )
              )}
            </article>
          )
        })}
      </section>

      {/* Accessibilitat */}
      <section className="space-y-3">
        <h3 className="px-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
          Punts per a persones usuàries de cadira de rodes
        </h3>
        {PUNTS_ACCESSIBLES.map((s) => (
          <div key={s.sortidaId} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800">
              <IcCadiraRodes className="h-4 w-4 text-fm-blau-600" />
              {s.titol}
            </p>
            <ul className="space-y-1">
              {s.punts.map((p, i) => (
                <li key={i} className="text-xs text-slate-600">
                  · {p.lloc}
                  {p.detall && <span className="text-slate-400"> ({p.detall})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}

function PanellAigua({ onVesASortida, onTanca }) {
  return (
    <>
      <p className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-900">
        Els punts d’aigua són els llocs on la Comissió reparteix aigua durant cada sortida. Toca una
        sortida per obrir-ne les consignes completes.
      </p>

      {PUNTS_AIGUA_PER_SORTIDA.map((s) => (
        <article key={s.sortidaId} className="rounded-2xl border border-slate-200 bg-white p-4">
          <button
            type="button"
            onClick={() => {
              onTanca()
              onVesASortida(s.sortidaId)
            }}
            className="group mb-3 flex w-full items-start gap-2 text-left"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-slate-800 group-hover:text-fm-blau-700">
                {s.titol}
              </span>
              <span className="block text-xs text-slate-500">
                {s.data} · {s.horaText}
              </span>
            </span>
            <span className="shrink-0 rounded-full bg-sky-50 px-2 py-0.5 text-xs font-bold text-sky-700">
              {s.punts.length}
            </span>
            <IcFletxa className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-fm-blau-600" />
          </button>
          <ul className="space-y-1.5">
            {s.punts.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <IcAigua className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                <span className="text-sm">
                  <span className="font-medium text-slate-700">{p.lloc}</span>
                  {p.detall && <span className="block text-xs text-slate-500">{p.detall}</span>}
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  )
}


/** Llista de telèfons de la Festa Major, en l'ordre de les acreditacions. */
function PanellContactes() {
  const tons = {
    blau: 'text-fm-blau-800 bg-fm-blau-600',
    vermell: 'text-fm-vermell-800 bg-fm-vermell-600',
    sorra: 'text-fm-sorra-800 bg-fm-sorra-500',
    slate: 'text-slate-700 bg-slate-500',
  }
  return (
    <>
      <p className="rounded-2xl border border-fm-blau-200 bg-fm-blau-50 px-4 py-3 text-sm text-fm-blau-900">
        Toca qualsevol telèfon per trucar-hi directament.
      </p>

      {CONTACTES.map((grup) => {
        const [text, fons] = tons[grup.to].split(' ')
        return (
          <section key={grup.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className={`mb-1 flex items-center gap-2 text-sm font-bold ${text}`}>
              <span className={`h-4 w-1 shrink-0 rounded-full ${fons}`} />
              {grup.titol}
            </h3>
            {grup.nota && <p className="mb-2 pl-3 text-xs text-slate-500 italic">{grup.nota}</p>}
            <ul className="mt-2 space-y-1.5">
              {grup.persones.map((p) => (
                <li key={p.telefon}>
                  <a
                    href={telHref(p.telefon)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 active:scale-[0.99] ${
                      grup.destacat
                        ? 'bg-fm-vermell-600 text-white shadow-sm hover:bg-fm-vermell-700'
                        : 'bg-slate-50 hover:bg-fm-blau-50'
                    }`}
                  >
                    <IcTelefon
                      className={`h-4 w-4 shrink-0 ${
                        grup.destacat ? 'text-white' : 'text-fm-blau-600'
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-sm font-medium ${
                          grup.destacat ? 'text-white' : 'text-slate-800'
                        }`}
                      >
                        {p.nom}
                      </span>
                      {p.rol && (
                        <span
                          className={`block text-xs ${
                            grup.destacat ? 'text-white/80' : 'text-slate-500'
                          }`}
                        >
                          {p.rol}
                        </span>
                      )}
                    </span>
                    <span
                      className={`shrink-0 text-sm font-bold tabular-nums ${
                        grup.destacat ? 'text-white' : 'text-fm-blau-700'
                      }`}
                    >
                      {p.telefon}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </>
  )
}
