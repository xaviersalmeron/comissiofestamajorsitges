import { useId, useState } from 'react'
import Planol from './Planol.jsx'
import { Boto, CapcaleraVista, Etiqueta } from './ui.jsx'
import { LlistaPunts } from './SortidaTargeta.jsx'
import {
  ICONA_CATEGORIA,
  IcAvis,
  IcCadiraRodes,
  IcCalma,
  IcFletxa,
  IcInfo,
  IcLlista,
  IcEnllac,
  IcMapa,
  IcMusica,
  IcProtocol,
} from './Icones.jsx'
import {
  CONSIGNES_GENERALS,
  SORTIDES,
  TRAM_EN_CALMA,
  nomCurtElement,
} from '../data/index.js'
import { PROTOCOL, PROTOCOL_META, PROTOCOL_ANNEXOS } from '../data/protocol.js'

/* ─────────────────────────────  CONSIGNES GENERALS  ───────────────────────── */

const ICONES_BLOC = {
  general: IcInfo,
  gegants: ICONA_CATEGORIA.imatgeria,
  balls: ICONA_CATEGORIA.balls,
  foc: ICONA_CATEGORIA.foc,
  musica: IcMusica,
  banda: IcMusica,
}

/** Un bloc de consignes generals, plegable com les targetes de sortida. */
function BlocConsigna({ bloc, obert, onToggle, onFiltraElement }) {
  const idPanell = useId()
  const Icona = ICONES_BLOC[bloc.icona] ?? IcInfo
  const total = bloc.punts.length + (bloc.subllistes ?? []).reduce((n, s) => n + s.punts.length, 0)

  return (
    <section
      className={`anim-puja overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
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
        className="flex w-full items-center gap-3.5 p-5 text-left sm:p-6"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-fm-blau-600 text-white">
          <Icona />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-bold tracking-tight text-slate-900">{bloc.titol}</span>
          <span className="mt-0.5 block text-xs text-slate-500">
            {total} {total === 1 ? 'consigna' : 'consignes'}
          </span>
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            obert ? 'rotate-90 bg-fm-blau-600 text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <IcFletxa />
        </span>
      </button>

      {obert && (
        <div id={idPanell} className="anim-entrada border-t border-slate-100 p-5 sm:p-6">
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
        </div>
      )}
    </section>
  )
}

export function VistaGenerals({ onFiltraElement }) {
  const [obertes, setObertes] = useState([])
  const totObert = obertes.length >= CONSIGNES_GENERALS.length

  return (
    <div className="anim-entrada">
      <CapcaleraVista
        titol="Consignes per als integrants del seguici"
        descripcio="Balls populars, imatgeria festiva, acompanyaments musicals i banda. Aquestes consignes s’apliquen a totes les sortides de la Festa Major."
      />

      <div className="mb-4">
        <Boto
          variant="suau"
          onClick={() => setObertes(totObert ? [] : CONSIGNES_GENERALS.map((b) => b.id))}
        >
          <IcLlista className="h-4 w-4" />
          {totObert ? 'Plega-ho tot' : 'Desplega-ho tot'}
        </Boto>
      </div>

      <div className="space-y-4">
        {CONSIGNES_GENERALS.map((bloc) => (
          <BlocConsigna
            key={bloc.id}
            bloc={bloc}
            obert={obertes.includes(bloc.id)}
            onToggle={() =>
              setObertes((prev) =>
                prev.includes(bloc.id) ? prev.filter((id) => id !== bloc.id) : [...prev, bloc.id],
              )
            }
            onFiltraElement={onFiltraElement}
          />
        ))}
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

/* ──────────────────────────────────  PROTOCOL  ────────────────────────────── */

/** Blocs de contingut del Protocol: paràgrafs, llistes i subtítols. */
function ContingutProtocol({ blocs }) {
  return (
    <div className="space-y-3">
      {blocs.map((b, i) => {
        if (b.t === 'sub')
          return (
            <h5 key={i} className="pt-1 text-sm font-bold text-fm-blau-800">
              {b.text}
            </h5>
          )
        if (b.t === 'buit')
          return (
            <p
              key={i}
              className="rounded-xl bg-slate-50 px-3.5 py-3 text-sm text-slate-500 italic"
            >
              {b.text}
            </p>
          )
        if (b.t === 'ul')
          return (
            <ul key={i} className="space-y-2">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fm-sorra-400" />
                  {it}
                </li>
              ))}
            </ul>
          )
        if (b.t === 'ol')
          return (
            <ol key={i} className="space-y-1.5">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-fm-blau-50 text-[10px] font-bold text-fm-blau-700 tabular-nums">
                    {j + 1}
                  </span>
                  {it}
                </li>
              ))}
            </ol>
          )
        return (
          <p key={i} className="text-sm leading-relaxed text-slate-700">
            {b.text}
          </p>
        )
      })}
    </div>
  )
}

/** Un apartat numerat dins d'una secció, plegable. */
function ApartatProtocol({ apartat }) {
  const [obert, setObert] = useState(false)
  const idPanell = useId()
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setObert((v) => !v)}
        aria-expanded={obert}
        aria-controls={idPanell}
        className="flex w-full items-center gap-3 p-3.5 text-left transition-colors hover:bg-slate-50"
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-fm-blau-50 text-xs font-bold text-fm-blau-700 tabular-nums">
          {apartat.num}
        </span>
        <span className="min-w-0 flex-1 text-sm font-semibold text-slate-800">{apartat.titol}</span>
        <span
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${
            obert ? 'rotate-90' : ''
          }`}
        >
          <IcFletxa className="h-4 w-4" />
        </span>
      </button>
      {obert && (
        <div id={idPanell} className="anim-entrada border-t border-slate-100 p-4">
          <ContingutProtocol blocs={apartat.contingut} />
        </div>
      )}
    </div>
  )
}

