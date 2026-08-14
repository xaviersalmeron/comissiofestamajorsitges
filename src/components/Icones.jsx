/**
 * Joc d'icones en SVG inline: cap dependència externa, hereten el color del
 * text (`currentColor`) i la mida via classes de Tailwind.
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Svg = ({ children, className = 'h-5 w-5', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
    {children}
  </svg>
)

export const IcAigua = (p) => (
  <Svg {...p}>
    <path d="M12 2.7s6 6.4 6 10.4a6 6 0 0 1-12 0c0-4 6-10.4 6-10.4Z" />
    <path d="M9 13.6a3 3 0 0 0 3 3" />
  </Svg>
)

export const IcEmergencia = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 4.4 6v6c0 4.5 3.1 8.3 7.6 9.3 4.5-1 7.6-4.8 7.6-9.3V6L12 2.8Z" />
    <path d="M12 8.4v4.2M12 15.8h.01" />
  </Svg>
)

export const IcComissio = (p) => (
  <Svg {...p}>
    <path d="M9.2 11.4a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" />
    <path d="M2.9 19.4a6.3 6.3 0 0 1 12.6 0" />
    <path d="M16.4 5.6a3.1 3.1 0 0 1 0 6" />
    <path d="M18 13.6a6.3 6.3 0 0 1 3.2 5.8" />
  </Svg>
)

export const IcVoluntariat = (p) => (
  <Svg {...p}>
    <path d="M12 20.4S4.2 15.9 4.2 10.3a3.9 3.9 0 0 1 7-2.4l.8 1 .8-1a3.9 3.9 0 0 1 7 2.4c0 5.6-7.8 10.1-7.8 10.1Z" />
  </Svg>
)

export const IcCerca = (p) => (
  <Svg {...p}>
    <circle cx="10.8" cy="10.8" r="6.4" />
    <path d="m15.5 15.5 4.2 4.2" />
  </Svg>
)

export const IcCreu = (p) => (
  <Svg {...p}>
    <path d="M6.2 6.2 17.8 17.8M17.8 6.2 6.2 17.8" />
  </Svg>
)

export const IcFletxa = (p) => (
  <Svg {...p}>
    <path d="m8.5 5.5 6.4 6.5-6.4 6.5" />
  </Svg>
)

export const IcRellotge = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.2 1.9" />
  </Svg>
)

export const IcMapa = (p) => (
  <Svg {...p}>
    <path d="m9.2 4.4 5.6 2.8 5-2.5v12.9l-5 2.5-5.6-2.8-5 2.5V6.9l5-2.5Z" />
    <path d="M9.2 4.4v12.9M14.8 7.2v12.9" />
  </Svg>
)

export const IcTelefon = (p) => (
  <Svg {...p}>
    <path d="M6.3 3.7h3.1l1.6 3.9-2 1.2a11 11 0 0 0 5.2 5.2l1.2-2 3.9 1.6v3.1a1.6 1.6 0 0 1-1.7 1.6A15.4 15.4 0 0 1 4.7 5.4a1.6 1.6 0 0 1 1.6-1.7Z" />
  </Svg>
)

export const IcLlista = (p) => (
  <Svg {...p}>
    <path d="M9 6.4h11M9 12h11M9 17.6h11M4.4 6.4h.01M4.4 12h.01M4.4 17.6h.01" />
  </Svg>
)

export const IcCalma = (p) => (
  <Svg {...p}>
    <path d="M3.6 12a8.4 8.4 0 0 1 8.4-8.4" />
    <path d="M20.4 12a8.4 8.4 0 0 1-8.4 8.4" />
    <path d="M8.1 12a3.9 3.9 0 0 1 7.8 0 3.9 3.9 0 0 1-7.8 0Z" />
  </Svg>
)

export const IcCadiraRodes = (p) => (
  <Svg {...p}>
    <circle cx="10.4" cy="4.2" r="1.7" />
    <path d="M9.4 7.6v5.1h4.9l2.8 5.6" />
    <path d="M14.3 17.3a4.8 4.8 0 1 1-4.9-6.6" />
    <path d="M16.4 18.3h2.9" />
  </Svg>
)

export const IcFoc = (p) => (
  <Svg {...p}>
    <path d="M12 2.9s4.6 3.6 4.6 8a4.6 4.6 0 0 1-9.2 0c0-1.4.5-2.5 1.2-3.4.3 1.1 1 1.8 1.8 1.8 1.2 0 1.6-1.6 1.6-6.4Z" />
    <path d="M12 21.1a5.9 5.9 0 0 0 5.9-5.9" />
  </Svg>
)

export const IcMusica = (p) => (
  <Svg {...p}>
    <path d="M9 17.4V5.6l10-1.8v11.8" />
    <circle cx="6.6" cy="17.9" r="2.4" />
    <circle cx="16.6" cy="15.6" r="2.4" />
  </Svg>
)

export const IcInfo = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 11v5.2M12 7.9h.01" />
  </Svg>
)

export const IcPluja = (p) => (
  <Svg {...p}>
    <path d="M7.4 15.4a4 4 0 0 1 .5-8 5.4 5.4 0 0 1 10.2 1.6 3.4 3.4 0 0 1-.6 6.4" />
    <path d="M8.8 18.2v2M12 19.2v2M15.2 18.2v2" />
  </Svg>
)

export const IcAvis = (p) => (
  <Svg {...p}>
    <path d="M10.6 4.2 2.9 17.5a1.6 1.6 0 0 0 1.4 2.4h15.4a1.6 1.6 0 0 0 1.4-2.4L13.4 4.2a1.6 1.6 0 0 0-2.8 0Z" />
    <path d="M12 9.4v4M12 16.6h.01" />
  </Svg>
)

export const IcFiltre = (p) => (
  <Svg {...p}>
    <path d="M3.6 5.4h16.8L14 12.8v5.5l-4 2v-7.5L3.6 5.4Z" />
  </Svg>
)

export const IcGegant = (p) => (
  <Svg {...p}>
    <path d="M12 3.2a3 3 0 0 1 3 3v1.4H9V6.2a3 3 0 0 1 3-3Z" />
    <path d="M7.8 20.8v-6.3l-1.9-1V10a2 2 0 0 1 2-2h8.2a2 2 0 0 1 2 2v3.5l-1.9 1v6.3" />
  </Svg>
)

export const IcPolicia = (p) => (
  <Svg {...p}>
    <path d="M12 2.9 5.2 5.4v5.5c0 4 2.7 7.6 6.8 8.6 4.1-1 6.8-4.6 6.8-8.6V5.4L12 2.9Z" />
    <path d="m9.6 11.6 1.7 1.7 3.3-3.4" />
  </Svg>
)

export const IcBombers = (p) => (
  <Svg {...p}>
    <path d="M3.2 16.4h13.4v-4.2H3.2v4.2Z" />
    <path d="M16.6 13.4h2.1l2.1 2.5v1h-4.2" />
    <circle cx="7" cy="18.4" r="1.9" />
    <circle cx="17.4" cy="18.4" r="1.9" />
    <path d="M6.1 12.2V9.4a1.5 1.5 0 0 1 1.5-1.5h1.7" />
  </Svg>
)

export const IcCreuRoja = (p) => (
  <Svg {...p}>
    <path d="M12 3.4v17.2M3.4 12h17.2" />
  </Svg>
)

/** Icona per a cada cos del desplegament de seguretat. */
export const ICONA_COS = {
  policia: IcPolicia,
  seguretat: IcEmergencia,
  creuRoja: IcCreuRoja,
  bombers: IcBombers,
}

/** Icona representativa per a cada categoria d'element festiu. */
export const ICONA_CATEGORIA = {
  imatgeria: IcGegant,
  foc: IcFoc,
  balls: IcVoluntariat,
  musica: IcMusica,
  castells: IcComissio,
}
