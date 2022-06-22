---
layout: PageLayout
title: Naptárak szinkronizálása Szallas.hu és az Appartman között
sections:
  - type: HeroSection
    colors: colors-h
    title: Naptárak szinkronizálása a Szallas.hu és Appartman között
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
          `Az iCal naptár szinkronnal könnyedén összehangolhatod az Appartman
          naptárát a szállásközvetítő oldalakéival (Szallas.hu, Booking és
          Airbnb). A naptár szinkron nagy segítséget nyújt a túlfoglalás
          elkerülésében.`


          ### 1. Naptár link másolása az Appartmanból


          Beállítások >  Naptár szinkron > Naptár hozzáadása


          A naptár hozzáadása menüből válaszd ki a
          [Szallas.hu](http://Szallas.hu) opciót és másold ki az Appartman
          naptár linkjét a Link másolása gombbal. Ne zárd be a panelt, csak menj
          át a [Szallas.hu](http://Szallas.hu) admin felületére


          ### 2. Naptár link beillesztése a Szallas.hu felületére


          1.  Menj át a [Szallas.hu](http://Szallas.hu) admin felületére és
          navigálj a következő helyre: ***Admin > Árak és kapacitás > Naptár
          szinkron (iCal)***


          2.  Nyomd meg a Naptár importálása gombot


          3.  Illeszd be az előbb az Appartmanról kimásolt linket


          4.  Nevezd el a naptárat (pl.: 1-es szoba - Appartman)


          `Így az Appartman tudja küldeni a foglalt dátumokat a megadott
          lakóegységek esetében, de a Szallas.hu még nem tudja küldeni a nála
          lévő foglalt dátumokat.`


          ### 3. Naptár link másolása a Szallas.hu-ról az Appartmanba


          1.  Nyomd meg a Naptár exportálás gombot, és a felugró panelból másold
          ki a linket.


          2.  Menj át az Appartman felületére, és illeszd be a Szallas-hu-ról
          kimásolt linket a Naptár hozzáadása menüben.


          ` Így már mindkét irányba működik a kommunikáció a naptárak között a
          megadott lakóegységek esetében.  `


          ### 4. Naptár link másolása Szallas.hu-ról más naptárakba


          Ahhoz, hogy a [Szallas.hu](http://szallas.hu/) naptára a többi
          szállásközvetítő oldallal is kommunikáljon, a Szallas.hu-ból az előbb
          kimásolt linket a szállásközvetítő oldalakra is be kell másolni.


          #### Booking.com


          1.  Menj át a Booking admin felületére és navigálj a következő helyre:
          ***Rates and availability > Sync calendar***


          2.  Nyomd meg az Add calendar connection gombot


          3.  Illeszd be az előbb az Szallas.hu-ról kimásolt linket a “Your iCal
          link” mezőbe és nevezd el a naptárat (pl.: 1-es szoba - Appartman)


          #### Airbnb


          <!---->


          1.  Menj át az Airbnb admin felületére és navigálj a következő helyre:
          ***Menü > Hirdetések > Szálláshelyed kiválasztása a listából > Árak és
          elérhetőség > Naptár-szinkronizálás***


          2.  Nyomd meg a Naptár importálása gombot


          3.  Illeszd be az előbb az Szallas.hu-ról kimásolt linket a “Naptár
          címe (URL)” mezőbe és nevezd el a naptárat (pl.: 1-es szoba -
          Appartman)


          ### 5. Ismételd meg a lépéseket minden lakóegységre


          Minden lakóegységhez hozzá kell adnod a naptárakat. Ha több ugyanolyan
          lakóegységed van, akkor sajnos nem működik a naptár szinkron megoldás
          azon lakóegységek esetében.


          ### 6. Ismételd meg a lépéseket minden olyan további szállásközvetítő
          oldalon is, amin fent vagy


          *  
          [Booking.com-on](/sugo/ical-naptarak-szinkronizalasa-booking-com-appartman/)


          <!---->


          *   [Airbnb-n](/sugo/ical-naptarak-szinkronizalasa-airbnb-appartman/)

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
