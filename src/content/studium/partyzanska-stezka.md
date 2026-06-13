---
title: Partyzánská stezka — Case study
description: Redesign části webu Partyzánské stezky — od výzkumu a testování s uživateli až po nasazení objednávkového a podpůrného systému přes Stripe.
tag: UX design
tone: blue
date: "2025-02"
image: /img/partyzanska-stezka/01.jpg
draft: false
---

Jak dostat tištěné průvodce partyzánské stezky lidem do rukou?
A jak u toho ještě podpořit tvůrce stezky, aby získal prostředky pro další rozvoj?
Jak jsem na to šel?
To si přečtete níže!

![](/img/partyzanska-stezka/01.jpg)

## Partyzánská stezka - redesign části webu.

**Proč jsem upravoval kus webu partyzánské stezky? A jak jsem se k tomu vůbec dostal?**

Pojďme od začátku:

Martin Pfann v posledních dvou letech vytvořil úctyhodné dílo. Zmapoval historii antifašistického odboje na Horácku včetně opomíjených vzpomínek na pohostinnost a odvahu a sounáležitost místních obyvatel.

*"Historie a oživování paměti ve skutečnosti slouží k vytváření naší vlastní budoucnosti. Pro mě osobně bylo vždy těžké ztotožnit se s chrabrými vojáky a speciálně vycvičenými parašutisty. Zde hledám to dobré v každodennosti u běžný lidí, obyvatel, kteří i přes hrozbu prozrazení v nebezpečné době nezavírali dveře odbojářům a partyzánům, díky společnému vědomí vytvořili silnou solidární síť pro možnosti antifašistického odboje."* — Martin Pfann

Bádáním v archivech, procházením zpracovaných historických děl a procházením krajinou a mluvením s pamětníky získal dost materiálu, aby vytvořil intermediálního průvodce **Partyzánská stezka**.

Tištěný průvodce se střípky z historie, dokreslený profesionálně nahranými audiopříběhy, který prohlubuje prožitek ze zkoumaného tématu. Tištěného průvodce a nahrávky doplňuje web, kde si nahrávky můžete pustit, dozvědět se víc kontextu o celém projektu a najdete tam detailnější info o tom kudy stezka vede i jak si tištěnou verzi průvodce opatřit. Partyzánská stezka má dnes již dvě části (a dva průvodce), první část zpracoval a vydal Martin v rámci své diplomové práce na FAVU VUT v Brně. Druhou část zpracoval Martin během post-mag programu tamtéž.

Martin na projektu nepracoval sám, pomohlo mu s ním mnoho dalších lidí. Ale je hlavní autor a projekt táhne od začátku dodnes, tak budu primárně mluvit o něm.

## Vývoj Partyzánské stezky a jejích touchpointů

