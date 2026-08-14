# Consignes · Festa Major de Sant Bartomeu 2026

Aplicació web de consulta ràpida de les **Consignes de la Festa Major de Sant Bartomeu de Sitges
2026** (versió 2.1, 02/08/2026), pensada per als organitzadors i participants de la Festa: membres
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
| Punts de seguretat i d'emergència | vermell | Ambulàncies i socorristes desplegats |
| Presència de la Comissió de Festa Major | blau | Punt, assignació i persones |
| Presència del voluntariat | sorra | Grup, punt i persones |

### D'on surten els punts de seguretat i d'emergència

Al cos del document, els subapartats «Punts de seguretat i d'emergència» hi consten com a
encapçalament sense contingut desplegat: el desplegament real (ambulàncies SVI/SVB/SVA i socorristes,
acte per acte) és a l'**Annex I · Dispositiu sanitari**. L'app els vincula automàticament amb
`dispositiuDeSortida()`, de manera que cada sortida mostri el dispositiu que li correspon i, quan
un acte queda cobert pel dispositiu d'un altre encadenat (Entrada del Sant i Ballada Final, dins la
franja de la Processó de Sant Bartomeu), ho indiqui explícitament.

Els actes sense dispositiu propi al document — la Presentació del cabeçut «El Patufet» — mostren
l'estat buit corresponent amb la indicació de trucar al 112.

## Funcionalitats

- **Filtre per element festiu o acte.** Cerca lliure sobre tot el text consultable de cada sortida
  (títol, indicacions, carrers, punts d'aigua i noms de la Comissió i del voluntariat), combinable
  amb filtre per dia i per element del seguici. Els elements estan agrupats per categoria i el
  filtre és acumulatiu (OR). En filtrar per un element, aquest queda ressaltat dins l'ordre de
  sortida de cada acte.
- **Accés directe a seguretat/emergències i punts d'aigua.** Dos botons permanents a la capçalera
  obren un calaix lateral amb els telèfons d'emergència (com a enllaços `tel:`), el dispositiu
  sanitari de tots els actes i els punts habilitats per a persones usuàries de cadira de rodes, o bé
  els 34 punts d'aigua de la Festa agrupats per sortida. Des del calaix es pot saltar a les
  consignes completes de qualsevol acte.

## Disseny

La paleta surt directament del logotip oficial *Sitges Festa Major*: blau `#0E4194`, vermell
`#CD1123` i sorra `#C99E67`, mostrejats del PNG del document i definits com a tokens
`--color-fm-*` a `src/index.css`. El disseny és responsive de mòbil a escriptori (navegació inferior
en mòbil, pestanyes en escriptori), amb transicions suaus i suport per a `prefers-reduced-motion`.

## Notes sobre la font

El document original conté algunes incoherències que s'han transcrit tal com hi consten, sense
esmenar-les:

- A la Processó Cívica de la Bandera, la plaça de l'Ajuntament diu «3 persones» i n'enumera 4; el
  Baluard Miquel Utrillo diu «6 persones» i n'enumera 5.
- A la Baixada de les Escales, la Fragata diu «5 persones fixes» i n'enumera 4.
- A la Processó de Sant Bartomeu, el Cap de la Vila diu «3 persones» comptant-hi el President.
- L'ordre de sortida de la Sortida d'Ofici comença amb «Q Americanos», que s'ha interpretat com als
  Gegants de la Vila i els Gegants Americanos.
- Alguns grups de voluntariat consten com a pendents d'assignar (`XXX` al document); a l'app surten
  marcats com a «Pendent d'assignar».
