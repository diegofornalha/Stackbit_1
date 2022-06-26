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


          ### Ebben a cikkben:


          *   Összekötjük az Appartmant a Szallas.hu-val


          *   Összekötjük a Szallas.hut- a Booking.commal


          *   Összekötjük a Szallas.hu-t az Airbnb-vel


          Az alábbi képen látható, hogy mely naptárakhoz fogjuk mely linkeket
          megadni ehhez:


          ![](/images/szallas.hu%20lepes%20naptar%20linkek-916a675a.png)


          ##### Fontos: az alábbi videó csak az Appartman – Szallas.hu
          összekötést mutatja be.


          <iframe width="560" height="315"
          src="https://www.youtube.com/embed/RR4--pjRf9g" title="YouTube video
          player" frameborder="0" allow="accelerometer; autoplay;
          clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>


          ### 1. Naptár link másolása az Appartmanból


          ***Beállítások >  Naptár szinkron > Naptár hozzáadása***


          A naptár hozzáadása menüből válaszd ki a
          [Szallas.hu](http://Szallas.hu) opciót és másold ki az Appartman
          naptár linkjét a Link másolása gombbal. Ne zárd be a panelt, csak menj
          át a [Szallas.hu](http://Szallas.hu) admin felületére.


          ### 2. Naptár link beillesztése a Szallas.hu felületére


          1.  Menj át a [Szallas.hu](http://Szallas.hu) admin felületére és
          navigálj a következő helyre: ***Admin > Árak és kapacitás > Naptár
          szinkron (iCal)***


          2.  Nyomd meg a Naptár importálása gombot
              ![](/images/naptar-szinkron-ical-importalas-szallas-hu-appartman-f7394fa2.png)

          3.  Illeszd be az előbb az Appartmanról kimásolt linket


          4.  Nevezd el a naptárat (pl.: 1-es szoba - Appartman)
              ![](/images/naptar-szinkron-ical-szallas-hu-appartman.png)

          `Így az Appartman tudja küldeni a foglalt dátumokat a megadott
          lakóegységek esetében, de a Szallas.hu még nem tudja küldeni a nála
          lévő foglalt dátumokat.`


          ### 3. Naptár link másolása a Szallas.hu-ról az Appartmanba


          1.  Nyomd meg a Naptár exportálás gombot, és a felugró panelból másold
          ki a linket.
              ![](/images/naptar-szinkron-ical-exportalas-szallas-hu-appartman.png)

          2.  Menj át az Appartman felületére, és illeszd be a Szallas-hu-ról
          kimásolt linket a Naptár hozzáadása menüben.


          ` Így már mindkét irányba működik a kommunikáció az Appartman és a
          Szallas.hu között a megadott lakóegységek esetében.  `


          ### 4. Szallas.hu naptár szinronizálása más szállásközvetítőkkel


          **A lépés átugorható, ha más szállásközvetítőn nem vagy fent.**


          Ahhoz, hogy a [Szallas.hu](http://szallas.hu/) naptára a többi
          szállásközvetítő oldallal is kommunikáljon, a Szallas.hu-ból az előbb
          kimásolt linket a szállásközvetítő oldalakra is be kell másolni.


          #### Szallas.hu szinkronizálása Booking.commal


          1\. Menj át a Booking admin felületére és navigálj a következő helyre:
          ***Rates and availability > Sync calendar***


          ![](/images/naptar-szinkron-ical-booking-com-appartman-7d23fadc.png)


          2\. Nyomd meg az Add calendar connection gombot


          3\. Illeszd be az előbb az Szallas.hu-ról kimásolt linket a “Your iCal
          link” mezőbe és nevezd el a naptárat (pl.: 1-es szoba - Szallas.hu)

          ![](/images/naptar-szinkron-ical-importalas-booking-com-appartman-c03829ab.png)


          4\. Nyomd meg a megjelenő Copy link gombot, amivel kimásolódik a
          naptár link, majd nyomd meg a Done gombot

          ![](/images/naptar-szinkron-ical-exportalas-booking-com-appartman.png)


          5\. Menj át a [Szallas.hu](http://Szallas.hu) admin felületére és
          navigálj a következő helyre: ***Admin > Árak és kapacitás > Naptár
          szinkron (iCal)***


          6\. Nyomd meg a Naptár importálása gombot


          7\. Illeszd be az előbb a Booking.comról kimásolt linket


          8\. Nevezd el a naptárat (pl.: 1-es szoba - Booking)


          #### Szallas.hu szinkronizálása Airbnb-vel


          1.  A Szallas.hu felületén nyomd meg a Naptár exportálása gombot


          2.  Menj át az Airbnb admin felületére és navigálj a következő helyre:
          ***Menü > Hirdetések > Szálláshelyed kiválasztása a listából > Árak és
          elérhetőség > Naptár-szinkronizálás***


          3.  Nyomd meg a Naptár importálása gombot


          4.  Illeszd be az előbb az Szallas.hu-ról kimásolt linket a “Naptár
          címe (URL)” mezőbe és nevezd el a naptárat (pl.: 1-es szoba -
          Szallas.hu)


          5.  Nyomd meg a Naptár exportálása gombot, majd másold ki a megjelenő
          linket.


          6.  Menj vissza a Szallas.hu felületére, és illeszd be az Airbnb-ről
          kimásolt linket a Naptár importálása menüben


          7.  Nevezd el a naptárat (pl.: 1-es szoba - Airbnb)


          `Ezen a ponton az Appartman és a Szallas.hu, a Szallas.hu és a
          Booking.com, a Szallas.hu és az Airbnb között kész az összekötés. Ha
          ezekkel a lépésekkel kezdted az összekötési folyamatot, akkor hátravan
          még az Appartman és a Booking.com, illetve az Appartman és az Airbnb
          összekötése.`


          ### 5. Ismételd meg a lépéseket minden lakóegységre


          Minden lakóegységhez hozzá kell adnod a naptárakat. Ha van olyan
          lakóegységed, ami ugyanolyan és több darab van belőle (pl.: 4 db
          Superior apartman), akkor sajnos nem működik a naptár szinkron
          megoldás azon lakóegységek esetében.


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
