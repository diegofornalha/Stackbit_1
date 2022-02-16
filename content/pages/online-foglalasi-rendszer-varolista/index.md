---
title: Online foglalási rendszer várólista | Appartman
sections:
  - type: HeroSection
    colors: colors-a
    title: 'Love where you work, because work loves you'
    text: >-
      One platform, one community, getting to the bottom line of everything
      employment.  Figure out your benefits, practice for interviews, get
      mentored, help peers, get helped in return.
    media:
      type: ImageBlock
      url: 'https://assets.stackbit.com/components/images/default/hero.png'
      altText: Hero section image
    actions:
      - type: Button
        label: Sign up
        url: /
        style: primary
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-11
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
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    colors: colors-f
    title: Get early access
    text: >-
      Sign up your team today to be the first to try out our new product to
      increase your team's productivity.
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: full
      submitLabel: Sign Up
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
