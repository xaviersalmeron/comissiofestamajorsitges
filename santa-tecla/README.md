# Consignes · Festa Major de Santa Tecla 2026

Aplicació web de consulta ràpida de les **Consignes de la Festa Major de Santa Tecla de Sitges
2026** (versió 3.0, 17/09/2026), pensada per als organitzadors i participants de la Festa: membres
de la Comissió, caps de colla, balladors, músics i voluntariat.

És una app **independent** de la de Sant Bartomeu, amb la mateixa estructura i el mateix objectiu,
però amb els seus propis actes i dades. Les dues es despleguen juntes i s'enllacen des del peu de
pàgina.

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
servir des de qualsevol subcarpeta.

## Estructura

```
public/
  marca/      logotips oficials (Sitges Festa Major, Ajuntament de Sitges)
  planols/    plànols de col·locació i mapa de recorreguts, extrets del document
src/
  data/       tot el contingut del document, en mòduls separats i sense JSX
    elements.js            catàleg d'elements festius (base del filtre)
    consignesGenerals.js   consignes per als integrants del seguici
    sortides.js            les 12 sortides
    seguretat.js           quadre de seguretat de cada acte (4 cossos)
    acompanyamentMusical.js  colla, grup i integrants del seguici adult
    contactes.js           telèfons de les acreditacions
    protocol.js            Protocol de la Festa Major (actualització 2023)
    tramEnCalma.js         annex I
    index.js               selectors derivats: cerca, filtres i agregats
  components/   les mateixes que a l'app de Sant Bartomeu
  App.jsx       estat de la vista, filtres i targetes obertes
```

## Els actes

L'índex del document agrupa les tres matinals del dia 23 sota un sol epígraf. A l'app hi surten com
a **tres sortides independents** —Matinal de Foc (6.30 h), Matinal Gran (7 h) i Matinal Petita
(8 h)— perquè cadascuna té la seva hora, el seu recorregut, els seus participants i el seu
desplegament. Totes tres porten l'etiqueta «Matinals de Santa Tecla» i repeteixen les indicacions
generals i el voluntariat comuns. Amb aquesta separació, l'app té 12 sortides:

| Dia | Acte |
| --- | --- |
| Diumenge 20 | Cercavila de Gegants i Cabeçuts, i exhibició de balls populars · Cercavila de Dracs i exhibició dels Diables infantils |
| Dimarts 22 | Processó Cívica |
| Dimecres 23 | Matinal de Foc · Matinal Gran · Matinal Petita · Sortida d'Ofici · Pilar de castells a les escales · Processó de Santa Tecla · Entrada de la Santa · Ballada final |
| Dissabte 26 | Exhibició castellera de Santa Tecla |

Dins de cada sortida, els quatre subapartats operatius surten sempre en el mateix ordre i amb el
mateix codi de color: punts d'aigua (cel), punts de seguretat i d'emergència (vermell), presència de
la Comissió (blau) i presència del voluntariat (sorra).

## Diferències respecte de l'app de Sant Bartomeu

- **No hi ha annex de dispositiu sanitari.** Les consignes de Santa Tecla només porten un annex, el
  del Tram en Calma. Els quadres de seguretat de cada acte són, doncs, l'única font: el calaix de
  seguretat i emergències els mostra directament, amb la llegenda dels recursos i el 112.
- **Cercaviles obertes.** Les del 20 de setembre i les tres Matinals incorporen colles infantils i
  convidades que no formen part del seguici adult. Hi consten amb el nom exacte del document i
  tenen la seva pròpia categoria al filtre, «Colles infantils i convidades», perquè el filtre del
  seguici adult no quedi ofegat.
- **Les consignes generals són les mateixes.** El document les titula «Cercaviles adultes SB i ST»
  i el text és idèntic al de Sant Bartomeu.
- **Els contactes vénen de les acreditacions de Sant Bartomeu**, que és on la Comissió els publica;
  les consignes de Santa Tecla no en porten llista pròpia.

## Acompanyament musical dels balls

Els grups de grallers i sacaires del **seguici adult** són els mateixos que a la Festa Major de Sant
Bartomeu, amb els seus integrants (font: «Llistat músics 2026»), i s'apliquen a la Processó Cívica,
la Sortida d'Ofici, la Processó de Santa Tecla i la resta d'actes adults.

Les **cercaviles del 20 de setembre i les tres Matinals** en queden fora: el document sí que diu
quina colla acompanya cada ball —i l'app ho mostra, bloc per bloc, dins de l'ordre de sortida— però
no se'n coneixen els components, de manera que no hi surt cap nom.

De sis colles el document només en dona el nom curt (Guillaumes, Julián, Jan Lleida, Manel Vazquez,
Oriol Carbonell i Musixs — d'aquesta última, «Musixs (Marc Folch)»); l'app les anomena igual, sense
inventar-ne la denominació completa.

Dos blocs de bestiari sense foc no tenen cap colla de músics assignada: els sis últims de la
Cercavila de Gegants i els tres de la Matinal Gran (Giravols, Mini Dracs i Colla les PAAO). A la
versió anterior, els de la Matinal Gran anaven amb l'Escola de Grallers; l'app ho mostra tal com hi
consta ara, indicant-ho a cada bloc.

## Notes sobre la font

Tot el contingut és una transcripció literal: l'app no esmena el document en cap punt. Queden tres
llocs on el text no acaba de quadrar amb ell mateix i es mantenen tal com hi consten:

- **Processó Cívica.** A la plaça de l'Ajuntament hi diu «12 persones» i s'hi llisten 11 noms més el
  President, on hi consten **Gabri Gónzalez** i **Marta Lluís** (a la resta del document, Gabri
  González i Maria Lluís).
- **Sortida d'Ofici.** Hi consta **Aleix Ibañez**, sense accent (a la resta, Aleix Ibáñez).
- **Processó de Santa Tecla.** Els punts accessibles es descriuen com «Passeig de la Ribera (al
  costat de la Cobla)» a les indicacions i com «Passeig de la Ribera amb carrer Sant Pere» al
  voluntariat.

Les revisions del 16 i del 17 de setembre van anar corregint els punts que no lligaven: la Processó
Cívica diu «1 persona fixa (Raquel Llorià)», el voluntariat de l'esmorzar de les Matinals i la
Sortida d'Ofici donen el nombre de noms que hi consten, el bloc de la Comissió de la Matinal Petita
s'encapçala a la plaça de l'Ajuntament —que és on comença la cercavila—, la Processó de Santa Tecla
fixa l'hora a les 19 h a tot arreu i el seu bloc del Tram en Calma diu «3 persones fixes». La del 17
va corregir també Mara Juez (ara Marta Juez), Marta Argias (ara Marta Artigas) i Jesús Erole (ara
Jesús Eroles).

L'Entrada de la Santa no té quadre de seguretat propi. L'app hi mostra el de la Ballada final —la
mateixa nit i al mateix lloc— i ho diu explícitament.
