import { useEffect, useState } from 'react'
import { IcCreu, IcMapa } from './Icones.jsx'

/**
 * Plànol amb ampliació a pantalla completa. Els plànols del document són
 * densos i, en mòbil, cal poder-los obrir a mida completa.
 */
export default function Planol({ src, titol }) {
  const [obert, setObert] = useState(false)

  useEffect(() => {
    if (!obert) return
    const tecla = (e) => e.key === 'Escape' && setObert(false)
    document.addEventListener('keydown', tecla)
    const overflowPrevi = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', tecla)
      document.body.style.overflow = overflowPrevi
    }
  }, [obert])

  return (
    <>
      <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <button
          type="button"
          onClick={() => setObert(true)}
          className="block w-full cursor-zoom-in"
          aria-label={`Amplia el plànol: ${titol}`}
        >
          <img
            src={src}
            alt={titol}
            loading="lazy"
            className="max-h-80 w-full bg-slate-50 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </button>
        <figcaption className="flex items-center gap-2 border-t border-slate-200 bg-slate-50/80 px-4 py-2.5 text-xs font-medium text-slate-600">
          <IcMapa className="h-4 w-4 shrink-0 text-fm-blau-600" />
          {titol}
          <span className="ml-auto hidden text-slate-400 sm:inline">Toca per ampliar</span>
        </figcaption>
      </figure>

      {obert && (
        <div
          className="anim-entrada fixed inset-0 z-50 flex flex-col bg-slate-900/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={titol}
          onClick={() => setObert(false)}
        >
          <div className="flex items-center justify-between gap-4 pb-3 text-white">
            <p className="text-sm font-semibold">{titol}</p>
            <button
              type="button"
              onClick={() => setObert(false)}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Tanca el plànol"
            >
              <IcCreu />
            </button>
          </div>
          <img
            src={src}
            alt={titol}
            className="min-h-0 flex-1 rounded-xl bg-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
