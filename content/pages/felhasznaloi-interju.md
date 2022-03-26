---
title: Interjú magánszállásadóknak | Appartman
sections:
  - type: HeroSection
    colors: colors-f
    title: Segítse egy interjúval a jövő magánszálláshely szoftvereinek létrejöttét
    text: >
      Szoftvereinket a kis szállásadók igényeire szabjuk. Magánszállásadóként
      egy mélyinterjúval segíthetsz, hogy nemsokára egy igazán felhasználóbarát,
      egyszerű és nem hotelekre szabott megoldás is elérhető legyen.
    media:
      type: ImageBlock
      caption: Team meeting
      altText: Hero section image
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
          - pt-24
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
  - type: ContactSection
    colors: colors-a
    text: >
      ### Jelentkezz interjúra és oldjuk meg együtt a foglalással és
      adminisztrációval kapcsolatos problémákat!


      Résztvevőink életre szóló kedvezményeket kapnak a szoftvereinkből.


      Az interjú online zajlik az általad választott időpontban, és csak a
      szálláshelyeddel kapcsolatos dolgokról beszélgetünk.
    form:
      type: FormBlock
      elementId: jelentkezes-urlap
      action: /.netlify/functions/submission_created
      destination: hello@appartman.hu
      fields:
        - type: TextFormControl
          name: név
          label: Név
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: telefonszam
          label: Telefonszám
          isRequired: false
          width: full
        - type: CheckboxFormControl
          name: adatkezelesi
          label: Elfogadom az adatkezelési nyilatkoatot
          isRequired: true
          width: full
      submitLabel: Jelentkezés
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
          - pt-20
          - pb-20
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
