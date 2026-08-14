# Consignes · Festa Major de Sant Bartomeu 2026

Aplicació web de consulta ràpida de les **Consignes de la Festa Major de Sant Bartomeu de Sitges
2026** (versió 3.0, 14/08/2026), pensada per als organitzadors i participants de la Festa: membres
de la Comissió, caps de colla, balladors, músics i voluntariat.

Tot el contingut és una transcripció del document oficial de consignes. **En cas de dubte o
contradicció preval el document original i el Protocol de Festa Major.**

## Posar-la en marxa

```bash
npm install
npm run dev      # servidor de desenvolupament
npm run build    # build de producció a dist/
npm run preview  # serveix el build
```

Requereix Node 20 o superior. El `base` de Vite és relatiu (`./`), de manera que el `dist/` es pot
servir des de qualsevol subcarpeta (GitHub Pages, una intranet, o obrint-lo directament).

## Estructura

```
public/
  marca/      logotips oficials (Sitges Festa Major, Ajuntament de Sitges)
  planols/    plànols de col·locació i mapa de recorreguts, extrets del document
src/
  data/       tot el contingut del document, en mòduls separats i sense JSX
    elements.js            catàleg d'elements festius (base del filtre)
    consignesGenerals.js   bloc 1 de l'índex
    sortides.js            bloc 2: les 12 sortides del seguici
    seguretat.js           quadre de seguretat de cada acte (4 cossos)
    dispositiuSanitari.js  annex I
    tramEnCalma.js         annex II
    index.js               selectors derivats: cerca, filtres i agregats
  components/
    Capcalera.jsx      capçalera, navegació d'escriptori i barra inferior mòbil
    BarraFiltres.jsx   cerca lliure + filtre per dia i per element festiu
    SortidaTargeta.jsx targeta d'una sortida amb els quatre subapartats
    PanelRapid.jsx     accés directe a emergències i punts d'aigua
    Vistes.jsx         consignes generals, recorreguts, tram en calma, sanitari
    Planol.jsx         plànol amb ampliació a pantalla completa
    Icones.jsx         icones SVG inline
    ui.jsx             primitives compartides i estats buits
  App.jsx              estat de la vista, filtres i targetes obertes
```

La separació entre `data/` i `components/` és deliberada: quan surti una versió nova del document de
consignes només cal tocar `src/data/`, sense entrar a la interfície.

## Contingut i organització

L'app segueix l'ordre de l'índex del document:

1. **Consignes generals** per als integrants del seguici (general, gegants, balls blancs, foc,
   grallers/timbalers/sacaires i banda).
2. **Consignes detallades per a cada sortida** — les 12 sortides, del 22 al 29 d'agost.
3. **Recorreguts** — plànol general i itinerari escrit de cada sortida.
4. **Annex I · Dispositiu sanitari**.
5. **Annex II · Tram en Calma**.

Dins de cada sortida, els quatre subapartats operatius surten sempre en el mateix ordre i amb el
mateix codi de color, de manera que es puguin localitzar d'una ullada:

| Subapartat | Color | Contingut |
| --- | --- | --- |
| Punts d'aigua | cel | On es reparteix aigua durant l'acte |
| Punts de seguretat i d'emergència | vermell | Policia Local, Seguretat, Creu Roja i Bombers voluntaris |
| Presència de la Comissió de Festa Major | blau | Punt, assignació i persones |
| Presència del voluntariat | sorra | Grup, punt i persones |

### Els punts de seguretat i d'emergència

Cada sortida porta al document el seu propi quadre de seguretat, amb el desplegament dels quatre
cossos que hi intervenen. L'app els mostra en aquest ordre, cadascun amb el seu color i recompte:

1. **Policia Local** — pilotatge del recorregut, talls de trànsit i punts de referència.
2. **Seguretat** — auxiliars que tanquen accessos de vianants.
3. **Creu Roja** — ambulàncies (SVI/SVB/SVA) i socorristes.
4. **Bombers voluntaris** — vehicles d'aigua, presents en 5 dels actes.

Vuit actes tenen quadre propi. Per als tres que no en tenen (l'Actuació castellera de la vigília,
l'Entrada del Sant i l'Exhibició castellera), el subapartat cau al resum de l'**Annex I · Dispositiu
sanitari** i ho indica explícitament, de manera que mai no quedi mut; l'Entrada del Sant queda
coberta pel dispositiu de la Processó de Sant Bartomeu. L'únic acte sense cap cobertura documentada
—la Presentació del cabeçut «El Patufet»— mostra l'estat buit amb la indicació de trucar al 112.

L'Annex I es manté com a vista pròpia perquè hi consten els totals per acte i el protocol de trucada
a la Creu Roja.

## Funcionalitats

- **Filtre per element festiu o acte.** Cerca lliure sobre tot el text consultable de cada sortida
  (títol, indicacions, carrers, punts d'aigua i noms de la Comissió i del voluntariat), combinable
  amb filtre per dia i per element del seguici. Els elements estan agrupats per categoria i el
  filtre és acumulatiu (OR). En filtrar per un element, aquest queda ressaltat dins l'ordre de
  sortida de cada acte.
- **Accés directe a seguretat/emergències i punts d'aigua.** Dos botons permanents a la capçalera
  obren un calaix lateral amb els telèfons d'emergència (com a enllaços `tel:`), el desplegament de
  Policia, Seguretat, Creu Roja i Bombers de tots els actes i els punts habilitats per a persones
  usuàries de cadira de rodes, o bé
  els 34 punts d'aigua de la Festa agrupats per sortida. Des del calaix es pot saltar a les
  consignes completes de qualsevol acte.

## Disseny

La paleta surt directament del logotip oficial *Sitges Festa Major*: blau `#0E4194`, vermell
`#CD1123` i sorra `#C99E67`, mostrejats del PNG del document i definits com a tokens
`--color-fm-*` a `src/index.css`. El disseny és responsive de mòbil a escriptori (navegació inferior
en mòbil, pestanyes en escriptori), amb transicions suaus i suport per a `prefers-reduced-motion`.

## Notes sobre la font

La versió 3.0 va corregir les incoherències de recompte que hi havia a la 2.1 (Processó Cívica de la
Bandera i Baixada de les Escales) i l'ordre de sortida de la Sortida d'Ofici, que començava amb «Q
Americanos». Les xifres i els noms de l'app segueixen ara el document sense cap esmena.

Queden tres grups de voluntariat pendents d'assignar al document (dos a la Processó Cívica de la
Bandera i l'esmorzar de la Matinal); a l'app hi surten marcats com a «Pendent d'assignar».
