# Design brief — frantisek.works

## O webu
Osobní portfolio Františka Pfanna. Primární cíl: profesní důvěryhodnost — service designer, kterého stojí za to oslovit. Šířka záběru (tesař + service designer + bar na festivalu) není rozptýlení, ale součást obrazu.

## Design system
K dispozici je hotový `global.css` s těmito tokeny:

**Barvy:**
- Pozadí: `#F5F3EE` (teplá béžová)
- Povrchy/karty: `#EAE6DC`
- Text: `#1D364E` (tmavá navy)
- Muted text: `#5A6A7A`
- Akcenty: coral `#F08070`, gold `#FAD04A`, mint `#8ECFBE`, blue `#A8C4E0`

**Font:** DM Sans (Google Fonts)

**Inspirace:** web a kniha design-futuring.com — teplá světlá paleta, barevné akcenty, minimalistické.

## Struktura stránky

### Navigace
- Vlevo: **František** (link na home)
- Vpravo: Hlavou · Rukama · Komunitně · Studijní portfolio · Kontakt

### Hero sekce
- Jméno: František Pfann
- Krátký medailonek: kdo jsem a co dělám
- Čtyři barevné tečky (coral, gold, mint, blue) jako vizuální prvek

### Sekce: Hlavou
Service designer a manažer. Sto skupin, Q designers, Den pro školu. KISK/MU. Mentoring. Poradenství k fungování organizací.
→ proklik na články a případovky

**Co service designer dělá (vlastními slovy):**
Service design je o porozumění lidem a jejich potřebám — a o tom, jak to přetavit do něčeho funkčního. Pracuje se zároveň v detailu i ve velkém měřítku: nejdřív pochopit co lidi opravdu potřebují, pak navrhnout jak to systémově udělat dobře.

**Co o Frantovi říká kolegyně Míša:**
"Zvídavý, do hloubky, do kontextu. Vidí věci v různém měřítku — velké i malé. Praktik a dělač, který se dokáže odzoomovat a skrz metody se kouknout v širším měřítku — a v tom vidět, jak věci dělat strategicky. Máloco ho rozhodí. I pod tlakem odvede kvalitní práci a poradí si s čímkoliv. Věci ho nezastraší, bere je jako výzvu. Bezprostřední, parťácký, autentický — bez pózy."

### Sekce: Rukama
Vystudovaný tesař. Truhlářství Čeho třeba (instagram.com/cehotreba). Studio Zenyš / Studio Baklažán — dětská hřiště, pískoviště.
→ proklik na projekty s fotkami

### Sekce: Komunitně
Bike Kitchen Praha (zakladatel). Podzimní snění / Nezbedný pařízek z.s. Bary na festivalech dobrovolnicky: Vlčkovice fest, Čajovna na Povalči, Zahrada ve Vrchlabí.

### Sekce: Studijní portfolio
Záznamy ze studia na KISK/MU a projekty z FF CUNI. Seznam příspěvků s proklikem.

### Kontakt
franta.pfann@gmail.com
linkedin.com/in/frantisek-pfann

## Tón a pocit
- Minimalistické, hodně bílého prostoru
- Osobní ale profesionální
- Šířka záběru je feature, ne bug
- Návštěvník má odejít s pocitem: "Franta je kreativní, má široký rozsah, je to schopný service designer"

## Technické poznámky
- Web je v Astro + plain CSS (žádný Tailwind)
- Obsah bude v .md souborech
- Implementuje Claude Code
