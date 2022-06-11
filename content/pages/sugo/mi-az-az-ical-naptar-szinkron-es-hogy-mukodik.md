---
layout: PageLayout
title: Extra szolgáltatások hozzaádása
sections:
  - type: HeroSection
    colors: colors-h
    title: MiazaziCal
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: flex-start
  - elementId: ''
    colors: colors-a
    backgroundImage: null
    actions:
      - type: Button
        label: Vissza a Segítség oldalra
        showIcon: true
        icon: arrowLeft
        url: /sugo
        style: link
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-6
          - pb-4
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
  - type: FeaturedItemsSection
    colors: colors-a
    subtitle: ''
    items:
      - type: FeaturedItem
        text: >+
          ## Hogy működnek az extra szolgáltatások az Appartmanban?


          A szállásadó megadja az extra szolgáltatások fő jellemzőit az admin
          felületen (Beállítások).


          1.  A foglalók a foglalási folyamat részeként hozzáadhatják a
          tetszőleges extra szolgáltatásokat a foglalásukhoz.
              Kötelező szolgáltatás esetén a foglalónak csak tájékoztatás jelleggel jelenik meg az extra szolgáltatás. Ilyen lehet például a takarítás.

          ## Extra szolgáltatás megadása


          *Főoldal > Menü > Beállítások > Extra szolgáltatások > Új
          szolgáltatás*


          ### 1. Név megadása


          ### 2. Árszámítás alapjának megadása


          Mi alapján szeretnéd, hogy a szolgáltatás ára számítódjon?


          6 típust lehet megadni, amiket példával is szemléltetünk:


          #### Foglalásonként


          Minden foglaláshoz annyi darab számítódik fel, ahányat megad a
          foglaló.


          kisállat foglalásonként számolva – 4 000 Ft (2 db megadása esetén 8
          000 Ft számítódik)


          kései távozás – 5 000 Ft (1 db megadása esetén 5 000 Ft számítódik)


          #### Vendégéjszakánként


          Minden vendégéjszakára annyi darab számítódik fel, ahányat megad a
          foglaló


          reggeli – 2 000 Ft (1 db megadása esetén minden vendég kap minden nap
          1 reggelit)


          #### Éjszakánként


          Minden éjszakára annyi darab számítódik fel, ahányat megad a foglaló


          kutya napidíjjal számolva – 2 000 Ft (2 db megadása esetén 2 kutya
          napidíja számítódik minden éjszakára)


          #### Lakóegységenként


          Minden lefoglalt lakóegységre annyi darab számítódik fel, ahányat
          megad a foglaló


          takarítás 3 000 Ft (1 db megadása esetén minden a foglalásban szereplő
          lakóegységre számítódik fel takarítás)


          #### Lakóegységéjszakánként


          Minden lakóegységéjszakára annyi darab számítódik, ahányat megad a
          foglaló


          klíma használat 2 000 Ft/nap/lakóegység (1 db megadása esetén minden a
          foglalásban szereplő lakóegység minden éjszakájára számítódik fel
          klíma használat)


          ### 3. Egységár megadása


          Az egységár az előzőleg megadott árszámítási alaponként fog számítódni
          (pl.: 3 000 Ft/fő/éj)


          ### 4. Szolgáltatás kötelezőségének megadása


          Olyan esetekben használandó, amikor minden foglaláshoz hozzáadódik a
          tétel, és csak tájékoztatási szerepe van. A takarítási díj tipikusan
          ilyen, ha külön fel szeretnéd tüntetni.


          ### 5. Több darab is hozzáadható a foglaláshoz?


          Ha árszámítási alaponként (pl.: vendégéjszakánként, vagy
          foglalásonként) több is megadható egy foglaláshoz akkor jelöld be a
          jelölőnégyzetet. Az alul megjelenő beviteli mezőben megadhatod, hogy
          van-e maximuma a megadható számnak.


          ### 6. Mentés

        featuredImage: null
        styles:
          title:
            textAlign: left
          subtitle:
            textAlign: left
          text:
            textAlign: left
    columns: 1
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
  - elementId: ''
    colors: colors-i
    backgroundImage: null
    text: >
      ### További segítségre van szükséged?


      Keress minket a Kapcsolat oldalon található ügyfélszolgálatos email címen,
      vagy térj vissza a Segítség oldalra.
    actions:
      - label: Vissza a Segítség oldalra
        altText: Learn more
        url: /sugo
        showIcon: true
        icon: arrowLeft
        iconPosition: right
        elementId: ''
        type: Link
      - type: Button
        label: Kapcsolat
        showIcon: true
        icon: arrowRight
        url: /
        style: link
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
---