/** Una secció del Protocol (A–H), plegable. */
function SeccioProtocol({ seccio, obert, onToggle }) {
  const idPanell = useId()
  // A–D tenen un únic apartat sense títol: el contingut es mostra directament
  const directa = seccio.apartats.length === 1 && !seccio.apartats[0].titol

  return (
    <section
      className={`anim-puja overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
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
        className="flex w-full items-center gap-3.5 p-5 text-left sm:p-6"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-fm-blau-600 text-base font-bold text-white">
          {seccio.lletra}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-bold tracking-tight text-slate-900">
            {seccio.titol}
          </span>
          {!directa && (
            <span className="mt-0.5 block text-xs text-slate-500">
              {seccio.apartats.length} apartats
            </span>
          )}
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            obert ? 'rotate-90 bg-fm-blau-600 text-white' : 'bg-slate-100 text-slate-500'
          }`}
        >
          <IcFletxa />
        </span>
      </button>

      {obert && (
        <div id={idPanell} className="anim-entrada border-t border-slate-100 p-5 sm:p-6">
          {directa ? (
            <ContingutProtocol blocs={seccio.apartats[0].contingut} />
          ) : (
            <div className="space-y-2">
              {seccio.apartats.map((a) => (
                <ApartatProtocol key={a.id} apartat={a} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export function VistaProtocol() {
  const [obertes, setObertes] = useState([])
  const totObert = obertes.length >= PROTOCOL.length

  return (
    <div className="anim-entrada">
      <CapcaleraVista
        titol={PROTOCOL_META.titol}
        descripcio={`${PROTOCOL_META.subtitol}. ${PROTOCOL_META.distincio}.`}
      />

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Boto
          variant="suau"
          onClick={() => setObertes(totObert ? [] : PROTOCOL.map((s) => s.id))}
        >
          <IcProtocol className="h-4 w-4" />
          {totObert ? 'Plega-ho tot' : 'Desplega-ho tot'}
        </Boto>
        <p className="text-xs text-slate-500">
          {PROTOCOL_META.versio} · {PROTOCOL_META.organ}
        </p>
      </div>

      <div className="space-y-4">
        {PROTOCOL.map((seccio) => (
          <SeccioProtocol
            key={seccio.id}
            seccio={seccio}
            obert={obertes.includes(seccio.id)}
            onToggle={() =>
              setObertes((prev) =>
                prev.includes(seccio.id)
                  ? prev.filter((id) => id !== seccio.id)
                  : [...prev, seccio.id],
              )
            }
          />
        ))}
      </div>

      {/* Documents annexos, a la web oficial */}
      <section className="mt-6 rounded-3xl border border-fm-sorra-300 bg-fm-sorra-50/60 p-5 sm:p-6">
        <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-fm-sorra-800">
          <IcEnllac className="h-4.5 w-4.5" />
          {PROTOCOL_ANNEXOS.titol}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-700">
          {PROTOCOL_ANNEXOS.descripcio}
        </p>
        <a
          href={PROTOCOL_ANNEXOS.enllac}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-fm-blau-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-fm-blau-700 active:scale-[0.98]"
        >
          <IcEnllac className="h-4 w-4" />
          {PROTOCOL_ANNEXOS.etiqueta}
        </a>
      </section>
    </div>
  )
}
