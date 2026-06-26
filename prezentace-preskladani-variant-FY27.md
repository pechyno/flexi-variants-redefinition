# Přeskládání variant ABRA Flexi — scénáře změn pro FY27

> **Účel dokumentu.** Strukturovaný textový přepis interní prezentace *„Přeskládání variant ABRA Flexi"* (packaging a cenové páky pro růst MRR ve FY27). Slouží jako ucelený podklad pro další práci s AI — obsahuje kompletní datový základ, všechny oblasti 1–8 i s jednotlivými scénáři, doporučení, finální součet a exekuční pravidla.
>
> **Zdroj:** `private/prezentace.html` (interaktivní HTML deck, 17 slidů). **Datový základ:** 06/2026. **Útvar:** Customer Success.

## Jak číst tento dokument

- **Oblasti 1–8** jsou kandidátní změny packagingu. Každá má jeden či více **scénářů** s odhadem dopadu do **MRR** (*plný* = teoretické maximum, *realistický* = po zohlednění churn/deaktivací), s **on-prem přínosem navíc**, **rizikem** a **hodnocením** (⭐ = doporučený scénář, ✅ bezpečná alternativa, 🔍 k diskuzi, ❌ zamítnuto).
- **Souhrn** agreguje doporučené scénáře do **finálního součtu FY27**. V HTML je interaktivní — jednotlivé oblasti lze zapínat/vypínat a součet (mezisoučet, CELKEM, on-prem) se přepočítá.
- Částky jsou v **Kč/měsíc (MRR)**, není-li uvedeno jinak; **ARR = MRR × 12**. Varianty: **Basic** (`basic2016`) · **Business** (`standard`) · **Premium** · **Account-office**.
- Datová pole: `hosting_instance` = cloudová instance licence; `price_czk` = měsíční cena licence; RRLP = rozšířená podpora (placený add-on).

---

## Datový základ a výhrady k datům

- 3 976 — licencí celkem
- 11 610 683 Kč — celkové MRR
- 139 328 196 Kč — celkové ARR (MRR × 12)
- 06/2026 — stav dat

Account-office (45 lic. / 1,74 M MRR) funkčně odpovídá Premium — z přesunových scénářů je vyňat.

763 licencí bez hosting_instance (on-premise, 1,75 M MRR) nemá usage data — scénáře nad bází se jich týkají jen u API/RRLP (tam data jsou).

On-premise báze: 763 licencí / 1 751 875 Kč MRR — Basic 173 / Business 346 / Premium 244 licencí. 72 % on-prem MRR tvoří Premium → scénáře nad Basic/Business mají na on-prem malý dopad; hlavní hodnota segmentu je retence.

Výhrady k datům — platí pro všechny scénáře

1. Usage mezd/majetku/šarží je kumulativní (lifetime) — před exekucí přepočítat s recency filtrem 12 měsíců; čísla jsou horní odhad dotčené báze — u MEZD již vyřešeno přepočtem na aktivitu 3/12/24 měsíců; trvá pro majetek a šarže.

2. api_licenses ≠ 0 = API zapnuto, nikoli nutně aktivně používáno — ověřit reálný traffic.

3. Počty uživatelů odhadnuty z ceny licence / ceníkové ceny varianty.

4. RRLP poplatek známe jen jako „od 171 Kč/měs." — ztráty z fee počítány tímto konzervativním floorem.

5. Data o úložišti (GB) pokrývají 918 licencí — předpoklad: zbytek báze využívá ≤1 GB; 15 licencí má individuálně sjednané vyšší bezplatné kvóty (ve scénářích zachovány).

---

## Benchmark · východisko pro oblasti 1–7 · Tržní kontext — Jak trh řeže varianty — ABRA Gen a CZ konkurence

*Interní benchmark — předplatné ABRA Gen/Flores (abra.eu) + CZ desktop konkurence, 06/2026*

| Jak řeší tiery ABRA Gen | Basic | Standard | Premium |
|---|---|---|---|
| Mzdy a personalistika | do 20 poměrů | do 100 poměrů | neomezeně |
| Hotline | pouze písemná | písemná + telefonní | přednostní odbavení |
| API | — | API pro běžné využití | bez omezení |
| Read-only uživatelé | — | 2 v ceně | 5 v ceně |
| Počet firem (IČO) | 1 | 5 | neomezeně |
| Max. uživatelů | 5 | 20 | neomezeně |

Jak řežou varianty CZ konkurenti (desktop, jednorázová licence + roční aktualizace)

| Hráč / varianta | Sklady | Mzdy | Majetek | Poznámka |
|---|---|---|---|---|
| POHODA Mini / Lite | ❌ | ❌ | ❌ | základní daňová evidence, 1 firma |
| POHODA Jazz | ✅ | ❌ | ❌ | obchodní varianta bez účetních, mzdových a majetkových agend |
| POHODA Standard / Premium | ✅ | ✅ | ✅ | plné varianty |
| Money S3 Mini / Lite | ❌ | ❌ | ❌ | Lite = limit POČTU ZÁZNAMŮ |
| Money S3 Office | ❌ | ❌ | ✅ | účetnictví pro účetní firmy, bez skladů a mezd |
| Money S3 Sklad / Premium | ✅ | Premium ✅ | ✅ | Premium = vše, neomezeně firem |

Vzor trhu: nízké varianty BEZ skladů a BEZ majetku jsou u CZ konkurence norma (Pohoda Mini/Lite, Money Mini) — vyřazení z Flexi Basic je v souladu s trhem ekonomických systémů, nejen fakturovátek.

Money S3 Lite = precedens početních limitů záznamů u velkého CZ hráče — argument „limity nikdo nedělá" neplatí; rozhodnutí FY27 limity nezavádět tím není dotčeno, jen je to vědomá volba, ne tržní nutnost.

Gen nepřesouvá mzdy mezi tiery — limituje POČET POMĚRŮ. Pro Flexi z toho plyne kandidátní scénář M5 : mzdy zůstávají v Business do limitu (např. 25 zaměstnanců), nad limit Premium. Mobilní mikro-segment (235 lic.) nemá důvod k churnu, sticky segment limit přirozeně překračuje. Interně konzistentní s portfoliem ABRA — k diskuzi vedle M1.

