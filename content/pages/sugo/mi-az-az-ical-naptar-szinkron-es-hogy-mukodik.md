---
layout: PageLayout
title: 'Mi az az iCal naptár szinkron és hogy működik? '
sections:
  - type: HeroSection
    colors: colors-h
    title: Mi az az iCal naptár szinkron és hogy működik?
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
        text: >
          `Az iCal naptár szinkronnal könnyedén összehangolhatod az Appartman
          naptárát a szállásközvetítő oldalakéival
          (`[`Szallas.hu`](http://Szallas.hu)` , 
          `[`Booking.com`](http://Booking.com)`, Airbnb). A naptár szinkron nagy
          segítség et nyújt a túlfoglalás elkerülésében.`


          ### Hogy kell összekapcsolni a naptárakat?


          Az iCal esetében minden egyes lakóegységhez tartozik egy naptár minden
          foglalási rendszeren, vagy közvetítő oldalon. Tehát ha van egy szobád,
          és azt értékesíted az Appartman, a [Szallas.hu](http://Szallas.hu) és
          a Booking felületén, akkor annak lesz egy naptára mindhárom
          rendszeren.


          A naptárak akkor tudják egymásnak küldeni a foglalt és szabad
          dátumokat, ha ismerik egymás linkjét. Minden naptárhoz meg kell adni
          az összes többi naptár linkjét, hogy tudjanak kommunikálni egymással.


          Itt tudsz róla olvasni, hogy pontosan hogy kell összekötni a
          naptárakat közvetítő oldalanként.


          ### Milyen gyakran frissül az iCal naptár szinkron?


          Az Appartman és az Airbnb 5 perces frissítést garantál, a
          [Szallas.hu](http://Szallas.hu) és a Booking esetében ez fél- és egy
          óra közötti gyakoriságra tehető.


          ### Milyen adatokat küld az iCal naptár szinkron?


          A naptárakat szinkronizálva csak azt az információt lehet továbbítani,
          hogy az adott lakóegység az adott dátumon foglalt, vagy szabad. Ennek
          megfelelően nem lesznek feltüntetve a foglaláshoz kapcsolódó
          információk, mint a foglaló neve, létszám, stb.
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
