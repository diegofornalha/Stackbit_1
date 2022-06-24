---
layout: PageLayout
title: iCal naptárak szinkronizálása az Airbnb és az Appartman között
sections:
  - type: HeroSection
    colors: colors-h
    title: iCal naptárak szinkronizálása az Airbnb és az Appartman között
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


          Beállítások > Naptár szinkron > Naptár hozzáadása


          A naptár hozzáadása menüből válaszd ki a Booking opciót és másold ki
          az Appartman naptár linkjét a Link másolása gombbal. Ne zárd be a
          panelt, csak menj át a [Szallas.hu](http://Szallas.hu) admin
          felületére


          ### 2. Naptár link beillesztése az Airbnb felületére


          Menj át az Airbnb admin felületére és navigálj a következő helyre:


          Menü > Hirdetések > Szálláshelyed kiválasztása a listából > Árak és
          elérhetőség > Naptár-szinkronizálás


          Nyomd meg a Naptár importálása gombot


          Illeszd be az előbb az Szallas.hu-ról kimásolt linket a “Naptár címe
          (URL)” mezőbe és nevezd el a naptárat (pl.: 1-es szoba - Appartman)


          ### 3. Naptár link másolása az Airbnb-ről az Appartmanba


          Nyomd meg a Naptár exportálása gombot, majd másold ki a megjelenő
          linket.


          Menj vissza az Appartman felületére, és illeszd be az Airbnb-ről
          kimásolt linket a Naptár hozzáadása menüben


          ### 4. Naptár link másolása az Airbnb-ről más naptárakba


          Ahhoz, hogy az Airbnb naptárai a többi szállásközvetítő oldallal is
          kommunikáljanak, az Airbnb-ről az előbb kimásolt linket a
          szállásközvetítő oldalakra is be kell másolni


          #### Szallas.hu


          Menj át a [Szallas.hu](http://Szallas.hu) admin felületére és navigálj
          a következő helyre:


          Admin > Árak és kapacitás > Naptár szinkron (iCal)


          Nyomd meg a Naptár importálása gombot


          Illeszd be az előbb az Appartmanból kimásolt linket


          Nevezd el a naptárat (pl.: 1-es szoba - Appartman)


          #### Booking


          Menj át a Booking admin felületére és navigálj a következő helyre:


          Rates and availability > Sync calendar


          Nyomd meg az Add calendar connection gombot


          Illeszd be az előbb az Szallas.hu-ról kimásolt linket a “Your iCal
          link” mezőbe és nevezd el a naptárat (pl.: 1-es szoba - Appartman)


          ## 5. Ismételd meg a lépéseket minden lakóegységre


          Minden lakóegységhez hozzá kell adnod a naptárakat. Ha több ugyanolyan
          lakóegységed van, akkor sajnos nem működik a naptár szinkron megoldás
          azon lakóegységek esetében.


          6 Ismételd meg a lépéseket minden olyan szállásközvetítő oldalon, ahol
          fent vagy


          *   [Naptár szinkron beállítása
          Szallas.hu-n](/sugo/ical-naptarak-szinkronizalasa-szallas-hu-appartman/)


          *   [Naptár szinkron beállítása
          Booking.com-on](https://appartman.hu/sugo/ical-naptarak-szinkronizalasa-booking-com-appartman/)

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
