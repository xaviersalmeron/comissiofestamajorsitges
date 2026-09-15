import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IcCreu, IcMapa } from './Icones.jsx'

/**
 * Plànol amb ampliació a pantalla completa. Els plànols del document són
 * densos i, en mòbil, cal poder-los obrir a mida completa.
 *
 * L'ampliació es dibuixa amb un portal a `document.body` i no allà on viu el
 * component: les targetes de sortida porten animacions d'entrada que deixen un
 * `transform` de matriu identitat, i això ja crea bloc contenidor per a
 * `position: fixed`. Sense el portal, l'overlay quedava confinat dins la
 * targeta i el botó de tancar acabava fora de la pantalla.
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

      {obert &&
        createPortal(
          <div
            className="anim-entrada fixed inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={titol}
            // Tocar qualsevol punt tanca: en mòbil el gest instintiu és tocar
            // la imatge, no buscar la creu.
            onClick={() => setObert(false)}
            style={{
              paddingTop: 'max(0.75rem, env(safe-area-inset-top))',
              paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
              paddingLeft: 'max(0.75rem, env(safe-area-inset-left))',
              paddingRight: 'max(0.75rem, env(safe-area-inset-right))',
            }}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 pb-3 text-white">
              <p className="min-w-0 flex-1 text-sm font-semibold">{titol}</p>
              <button
                type="button"
                onClick={() => setObert(false)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/25 active:scale-95"
                aria-label="Tanca el plànol"
              >
                <IcCreu className="h-6 w-6" />
              </button>
            </div>

            <img src={src} alt={titol} className="min-h-0 flex-1 rounded-xl bg-white object-contain" />

            <p className="shrink-0 pt-3 text-center text-xs text-white/70">
              Toca la pantalla per tancar
            </p>
          </div>,
          document.body,
        )}
    </>
  )
}
