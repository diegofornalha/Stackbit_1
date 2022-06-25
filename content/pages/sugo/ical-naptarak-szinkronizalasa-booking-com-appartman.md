---
layout: PageLayout
title: iCal naptárak szinkronizálása Booking.com és az Appartman között
sections:
  - type: HeroSection
    colors: colors-h
    title: iCal naptárak szinkronizálása a Booking.com és az Appartman között
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


          ***Beállítások > Naptár szinkron > Naptár hozzáadása***


          A naptár hozzáadása menüből válaszd ki a Booking opciót és másold ki
          az Appartman naptár linkjét a Link másolása gombbal. Ne zárd be a
          panelt, csak menj át a [Szallas.hu](http://Szallas.hu) admin
          felületére


          ### 2. Naptár link beillesztése a Booking felületére


          Menj át a Booking admin felületére és navigálj a következő helyre:
          ***Rates and availability > Sync calendar***


          1.  Nyomd meg az Add calendar connection gombot


          2.  Illeszd be az előbb az Appartmanról kimásolt linket a “Your iCal
          link” mezőbe és nevezd el a naptárat (pl.: 1-es szoba - Appartman)


          ### 3. Naptár link másolása a Bookingról az Appartmanba


          1.  Nyomd meg a Next step gombot, majd a megjelenő Copy link gombot.


          2.  Menj vissza az Appartman felületére, és illeszd be a Bookingról
          kimásolt linket a Naptár hozzáadása menüben


          ### 4. Naptár link másolása Bookingról más naptárakba


          Ahhoz, hogy a [Booking.com](http://Booking.com) naptárai a többi
          szállásközvetítő oldallal is kommunikáljanak, a Booking.comról az
          előbb kimásolt linket a szállásközvetítő oldalakra is be kell másolni


          #### Szallas.hu


          1.  Menj át a [Szallas.hu](http://Szallas.hu) admin felületére és
          navigálj a következő helyre: ***Admin > Árak és kapacitás > Naptár
          szinkron (iCal)***


          2.  Nyomd meg a Naptár importálása gombot


          3.  Illeszd be az előbb a Booking.comról kimásolt linket


          4.  Nevezd el a naptárat (pl.: 1-es szoba - Booking)


          #### Airbnb


          <!---->


          1.  Menj át az Airbnb admin felületére és navigálj a következő helyre:
          ***Menü > Hirdetések > Szálláshelyed kiválasztása a listából > Árak és
          elérhetőség > Naptár-szinkronizálás***


          2.  Nyomd meg a Naptár importálása gombot


          3.  Illeszd be az előbb az Szallas.hu-ról kimásolt linket a “Naptár
          címe (URL)” mezőbe és nevezd el a naptárat (pl.: 1-es szoba - Booking)


          ### 5. Ismételd meg a lépéseket minden lakóegységre


          Minden lakóegységhez hozzá kell adnod a naptárakat. Ha több ugyanolyan
          lakóegységed van, akkor sajnos nem működik a naptár szinkron megoldás
          azon lakóegységek esetében.


          ### 6. Ismételd meg a lépéseket minden szállásközvetítő oldalon, amin
          fent vagy


          *   [Naptár szinkron beállítása a
          Szallas.hu-n](/sugo/ical-naptarak-szinkronizalasa-szallas-hu-appartman/)


          <!---->


          *   [Naptár szinkron beállítása az
          Airbnb-n](/sugo/ical-naptarak-szinkronizalasa-airbnb-appartman/)

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
