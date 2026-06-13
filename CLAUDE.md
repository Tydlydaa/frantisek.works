# CLAUDE.md — frantisek.works

Osobní portfolio web Františka Pfanna. Postaven na Astro, hostovaný na GitHub Pages.

---

## Stack

- **Framework:** Astro v6 (statický generátor)
- **Styly:** plain CSS s design systémem v `public/styles/global.css`
- **Obsah:** Markdown soubory v `src/content/`
- **Hosting:** GitHub Pages (`github.com/Tydlydaa/frantisek.works`)
- **Doména:** frantisek.works
- **Deploy:** automatický — každý push na `main` spustí GitHub Actions a nasadí web

---

## Struktura projektu

```
src/
  components/
    NavBar.astro          ← navigace (František | Hlavou · Rukama · Komunitně · Studijní portfolio · Kontakt)
    Button.astro          ← pill tlačítko (variant: solid / outline / ghost)
    Tag.astro             ← barevný štítek (tone: coral / gold / mint / blue)
    SectionHeading.astro  ← eyebrow + nadpis sekce
    ProjectCard.astro     ← karta projektu s hover efektem
  layouts/
    Layout.astro          ← base layout (nav + slot)
    ProjectDetail.astro   ← layout pro detail stránku projektu
    SectionIndex.astro    ← layout pro seznam projektů v sekci
  pages/
    index.astro           ← hlavní stránka (přehled všech sekcí)
    kontakt.astro         ← kontaktní stránka
    hlavou/
      index.astro         ← seznam všech projektů z Hlavou
      [slug].astro        ← detail projektu
    rukama/
      index.astro
      [slug].astro
    komunitne/
      index.astro
      [slug].astro
    studium/
      index.astro
      [slug].astro
  content/
    hlavou/               ← .md soubory projektů
    rukama/               ← .md soubory projektů
    komunitne/            ← .md soubory projektů
    studium/              ← .md soubory projektů
  content.config.ts       ← schema pro content collections
public/
  styles/
    global.css            ← design system (barvy, typografie, spacing)
```

---

## Čtyři sekce a jejich barevné tóny

| Sekce | Složka | Tone | Barva |
|---|---|---|---|
| Hlavou | `src/content/hlavou/` | `coral` | `#F08070` |
| Rukama | `src/content/rukama/` | `gold` | `#FAD04A` |
| Komunitně | `src/content/komunitne/` | `mint` | `#8ECFBE` |
| Studijní portfolio | `src/content/studium/` | `blue` | `#A8C4E0` |

---

## Jak přidat nový článek / projekt

### 1. Vytvoř nový .md soubor ve správné složce

Název souboru = URL slug (bez diakritiky, pomlčky místo mezer):
- `src/content/hlavou/den-pro-skolu.md`
- `src/content/rukama/detske-hriste-vinohrady.md`
- `src/content/studium/partyzanska-stezka.md`

### 2. Vyplň frontmatter

```yaml
---
title: Název projektu
description: Krátký popis — zobrazí se na kartě na hlavní stránce (1–2 věty).
tag: Service design          # štítek na kartě — napiš co chceš
tone: coral                  # coral | gold | mint | blue (dle sekce)
date: "2024-06"              # volitelné, formát YYYY-MM
image: /img/projekt.jpg      # volitelné — cesta k obrázku v public/img/
href: https://externi.odkaz  # volitelné — přesměruje místo na detail stránku
draft: false                 # true = článek se nezobrazí
---
```

### 3. Napiš obsah v Markdownu

Pod frontmatter piš normální Markdown. Podporuje nadpisy, odrážky, tučné, kurzívu, odkazy, obrázky.

```markdown
Úvodní odstavec...

## Podnadpis

Další text...

![popis obrázku](/img/foto.jpg)
```

### 4. Přidej obrázky (volitelné)

Obrázky patří do `public/img/` — pak je referencuj jako `/img/nazev.jpg`.

### 5. Nasaď

```bash
git add .
git commit -m "Add: název projektu"
git push
```
Za minutu je živé na frantisek.works.

---

## Frontmatter — přehled polí

| Pole | Povinné | Popis |
|---|---|---|
| `title` | ✓ | Název projektu / článku |
| `description` | ✓ | Krátký popis (zobrazí se na kartě) |
| `tag` | ✓ | Štítek — napiš libovolně (např. "Service design", "Truhlářství") |
| `tone` | ✓ | Barva: `coral` / `gold` / `mint` / `blue` |
| `date` | — | Datum ve formátu `"2024-06"` |
| `image` | — | Cesta k obrázku: `/img/nazev.jpg` |
| `href` | — | Externí odkaz — karta přesměruje sem místo na detail |
| `draft` | — | `true` = skryté, nezobrazí se na webu |

---

## Design systém — klíčové tokeny

```css
/* Barvy */
--bg: #F5F3EE;        /* pozadí stránky */
--surface: #EAE6DC;   /* karty */
--text: #1D364E;      /* primární text */
--muted: #5A6A7A;     /* sekundární text */

--coral: #F08070;     /* Hlavou */
--gold: #FAD04A;      /* Rukama */
--mint: #8ECFBE;      /* Komunitně */
--blue: #A8C4E0;      /* Studijní portfolio */

/* Font */
--font: 'DM Sans', sans-serif;
```

---

## Co je kde

- **Kontakt:** franta.pfann@gmail.com, linkedin.com/in/frantisek-pfann
- **GitHub repo:** github.com/Tydlydaa/frantisek.works
- **Live web:** frantisek.works
- **Dev server:** `npm run dev` → http://localhost:4321
