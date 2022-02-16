---
title: Online foglalási rendszer várólista | Appartman
sections:
  - type: ContactSection
    colors: colors-f
    title: Iratkozz fel az online foglalási rendszerünk várólistájára
    text: >
      ###### 0% jutalék május végéig


      2022\. június 1-től mindössze 2% jutalék kerül levonásra a megvalósult
      foglalásokból.
    form:
      type: FormBlock
      elementId: feliratkozas
      action: /.netlify/functions/submission_created
      destination: hello@appartman.hu
      fields:
        - type: EmailFormControl
          name: email
          isRequired: true
          width: full
          label: Email cím
        - name: adatkezelesi
          label: Elfogadom az adatkezelési nyilatkozatot
          isRequired: true
          width: full
          type: CheckboxFormControl
      submitLabel: Feliratkozás
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
          - pt-36
          - pb-36
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
