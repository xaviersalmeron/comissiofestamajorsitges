import Planol from './Planol.jsx'
import { CapcaleraVista, Etiqueta, EstatBuit } from './ui.jsx'
import { LlistaPunts } from './SortidaTargeta.jsx'
import {
  ICONA_CATEGORIA,
  IcAvis,
  IcCadiraRodes,
  IcCalma,
  IcFletxa,
  IcInfo,
  IcMapa,
  IcMusica,
  IcTelefon,
} from './Icones.jsx'
import {
  CONSIGNES_GENERALS,
  SORTIDES,
  TRAM_EN_CALMA,
  TELEFONS_EMERGENCIA,
  DISPOSITIU_SANITARI,
  nomCurtElement,
} from '../data/index.js'
import { LLEGENDA_RECURSOS } from '../data/dispositiuSanitari.js'

/* ─────────────────────────────  CONSIGNES GENERALS  ───────────────────────── */

const ICONES_BLOC = {
  general: IcInfo,
  gegants: ICONA_CATEGORIA.imatgeria,
  balls: ICONA_CATEGORIA.balls,
  foc: ICONA_CATEGORIA.foc,
  musica: IcMusica,
  banda: IcMusica,
}

export function VistaGenerals({ onFiltraElement }) {
  return (
    <div className="anim-entrada">
      <CapcaleraVista
        eyebrow="Bloc 1"
        titol="Consignes per als integrants del seguici"
        descripcio="Balls populars, imatgeria festiva, acompanyaments musicals i banda. Aquestes consignes s’apliquen a totes les sortides de la Festa Major."
      />

      <div className="space-y-4">
        {CONSIGNES_GENERALS.map((bloc) => {
          const Icona = ICONES_BLOC[bloc.icona] ?? IcInfo
          return (
            <section
              key={bloc.id}
              className="anim-puja rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <header className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-fm-blau-600 text-white">
                  <Icona />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">{bloc.titol}</h3>
              </header>

              {bloc.elements.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {bloc.elements.map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => onFiltraElement(id)}
                      className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 ring-inset transition-colors hover:bg-fm-blau-50 hover:text-fm-blau-700 hover:ring-fm-blau-300"
                    >
                      {nomCurtElement(id)}
                    </button>
                  ))}
                </div>
              )}

              <LlistaPunts punts={bloc.punts} />

              {bloc.subllistes?.map((sub) => (
                <div key={sub.titol} className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <h4 className="mb-2.5 text-sm font-bold text-slate-800">{sub.titol}</h4>
                  <LlistaPunts punts={sub.punts} />
                </div>
              ))}
            </section>
          )
        })}
      </div>
    </div>
  )
}

/* ────────────────────────────────  RECORREGUTS  ───────────────────────────── */