Martin v první fázi vydal tištěného průvodce první částí stezky (Telecí - Sněžné - Strachujov) a z něj odkazoval na rozcestník [linktr.ee](https://linktr.ee/partyzanskastezka), odkud se dalo dostat k audiopříběhům na Soundcloudu. A tam se dalo spouštět jednotlivé nahrávky.

Člověk musel mít v ruce tištěného průvodce, aby se cokoliv o stezce dozvěděl a příběhy se ze Soundcloudu pouštěly trochu kostrbatě. Všechno mělo své limity, v průvodci nebylo tak jednoduché se zorientovat, nahrávky se blbě hledaly a ještě hůř párovaly s jednotlivými zastaveními na cestě po Partyzánské stezce. Martin sbíral zpětnou vazbu od lidí, kteří s jednotlivými prvky stezky přišly do kontaktu a mezitím pracoval na druhé části stezky. (Sbíral další střípky historie, přednášel v místních kulturních domech pro pamětníky nebo si odskočil třeba do rádia popovídat o stezce.) V mezičase uběhlo léto, podzim, zima, jaro a další léto, kdy si desítky lidí pěšky procházeli jednotlivé části vydané Partyzánské stezky. Po získaných zkušenostech s používáním prvního průvodce vydal Martin nově redesignovaný první díl průvodce a k tomu vydal další díl tištěného průvodce, druhou část stezky (Strachujov - Veselí - Hodonín). A zároveň vytvořil místo jednoduchého rozcestníku na linktr.ee pořádný web, kde si člověk mohl zjistit víc o celém projektu, zjistit jak získat tištěného průvodce a i od počítače se dozvědět víc o tom, kudy Partyzánská stezka vede.

V situaci, kdy měl hotový web, oba nové tištěné průvodce a plánoval vydávat tiskovou zprávu o celém projektu, jsme se dohodli, že mu pomohu web trochu vylepšit.

Jo, Martin Pfann je můj bratr.

## Cože je s tím webem za problém?

Ze zběžného prozkoumání jsem identifikoval pár problémů:

- Pokud si lidi chtějí tištěného průvodce pořídit, musí si o něj buď napsat emailem nebo ho vyzvednout na 5 místech po republice.
- Na webu není žádná možnost, jak projekt nebo Martina podpořit. A to mi přišlo jako velká škoda.
- A pak celý web byl lehce kostrbatý a nedokonalý. Různý věci bych udělal jinak. Ale chtějí to lidi? Špatné zalamování a překrývání textů při různých velikostech oken asi ano. Ale formulaci textů bych měl spíš otestovat.

Koukli jsme na to spolu trochu víc do hloubky a identifikoval jsem několik problémů, které nás čekají:

- na úpravy webu i případných nástrojů, které by ho mohly zlepšit nejsou žádný peníze. Kdybychom potřebovali třeba nějakou aplikaci, která stojí třeba tisícovku ročně, tak to je furt moc, když není jasné, zda se to vrátí.
- web stavěla Martinova kamarádka v editoru cargo.site, který je primárně určený pro tvorbu uměleckých portfolii a má dost omezené možnosti
- Martin má ostych žádat lidi o příspěvek, když se jim projekt líbí a tištěného průvodce by rád prodával, ale jen za málo peněz
- Všichni, kdo se do tvorby a úprav webu zapojovali, včetně mě, jsou po UX stránce nedospělí a některé základní zákonitosti příjemného webového prostředí neznají

## Co jsem zjistil z výzkumu? Co už tedy vím a z čeho vycházím?

Martin si po celou dobu práce na stezce poctivě sbíral zpětnou vazbu od jejích uživatelů, od nadšenců do tématu, od přátel, od lidí, kteří stezku prošli pěšky, od těch kteří si jen prozkoumali průvodce a od lidí, kteří se o téma aktivně zajímali už předtím, než průvodce vytvořil. Vedle postupného sbírání skrze rozhovory, nebo zprávy, které mu uživatele sepsali, si také připravil dotazník, který mezi známé, kteří se stezkou interagovali rozeslal.

Snažil jsem se tedy pojmout všechno co už bylo vyzkoumané a zároveň pobrat i další motivace a směry rozvoje stezky a celého projektu, tak jak mi jej Martin zpřístupnil. Část z poznatků už Martin využil při tvorbě druhého průvodce a webu.

Shrnuji to tedy bodově níže:

**1. Uživatelé a kontext užití:**

Projekt má několik typů uživatelů:

Primární:
- Lidi, kteří chtějí vyrazit na tůru s tištěným průvodcem a zajímají se o historické a sociální kontexty, zejména o válečnou historii, případně konkrétně antifašistický odboj

Sekundární:
- Lidi, které zajímají historické a sociální kontexty (a zejména je těší antifašistický odboj) a baví je intermedialita projektu, ale pravděpodobně se do lokality nikdy nevydají
- Lidi, kteří rádi chodí na tůry a Partyzánská stezka je drobným zpestřením cestování a drobnou motivací, kam by mohli jít příště
- Martinovi přátelé, které baví všechny kulišárny, které vymyslí a tak je baví sledovat projekt Partyzánské stezky
- Klíčovou motivací je propojení tištěného průvodce a online obsahu, který uživatele navede na jednotlivé body stezky, příběhy a audionahrávky.

**2. Dosavadní stav a problémy:**

Tištěný průvodce:
- Tištěná část projektu je považována za funkční, dobře uživatelsky zpracovanou a motivační.
- Problém se dnes už neobjevuje na úrovni designu ani uživatelské zkušenosti s tištěným materiálem.

Web a digitální nástroje:
- Webová stránka slouží jako klíčový bod přístupu k audio nahrávkám a informacím, ale je stále považována za komplikovanou.
- Uživatelé pokud jsou přímo v krajině mezi obcemi mohou čelit problémům s pomalým načítáním, složitější navigací a nutností využívat data.
- Dřívější využití aplikace Echoes (GPS-based) bylo zrušeno, protože stažení aplikace bylo nepřesné a složité na použití

**3. Klíčové problémy a výzvy:**

Webová část:
- Nutnost zlepšit srozumitelnost, čitelnost a jednoduchost webu.
- Přidání dalších funkcí, jako je blog nebo odkazy na relevantní literaturu.
- Přemýšlení o gamifikaci a lepším propojení s platformami jako Mapy.cz.
- Zajištění dostupnosti obsahu i bez nutnosti velkého datového přenosu.

Audio nahrávky:
- Nahrávky druhé části jsou zpracovány lépe, ale stále je třeba najít efektivní způsob jejich zpřístupnění na streamovacích platformách (Bandcamp, Spotify), odchod od Soundcloudu a Echoes.

Finanční aspekty:
- Projekt je v současné době financován z grantů, ale distribuce a prezentace nejsou plně pokryty.
- Martin hledá způsoby, jak generovat příjmy (např. průvodcovské služby, crowdfunding, spolupráce s institucemi).

**5. Další cíle a dlouhodobá vize:**

- Vytvoření smysluplného a uživatelsky přívětivého webu, který bude obsahovat mapu, kam by případně i mohli uživatelé přidávat vlastní body týkající se antifašistického odboje.
- Rozšíření projektu na různé platformy a jeho větší propagace.
- Zajištění nástrojů pro uživatele k lepší přípravě na cestu (např. průvodce "jak se připravit na túru").
- Zapojení dalších zájemců prostřednictvím komunitních akcí.

*Všechny vstupy, které jsem postupně získával, jsem v různě formalizovaných verzích shromažďoval a propojoval v [Obsidianu](https://obsidian.md/). (Ten nově miluju.) ↓*

![](/img/partyzanska-stezka/02.jpg)

## Co s tím dál?

Snažil jsem se projekt hodně zúžit, aby byl zvládnutelný co se týče času i mých schopností. Z velkých příležitostí jsem udělal jasné a omezené cíle.

Zarámoval jsem si problem statement a navázal na něj designovou výzvou: *"Podstránka **Kde průvodce seženu** webu Partyzánské stezky byla navržena tak, **aby bylo možné si průvodce sehnat v kamenném obchodě nebo objednat emailem.** Zpozorovali jsme, že současné řešení má pouze krkolomné **objednávání přes email a proto si ji nikdo online neobjednává** a zároveň **není možné podpořit rozvoj stezky nezávisle** na objednání jakéhokoliv produktu.*

*Jak bychom mohli **zlepšit řešení pro naší cílovou skupinu tak, aby si tištěného průvodce objednali online alespoň 100x a získali jsme alespoň 20 dlouhodobých podporovatelů?***"

(Dlouhodobý podporovatele, cože? Dává to smysl? Uvidíme později!)

Rovnou tady odhaluji co se povedlo a co ne:

**Ty cíle tedy:**

- dát lidem možnost snadno objednat si tištěného průvodce ✅ -> dostat na web systém pro jednoduché objednání průvodců (a ilustrovaných pohlednic, které vytvořila ilustrátorka celého projektu Alice Šindelářová)
- dát lidem možnost podpořit projekt ✅ -> takže: dostat na web možnost jednorázové ✅ i dlouhodobé ❌ podpory projektu (nezávisle na objednání jakýchkoliv produktů)

**A nice to have cíle?**

- zpříjemnit lidem orientaci na celém webu ✅ -> zlepšit UX průchodu celým webem
- dát lidem možnost stáhnout si PDF verzi průvodce ❌
- zjednodušit lidem orientaci na stezce použitím oblíbených Mapy.cz ✅ -> přidat na web mapku stezky na Mapách.cz, kterou jde přidat do mobilní aplikace do mobilu -> přidat na Mapy.cz Martinovo oficiální trasování Partyzánské stezky

Když jsem si rámoval problém i výzvu i cíle, tak jsem si souběžně tvořil UX project brief, podle [vzoru Matěje Káninského](https://matejkaninsky.com/blog/ux-project-brief-template/), který mi pomáhal si některé části víc ujasnit a vědět, na co se ještě doptat Martina, případně co pak testovat s uživateli. Problém, výzvu i cíle jsem si ověřil a ujasnil s Martinem (aka klientem), abych nepálil čas na něčem, kde jsme se špatně pochopili.

**Cíle mám, co je nejlepší řešení?** Pustil jsem se do ideace, která byla přínosná jen zdánlivě. Pomohla mi trochu si otevřít oči a kouknout se na varianty řešení víc ze široka. Ale protože jsem ji udělal jen s půlkou týmu (tedy já + chatGPT) a druhá půlka týmu (Martin) chyběla, a já si nepřizval v téhle fázi nikoho dalšího, tak jsem si možná špatně uzavřel dveře před lepšími nápady a zůstal konzervativně u nápadů na řešení, které mi v hlavě naskakovaly od začátku. Ač pak během testování a iterování a testování a iterování jsem přecejen některá původní řešení zamítnul. Zpětně je mi to líto, že jsem si na ideaci nesehnal víc parťáků a nepověnoval jsem se jí.

*Ideace v Obsidianu (a s chatem GPT)*

![](/img/partyzanska-stezka/03.jpg)

## Prototypování, testování, iterování, testování, iterování,...........

V průběhu výzkumu jsem se řádně seznámil s platformou cargo.site, na které web běží. Včetně jejích limitací a možností.

A protože neumím moc pracovat ve Figmě, ale pár webů ve webových editorech jsem už někdy editoval a zvládám základně pracovat s HTML (což se nakonec hodilo), tak jsem se rozhodl tvořit a testovat low-fidelity prototypy, které jsem tvořil v kombinaci kreslení na tabletu a screenshotů z původního webu. A to překvapivě v Obsidianu (který jde editovat ve stejnou chvíli na počítači i tužkou v tabletu). A když už jsem měl základní představu otestovanou, tak jsem se pustil do tvorby high-fidelity prototypů a tvořil jsem je rovnou v cargo.site editoru, kde jsem si vytvořil kopii webu a testoval s uživateli rovnou na webu jen s pozměněnou doménou. Tohle řešení extrémně zjednodušilo přenos mezi prototypováním a "vývojem". Netvořil jsem pak prototypy, které by s naším omezením nebylo možné vytvořit a v reálném použití nasadit.

Testování probíhalo skrz online cally, kdy si tester procházel web (případně link na low-fi prototyp) a dostával ode mě dotazy a případně nějaké úkoly ("Sežeň si toho papírovýho průvodce.") a sledoval jsem, jak se jim daří je plnit. Testy probíhaly až na výjimky na teamsech, se zapnutým automatickým přepisem, což dost zrychlovalo práci. A zároveň po každým testu jsem ještě využil automatický přepis už bez respondenta, pro zapsání hlavních poznámek z testování a úkolů pro další iteraci.

Několik testerů jsem oslovoval napřímo, protože jsem věděl, že mají nějaký kontext, který se mi pro test hodí. Jiní se přihlásili sami na mou výzvu na facebooku. Celý pool testerů byl dost rozmanitý, ač věkově trochu úzký (25-38 let).

Pár příkladů: Tester, který stezku už osobně šel a celou trasu připravoval pro větší partu, ale web v téhle formě ještě neexistoval; tester, který stezku šel, ale byl součástí party a moc se do příprav nezapojoval; tester, který projekt znal, byl na přednášce o něm a má doma starší verzi průvodce, na webu nikdy nebyl; tester, který projekt znal, ale ví o něm minimum; testerky, které o projektu nikdy neslyšely a ani je moc nezajímal; tester, který projekt neznal, ale má vystudovaný grafický design a tvoří weby; apod.

Zároveň jsem chtěl využít co nejvíc času, který jsme měli na testování dedikovaný (vždy 30 minut, občas jsme přetáhli na 40 minut) a posunout tak nejen prodejní a podpůrnou část, ale celý web. Takže jsme vždy trávili poměrně dost času testováním celého webu a vedle "mojí" navrhované stránky jsem upravoval i ostatní stránky, aby líp fungovaly, nejen vizuálně, ale i textově.

Při prototypování a testování jsem postupoval RITE formou, takže jsem mezi každým testerem udělal nějaké úpravy a testoval dál.

![](/img/partyzanska-stezka/04.jpg)

První tři low-fi prototypy, které jsem postupně testoval, iteroval a testoval.

![](/img/partyzanska-stezka/05.jpg)

Ve chvíli, kdy už jsem věděl, co asi chci na webu mít, tak jsem přešel do tvorby prototypů rovnou v cargo.site editoru.

![](/img/partyzanska-stezka/06.jpg)

![](/img/partyzanska-stezka/07.jpg)

Rozhodnutí, že budu prototypovat rovnou v cargo.site, mě ale zároveň tlačilo k tomu, abych rovnou našel způsob, jak se bude za objednávání produktů platit a přes co pojede objednávací systém. Stejně tak, mít rovnou vymyšlené, jak bude možné přispívat jednorázově nebo dlouhodobě peníze.

Měl jsem tedy základní představu, chci tlačítka na objednávání ideálně přímo ze stránky Kde průvodce seženu, na stejném místě chci mít i možnost projekt podpořit. Možnost podpory jsem nakonec nasadil i na jiná místa webu, kam se pěkně hodily, pro lidi, kteří už stezku zrovna prochází, tak aby na ně vyskočili.

Ale hodně jsem se zasekl na hledání použitelné platformy.

![](/img/partyzanska-stezka/08.jpg)

Nejjednodušeji, ač trochu kostrbatě, se tvářil Bandcamp, který už na webu implementovaný je, jsou na něm nahrané audiopříběhy a jde přes něj nakupovat. Sice by musel uživatel vylézt z webu na bandcamp, ale to by se dalo přežít, kdyby to fungovalo dobře.

<div class="image-row">

![](/img/partyzanska-stezka/09.jpg)

![](/img/partyzanska-stezka/10.jpg)

![](/img/partyzanska-stezka/11.jpg)

</div>

Bohužel, Bandcamp při placení nakonec uživatele pošle na PayPal, kde si musí založit účet, aby mohl platit. Což (skoro) nikdo nechce a nikdo dělat nebude. (Otestováno.)

V jednu chvíli krásně vypadala vnitřní eshopová varianta, kterou v sobě má cargo.site, která ale stojí 6 dolarů měsíčně. I tu jsem otestoval. Fungovala pěkně. Zvažoval jsem, že bych tuhle variantu pro zjednodušení zasponzoroval, pak jsem zjistil, že aby šla použít, tak je potřeba mít placenou verzi cargo.site a v tu chvíli jsme se dostávali na 15 dolarů měsíčně u projektu, který bude prodávat hodně malé množství produktů a pravděpodobně jen v nějakých vlnách a později možná už jen párkrát za několik měsíců.

![](/img/partyzanska-stezka/12.jpg)

Zaregistroval jsem se na hromadě dalších platforem (Ko-Fi, Patreon, Tipeee, Gumroad, Buymeacoffee atd.), abych je vyzkoušel, asi na čtyřech z nich jsem se i napojil účtem a kartou, na jedné jsem dokonce přidal svoje celní číslo, které jsem si musel vygenerovat, aby to šlo. Všechno bylo krkolomný, nebo drahý, nebo ošklivý, nebo sice šlo dát na web tlačítka na podporu, ale nákup už bylo potřeba dělat na jiném webu. Než jsem přišel k objevu, který mi extrémně zjednodušil práci a byl nejlepší. Většina z těch nástrojů konec platby zprocesovává přes Stripe. A Stripe má sám v sobě možnost vytvořit si produkty a k nim platební URL a i má jednoduché prvky, které jdou vložit jako html kód a udělají na webu eshopový prvek na prodej. Buď jako položku v eshopu, nebo jen jako tlačítko.

To když jsem zjistil, tak už jsem si mohl hrát s tvorbou i testováním ideální formy tlačítka/položky v "eshopu", tak aby bylo funkční, pěkné a nativní pro použití.

![](/img/partyzanska-stezka/13.jpg)

Během testování a iterování jsem hledal vhodné textace položek, jejich zarovnání, testoval jsem ceny za kolik máme produkty prodávat, jakou formou mám položky vyzobrazovat (zda lépe fungují spíš galerie nebo slidery) a postupně web zdokonaloval, alespoň do té míry, do jaké mi to platforma, schopnosti a můj čas umožňovali.

![](/img/partyzanska-stezka/14.jpg)

![](/img/partyzanska-stezka/15.jpg)

Nakonec jsem nalezl tlačítka i texty i vizuálno s kterým jsem byl spokojený a z testů vycházelo dobře.

![](/img/partyzanska-stezka/16.jpg)

## Změnil jsem všechno?

Na webu zůstalo dost věcí, které jsem nezměnil, ač z testů nevycházely dobře. Nechtěl jsem zasahovat do některých autorských rozhodnutí hlavní designérky webu Ivany a Martina. Například obrázek na pozadí, který dost ztěžuje čtení i lidem, kteří mají dobrý zrak, jsem tam nechal. Sestavil jsem set doporučení, které mi z testování vychází, které už jsem do celého webu nezapracoval, ale dal jsem je Martinovi ke zvážení, že je může dál zapracovat.

Nakonec web funguje a dá se přes něj funkčně objednat tištěný průvodce stezkou i ilustrované pohlednice a zároveň přes něj jde tvůrce podpořit.

Z testů mi vylezlo, že dlouhodobou podporu podobného projektu by pravděpodobně jen z informací na webu nikdo nezvažoval. A proto jsem tam nakonec nechal jen jednorázovou podporu. Pro dlouhodobou podporu by web musel mít další stránku, kde by do většího detailu vysvětlovali autoři, co mají v plánu dělat dál. A proč je dobré je podporovat.

Zároveň z testování vylezlo, že stahovat si PDF nedává smysl, protože by to naopak zkazilo zážitek z pěkného zpracování papírového průvodce a je lepší si ho objednat a získat fyzicky.

Celý projekt je dostupný zde: [partyzanska-stezka.cargo.site](https://partyzanska-stezka.cargo.site/)

Během úprav a testování webu se podařilo nakontaktovat Mapy.cz a domluvit s nimi přidání Partyzánské stezky jako oficiální trasy do jejich aplikace. A vložili jsme mapu stezky do webu.

Ještě jednou tedy sdílím cíle projektu a jak se povedly:

***Ty cíle tedy:***

- *dát lidem možnost snadno objednat si tištěného průvodce ✅* *-> dostat na web systém pro jednoduché objednání průvodců (a ilustrovaných pohlednic, které vytvořila ilustrátorka celého projektu Alice Šindelářová)*
- *dát lidem možnost podpořit projekt ✅* *-> takže: dostat na web možnost jednorázové ✅ i dlouhodobé ❌ podpory projektu (nezávisle na objednání jakýchkoliv produktů)*

***A nice to have cíle?***

- *zpříjemnit lidem orientaci na celém webu ✅* *-> zlepšit UX průchodu celým webem*
- *dát lidem možnost stáhnout si PDF verzi průvodce ❌*
- *zjednodušit lidem orientaci na stezce použitím oblíbených Mapy.cz ✅* *-> přidat na web mapku stezky na Mapách.cz, kterou jde přidat do mobilní aplikace do mobilu* *-> přidat na Mapy.cz Martinovo oficiální trasování Partyzánské stezky*

## A co principy interakčního designu?

Při redesignu webu Partyzánské stezky pro mě byly důležité tyto principy:

1. **Hickův zákon** při zjednodušování objednávkového procesu. (A ubírání možností.)
2. **Jakobův zákon uživatelských očekávání** při integraci známých nástrojů jako Mapy.cz nebo Stripe.
3. **Zákon konzistence a standardizace** při sjednocování vizuálních a funkčních prvků webu.

Tyto principy snad přispěly k vytvoření funkčního a uživatelsky přívětivého webu.

## A jak to celé reflektuji?

- Spolupráce na projektu s Martinem byla skvělá, je super mít tak proaktivního "klienta", který průběžně upravoval části, které jsem si já na starost nevzal, ale z testů mi vycházelo, že nejsou dobré, a snažil se je ladit, aby to bylo co nejlepší. Občas sice na webu udělal některé rozhodnutí, které mi přišly špatné, ale svým názorem a otestováním s dalšími lidmi jsem snadno ukázal, že to může být lepší jinak.
- Mrzí mě, že jsem Martina nepřizval k testům, mohlo by to i dlouhodobě projektu pomoct, aby si v dalších fázích mohl testování dělat sám a věděl by lépe, proč jsem některá rozhodnutí udělal.
- Mrzí mě, že jsem málo konzultoval celý proces s Matějem a Petrem, konzultoval jsem s nimi prvotní zadání a pár drobností na začátku, ale kdybych s nimi konzultoval průběh tvorby víc, tak by určitě přišli s věcmi, které mě nenapadaly a mohly by projekt posunout dál.
- A přijde mi důležité, že jsme se postupně dostali k tomu, že ten web nemusí být perfektní, ale stačí, když bude funkční a přehledný.

Pořiďte si průvodce a vyražte na tůru! [partyzanska-stezka.cargo.site](https://partyzanska-stezka.cargo.site/)

Díky zejména Martinovi a všem testerům za spolupráci.

František Pfann
