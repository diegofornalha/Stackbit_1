---
title: Careers
sections:
  - type: HeroSection
    colors: colors-h
    title: Szálláshely létrehozása
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-20
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
  - type: FeaturedItemsSection
    colors: colors-a
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Product
        text: >
          **Új szálláshely hozzáadása**


          Itt a következő alapadatokat kell megadnod.


          *   Szálláshely neve


          *   Szálláshely email címe


          *   Szálláshely telefonszáma


          *   Irányítószám


          *   Város (automatikusan ajánl irányítószám alapján)


          *   Cím


          *   Szálláshely képei

              Az ide feltöltött képek a foglalómotor főoldalán fognak megjelenni.
              Az első helyen megjelenő képet a kép jobb felső sarkában található gombra kattintva a Beállítás főképként opcióval tudod kiválasztani.

              A képet törölni szintén a jobb felső sarokban található gombbal előhívott Kép törlése menüponttal lehetséges.

          S**zobák számának megadása**


          ***Külön foglalható*** lakóegységeid számának megadása. A szám
          megadása után megjelenik egy lista a megfelelő elemszámmal.


          **Lakóegység adatok megadása**


          Az előzőleg létrehozott listaelemeket megnyitva tudod megadni az adott
          lakóegység paramétereit. A következő paraméterekre lesz szükség:


          *   lakóegység neve


          *   férőhely


          *   árszámítás módja


          *   egységár


          *   lakóegység képei


          **Mentés**


          Miután megadtad az összes szükséges lakóegységet, a mentés gombbal
          véglegesítheted az újonnan megadott szálláshelyedet.
        featuredImage: null
        styles:
          title:
            textAlign: left
          subtitle:
            textAlign: left
          text:
            textAlign: left
      - type: FeaturedItem
        title: Product
        text: >
          Director of product management


          **San Francisco**


          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        featuredImage: null
        styles:
          title:
            textAlign: left
          subtitle:
            textAlign: left
          text:
            textAlign: left
      - type: FeaturedItem
        title: Product
        text: >
          Director of product management


          **San Francisco**


          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
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
  - type: ContactSection
    colors: colors-f
    title: Not seeing the right role? Contact us
    text: >-
      We might have more roles soon, and we’ll contact you if we think there
      might be a good match
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: address
          label: Home address
          placeholder: Your home address
          isRequired: 'false'
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
      submitLabel: Send Message
    media: null
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
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
layout: PageLayout
---
