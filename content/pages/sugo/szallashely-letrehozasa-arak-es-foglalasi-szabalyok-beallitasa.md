---
title: Szálláshely létrehozása | Appartman
sections:
  - type: HeroSection
    colors: colors-h
    title: 'Szálláshely létrehozása, árak és foglalási szabályok beállítása'
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
          ### 1. Új szálláshely hozzáadása


          Új szálláshelyet a regisztráció után, vagy a fejlécen a jobb oldalon
          található legördülő menüben található Szállások menüpontból lehet
          létrehozni.


          Itt a következő alapadatokat kell megadnod.


          *   Szálláshely neve


          *   Szálláshely email címe


          *   Szálláshely telefonszáma


          *   Irányítószám


          *   Város (automatikusan ajánl irányítószám alapján)


          *   Cím


          ### 2. Lakóegység adatok megadása


          A regisztrációs folyamatban a szálláshely létrehozása után, a
          szálláshely kártyájára kattintva automatikusan a Szobák menüpontba
          kerülsz, ahol a rendszer arra kér, hogy add meg a lakóegységeket. Ezt
          a jobb oldalon található Új lakóegység gombbal tudod megtenni. A
          következő paraméterek megadása szükséges.


          *   lakóegység neve


          *   férőhely


          ##### Ársávok létszám alapján


          Sávos árazás vendégszám alapján: bizonyos vendégszámok között
          megadhatóak külön árak.


          Példa a létszám alapján sávos árazásra:
          
          <div class="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Vendégek száma</th>
                  <th>Lakóegység ára éjszakánként</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1–2 fő</td>
                  <td>20 000 Ft</td>
                </tr>
                <tr>
                  <td>3–4 fő</td>
                  <td>24 000 Ft</td>
                </tr>
              <tfoot>
                <tr>
                  <td>5–6 fő</td>
                  <td>28 000 Ft</td>
                </tr>
              </tfoot>
            </table>
          </div>

          *   egységár


          *   hétvégi árak (ha van)


          *   lakóegység képei (ez az alapadatok megadása és a Mentés gomb
          megnyomása után jelenik meg)

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
    text: |
      ### További segítségre van szükséged?

      Keress minket a Kapcsolat oldalon található ügyfélszolgálatos email címen!
    actions:
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
layout: PageLayout
---
