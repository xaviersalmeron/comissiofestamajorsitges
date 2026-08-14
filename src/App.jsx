import { useCallback, useEffect, useMemo, useState } from 'react'
import Capcalera, { NavegacioMobil } from './components/Capcalera.jsx'
import BarraFiltres from './components/BarraFiltres.jsx'
import SortidaTargeta from './components/SortidaTargeta.jsx'
import PanelRapid from './components/PanelRapid.jsx'
import { VistaGenerals, VistaRecorreguts, VistaTramCalma } from './components/Vistes.jsx'
import { Boto, EstatBuit } from './components/ui.jsx'
import { IcCerca, IcLlista } from './components/Icones.jsx'
import { META, SORTIDES, filtraSortides, nomCurtElement } from './data/index.js'

export default function App() {
  const [vista, setVista] = useState('sortides')
  const [cerca, setCerca] = useState('')
  const [elements, setElements] = useState([])
  const [dia, setDia] = useState(null)
  const [obertes, setObertes] = useState([])
  const [panel, setPanel] = useState(null)

  const resultats = useMemo(() => filtraSortides({ cerca, elements, dia }), [cerca, elements, dia])

  const toggleElement = useCallback(
    (id) => setElements((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id])),
    [],
  )

  const netejaFiltres = useCallback(() => {
    setCerca('')
    setElements([])
    setDia(null)
  }, [])

  const toggleSortida = useCallback(
    (id) => setObertes((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id])),
    [],
  )

  /** Navega a una sortida concreta des de qualsevol altra vista i l'obre. */
  const vesASortida = useCallback((id) => {
    setVista('sortides')
    netejaFiltres()
    setObertes((prev) => (prev.includes(id) ? prev : [...prev, id]))
    requestAnimationFrame(() =>
      document.getElementById(`sortida-${id}`)?.scrollIntoView({ block: 'start' }),
    )
  }, [netejaFiltres])

  /** Salta a la llista filtrada per un element concret. */
  const filtraPerElement = useCallback((id) => {
    setVista('sortides')
    setCerca('')
    setDia(null)
    setElements([id])
    window.scrollTo({ top: 0 })
  }, [])

  // En canviar de vista, tornem a dalt: en mòbil és el comportament esperat.
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [vista])

  return (
    <div className="min-h-screen">
      <Capcalera vista={vista} onVista={setVista} onPanel={setPanel} />

      <main className="mx-auto max-w-6xl px-4 pt-6 pb-28 sm:px-6 sm:pb-16">
        {vista === 'sortides' && (
          <>
            <div className="anim-entrada mb-6">
              <p className="mb-1.5 text-xs font-bold tracking-[0.14em] text-fm-sorra-600 uppercase">
                Bloc 2
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Consignes detallades per a cada sortida
              </h2>
              <p className="mt-2.5 max-w-3xl text-sm text-slate-600 sm:text-base">
                Cada sortida del seguici popular amb els seus punts d’aigua, els punts de seguretat i
                d’emergència, la presència de la Comissió i la del voluntariat.
              </p>
            </div>

            <BarraFiltres
              cerca={cerca}
              onCerca={setCerca}
              elements={elements}
              onToggleElement={toggleElement}
              dia={dia}
              onDia={setDia}
              onNeteja={netejaFiltres}
              resultats={resultats.length}
              total={SORTIDES.length}
            />

            {resultats.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Boto
                  variant="suau"
                  onClick={() =>
                    setObertes(
                      obertes.length >= resultats.length ? [] : resultats.map((s) => s.id),
                    )
                  }
                >
                  <IcLlista className="h-4 w-4" />
                  {obertes.length >= resultats.length ? 'Plega-ho tot' : 'Desplega-ho tot'}
                </Boto>
                {elements.length > 0 && (
                  <p className="text-xs text-slate-500">
                    Ressaltat a l’ordre de sortida:{' '}
                    <span className="font-semibold text-fm-vermell-700">
                      {elements.map(nomCurtElement).join(', ')}
                    </span>
                  </p>
                )}
              </div>
            )}

            {resultats.length === 0 ? (
              <EstatBuit
                icona={IcCerca}
                titol="Cap sortida coincideix amb la cerca"
                descripcio="Prova amb un altre element festiu, un altre dia o cerca directament el nom d’un carrer, d’un ball o d’una persona de la Comissió."
                accio={<Boto onClick={netejaFiltres}>Neteja els filtres</Boto>}
              />
            ) : (
              <div className="space-y-4">
                {resultats.map((s) => (
                  <SortidaTargeta
                    key={s.id}
                    sortida={s}
                    obert={obertes.includes(s.id)}
                    onToggle={() => toggleSortida(s.id)}
                    destacats={elements}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {vista === 'generals' && <VistaGenerals onFiltraElement={filtraPerElement} />}
        {vista === 'recorreguts' && <VistaRecorreguts onVesASortida={vesASortida} />}
        {vista === 'calma' && <VistaTramCalma onFiltraElement={filtraPerElement} />}

        <footer className="mt-12 border-t border-slate-200 pt-6 text-center">
          <img
            src="./marca/logos-institucionals.png"
            alt="Ajuntament de Sitges · Sitges Festa Major · Festa patrimonial d'interès nacional"
            className="mx-auto mb-4 h-12 w-auto opacity-80"
          />
          <p className="text-xs text-slate-500">{META.entitat}</p>
          <p className="mt-1 text-xs text-slate-400">
            {META.titol} · {META.sant} · {META.versio}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs text-slate-400">
            Aquesta aplicació és una consulta ràpida del document de consignes. En cas de dubte o
            contradicció, preval el document oficial i el Protocol de Festa Major.
          </p>
        </footer>
      </main>

      <NavegacioMobil vista={vista} onVista={setVista} />
      <PanelRapid
        mode={panel}
        onTanca={() => setPanel(null)}
        onVesASortida={vesASortida}
        onContactes={() => setPanel('contactes')}
      />
    </div>
  )
}
