---
layout: PageLayout
title: Lakóegység zárolása | Appartman
sections:
  - type: HeroSection
    colors: colors-h
    title: 'Foglalás bevitele, foglalt éjszakák zárolása'
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
        flexDirection: col
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
          `Hamarosan érkezik az iCal naptár szinkron funkciónk. A funkció
          segítségével könnyedén össze lehet majd kötni az Appartman naptárát a
          szállásközvetítő oldalakéival (Airbnb, Booking és Szallas.hu).`


          ### Foglalt éjszakák zárolása, vagy foglalás bevitele


          *Szálláshelyed > Zárolás*


          #### 1. Lakóegység(ek) megadása


          A Válaszd ki, melyik lakóegységeket szeretnéd foglalttá tenni. Érdemes
          foglalásokban gondolkodni, hiszen így egy lemondás esetén könnyen
          törölhető a zárolás, illetve a zárolások elláthatók leírással is a
          könnyebb átláthatóság érdekében.


          #### 2. Éjszakák megadása


          Add meg, mely **éjszakákon** szeretnéd foglalttá tenni az előbb
          kiválasztott lakóegységeket. Fontos, hogy nem érkezési-távozási
          dátumokról van szó, hanem éjszakákról. Azaz, ha egy szobába 18-án
          érkeznek, és 19-án távoznak, akkor csak a 18-át kell bejelölni, hiszen
          az az éjszaka foglalt.


          #### 5. Leírás (nem kötelező)


          #### 6. Zárolás

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
