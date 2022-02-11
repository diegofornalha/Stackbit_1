---
title: Interjú magánszállásadóknak | Appartman
sections:
  - type: HeroSection
    colors: colors-f
    title: Segítsd egy interjúval a jövő szálláshelykezelőjének létrejöttét
    text: >
      Szoftvereinket a kis szállásadók igényeire szabjuk. Magánszállásadóként
      egy mélyinterjúval segíthetsz, hogy nemsokára egy igazán felhasználóbarát
      és egyszerű megoldás is elérhető legyen.
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
