# Desplegament

Aquesta app és **estàtica**: el build genera HTML, CSS, JS i imatges, sense servidor
d'aplicacions, sense base de dades i sense cap crida a serveis externs en temps d'execució. Es pot
servir des de qualsevol servidor web capaç de retornar fitxers.

## Validació prèvia a GitHub Pages

El repositori porta un workflow (`.github/workflows/deploy.yml`) que compila l'app i la publica a
GitHub Pages a cada `push` sobre la branca de desenvolupament.

### Pas manual, una sola vegada

Cal activar Pages abans que el workflow pugui desplegar: a
**Settings → Pages → Build and deployment**, triar `GitHub Actions` com a **Source**.

No es pot automatitzar: el `GITHUB_TOKEN` del workflow no té permís per crear el lloc de Pages
(`Resource not accessible by integration`), i el paràmetre `enablement` de `configure-pages` hi
falla per aquest motiu.

Un cop activat, cada push desplega sol. La primera vegada cal rellançar el workflow des de
*Actions → Desplega a GitHub Pages → Run workflow*, o fer qualsevol push nou.

La URL resultant és:

```
https://xaviersalmeron.github.io/comissiofestamajorsitges/
```

### Sobre la privacitat d'aquesta URL

GitHub Pages en un compte gratuït **només funciona amb el repositori públic, i la URL no té cap
control d'accés**: qualsevol persona que la tingui hi entra. L'app conté telèfons mòbils i noms de
membres de la Comissió, del voluntariat, de la Creu Roja i del Departament de Premsa.

Per limitar-ho s'hi ha afegit `robots.txt` amb `Disallow: /` i una etiqueta
`<meta name="robots" content="noindex, nofollow">`. Això evita que la pàgina surti als cercadors,
però **no és un control d'accés**. Recomanacions:

- Fer servir Pages només durant la validació i desactivar-lo quan s'acabi
  (*Settings → Pages → Source: None*).
- No repartir l'enllaç fora de l'equip que ha de validar.
- Al servidor definitiu, servir l'app darrere autenticació (HTTP Basic, SSO de l'Ajuntament o
  restricció per xarxa interna).

## Build

```bash
npm ci          # instal·la exactament les versions del package-lock.json
npm run build   # genera dist/
```

Requisits: **Node 20 o superior**. No calen variables d'entorn ni secrets.

El resultat queda a `dist/` i pesa uns 3,5 MB, la major part imatges (els plànols del document).

## Allotjament al servidor propi

Copiar el contingut de `dist/` a l'arrel pública del servidor. Notes:

- **Funciona en subcarpeta.** El `base` de Vite és relatiu (`./` a `vite.config.js`), de manera que
  l'app funciona igual a `https://exemple.cat/` que a `https://exemple.cat/consignes/`. No cal
  tocar res.
- **No cal cap regla de reescriptura.** L'app és una sola pàgina sense enrutament per URL: no hi ha
  rutes del costat del client que calgui redirigir a `index.html`.
- **Sense back-end ni CORS.** No fa cap petició de xarxa un cop carregada.
- **MIME types.** Assegurar que el servidor serveix `.js` com a `text/javascript` i `.css` com a
  `text/css`; els mòduls ES fallen si el tipus no és correcte.
- **Compressió.** Activar gzip o brotli per a `.js`, `.css` i `.html`. El JS són uns 335 kB, que
  amb gzip queden en uns 95 kB.
- **Memòria cau.** Els fitxers de `dist/assets/` porten un hash al nom i es poden cachejar de
  manera indefinida (`Cache-Control: public, max-age=31536000, immutable`). L'`index.html`, en
  canvi, s'ha de servir sense cache (`Cache-Control: no-cache`) perquè els desplegaments nous
  s'apliquin de seguida.
- **HTTPS.** Els enllaços de telèfon (`tel:`) funcionen igual, però convé HTTPS pel contingut.

### Exemple de configuració amb Nginx

```nginx
server {
    listen 443 ssl;
    server_name consignes.exemple.cat;

    root /var/www/consignes;
    index index.html;

    gzip on;
    gzip_types text/css text/javascript application/javascript image/svg+xml;

    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location = /index.html {
        add_header Cache-Control "no-cache";
    }

    # Recomanat mentre l'app contingui dades de contacte
    # auth_basic "Comissió de Festa Major";
    # auth_basic_user_file /etc/nginx/.htpasswd;
}
```

## Actualitzar el contingut

Tot el text del document viu a `src/data/`, separat de la interfície. Per publicar una versió nova
de les consignes n'hi ha prou a editar aquells fitxers i tornar a compilar; no cal tocar cap
component. El detall de cada mòdul és al `README.md`.
