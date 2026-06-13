---
title: Test přístupnosti webu školičky Dvorek v sousedství
description: Test přístupnosti webu dětské skupiny Dvorek v sousedství.
tag: Přístupnost
tone: blue
date: "2025-01"
image: /img/test-pristupnosti-dvorek/01.jpg
draft: false
---

## **1. Úvod**

Pracuji v organizaci, která zakládá a provozuje školičky (oficiálně dětské skupiny) a pro každou novou školičku stavíme nový web s pár originálními ilustracemi a lehce odlišnou paletou barev. Skvělé kolegyně, které mají weby i vizuální identitu brandu jednotlivých školiček na starost již postavili přes 20 webů jednotlivých školek. Weby jsou poměrně identické a jsou odlišné primárně pár vizuálními prvky a texty, které popisují specifika každé školičky.

Tušil jsem, že weby budou co se týče digitální přístupnosti poměrně zvládnuté, ale otestoval jsem je, abych zjistil jak na tom opravdu jsme. A abychom měli náš standard ještě lepší. A také abych splnil zápočet pro předmět Digitální přístupnost.

Pro testování jsem si vybral jeden z webů nedávno nově otevřené školičky [Dvorek v sousedstv](https://www.dvorekvsousedstvi.cz/)í a prozkoumával jsem jeho homepage. Testoval jsem ho 12. února pomocí nástrojů **Google Lighthouse**, **WAVE Web Accessibility Evaluation Tool** a **axe DevTools**. Cílem bylo zjistit, jak dobře web splňuje základní pravidla přístupnosti a navrhnout případná zlepšení.

## **2. Výsledky testu**

## **2.1 Google Lighthouse (automatizovaná analýza)**

## Skóre přístupnosti: 92 / 100

## Hlavní zjištěné problémy:

- **Nedostatečný kontrast mezi pozadím a textem** – některé barvy pozadí a textu nemají dostatečný kontrastní poměr, což ztěžuje nebo znemožňuje čitelnost pro uživatele se zrakovým postižením.

![](/img/test-pristupnosti-dvorek/01.jpg)

![](/img/test-pristupnosti-dvorek/02.jpg)

![](/img/test-pristupnosti-dvorek/03.jpg)

- **Odkazy nemají jednoznačný název** – text odkazů (nebo alternativní texty obrázků sloužících jako odkazy) by měl být jasně rozpoznatelný, unikátní a zaměřitelný, což zlepšuje navigaci pro uživatele čteček obrazovky.

![](/img/test-pristupnosti-dvorek/04.jpg)

- **Problém s cookie lištou** – při navigaci pomocí klávesnice není možné odsouhlasit cookie lištu klávesou Enter. Uživatel na ni dorazí až po projití celé stránky tabulátorem, což může znesnadnit interakci. Navíc cookie lišta občas překrývá jiné prvky stránky, což může narušovat plynulost navigace. - Na tento problém nepřišel nástroj sám, ale objevil jsem ho po jeho ponouknutí, ať si zkusím projít web skrze klávesnici.

![](/img/test-pristupnosti-dvorek/05.jpg)

## **2.2 WAVE (vizuální kontrola)**

![](/img/test-pristupnosti-dvorek/06.jpg)

Nástroj WAVE objevil drobnější a techničtější chyby. Opět objevil ten stejný malovaný název školičky bez alt textu a sérií míst se špatným kontrastem. Níže sdílím část z výčtu chyb a to jen ty relevantní.

**Chyby (Errors)**

• **1× Obrázek v odkazu bez alternativního textu** (obrázek používaný jako odkaz nemá ALT popisek). - Jde o logo s bramborou, která odkazuje zpět na homepage.

![](/img/test-pristupnosti-dvorek/07.jpg)

Zároveň jsem si při testování všimnul, že při přesunu tabulátorem se sice označují jednotlivé odkazy, ale při doskákání na O školičce a rozkliknutí menu, tak označení rámečkem místa, kam jsem se přesunul tabulátorem zmizí.

• **4× Obrázky s chybějícím nebo prázdným ALT textem** (některé obrázky nemají žádný alternativní popis).

![](/img/test-pristupnosti-dvorek/08.jpg)

Domeček a zvoneček nemají Alt text, stejně tak některé z fotografií.

• **2× Prázdný odkaz** (odkazy neobsahují viditelný text ani alternativní popis). - Tady jsem objevil zajímavý skrytý odkaz, který na pohled není vidět, ale při pohybu v menu tabulátorem na něj člověk narazí, je to link na instagramový účet jiné naší školičky, jejíž web byl asi použitý jako šablona, protože testovaná školička instagram nemá.

**Chyby kontrastu (Contrast Errors)**

- **30× Velmi nízký kontrast** - Text a pozadí nemají dostatečný kontrast, což zhoršuje čitelnost pro uživatele se zrakovým postižením. - Opět opakuje se to samé, co už zjistil Google lightouse.

Naopak ale pozitivně nástroj hodnotí, že většina obrázků Alt texty má. Je tedy evidentní, že kolegyně při stavbě webu se snaží Alt texty používat, jen jí to na pár místech uteklo.

## **2.3 axeDevTools rozšíření**

Další nástroj zjistil víceméně stejná zjištění, která už zjistily předchozí nástroje. Nízký kontrast a semtam chybějící alttexty.

![](/img/test-pristupnosti-dvorek/09.jpg)

## **3. Doporučená vylepšení**

- **Zvýšit kontrast** (např. upravit barvy pozadí a textu, aby měly lepší poměr kontrastu). A dlouhodobě se vyvarovávat stejným odstínům barev a pozadí.
- **Přidat ALT popisky** k obrázkům, aby byly dostupné pro uživatele se čtečkami obrazovky. Opravdu na to nezapomenout a doplnit je všude.
- **Zlepšit navigaci klávesnicí** (zajistit, aby byly všechny interaktivní prvky označené rámečkem při postupu tabulátorem).

## **4. Závěr**

Celkově web **splňuje** základní pravidla přístupnosti, ale má několik oblastí k vylepšení. Doporučené úpravy mohou výrazně zlepšit použitelnost pro všechny uživatele, včetně těch se zrakovým či pohybovým omezením. Největším problémem je nízký kontrast barev, což bude možná při návrhu na opravu problém, protože tohle použití barev je poměrně zažité v naší vizuální identitě. Předám podněty kolegyním a jsem zvědavý, co z mých podnětů vezmou v potaz a na budoucích, případně i současných webech zlepší.