Nové zjištění: read-only uživatelé. Flexi dnes: NEOMEZENÝ počet RO uživatelů zdarma ve všech variantách — celkem ~11 000 RO uživatelů napříč licencemi. Gen model: 0 / 2 / 5 v ceně dle tieru, další za příplatek. Teoretický strop monetizace při ~99 Kč/RO už./měs. je ~1,1 M Kč MRR; realisticky po kvótách zdarma a deaktivacích řádově 110–220 tis. Kč MRR. ⚠ Vyžaduje datovou analýzu rozložení RO uživatelů po licencích a variantách — kandidát na samostatnou oblast č. 8.

---

## Oblast 1 — Mzdy a personalistika

Výchozí stav: modul ve variantě Business. AKTIVNĚ (mzda vypočtená v posledních 3 měsících) ho používá 690 z 1 263 cloudových Business licencí (55 %), MRR dotčených 1 751 tis. Kč. Dalších 132 licencí má mzdy pouze historicky — přesun je nezasáhne. Vývojově nejnákladnější modul. Pásma počítána podle firmy s nejvyšším počtem mezd za poslední 3 měsíce pod licencí.

1–60 mezd (3 měs.) · 565 lic. 1 213 728 Kč MRR · medián 4 osoby

61–300 · 113 lic. 513 053 Kč MRR · medián 30 osob

301+ · 12 lic. 24 459 Kč MRR · medián 141 osob

≈ do 20 zaměstnanců: mix mikro (mobilní) a malých firem (již sticky)

≈ 20–100 zaměstnanců: velmi sticky — odchod = projekt

≈ 100+ zaměstnanců: odchod prakticky nemožný

Aktivita v čase: 3 měsíce = 690 licencí · 12 měsíců = 729 · 24 měsíců = 751 · lifetime = 822. Pozn.: 61+ mezd za 3 měsíce odpovídá firmě s ~20+ zaměstnanci — pásma na 3M okně měří velikost firmy, ne délku historie. Šířky pásem v grafu jsou orientační (oranžové 16,4 % a zelené 1,7 % zvětšeny pro čitelnost).

