import { IcCerca } from './Icones.jsx'

/** Etiqueta petita de color, per a tipus d'acte, dies i categories. */
export function Etiqueta({ to = 'blau', children, className = '' }) {
  const tons = {
    blau: 'bg-fm-blau-50 text-fm-blau-700 ring-fm-blau-200',
    vermell: 'bg-fm-vermell-50 text-fm-vermell-700 ring-fm-vermell-200',
    sorra: 'bg-fm-sorra-50 text-fm-sorra-800 ring-fm-sorra-300',
    slate: 'bg-slate-100 text-slate-600 ring-slate-200',
    verd: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${tons[to]} ${className}`}
    >
      {children}
    </span>
  )
}

/** Xip de persona: nom d'un membre de la Comissió o del voluntariat. */
export function XipPersona({ nom, to = 'blau' }) {
  const tons = {
    blau: 'bg-white text-fm-blau-800 ring-fm-blau-200',
    sorra: 'bg-white text-fm-sorra-800 ring-fm-sorra-300',
  }
  const inicials = nom
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full py-1 pr-3 pl-1 text-sm font-medium ring-1 ring-inset shadow-sm ${tons[to]}`}
    >
      <span
        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
          to === 'sorra' ? 'bg-fm-sorra-100 text-fm-sorra-800' : 'bg-fm-blau-100 text-fm-blau-800'
        }`}
      >
        {inicials}
      </span>
      {nom}
    </span>
  )
}

/**
 * Bloc d'un dels quatre subapartats operatius d'una sortida.
 * Manté sempre la mateixa estructura visual encara que no hi hagi contingut,
 * per tal que sigui immediat saber on mirar.
 */
export function BlocSubapartat({ titol, icona: Icona, to = 'blau', recompte, buit, children }) {
  const tons = {
    blau: {
      caixa: 'border-fm-blau-200 bg-fm-blau-50/50',
      cap: 'text-fm-blau-800',
      icona: 'bg-fm-blau-600 text-white',
    },
    vermell: {
      caixa: 'border-fm-vermell-200 bg-fm-vermell-50/50',
      cap: 'text-fm-vermell-800',
      icona: 'bg-fm-vermell-600 text-white',
    },
    sorra: {
      caixa: 'border-fm-sorra-300 bg-fm-sorra-50/60',
      cap: 'text-fm-sorra-800',
      icona: 'bg-fm-sorra-500 text-white',
    },
    cel: {
      caixa: 'border-sky-200 bg-sky-50/60',
      cap: 'text-sky-800',
      icona: 'bg-sky-600 text-white',
    },
  }
  const t = tons[to]

  return (
    <section className={`rounded-2xl border p-4 transition-colors sm:p-5 ${t.caixa}`}>
      <header className="mb-3 flex items-center gap-2.5">
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${t.icona}`}>
          <Icona className="h-[18px] w-[18px]" />
        </span>
        <h4 className={`text-sm font-bold tracking-tight ${t.cap}`}>{titol}</h4>
        {recompte != null && (
          <span className="ml-auto rounded-full bg-white/80 px-2 py-0.5 text-xs font-semibold text-slate-500 ring-1 ring-slate-200 ring-inset">
            {recompte}
          </span>
        )}
      </header>
      {buit ? <p className="text-sm text-slate-500 italic">{buit}</p> : children}
    </section>
  )
}

/** Estat buit il·lustrat, per a cerques sense resultats i seccions sense dades. */
export function EstatBuit({
  titol,
  descripcio,
  accio,
  icona: Icona = IcCerca,
  to = 'blau',
}) {
  const tons = {
    blau: 'from-fm-blau-100 to-fm-blau-50 text-fm-blau-500',
    sorra: 'from-fm-sorra-100 to-fm-sorra-50 text-fm-sorra-600',
  }
  return (
    <div className="anim-entrada flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/60 px-6 py-14 text-center">
      <div
        className={`mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br ${tons[to]}`}
      >
        <Icona className="h-9 w-9" />
      </div>
      <h3 className="text-base font-bold text-slate-800">{titol}</h3>
      {descripcio && <p className="mt-2 max-w-sm text-sm text-slate-500">{descripcio}</p>}
      {accio && <div className="mt-6">{accio}</div>}
    </div>
  )
}

/** Botó primari / secundari reutilitzable. */
export function Boto({ variant = 'primari', className = '', children, ...props }) {
  const variants = {
    primari:
      'bg-fm-blau-600 text-white shadow-sm hover:bg-fm-blau-700 active:scale-[0.98]',
    perill:
      'bg-fm-vermell-600 text-white shadow-sm hover:bg-fm-vermell-700 active:scale-[0.98]',
    suau: 'bg-white text-slate-700 ring-1 ring-slate-200 ring-inset hover:bg-slate-50 active:scale-[0.98]',
  }
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

/** Capçalera d'una vista secundària. */
export function CapcaleraVista({ titol, descripcio, children }) {
  return (
    <header className="anim-entrada mb-7">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{titol}</h2>
      {descripcio && <p className="mt-2.5 max-w-3xl text-sm text-slate-600 sm:text-base">{descripcio}</p>}
      {children}
    </header>
  )
}