export function VistaRecorreguts({ onVesASortida }) {
  const ambRecorregut = SORTIDES.filter((s) => s.recorregut)

  return (
    <div className="anim-entrada">
      <CapcaleraVista
        eyebrow="Bloc 3"
        titol="Recorreguts"
        descripcio="Plànol general de la Festa Major i itinerari escrit de cada sortida del seguici popular."
      />

      <div className="mb-6">
        <Planol
          src="./planols/recorreguts-sant-bartomeu.png"
          titol="Recorreguts de Sant Bartomeu: Processó Cívica, Alegre i Festiva Matinal i Processó de Sant Bartomeu"
        />
      </div>

      <div className="space-y-3">
        {ambRecorregut.map((s) => (
          <article
            key={s.id}
            className="anim-puja rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => onVesASortida(s.id)}
              className="group flex w-full items-start gap-3 text-left"
            >
              <span className="min-w-0 flex-1">
                <span className="mb-1.5 flex flex-wrap items-center gap-2">
                  <Etiqueta to="blau">{s.tipus}</Etiqueta>
                  <span className="text-xs font-semibold text-slate-500">
                    {s.data} · {s.horaText}
                  </span>
                  {s.tramCalma && (
                    <Etiqueta to="verd">
                      <IcCalma className="h-3.5 w-3.5" /> Tram en Calma
                    </Etiqueta>
                  )}
                </span>
                <span className="block text-base font-bold text-slate-900 group-hover:text-fm-blau-700">
                  {s.titol}
                </span>
              </span>
              <IcFletxa className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-fm-blau-600" />
            </button>

            <p className="mt-3 flex gap-2.5 rounded-xl bg-slate-50 p-3.5 text-sm leading-relaxed text-slate-700">
              <IcMapa className="mt-0.5 h-4 w-4 shrink-0 text-fm-blau-600" />
              {s.recorregut}
            </p>
            {s.recorregutNota && (
              <p className="mt-1.5 px-1 text-xs text-slate-500">{s.recorregutNota}</p>
            )}
            {s.accessibilitat?.length > 0 && (
              <p className="mt-2 flex flex-wrap items-center gap-1.5 px-1 text-xs text-slate-500">
                <IcCadiraRodes className="h-4 w-4 text-fm-blau-600" />
                {s.accessibilitat.map((p) => p.lloc).join(' · ')}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

/* ───────────────────────────────  TRAM EN CALMA  ──────────────────────────── */

export function VistaTramCalma({ onFiltraElement }) {
  return (
    <div className="anim-entrada">
      <CapcaleraVista
        eyebrow="Annex II"
        titol="Tram en Calma"
        descripcio={TRAM_EN_CALMA.ubicacio}
      />

      <div className="mb-5 grid gap-4 lg:grid-cols-3">
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 lg:col-span-2">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-900">
            <IcCalma className="h-4 w-4" /> Què és
          </h3>
          <div className="space-y-3">
            {TRAM_EN_CALMA.queEs.map((t, i) => (
              <p key={i} className="text-sm leading-relaxed text-slate-700">
                {t}
              </p>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="mb-3 text-sm font-bold text-slate-800">Què implica</h3>
          <ul className="space-y-2">
            {TRAM_EN_CALMA.queImplica.map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {t}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mb-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-amber-900">
          <IcAvis className="h-4 w-4" /> Què NO és el tram en calma
        </h3>
        <ul className="space-y-2.5">
          {TRAM_EN_CALMA.queNoEs.map((t, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-amber-900/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-5 rounded-2xl border border-fm-blau-200 bg-fm-blau-50/60 p-5">
        <h3 className="mb-3 text-sm font-bold text-fm-blau-900">Consignes per a totes les colles</h3>
        <ul className="space-y-2.5">
          {TRAM_EN_CALMA.consignesGenerals.map((t, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-fm-blau-600 text-[10px] font-bold text-white">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      <h3 className="mb-3 px-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
        Consignes específiques per colla
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {TRAM_EN_CALMA.perColla.map((c) => (
          <section
            key={c.id}
            className="anim-puja rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h4 className="mb-3 text-base font-bold text-slate-900">{c.titol}</h4>
            {c.elements.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-1.5">
                {c.elements.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onFiltraElement(id)}
                    className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 ring-inset transition-colors hover:bg-fm-blau-50 hover:text-fm-blau-700"
                  >
                    {nomCurtElement(id)}
                  </button>
                ))}
              </div>
            )}
            <ul className="space-y-2">
              {c.punts.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {p}
                </li>
              ))}
            </ul>
            {c.musica.length > 0 && (
              <div className="mt-3 rounded-xl bg-slate-50 p-3">
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <IcMusica className="h-3.5 w-3.5" /> Música que acompanya
                </p>
                <ul className="space-y-1">
                  {c.musica.map((m, i) => (
                    <li key={i} className="text-xs text-slate-600">
                      · {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────  DISPOSITIU SANITARI  ──────────────────────── */

export function VistaSanitari({ onVesASortida }) {
  const entrades = Object.entries(DISPOSITIU_SANITARI)

  if (entrades.length === 0) {
    return (
      <EstatBuit
        titol="Sense dispositiu sanitari registrat"
        descripcio="L’Annex I del document no conté cap desplegament de recursos."
      />
    )
  }

  return (
    <div className="anim-entrada">
      <CapcaleraVista
        eyebrow="Annex I"
        titol="Dispositiu sanitari"
        descripcio="Desplegament de la Creu Roja acte per acte: ambulàncies, socorristes i telèfons del protocol d’actuació."
      />

      {/* Telèfons */}
      <section className="mb-5 grid gap-3 sm:grid-cols-3">
        {TELEFONS_EMERGENCIA.contactes.map((c) => (
          <a
            key={c.telefon}
            href={`tel:${c.telefon.replace(/\s/g, '')}`}
            className={`flex items-center gap-3 rounded-2xl p-4 transition-all duration-200 active:scale-[0.99] ${
              c.destacat
                ? 'bg-fm-vermell-600 text-white shadow-md shadow-fm-vermell-900/20 hover:bg-fm-vermell-700'
                : 'border border-slate-200 bg-white hover:border-fm-vermell-300'
            }`}
          >
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                c.destacat ? 'bg-white/20' : 'bg-fm-vermell-50 text-fm-vermell-600'
              }`}
            >
              <IcTelefon />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold">{c.nom}</span>
              <span
                className={`block text-base font-bold tabular-nums ${
                  c.destacat ? 'text-white' : 'text-fm-vermell-700'
                }`}
              >
                {c.telefon}
              </span>
            </span>
          </a>
        ))}
      </section>

      <section className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="flex gap-2 text-sm leading-relaxed text-amber-900">
          <IcAvis className="mt-0.5 h-4 w-4 shrink-0" />
          {TELEFONS_EMERGENCIA.avis}
        </p>
        <p className="mt-1.5 text-xs text-amber-800/90">{TELEFONS_EMERGENCIA.restriccio}</p>
      </section>

      {/* Llegenda */}
      <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-4">
        <h3 className="mb-2.5 text-xs font-bold tracking-wider text-slate-400 uppercase">
          Llegenda dels recursos
        </h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {LLEGENDA_RECURSOS.map((l) => (
            <li key={l.sigla} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-px inline-flex shrink-0 rounded bg-fm-vermell-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                {l.sigla}
              </span>
              {l.nom}
            </li>
          ))}
        </ul>
      </section>

      <div className="space-y-3">
        {entrades.map(([id, d]) => (
          <article
            key={id}
            className="anim-puja rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <button
              type="button"
              onClick={() => onVesASortida(id)}
              className="group mb-3 flex w-full items-start gap-3 text-left"
            >
              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-xs font-semibold text-slate-500">
                  {d.dia} · {d.franja}
                </span>
                <span className="block text-base font-bold text-slate-900 group-hover:text-fm-blau-700">
                  {d.acte}
                </span>
              </span>
              <IcFletxa className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-fm-blau-600" />
            </button>

            <p className="mb-3 text-xs text-slate-500">
              <span className="font-semibold">{d.recorregut ? 'Recorregut:' : 'Lloc:'}</span>{' '}
              {d.recorregut ?? d.lloc}
            </p>

            <ul className="space-y-2">
              {d.recursos.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-700"
                >
                  <span className="mt-px inline-flex shrink-0 rounded bg-fm-vermell-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {r.tipus}
                  </span>
                  {r.text}
                </li>
              ))}
            </ul>

            <p className="mt-3 inline-flex rounded-lg bg-fm-vermell-50 px-3 py-1.5 text-xs font-bold text-fm-vermell-800">
              Total: {d.total}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