| # | Scénář | Mechanismus | Upside MRR | On-prem NAVÍC (odhad) | MRR v ohrožení | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| M1 | Plný přesun do Premium | Všech 690 AKTIVNÍCH licencí při renewalu nuceně Premium (+320 Kč/už.); 132 neaktivních přesun nepocítí | +528 tis. ≈ +6,3 M ARR | +75 tis. | 1 751 tis. | Break-even churn 23 % — mobilní segment reálně odchází; recency filtr zmenšil citlivé jádro o 132 licencí | ⭐ Doporučený scénář |
| M2 | Jen nové prodeje | Báze plný grandfathering; od 1. 10. 2026 (odhad) mzdy jen v Premium pro nové zákazníky | 0 z báze; new business mix shift (65 % nových „mzdových" → Premium místo Business, +320 Kč/už. navždy) | 0 | 0 | Minimální | ✅ Bezpečný základ, pomalý náběh |
| M3 | Stickiness-gated vynucení | Nové prodeje dle M2 + báze: vynucení při renewalu jen u pásma 61+ mezd za 3 měs. (125 lic. ≈ firmy 20+ zaměstnanců); pásmo 1–60 grandfathering | +161 tis. (61+) / +81 tis. (jen 121+, 52 lic.) ≈ +1,0–1,9 M ARR | +22 tis. (61+) / +11 tis. (121+) | 538 tis. | Nízké; vyžaduje čistou komunikaci pravidel | ✅ Alternativa s nižší expozicí — s 3M pásmy zachytává jen střední firmy, nižší výnos než dříve uváděno |
| M4 | Mzdy jako per-employee add-on | Modul zůstává v Business, ale účtuje se per aktivní zaměstnanec (10–20 Kč/zam./měs.) — model Gusto/ADP | +169–338 tis. (16 879 reálně aktivních zaměstnanců s mzdou za 3 měs. × 10–20 Kč) ≈ +2,0–4,1 M ARR | +24–48 tis. | nízké (platí se za reálné použití) | Změna cenového modelu = vyšší komunikační a billingová náročnost | 🔍 Strategicky nejčistší, ale FY28 téma |

On-prem odhad: škálováno poměrem MRR on-prem/cloud dané varianty (Basic ×0,091 · Business ×0,142); předpokládá stejnou adopci featur jako v cloudu. U API a RRLP jde o přímý výpočet a hodnoty jsou již součástí hlavního čísla. Vynucení u on-prem probíhá při obnově maintenance. Mzdová čísla nově počítána z aktivity za poslední 3 měsíce (recency filtr) — výhrada ke kumulativním datům je pro tuto oblast vyřešena.

.xdense .stick-seg .ss-sub{font-size:11px;} .xdense .stick-cap{font-size:11.5px;padding-top:1px;}

---

## Oblast 2 — Šarže a expirace

Výchozí stav: v Business; používá jen 20 z 1 263 Business licencí (1,6 %), MRR dotčených 73 tis. Kč. Modul aktuálně v nevyhovujícím technickém stavu.

| # | Scénář | Mechanismus | Upside MRR | On-prem NAVÍC (odhad) | MRR v ohrožení | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| Š1 | Přesun do Premium po opravě | Release opravené verze = vstup do Premium; báze 20 licencí grandfathering nebo měkký přechod | +22 tis. plný / ~15 tis. realisticky +264 / +180 tis. ARR | +3 tis. | 73 tis. | Minimální; oprava = investice do Premium hodnoty („nová šarže-funkcionalita přichází do Premium") | ⭐ Doporučený scénář |
| Š2 | Okamžitý přesun s grandfatheringem | Nové prodeje hned jen Premium, báze beze změny, oprava následně | jen new business efekt | 0 | 0 | Reputační — „dráž za rozbité" u nových zákazníků | ❌ Porušuje vlastní zásadu |
| Š3 | Ponechat v Business, Premium dostane nadstavbu | Základní šarže/expirace zůstávají Business; Premium získá FEFO logiku, expirační reporting a alerty | nepřímý (posílení Premium) | — | 0 | Vyžaduje dodatečný vývoj nadstavby | 🔍 Alternativa, pokud oprava nabere zpoždění |

On-prem odhad: škálováno poměrem MRR on-prem/cloud dané varianty (Basic ×0,091 · Business ×0,142); předpokládá stejnou adopci featur jako v cloudu. U API a RRLP jde o přímý výpočet a hodnoty jsou již součástí hlavního čísla. Vynucení u on-prem probíhá při obnově maintenance.

---

## Oblast 3 — Skladové hospodářství ve variantě Basic

Výchozí stav: sklady dostupné od Basic. Používá je 176 z 1 227 cloudových Basic licencí (14 %), MRR dotčených 103 tis. Kč. Basic je positioned pro živnostníky bez zaměstnanců — sklad je signál obchodní firmy.

| # | Scénář | Mechanismus | Upside MRR | On-prem NAVÍC (odhad) | MRR v ohrožení | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| SK1 | Vyřazení z Basic — nové prodeje + renewal vlna | Od 1. 10. 2026 (odhad) sklady od Business; báze 176 licencí při renewalu s 6měsíčním předstihem a přechodovou slevou | +152 tis. plný / ~100 tis. realisticky ≈ +1,2–1,8 M ARR | +14 tis. | 103 tis. | Střední — srovnání ceny Basic (425 Kč) s Fakturoid/iDoklad po ořezání | ⭐ Doporučený scénář |
| SK2 | Limit místo banu | Basic: 1 sklad / max 100 skladových karet; plné sklady od Business | ~60–100 tis. (jen nad-limitní část báze) ≈ +0,7–1,2 M ARR | +5–9 tis. | < 50 tis. | Nízké; vyžaduje vývoj enforcementu limitu | ❌ Limituje počet záznamů v agendě — precedens ve FY27 nezavádíme |
| SK3 | Jen nové prodeje | Báze plný grandfathering navždy | 0 z báze | 0 | 0 | Minimální | 🔍 Nejměkčí varianta, nechává peníze na stole |

On-prem odhad: škálováno poměrem MRR on-prem/cloud dané varianty (Basic ×0,091 · Business ×0,142); předpokládá stejnou adopci featur jako v cloudu. U API a RRLP jde o přímý výpočet a hodnoty jsou již součástí hlavního čísla. Vynucení u on-prem probíhá při obnově maintenance.

---

## Oblast 4 — Majetek ve variantě Basic

Výchozí stav: majetek dostupný od Basic. Používá ho 443 z 1 227 cloudových Basic licencí (36 %), MRR dotčených 233 tis. Kč. Medián jen 5 majetkových karet — většina jsou mikro-uživatelé (auto + notebook).

Detail: pásma dle počtu karet a typová skladba (Basic, 443 licencí) · procenta typů = podíl na celkovém počtu karet v pásmu

| Pásmo karet | Licencí | % | MRR | Hmotný | Drobný | Neodepis. | Nehmotný |
|---|---|---|---|---|---|---|---|
| 1–3 | 193 | 43,6 % | 90 553 Kč | 81 % | 1 % | 16 % | 2 % |
| 4–5 | 40 | 9,0 % | 19 264 Kč | 61 % | 6 % | 31 % | 2 % |
| 6–10 | 80 | 18,1 % | 39 587 Kč | 69 % | 4 % | 25 % | 1 % |
| 11–50 | 90 | 20,3 % | 53 351 Kč | 51 % | 8 % | 40 % | 1 % |
| 51+ | 40 | 9,0 % | 29 799 Kč | 19 % | 26 % | 55 % | 0 % |

Mikro-pásma drží klasický odepisovaný hmotný majetek; heavy users (51+) používají modul převážně jako evidenci neodepisovaného a drobného majetku (81 % karet).

| # | Scénář | Mechanismus | Upside MRR | On-prem NAVÍC (odhad) | MRR v ohrožení | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| MA1 | Úplné vyřazení z Basic — majetek až od Business | Všech 443 licencí nuceně Business | +350 tis. plný / +150–182 tis. realisticky (upgradují pásma 6+ karet, 210 lic.; mikro-pásma 1–5 modul spíše opustí) ≈ +1,8–2,2 M ARR realisticky | +32 tis. | 233 tis. | Vysoká iritace mikro-segmentu (193 licencí má ≤3 karty) — reputační riziko za minimální hodnotu | ⭐ Doporučený scénář |
| MA2 | Limit do 5 karet zdarma | Basic: majetek do 5 karet v ceně; nad limit od Business. Dotčeno 210 nad-limitních licencí (122,7 tis. MRR) | +182 tis. plný / ~150 tis. realisticky ≈ +1,8–2,2 M ARR | +17 tis. | 122,7 tis. | Nízké — chráněno 233 mikro-licencí; vzor „feature limits, not gates" (HubSpot/Zendesk) | ❌ Limituje počet záznamů v agendě — precedens ve FY27 nezavádíme |
| MA3 | Jen nové prodeje | Od 1. 10. 2026 (odhad) majetek od Business pro nové; báze grandfathering | 0 z báze | 0 | 0 | Minimální | ✅ Alternativa bez iritace báze |

On-prem odhad: škálováno poměrem MRR on-prem/cloud dané varianty (Basic ×0,091 · Business ×0,142); předpokládá stejnou adopci featur jako v cloudu. U API a RRLP jde o přímý výpočet a hodnoty jsou již součástí hlavního čísla. Vynucení u on-prem probíhá při obnově maintenance.

---

## Oblasti 3–4 · Benchmark · Tržní kontext — Basic vs. konkurence — tržní kontext (sklady & majetek)

*Fakturační nástroje CZ/SK v cenové relaci Basic ~425 Kč/měs.; ceny bez DPH, 06/2026*

| Nástroj | Tarif u ~425 Kč | Jednoduchý sklad | Skladové hospodářství (doklady, ocenění, inventury) | Majetek (odpisy) | Podvojné účetnictví |
|---|---|---|---|---|---|
| Fakturoid | Na maximum 393–429 Kč | ✅ | ❌ | ❌ | ❌ |
| iDoklad | placené od 187 Kč | ✅ | ❌ | ❌ | ❌ |
| SuperFaktura | Základ 129 / Standard 279 Kč | ✅ (i v nejlevnějším) | ❌ | ❌ | ❌ |
| Vyfakturuj | Mini 175 / Ideal 299 / Profi 620 Kč | ❌ (jen ceník) | ❌ | ❌ | ❌ |
| ABRA Flexi Basic | 425 Kč | ✅ | ✅ (dnes) | ✅ (dnes) | ✅ |

MAJETEK: vyřazení z Basic je plně v souladu s trhem — evidenci majetku s odpisy nenabízí v této cenové relaci nikdo. Konkurenční riziko scénáře MA1 je nulové; zbývá pouze interní churn riziko (řešeno komunikací a předstihem).

SKLADY: jednoduchá skladová evidence (položky + stavy) je v této ceně tržní standard — Fakturoid ji má za 429 Kč, SuperFaktura za 129 Kč. Plnohodnotné skladové hospodářství ERP typu nemá nikdo. Riziko SK1: Basic bez jakéhokoli skladu za 425 Kč stojí obsahově POD Fakturoidem za 429 Kč. Mitigace: v komunikaci a positioningu opřít Basic o podvojné účetnictví (unikát v segmentu) a zvážit ponechání jednoduché evidence zásob jako odlišení skladové EVIDENCE od skladového HOSPODÁŘSTVÍ — bez zavádění početních limitů.

---

## Oblast 5 — API

Výchozí stav: API od Basic (limity 5/10/20 tis. requestů denně, přístup zpoplatněn cenou uživatelské licence). API zapnuto u 136 z 1 400 Basic licencí (9,7 %), MRR dotčených 137 tis. Kč. Celkem má API zapnuto 1 323 z 3 976 licencí (33,3 %) — Basic 136 (9,7 %) · Business 503 (31,3 %) · Premium 639 (69,3 %) · Account-office 45 (100 %). Penetrace roste s variantou.

Klíčový insight: zákazník s API je integrovaný (e-shop, Balíkobot) — switching cost hraje pro nás, churn riziko nuceného upgradu je nízké.

| # | Scénář | Mechanismus | Upside MRR | Z toho on-prem | MRR v ohrožení | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| A1 | API až od Business | 136 Basic licencí s API → upgrade na Business (+630 Kč/už., 319 odhad. uživatelů); oznámit Q3, účinnost Q4 FY27, přechodová sleva 1. rok | +201 tis. plný / ~170 tis. realisticky ≈ +2,0–2,4 M ARR | 12 tis. ✓ | 137 tis. | Nízké (integrace = lock-in); střední iritace → předstih 3–6 měs. | 🔍 Nezvoleno — API zůstává dostupné od Basic |
| A2 | Read-only API v Basic | Basic: read-only, 1 000 req/den (reporting, export); zápis od Business | ~120–160 tis. (část báze vystačí s read-only) ≈ +1,4–1,9 M ARR | 7–11 tis. | < 137 tis. | Nízké; vyžaduje vývoj rozlišení read/write | ✅ Měkčí záloha |
| A3 | API v Basic jako placený add-on | API zůstává v Basic za příplatek (300–425 Kč/měs.) bez nutnosti upgradu | +41 tis. (300 Kč) až +58 tis. (425 Kč) +492–696 tis. ARR | 3–4 tis. ✓ | 0 | Minimální | 🔍 Nejnižší výnos, nulové riziko |
| A4 | Restrukturalizace limitů a placených balíčků | V ceně: Basic 1 000 / Business 5 000 / Premium 10 000 req/den (dnes 5/10/20 tis.). Placené balíčky — objemy sníženy na polovinu: do 25 000/den = 1 000 Kč/měs. · do 50 000 = 2 500 Kč/měs. · do 100 000 = 5 000 Kč/měs. · nový 4. stupeň do 200 000 = 10 000 Kč/měs. (pouze Premium) | +30–80 tis. konzervativně; nižší limity v ceně přesunou část aktivních integrací do balíčků — přepočítat dle reálného trafficu +0,4–1,0 M ARR (konzerv.) | 8–21 tis. | 0 | Snížení limitů v ceně dopadá i na stávající integrace (Premium 20k → 10k) — nutný předstih a přechodové období | ⭐ Doporučený scénář |

On-prem: hodnoty „z toho" jsou již součástí hlavního Upside (přímý výpočet z plné licenční báze, ✓ = z licenčních dat, jinak odhad ×0,091/×0,142). Vynucení u on-prem probíhá při obnově maintenance.

---

## Oblast 6 — Rozšířená podpora (RRLP) — statistika a scénáře

Výchozí stav: RRLP jako add-on „od 171 Kč/měs." dostupná všem variantám, aktivní u 889 licencí. RRLP poplatek není součástí MRR v price_czk — ztráty počítány floorem 171 Kč.

| Varianta | Licencí celkem | RRLP aktivní | % varianty | RRLP prošlá (historicky měli) | MRR licencí s aktivní RRLP |
|---|---|---|---|---|---|
| Basic (basic2016) | 1 400 | 134 | 9,6 % | — | 106 318 Kč |
| Business (standard) | 1 609 | 400 | 24,9 % | — | 1 138 162 Kč |
| Premium | 922 | 339 | 36,8 % | — | 2 382 614 Kč |
| Account-office | 45 | 16 | 35,6 % | — | 594 587 Kč |
| Celkem | 3 976 | 889 | 22,4 % | 323 | 4 221 681 Kč |

Penetrace RRLP roste s variantou ( 9,6 % → 24,9 % → 36,8 %) — telefonická podpora je přirozený atribut vyšších segmentů. 323 licencí má RRLP prošlou = win-back segment pro Support/Sales.

| # | Scénář | Mechanismus | Upside MRR | Z toho on-prem | Ztráta RRLP fee | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| R1 | Mix: Basic nemožná · Business i Premium za příplatek | Basic: RRLP nemožná (self-service + Fin AI lite), 134 aktivních licencí → upgrade na Business, nebo drop · Business i Premium: RRLP zůstává za příplatek jako dnes | +54–135 tis. (dle míry upgradu 40–100 %) ≈ +0,6–1,6 M ARR | 9 tis. ✓ | drop části Basic = až −23 tis. | Drop riziko v Basic (zmírněno Fin AI náhradou); žádný zásah do Business/Premium | ✅ Jednoduchá exekuce, sám o sobě nižší výnos |
| R2 | Zdražení RRLP o 50 % (10 % → 15 % ceny licence) | Cena RRLP se mění z ~10 % na 15 % ceny licence (floor 171 → 257 Kč/měs.); platí pro všech 889 aktivních; žádná změna dostupnosti | +223 tis. plný / +120–225 tis. realisticky (cancel 0–15 %) ≈ +1,4–2,7 M ARR | 25 tis. ✓ | 0 (jde o zdražení) | Break-even cancel rate 33 % — při odchodu více než třetiny předplatitelů je změna ztrátová; zdražení o 50 % vyžaduje komunikaci s hodnotovým argumentem (SLA, prioritní fronta) | ✅ Největší přímý výnos v oblasti RRLP |
| R3 | Tierovaná RRLP (bez vazby na varianty) | Standard 171 / Priority 400 / Premium SLA 800 Kč/měs.; dostupná všem, Basic jen Standard | +50–150 tis. (upsell uvnitř 889 aktivních + win-back 323 prošlých) ≈ +0,6–1,8 M ARR | 8–23 tis. | 0 | Minimální; čistě cenová architektura podpory | ✅ Bezpečný, nezávislý na packagingu |
| R4 | Kombinace R1 + R3 | Basic: RRLP nemožná (jen self-service + Fin AI lite) · Business: tierovaná RRLP za příplatek (Standard/Priority) · Premium: Standard RRLP v ceně + Priority za příplatek | +135 tis. (Basic upgrade, plný) + upsell tierů; −58 tis. Premium Standard fee net ≈ +1,0–1,8 M ARR | 0–12 tis. ✓ | −58 tis. | Drop riziko Basic zmírněno Fin AI náhradou; Premium value ↑ | ✅ Alternativa — vyšší net (+80–150 tis.), ale složitější exekuce (tiery, Premium fee) |
| R5 | Kombinace R1 + R2 | Basic: RRLP nemožná → upgrade na Business nebo drop · Business / Premium / Account-office: RRLP za příplatek ve zvýšené ceně 15 % ceny licence (755 licencí) | +347 tis. plný (212 zdražení + 135 Basic upgrade) / net +170–300 tis. realisticky ≈ +2,0–3,6 M ARR | 34 tis. ✓ | drop části Basic = až −23 tis. (v net rozsahu zohledněno) | Kumulace dvou změn v jedné oblasti — komunikovat jako jeden balík (nové ceny + nová dostupnost) v jednom sdělení; cancel riziko viz R2 | ⭐ Doporučený scénář net +170–300 tis. |

Fee model: odhad — současná RRLP ≈ 10 % ceny licence (floor 171 Kč). Před finálním rozhodnutím nahradit skutečnými fee z billingu. · On-prem: hodnoty „z toho" jsou již součástí hlavního Upside (přímý výpočet z plné licenční báze, ✓ = z licenčních dat); vynucení u on-prem probíhá při obnově maintenance.

---

## Oblast 6 · Benchmark · Tržní kontext — RRLP — tržní kontext: jak kvótují telefonickou podporu velcí hráči

*Benchmark CZ ERP/účetní software, 06/2026*

| Hráč | Model telefonické podpory |
|---|---|
| POHODA (Stormware) | hotline v ceně ročního SERVIS, bez kvót; individuální odborné/expertní konzultace placené zvlášť |
| Money S3 (Seyfor) | 10 hovorů ročně v ceně služby Aktualizace; nad rámec placená „Podpora Premium" |
| Helios iNuvio (partneři Asseco) | hotline placená přes systémovou podporu; rozsah pomoci ~10–15 min na požadavek |
| DUEL (Ježek software) | základní hotline zdarma pro aktuální verze; Expres linka 30 Kč/min; vzdálená správa max. 30 min/den |
| ABRA Gen | písemná hotline (Basic) → telefonní (Standard) → přednostní odbavení (Premium) |

Kvótovaná telefonická podpora vázaná na tier je tržní standard — nikdo nedává neomezenou hotline v nejnižším tarifu. Jednotku „minuty / uživatel / měsíc" ale nepoužívá nikdo: trh kvótuje na LICENCI (Money: hovory/rok) nebo na HOVOR (Helios: ~15 min/požadavek).

Doporučený design kvót (k diskuzi): Basic: bez hotline (self-service + Fin AI) · Business: RRLP za příplatek, fair-use roční pool na licenci škálovaný počtem uživatelů (např. 6 hovorů + 2/uživatele ročně), interně měřeno v minutách (Daktela), komunikováno v hovorech · Premium: 2× pool + prioritní fronta · nad kvótu: placené konzultace dle ceníku Services. Roční pool místo měsíčního (sezónnost účetních), soft-limit ~15 min/hovor jen jako interní provozní pravidlo. Per-uživatel měsíční minuty nedoporučeny: účetní složitost, „dočerpávání" minut, konflikt se sezónností.

---

## Oblast 6 · RRLP · Interní investice — Vymáhání SLA: upgrade Intercomu na plán Expert

*Interní předpoklad pro garantované SLA úrovně RRLP · ceník Intercom 06/2026, 16 Full Seats*

.slide.ctx .eyebrow[style*="abra-amber"]::before{background:var(--abra-amber);}

Dnes provozujeme plán Advanced (16 seatů à $99, měsíční fakturace) — SLA pravidla v něm nejsou dostupná. Plán Expert přidává automatický odpočet času u každé konverzace (první odpověď / další odpověď / vyřešení) s alerty při porušení. Bez něj nelze SLA u operátorů objektivně vymáhat ani prodávat zákazníkům garantované úrovně podpory.

| | Advanced (dnes) | Expert měsíčně | Expert ročně |
|---|---|---|---|
| Cena za seat | $99 | $139 | $132 |
| 16 seatů / měsíc | $1 584 | $2 224 | $2 112 |
| Navýšení / měsíc | — | +$640 ≈ 15 tis. Kč | +$528 ≈ 12,5 tis. Kč |
| Navýšení / rok | — | ≈ 183 tis. Kč | ≈ 150 tis. Kč |

Usage položky (Fin $0,99/resolution, zprávy, Proactive Support Plus) se s plánem nemění. Podmínky přechodu a slevu při 16 seatech vyjednat s Intercom CSM — aktuální měsíční režim umožňuje pružné změny seatů, roční závazek má jiná pravidla.

Co Expert odemkne

⏱ SLA rules

odpočet času na odpověď/vyřešení, breach alerty → základ pro vymáhání SLA u operátorů i placené RRLP tiery s garancí

⚖️ Workload management

vyvážené přidělování dle kapacity → infrastruktura prioritních front (Premium / RRLP Priority)

🏢 Multi-brand

oddělený messenger a help center pro Flexi a Alara pod jednou fakturou

👥 Custom roles

granulární práva FILI / SELI / Services

🔐 Kapacita a bezpečnost

50. lite seatů (dnes 20), SSO/SAML

Logika investice: vyšší vybrané prostředky z RRLP (scénář R5: net +170–300 tis. Kč MRR) financují vyšší úroveň služby. Break-even: ~50–90 zákazníků s placenou garantovanou SLA úrovní (Priority 400 / Premium SLA 800 Kč/měs.) pokryje celý upgrade. Bonus: objektivní SLA data operátorů pro FY27 odměňovací systém — nezávislé na CSAT sample-size.

Roční náklad upgradu ≈ 150–183 tis. Kč

Roční přínos R5 realisticky ≈ 2,0–3,6 M Kč ARR

Pozor na pořadí kroků: dokud se nezmění monetizace rozšířené / prémiové podpory (R5), upgrade finanční přínos mít nebude — je to čistý náklad. Velký přínos má ale okamžitě v procesním světě našich oddělení, zejména supportu : objektivní měření a vymáhání SLA, vyvážený workload, prioritní fronty, granulární práva a oddělené brandy — nezávisle na pricingu.

---

## Oblast 7 — Cloudové úložiště (GB)

Výchozí stav: 1 GB v ceně každé varianty, každý další GB za 45 Kč/měs. Overage dnes platí 655 licencí, medián platby 180 Kč/měs., celkem 356 985 Kč MRR (~3 % celkového MRR — dnes plně neodstupňovaný, ale výnosný „skrytý" stream).

| Varianta | Licencí v datech | Medián GB | P90 GB | Platí overage | Overage MRR dnes |
|---|---|---|---|---|---|
| Basic (basic2016) | 71 | 1,0 | 5,0 | 31 | 3 555 Kč |
| Business (standard) | 430 | 2,0 | 10,0 | 259 | 68 445 Kč |
| Premium | 377 | 6,0 | 29,4 | 329 | 207 270 Kč |
| Account-office | 40 | 30,5 | 130,2 | 36 | 77 715 Kč |
| Celkem | 918 | — | — | 655 | 356 985 Kč |

**Medián GB koreluje s variantou**

Basic

1,0 GB

Business

2,0 GB

Premium

6,0 GB

Account-office

30,5 GB

Kandidát na odstupňování v ceně varianty; scénáře počítají čistou deltu proti dnešku.

| # | Scénář | Mechanismus | Delta MRR vs. dnes | On-prem NAVÍC (odhad) | Licencí přestane platit overage | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| G1 | Odstupňování kvót: Basic 1 / Business 2 / Premium 5 GB | Cena za další GB beze změny (45 Kč) | −63 tis. −756 tis. ARR | neaplikuje se | 205 | Žádné zákaznické; čistá investice do hodnoty Business/Premium | 🔍 Value add „za peníze" — vhodné jen jako kompenzace přesunů |
| G2 | Štědré kvóty: Basic 2 / Business 5 / Premium 10 GB | Cena beze změny (45 Kč) | −126 tis. ≈ −1,5 M ARR | neaplikuje se | 405 | Žádné zákaznické; vysoká cena za gesto | ❌ Zbytečně drahé |
| G3 | Kvóty beze změny, cena 45 → 60 Kč/GB | Čisté zdražení overage (+33 %); doplnit objemové balíčky (10 GB = 400 Kč/měs., efektivně 40 Kč/GB) pro heavy users | +119 tis. ≈ +1,4 M ARR | neaplikuje se | 0 | Zdražení dopadá na 655 platících (medián 180 → 240 Kč/měs. — absolutně malé částky); top spotřebitelé (100+ GB) řešit balíčky | ✅ Nejvyšší výnos, ale „beru a nedávám" |
| G4 | Kombinace: kvóty Basic 2 / Business 2 / Premium 5 GB + cena 60 Kč/GB | Odstupňované kvóty jako hmatatelný benefit variant, zdražení drží stream ziskový; objemové balíčky pro heavy users | +33 tis. +396 tis. ARR | neaplikuje se | 222 | Minimální — 222 licencí si polepší, zdražení cítí jen nadlimitní | 🔍 Nahrazen kombinací G5 |
| G4a | Degresivní „schody" ceny dle objemu | Kvóty beze změny; cena dle vyčerpaného objemu: do 10 GB 60 Kč · 10–25 GB 50 Kč · 25–100 GB 40 Kč · 100+ GB 30 Kč/GB (nahrazuje objemové balíčky) | ≈ +60 tis. (odhad) ≈ +0,7 M ARR | neaplikuje se | 0 | Zdražení cítí jen objem do 25 GB; pásma nad 25 GB jsou pod dnešními 45 Kč — heavy users zlevní | 🔍 Samostatný mezikrok — viz G5 |
| G5 | Kombinace: kvóty Basic 1 / Business 2 / Premium 5 GB + schody 60/50/40/30 Kč | Odstupňované kvóty (dle G1) + degresivní cena dle G4a; férové pro heavy users bez nutnosti objemových balíčků | ≈ −20 tis. (−40 až ±0, odhad) ≈ −0,2 M ARR | neaplikuje se | 205 | Žádné zákaznické — 205 licencí si polepší kvótou, objem nad 25 GB zlevní; výnos streamu mírně klesá = vědomá investice do hodnoty variant | ⭐ Doporučený scénář |

Logika G5 a odhad delty: tier-diferenciátor (kvóty dle varianty) + schody místo objemových balíčků; pásma nad 25 GB zlevňují pod dnešních 45 Kč (top spotřebitel 382 GB ušetří). Odhad: overage ≈ 7 933 GB/měs., kvóty uvolní ~1 400 GB (dle G1), zbytek oceněn schody dle distribuce (medián/P90) — před exekucí přepočet na per-licenčních datech.

---

## Oblast 8 — Zpoplatnění read-only uživatelů

Výchozí stav: dnes neomezený počet read-only (RO) uživatelů zdarma ve všech variantách. Dle exportu 06/2026 je v cloudu 7 366 RO uživatelů, z toho 6 960 na 1 175 licencích s usage daty (zbylých 406 na instancích bez vazby na licenci). Trh i ABRA Gen: 0 / 2 / 5 v ceně dle tieru, další za příplatek. On-premise báze (763 lic. — Basic 173 / Business 346 / Premium 244) nemá usage data; RO uživatelé odhadnuti stejným poměrem RO/licence jako cloud (≈ 1 320 RO, ≈ 740 nad kvótou) — zpoplatnění platí pro on-prem stejně (sloupec On-prem).

| Varianta | Licencí | Lic. s RO | RO uživatelů | RO nad kvótou 0/2/5 | MRR licencí s RO |
|---|---|---|---|---|---|
| Basic (basic2016) | 1 403 | 164 | 296 | 296 | 696 134 Kč |
| Business (standard) | 1 607 | 503 | 1 986 | 1 170 | 3 482 154 Kč |
| Premium | 922 | 467 | 3 218 | 1 703 | 5 689 822 Kč |
| Account-office | 45 | 41 | 1 460 | 1 266 | 1 725 087 Kč |
| Celkem | 3 977 | 1 175 | 6 960 | 4 435 | 11 593 197 Kč |

Pozor — Account-office: jen 41 licencí, ale 1 266 RO uživatelů nad kvótou = největší jednotlivý zdroj výnosu (~63–95 tis. Kč dle scénáře). Účetní kanceláře drží read-only přístupy klientů — reálná hodnota, ale citlivý segment; posoudit zvlášť (riziko přesunu klientských náhledů mimo Flexi).

| # | Scénář | Mechanismus | Upside MRR | On-prem NAVÍC (odhad) | Dotčených licencí | Riziko | Hodnocení |
|---|---|---|---|---|---|---|---|
| RO1 | Plošné zpoplatnění bez kvóty | 0 RO zdarma v každé variantě; každý RO uživatel 50 Kč/měs. | +348 tis. plný / +174–244 tis. realisticky ≈ +4,2 M ARR | +66 tis. | 1 175 | Vysoké — platí i licence s jediným RO uživatelem (468 instancí má 1 RO); plošná deaktivace „úklidem", iritace mikro-segmentu; neodpovídá tržní normě (kvóta v ceně je standard) | 🔍 Strop výnosu, ale nejvyšší iritace |
| RO2 | Kvóty dle ABRA Gen + plochá cena | V ceně Basic 0 / Business 2 / Premium 5 (AO = Premium); každý nad kvótu 50 Kč/měs. | +222 tis. plný / +111–155 tis. realisticky ≈ +2,7 M ARR | +37 tis. | 568 | Nízké–střední; chrání malé uživatele, přesně kopíruje model ABRA Gen; jednoduchá komunikace i billing | ✅ Bezpečná a jednoduchá |
| RO3 | Kvóty + odstupňovaná cena dle varianty | Kvóty 0 / 2 / 5 jako RO2 + cena dle hodnoty varianty: Basic 25 / Business 50 / Premium a AO 75 Kč za každého nad kvótu | +289 tis. plný / +144–202 tis. realisticky ≈ +3,5 M ARR | +47 tis. | 568 | Nízké–střední; value-based — Premium platí nejvíc za seat (dostává nejvíc hodnoty), Basic levný vstup; stejná ochrana báze jako RO2 | ⭐ Doporučený scénář |
| RO4 | Jen nové prodeje (grandfathering) | Báze plný grandfathering; kvóty + zpoplatnění (dle RO3) jen pro nové zákazníky od 1. 10. 2026, u báze vynucení až při renewalu | 0 z báze; postupný náběh přes renewaly | — | 0 ihned | Minimální; v souladu s Pravidlem 2 (grandfathering jako default) | ✅ Nejměkčí — kombinovatelné s RO3 při renewalu |

Realistický odhad = po deaktivaci 30–50 % nevyužitých RO účtů (dnes zdarma → po zpoplatnění úklid). Account-office mapováno na Premium kvótu (5 v ceně). 125 instancí s RO uživateli (406 už.) nemá v exportu vazbu na licenci — vyloučeny. On-prem (763 lic.): RO odhadnuti per varianta stejným poměrem RO/licence jako cloud (Basic 0,21 · Business 1,24 · Premium 3,49 RO/lic) × on-prem licence; sloupec On-prem = plný odhad (≈ 1 320 RO, deaktivace platí stejně jako u cloudu). Ceny dle zadání; před exekucí ověřit aktivitu RO účtů (recency filtr) a ochotu platit.

---

## Souhrn · klíčový slide — Doporučené scénáře a celkový součet FY27

- +1 117–1 387 tis. — Mezisoučet packaging (realisticky) · plný +1 748 tis.

· ≈ +13,4–16,6 M Kč ARR · on-prem navíc ≈ +171 tis.

- +580–930 tis. — Cenová indexace legacy +5–8 % · nezávislá páka · ≈ +7,0–11,2 M Kč ARR
- +1,7–2,3 M Kč MRR — CELKEM FY27 (zvolené změny) · +15–20 % nad současné MRR · ≈ +20–28 M Kč ARR

| Oblast (✓ = zavádíme) | Doporučený scénář | Upside MRR plný | Upside MRR realistický | On-prem | Upside ARR realistický | MRR v ohrožení | Načasování |
|---|---|---|---|---|---|---|---|
| Mzdy | M1 — plný přesun do Premium (690 aktivních licencí při renewalu) | +528 tis. | +528 tis. (před churn rizikem) | navíc +75 tis. | ≈ +6,3 M | 1 751 tis. | Renewaly FY27 (od 1. 10. 26) |
| Šarže/expirace | Š1 — do Premium po opravě | +22 tis. | +15 tis. | navíc +3 tis. | +180 tis. | 73 tis. | S release opravy |
| Sklady (Basic) | SK1 — vyřazení, nové prodeje + renewal vlna | +152 tis. | +100 tis. | navíc +14 tis. | ≈ +1,2 M | 103 tis. | 1. 10. 26 + renewaly |
| Majetek (Basic) | MA1 — majetek až od Business (reálně upgradují pásma 6+ karet, 210 lic.) | +350 tis. | +150–182 tis. | navíc +32 tis. | ≈ +1,8–2,2 M | 233 tis. | 1. 10. 26 + renewaly |
| API | A4 — restrukturalizace limitů (v ceně 1k/5k/10k · balíčky 25k–200k) | +80 tis.* | +30–80 tis.* | z toho 8–21 tis. | ≈ +0,4–1,0 M | — | Oznámit Q3 · účinnost Q4 FY27 |
| RRLP | R5 — Basic bez RRLP + zdražení na 15 % ceny licence (B/P/AO) | +347 tis. | +170–300 tis. (net) | z toho 34 tis. ✓ | ≈ +2,0–3,6 M | 106 tis. | 1. 10. 26 |
| Úložiště (GB) | G5 — kvóty 1 / 2 / 5 GB + schody 60/50/40/30 Kč/GB | ≈ −20 tis. | ≈ −20 tis. (−40 až ±0) | neaplikuje se | ≈ −0,2 M | — (205 licencí si polepší) | 1. 10. 26 |
| RO uživatelé | RO3 — kvóty 0 / 2 / 5 + odstupňovaná cena 25 / 50 / 75 Kč nad kvótu | +289 tis. | +144–202 tis. | navíc +47 tis. | ≈ +1,7–2,4 M | — (deakt. v reál.) | 1. 10. 26 + renewaly |
| Mezisoučet packaging (zvolené) | +1 748 tis. | +1 117–1 387 tis. | navíc ≈ +171 tis. | ≈ +13,4–16,6 M | | | |
| Cenová indexace legacy +5–8 % | nezávislá páka (mimo packaging) | +580–930 tis. | +580–930 tis. | (z toho +88–140 tis., již v celku zahrnuto) | ≈ +7,0–11,2 M | — | Renewaly FY27 |
| CELKEM FY27 (zvolené změny) | až +2,7 M | +1,7–2,3 M Kč MRR (+15–20 % nad současné MRR) | navíc ≈ +171 tis. | ≈ +20–28 M | | | |

Interaktivní souhrn: zaškrtnutím vybíráte změny zaváděné ve FY27 — mezisoučet i CELKEM se přepočítávají jen ze zvolených řádků. Termín 1. 10. 2026 je odhad. ARR = MRR × 12. Změny doporučení: Mzdy M1 — realistický upside je plný efekt před churn rizikem (break-even churn 23 %, MRR v ohrožení 1 751 tis., dle 3M recency) · Majetek MA1 — realistický upside = pásma 6+ karet (210 lic.); mikro-pásma 1–5 karet modul spíše opustí · * API A4 — konzervativní odhad, nižší limity v ceně potenciál zvyšují, před exekucí přepočítat dle reálného trafficu · Úložiště G5 — odhad dle distribuce objemů (detail na slidu Oblast 7) · On-prem sloupec: Mzdy–Majetek = navíc k upside (odhad ×0,091/×0,142), API a RRLP = již zahrnuto v hlavním čísle (✓ = z licenčních dat), GB se neaplikuje, RO = navíc (on-prem odhad stejným poměrem RO/licence jako cloud); do mezisoučtu i CELKEM vstupují jen aditivní hodnoty.

---

## Ochranná pravidla exekuce

1. Jeden zákazník = max. jedna vynucená změna ročně — vynucené vlny nyní: Mzdy do Premium (822 lic. Business) · Sklady z Basic (176 lic.) · Majetek z Basic (443 lic.) · RRLP v Basic (134 lic.); překryvy v Basic (sklady ∩ majetek ∩ RRLP) ošetřit v renewal plánu. Plošné úpravy (API limity, cena GB) nejsou přesun varianty, ale komunikovat společně s renewalem.

2. Grandfathering jako default — výjimky Mzdy (M1) a Majetek (MA1): vynucení celé báze včetně rizikových segmentů (mobilní pásmo 1–60 mezd: 235 lic., 456 tis. MRR · mikro-pásma majetku 1–5 karet: 233 lic.) → doprovodit retenční nabídkou a přechodovou slevou.

3. Plná cenová transparentnost v jednom sdělení — žádný price drip; podmínky, datum účinnosti a grandfathering pravidla najednou.

4. Každé odebrání vyváženo přidáním: Basic +upomínky, +Fin AI lite (vč. AI filtrování) · Business +2 GB úložiště (G5), +1 h konzultace ročně · Premium +5 GB úložiště (G5), +prioritní SLA, +business review s CSM. RRLP zůstává v Business i Premium za příplatek (R5) — není kompenzační prvek. Pozor: snížení API limitů v ceně (Premium 20k → 10k/den) je plošné odebrání — komunikovat s předstihem spolu s novými balíčky.

5. Před exekucí přepočet s recency filtrem (12měsíční aktivita), ověření reálného API trafficu (klíčové pro limity 1k/5k/10k a balíčky) a per-licenční přepočet úložiště (schody G5).

---

## Výhled — Nad rámec packagingu — nové revenue streams FY27

| Stream | Mechanismus | Potenciál | Stav / závislost |
|---|---|---|---|
| In-app upsell engine (PQL → PQA) | Usage triggery z této analýzy: Basic poptává sklady/majetek → nabídka Business · poptávka mezd → Premium · API traffic u stropu denního limitu → balíček requestů nebo vyšší varianta | Největší dlouhodobá páka | Závislost: R&D event-tracking (sdílená investice s Health Score) |
| Cenová indexace legacy cen (+5–8 %) | Navýšení legacy cen o 5–8 % při renewalu | +580–930 tis. Kč MRR | Renewaly FY27, nejnižší riziko |
| Marketplace provize 15 % | Provize 15 % z GMV marketplace | Dle GMV — nejprve změřit | Kandidát FY28 |
| Monetizace Fin AI | Lite v Basic, full v Business+ | Diferenciátor vůči konkurenci | Placený AI add-on jako 2. vlna |
| Produktizované služby (Migrace S/M/L, Mzdový audit) | Fixní balíčky místo hodinovky; mzdový audit jako součást upgrade nabídky do Premium | — | Synergie se Services |
| Roční předplatné se slevou | Sleva za roční platbu předem | Snížení churn surface + cash-flow | Změřit současnou penetraci |
| E-fakturace / ViDA compliance balíček | Compliance funkcionalita jako placený balíček | Regulatorně tažený upsell | Příprava FY27, monetizace FY28 |
| In-app AI (AI filtrování → „chat s ERP") | AI filtrování ve WUI už v produkci — spotřebovává tokeny, dnes bez monetizace; plánované „chatování s ERP": slovní prompty vrací přepočtená data, zjišťování potřebného, výhledově i zakládání záznamů | Nový stream — pokrytí token nákladů + marže; AI kredity jako diferenciátor variant | Filtrování live · chat s ERP v plánu · navrhnout pricing (kredity/add-on), 2. vlna s Fin AI |

Packaging +1,0–1,2 M · indexace +0,6–0,9 M · celkem +1,6–2,1 M Kč MRR (+13–18 %). Streamy výše jsou růst NAD tento základ.
