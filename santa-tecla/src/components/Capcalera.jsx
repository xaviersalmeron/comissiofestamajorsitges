import { META } from '../data/index.js'
import {
  IcAigua,
  IcCalma,
  IcEmergencia,
  IcLlista,
  IcMapa,
  IcInfo,
  IcProtocol,
  IcTelefon,
} from './Icones.jsx'

export const VISTES = [
  { id: 'sortides', nom: 'Sortides', curt: 'Sortides', icona: IcLlista },
  { id: 'generals', nom: 'Consignes generals', curt: 'Generals', icona: IcInfo },
  { id: 'recorreguts', nom: 'Recorreguts', curt: 'Recorreguts', icona: IcMapa },
  { id: 'calma', nom: 'Tram en Calma', curt: 'Calma', icona: IcCalma },
  { id: 'protocol', nom: 'Protocol', curt: 'Protocol', icona: IcProtocol },
]

/** Marca gràfica del logotip: la retícula de cercles vermells, blaus i sorra. */
function MarcaFM({ className = 'h-9 w-9' }) {
  const files = [
    [null, 'v', 'b', null],
    ['b', 'v', 'b', 'b'],
    ['b', 'v', 'b', 'b'],
    ['v', 's', 's', 'b'],
    ['v', 's', 's', 'b'],
    [null, 'v', 'b', null],
  ]
  const color = { v: '#CD1123', b: '#0E4194', s: '#C99E67' }
  return (
    <svg viewBox="0 0 40 60" className={className} aria-hidden="true">
      {files.map((fila, y) =>
        fila.map((c, x) =>
          c ? <circle key={`${x}-${y}`} cx={5 + x * 10} cy={5 + y * 10} r="4" fill={color[c]} /> : null,
        ),
      )}
    </svg>
  )
}

export default function Capcalera({ vista, onVista, onPanel }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3 py-3">
          <MarcaFM className="h-10 w-7 shrink-0" />
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm leading-tight font-bold tracking-tight text-slate-900 sm:text-base">
              {META.titol}
            </h1>
            <p className="truncate text-xs text-slate-500">
              {META.sant} <span className="hidden sm:inline">· {META.versio}</span>
            </p>
          </div>

          {/* Accés directe permanent */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => onPanel('aigua')}
              aria-label="Punts d’aigua"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-50 px-3 py-2.5 text-sm font-semibold text-sky-700 ring-1 ring-sky-200 ring-inset transition-all duration-200 hover:bg-sky-100 active:scale-95"
            >
              <IcAigua className="h-4.5 w-4.5" />
              <span className="hidden lg:inline">Punts d’aigua</span>
            </button>
            <button
              type="button"
              onClick={() => onPanel('contactes')}
              aria-label="Contactes"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 ring-inset transition-all duration-200 hover:bg-slate-200 active:scale-95"
            >
              <IcTelefon className="h-4.5 w-4.5" />
              <span className="hidden lg:inline">Contactes</span>
            </button>
            <button
              type="button"
              onClick={() => onPanel('emergencies')}
              aria-label="Emergències"
              className="inline-flex items-center gap-2 rounded-xl bg-fm-vermell-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-fm-vermell-700 active:scale-95"
            >
              <IcEmergencia className="h-4.5 w-4.5" />
              <span className="hidden lg:inline">Emergències</span>
            </button>
          </div>
        </div>

        {/* Navegació d'escriptori */}
        <nav className="no-scrollbar -mx-1 hidden gap-1 overflow-x-auto px-1 sm:flex">
          {VISTES.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => onVista(v.id)}
              aria-current={vista === v.id ? 'page' : undefined}
              className={`relative flex shrink-0 items-center gap-2 px-3.5 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                vista === v.id ? 'text-fm-blau-700' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <v.icona className="h-4 w-4" />
              {v.nom}
              <span
                className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-fm-blau-600 transition-transform duration-300 ${
                  vista === v.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

/** Navegació inferior per a mòbil. */
export function NavegacioMobil({ vista, onVista }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur-lg sm:hidden">
      <ul className="mx-auto flex max-w-lg" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {VISTES.map((v) => (
          <li key={v.id} className="flex-1">
            <button
              type="button"
              onClick={() => onVista(v.id)}
              aria-current={vista === v.id ? 'page' : undefined}
              className={`flex w-full flex-col items-center gap-1 py-2.5 text-[10px] font-semibold transition-colors duration-200 ${
                vista === v.id ? 'text-fm-blau-700' : 'text-slate-400'
              }`}
            >
              <span
                className={`grid h-8 w-12 place-items-center rounded-lg transition-colors duration-200 ${
                  vista === v.id ? 'bg-fm-blau-50' : ''
                }`}
              >
                <v.icona className="h-5 w-5" />
              </span>
              {v.curt}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
