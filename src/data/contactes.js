/**
 * CONTACTES DE LA FESTA MAJOR
 *
 * Telèfons de les acreditacions «Organització» i «Premsa» (SFM26), en el
 * mateix ordre en què hi apareixen: Comissió, Regidoria de Tradicions i
 * Festes, Policia Local, Emergències, dispositiu sanitari i, finalment, el
 * Departament de Premsa de l'Ajuntament.
 */

export const CONTACTES = [
  {
    id: 'comissio',
    titol: 'Comissió de Festa Major',
    to: 'blau',
    persones: [
      { nom: 'Xavier Salmerón', rol: 'President', telefon: '677 593 386' },
      { nom: 'Gabriel González', telefon: '690 168 127' },
      { nom: 'Maria Junyent', telefon: '670 644 817' },
      { nom: 'Paula Hidalgo', telefon: '666 148 890' },
      { nom: 'Vinyet Casolivé', telefon: '696 054 131' },
      { nom: 'Irene Martínez', telefon: '618 266 531' },
      { nom: 'Marta Artigas', telefon: '606 984 383' },
      { nom: 'Aleix Ibàñez', telefon: '656 620 480' },
      { nom: 'Marta Juez', telefon: '619 211 642' },
      { nom: 'Clàudia Sauret', telefon: '686 325 673' },
      { nom: 'Mar Jaime', telefon: '663 906 635' },
      { nom: 'Vinyet Baqués', telefon: '686 248 362' },
      { nom: 'Maria Lluís', telefon: '663 376 983' },
      { nom: 'Adrià Ruiz', telefon: '684 465 701' },
      { nom: 'Raquel Llorià', telefon: '600 604 162' },
    ],
  },
  {
    id: 'regidoria',
    titol: 'Regidoria de Tradicions i Festes',
    to: 'sorra',
    persones: [{ nom: 'Oriol Julià', telefon: '618 896 822' }],
  },
  {
    id: 'policia',
    titol: 'Policia Local',
    to: 'blau',
    persones: [{ nom: 'Policia Local', telefon: '93 811 00 16' }],
  },
  {
    id: 'emergencies',
    titol: 'Emergències',
    to: 'vermell',
    destacat: true,
    persones: [{ nom: 'Telèfon únic d’emergències', telefon: '112' }],
  },
  {
    id: 'sanitari',
    titol: 'Dispositiu sanitari',
    to: 'vermell',
    nota: 'Només en cas d’emergència durant les cercaviles.',
    persones: [
      { nom: 'Juanjo Martín', rol: 'Creu Roja', telefon: '627 563 500' },
      { nom: 'Merche Verdejo', rol: 'Creu Roja', telefon: '678 401 887' },
    ],
  },
  {
    id: 'premsa',
    titol: 'Departament de Premsa de l’Ajuntament de Sitges',
    to: 'slate',
    persones: [
      { nom: 'Roser Forgas', telefon: '607 82 56 76' },
      { nom: 'Jordi Castañeda', telefon: '664 49 54 00' },
      { nom: 'Max Castro', telefon: '673 10 36 01' },
      { nom: 'Cristina Salido', telefon: '662 96 87 73' },
      { nom: 'Ferran Alcocer', telefon: '677 44 07 58' },
    ],
  },
]

export const TOTAL_CONTACTES = CONTACTES.reduce((n, g) => n + g.persones.length, 0)

/** Number net per als enllaços `tel:`. */
export const telHref = (telefon) => `tel:${telefon.replace(/\s/g, '')}`
