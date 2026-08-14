/**
 * ANNEX II — TRAM EN CALMA
 * Transcripció literal del document de consignes.
 */

export const TRAM_EN_CALMA = {
  ubicacio:
    'Carrer de Sant Gaudenci, amb inici a la meitat del carrer Sant Bartomeu i final passada la cruïlla amb carrer Sant Francesc (Processó de Sant Bartomeu).',
  queEs: [
    'El tram en calma és una iniciativa inclusiva que busca que tothom pugui gaudir de la festa, respectant la diversitat sensorial de la població. Està especialment pensat per a persones amb hipersensibilitat sensorial, entre d’elles acústica i visual, destinat a infants, adolescents i joves, així com persones adultes que puguin patir davant estímuls intensos com la música forta, petards, aglomeracions o llums estroboscòpiques.',
    'Per tal de garantir aquesta inclusió, se senyalitza un tram del recorregut d’aproximadament 100 metres per on passen les cercaviles i processons, per tal que les persones que ho necessiten puguin gaudir de la Festa de manera segura.',
  ],
  queImplica: [
    'Reducció del volum de la música i altres elements sonors.',
    'Reducció de les aglomeracions.',
    'Absència de pirotècnia amb tro (petards, focs artificials…).',
    'Evitar, sempre i quan sigui possible, llums intenses o intermitents.',
  ],
  queNoEs: [
    'No és un espai on el conjunt de balladors/es descansen i els músics no toquen; cal fer-ho, però d’una manera més pausada. No s’ha de passar sense ballar o de manera descuidada. Les persones que fan servir el tram en calma volen gaudir de la Festa, però necessiten que tot sigui més relaxat.',
    'És un espai on hi poden haver infants, tot i que no és un espai reservat per veure la festa amb cotxets i nadons, o en família. També hi poden gaudir persones joves, adultes i gent gran.',
    'És un espai on hi ha presència de foc, ja que no totes les persones amb diversitat sensorial tenen por al foc i el tram no pretén alterar la idiosincràsia de la Festa. Tot i haver-hi foc, aquest serà sense tro i n’hi haurà poca quantitat. És important respectar aquest tram per a les persones que el necessiten.',
    'No és un tram en silenci. A poblacions com Tarragona hi ha tram en silenci, sense pirotècnia ni soroll, però el de Sitges és un tram en calma.',
  ],
  consignesGenerals: [
    'Cal parar de ballar i tocar instruments, així com encendre foc, ABANS d’arribar al punt d’inici del Tram en Calma. Una persona (comissió/voluntariat) donarà el tret de sortida per tal d’entrar al tram.',
    'Un cop s’acaba el Tram en Calma, una persona (comissió/voluntariat) dona la consigna per tornar a les consignes habituals.',
  ],
  perColla: [
    {
      id: 'gegants',
      titol: 'Gegants',
      elements: ['gegants-vila', 'gegants-americanos', 'gegants-moros'],
      punts: [
        'Ball calmat / lent.',
        'Les voltes han de ser lentes.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Perquè les colles tinguin una referència, poden tenir present El Corpus.',
      ],
      musica: ['Gralla (2 màx.) i caixa (1).', 'Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'cabecuts',
      titol: 'Cabeçuts',
      elements: ['cabecuts'],
      punts: [
        'Ritme lent, sense salts.',
        'Ballar en conjunt, no per separat.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
      ],
      musica: ['Gralla (2 màx.) i caixa (1).', 'Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'drac-aliga',
      titol: 'Drac i Àliga',
      elements: ['drac', 'aliga'],
      punts: [
        'Pirotècnia sense tro.',
        'Ritme lent, sense voltes.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Passar sense córrer.',
      ],
      musica: [
        '2 timbals tocant el toc tradicional de cada colla, no tocant fort però que s’escolti. La resta de la colla no toca, però manté la formació.',
      ],
    },
    {
      id: 'diables',
      titol: 'Ball de Diables',
      elements: ['diables-vella', 'diables-jove', 'diables-abps'],
      punts: [
        'Encenen foc els personatges principals + 1 diable per colla.',
        'Pirotècnia sense tro.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Passar sense córrer.',
        'La colla passa fent una fila amb separació entre diables.',
        'La resta de membres desfilen sense encendre les seves masses.',
      ],
      musica: [
        '2 timbals tocant el toc tradicional de cada colla, no tocant fort però que s’escolti. La resta de la colla no toca, però manté la formació.',
      ],
    },
    {
      id: 'bastons',
      titol: 'Ball de Bastons',
      elements: ['bastons-jove', 'bastons-noies', 'bastons-mitjana', 'bastons-vella'],
      punts: [
        'Ball lent.',
        'Picar / marcar amb ritme lent i fluix.',
        'Les voltes s’han de procurar fer-les de manera pausada.',
        'No cridar.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
      ],
      musica: ['Gralla (2 màx.) i caixa (1).', 'Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'gitanes',
      titol: 'Ball de Gitanes',
      elements: ['gitanes-vila', 'gitanes-abps'],
      punts: [
        'No es fa ús de les castanyoles.',
        'Ball i moviment lent.',
        'S’ha de procurar fer el mínim de voltes possibles. No creuament entre balladors/es. No galerons.',
        'No cridar.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Perquè les colles tinguin una referència, poden tenir present La baixada d’escales.',
      ],
      musica: ['Gralla (2 màx.) i caixa (1).', 'Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'cintes',
      titol: 'Ball de Cintes',
      elements: ['cintes'],
      punts: [
        'Ball i moviment lent.',
        'S’ha de procurar fer el mínim de voltes possibles. No creuament entre balladors/es.',
        'No cridar.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Perquè les colles tinguin una referència, poden tenir present La baixada d’escales.',
      ],
      musica: ['Gralla (2 màx.) i caixa (1).', 'Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'pastorets',
      titol: 'Ball de Pastorets',
      elements: ['pastorets'],
      punts: [
        'Muntar bóta i dir vers, amb un to calmat, serè i sense cridar.',
        'Circuit lent i enmig del tram.',
        'Procurar no picar a terra; en fer-ho, procurar no fer soroll ni fer-ho amb moviments bruscos.',
        'No cridar.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Perquè les colles tinguin una referència, poden tenir present La baixada d’escales.',
      ],
      musica: ['Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'cercolets',
      titol: 'Ball de Cercolets',
      elements: ['cercolets'],
      punts: [
        'Muntar bóta i dir vers amb un to calmat, serè i sense cridar.',
        'Circuit lent i enmig del tram.',
        'Procurar saltar suau.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Perquè les colles tinguin una referència, poden tenir present La baixada d’escales.',
      ],
      musica: ['Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'panderetes',
      titol: 'Ball de Panderetes',
      elements: ['panderetes'],
      punts: [
        'No picar fort la pandereta.',
        'Circuit lent i enmig del tram.',
        'Procurar saltar suau.',
        'Fer el ball en fila.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Perquè les colles tinguin una referència, poden tenir present La baixada d’escales.',
      ],
      musica: ['Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'moixiganga',
      titol: 'La Moixiganga',
      elements: ['moixiganga'],
      punts: [
        'Muntar quadre i caminar lentament fins a arribar al final del tram.',
        'El ciri pot estar encès.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Perquè les colles tinguin una referència, poden tenir present La baixada d’escales.',
      ],
      musica: ['Gralla (2 màx.) i caixa (1).', 'Reduir el volum.', 'Ritme lent / piano.'],
    },
    {
      id: 'banda',
      titol: 'Banda',
      elements: ['banda'],
      punts: [
        'Cal fer una peça harmònica / suau.',
        'Reduir el volum.',
        'No apropar-se a la gent, a no ser que vinguin les persones que fan ús del tram en calma.',
        'Instruments com els plats o el bombo, fer-ho suau o bé no tocar.',
      ],
      musica: [],
    },
  ],
}
