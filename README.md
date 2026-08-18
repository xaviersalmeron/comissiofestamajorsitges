# Consignes · Festa Major de Sant Bartomeu 2026

Aplicació web de consulta ràpida de les **Consignes de la Festa Major de Sant Bartomeu de Sitges
2026** (versió 3.1, 18/08/2026), pensada per als organitzadors i participants de la Festa: membres
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

Per publicar-la —validació a GitHub Pages i allotjament al servidor propi— vegeu
[`DESPLEGAMENT.md`](DESPLEGAMENT.md).

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
    acompanyamentMusical.js  colla, grup i integrants que acompanyen cada ball
    contactes.js           telèfons de les acreditacions (organització i premsa)
    protocol.js            Protocol de la Festa Major (actualització 2023)
    dispositiuSanitari.js  annex I
    tramEnCalma.js         annex II
    index.js               selectors derivats: cerca, filtres i agregats
  components/
    Capcalera.jsx      capçalera, navegació d'escriptori i barra inferior mòbil
    BarraFiltres.jsx   cerca lliure + filtre per dia i per element festiu
    SortidaTargeta.jsx targeta d'una sortida amb els quatre subapartats
    PanelRapid.jsx     calaixos d'emergències, punts d'aigua i contactes
    Vistes.jsx         consignes generals, recorreguts, tram en calma i protocol
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
4. **Annex II · Tram en Calma**.

A banda de les consignes, l'app inclou el **Protocol de la Festa Major** (actualització 2023 del
Consell del Patrimoni Festiu), amb la mateixa navegació del seu sumari: les seccions B–H, cadascuna
amb els seus apartats numerats, i un enllaç final als documents annexos publicats a la web oficial.
La secció A, que només descriu els canvis d'aquesta versió respecte de l'anterior, no s'hi inclou.

El sumari de la secció F anuncia 23 apartats però el cos del document només en desenvolupa 22: «21. El
ball per a la gent gran» i el subapartat «20.3 El concert ball de sant Lli» hi consten sense text.
L'app els manté a la navegació, per fidelitat al sumari, indicant que el document no els desenvolupa.

L'Annex I (dispositiu sanitari) no té pestanya pròpia: el seu contingut —la llegenda dels recursos i
el desplegament de Creu Roja de cada acte— viu dins del calaix de seguretat i emergències, que és on
es consulta quan fa falta.

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

Els totals per acte de l'Annex I i el protocol de trucada es consulten des del calaix de seguretat i
emergències.

## Acompanyament musical dels balls

A banda del document de consignes, la Comissió facilita un quadre que assigna a cada ball la colla
de grallers o sacaires que l'acompanya, el grup concret dins la colla i els seus integrants amb
l'instrument que toquen (font: «Llistat músics 2026»; només gralles i sacaires). S'aplica a tots els
actes tradicionals **excepte la presentació del cabeçut «El Patufet»**, i a l'app surt dins de cada
acte, filtrat als balls que hi participen. Cada fila es desplega amb els músics agrupats per
instrument.

Hi consten 76 músics amb nom. Els de la Colla de Grallers La Sitja (Bastons Colla Vella) els va
facilitar la Comissió el 18/08/2026, marcant-hi els titulars; els suplents surten sense l'etiqueta.
Els dos grups que el llistat encara no té assignats —Bon Vent (Cercolets) i l'acompanyament dels
Castells— mostren la plantilla prevista en comptes dels noms.

Com que el quadre lliga colles i balls, el filtre per element també l'utilitza: seleccionar l'Escola
de Grallers de Sitges mostra els 11 actes on toca, no només l'Entrada de Grallers. Els noms dels
músics també són cercables des de la barra de cerca.

## Funcionalitats

- **Filtre per element festiu o acte.** Cerca lliure sobre tot el text consultable de cada sortida
  (títol, indicacions, carrers, punts d'aigua i noms de la Comissió i del voluntariat), combinable
  amb filtre per dia i per element del seguici. Els elements estan agrupats per categoria i el
  filtre és acumulatiu (OR). En filtrar per un element, aquest queda ressaltat dins l'ordre de
  sortida de cada acte.
- **Accés directe des de la capçalera.** Tres botons permanents obren calaixos laterals:
  - **Punts d'aigua** — els 34 punts de la Festa agrupats per sortida.
  - **Contactes** — els telèfons de les acreditacions, com a enllaços `tel:`, en l'ordre dels PDF:
    Comissió (només el President), Regidoria de Tradicions i Festes, Policia Local, Emergències,
    dispositiu sanitari i Departament de Premsa.
  - **Seguretat i emergències** — el 112, el protocol d'actuació, la llegenda dels recursos i el
    desplegament de Policia, Seguretat, Creu Roja i Bombers de tots els actes, amb els punts
    habilitats per a persones usuàries de cadira de rodes.

  Des de qualsevol calaix es pot saltar a les consignes completes d'un acte. El calaix d'emergències
  només porta el 112: la resta de telèfons són a Contactes, i hi enllaça directament.

## Disseny

La paleta surt directament del logotip oficial *Sitges Festa Major*: blau `#0E4194`, vermell
`#CD1123` i sorra `#C99E67`, mostrejats del PNG del document i definits com a tokens
`--color-fm-*` a `src/index.css`. El disseny és responsive de mòbil a escriptori (navegació inferior
en mòbil, pestanyes en escriptori), amb transicions suaus i suport per a `prefers-reduced-motion`.

## Notes sobre la font

La versió 3.0 va corregir les incoherències de recompte que hi havia a la 2.1 (Processó Cívica de la
Bandera i Baixada de les Escales) i l'ordre de sortida de la Sortida d'Ofici, que començava amb «Q
Americanos». La 3.1 va actualitzar el voluntariat. Les xifres i els noms de l'app segueixen el
document sense cap esmena.

Queden quatre grups de voluntariat pendents d'assignar al document (tres a la Processó Cívica de la
Bandera i l'esmorzar de la Matinal); a l'app hi surten marcats com a «Pendent d'assignar».

A la Processó Cívica de la Bandera el títol del grup diu «3 voluntaris acompanyant el seguici» però
tot seguit hi reparteix 8 places entre sis colles, de les quals només tres tenen nom assignat. L'app
transcriu totes dues coses tal com hi consten.

La Cobla no consta a les consignes, però hi és present a la Sortida de les Dues, la Sortida d'Ofici
i la Processó de Sant Bartomeu. Com que no desfila —toca des d'un punt fix del recorregut— es modela
amb `participantsExtra` i es llista a banda de l'ordre de marxa, indicant on és. El filtre per
element sí que la té en compte.

L'Entrada del Sant no té ordre de sortida al document: només un plànol de disposició al Baluard. La
llista d'elements d'aquest acte està llegida del plànol i es presenta com a «Disposició dels balls»,
sense numerar, perquè no codifica cap seqüència. El plànol hi situa un únic bloc de Bastons («1 colla
de bastons») mentre que el text parla de «les colles del Ball de Bastons» en plural; l'app manté la
colla que hi surt i deixa la discrepància anotada a l'acte.
