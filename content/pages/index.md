---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-a
    title: Jutalékmentes vendégfogadás magánszállásoknak
    text: |
      Egyszerű és villámgyors foglalómotorunkkal automatizáltan fogadhatod a 
      vendégeidet anélkül, hogy ajánlatkérő emailekre kellene válaszolnod.
    actions:
      - type: Button
        label: Ingyenes regisztráció
        url: 'https://www.stackbit.com/'
        style: primary
        elementId: hero-main-button
    media:
      type: ImageBlock
      url: /images/online-foglalasi-rendszer.png
      altText: Image alt text
      caption: Image caption
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
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - colors: colors-h
    elementId: ''
    title: Fogadj vendégeket közvetlenül az online felületeidről.
    subtitle: >-
      These are all excellent features that will provide exactly the things
      you’re looking for.
    items:
      - type: FeaturedItem
        title: Villámgyors regisztráció és szálláshely építés
        text: >
          Percek alatt regisztrálhatsz és már másolhatod is a foglalási linket
          weboldaladra, Instára.
        featuredImage:
          url: /images/faster.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          title:
            textAlign: center
          text:
            textAlign: center
      - type: FeaturedItem
        title: Foglalási- árazási szabályok
        text: >
          Gyermek kedvezmények, vendégek számától függő árazás, hétvégi árak,
          szezonok, stb. A foglalási rendszerünkben csak a te szabályaid alapján
          lehet foglalni.
        featuredImage:
          url: /images/smarter.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          title:
            textAlign: center
          text:
            textAlign: center
        rating: 2
        isRatingVisible: false
      - type: FeaturedItem
        title: Mindig friss foglaltsági naptár
        text: >
          A látogatóid mindig a friss foglaltságot fogják látni, és az alapján
          fognak tudni foglalni.
        featuredImage:
          url: /images/focused.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          title:
            textAlign: center
          text:
            textAlign: center
    columns: 3
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-10
          - mr-10
        padding:
          - pt-28
          - pb-28
          - pl-8
          - pr-8
        justifyContent: center
        borderRadius: xx-large
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
  - elementId: ''
    colors: colors-a
    title: Mobilra optimalizált kialakítás
    text: >
      Foglalómotorunkat minden képernyőn könnyen kezelhetőre terveztük, hogy
      megkönnyítsük a foglalások leadását. Akár egy Instagram profilról is
      könnyen elérhető a másolható link segítségével.
    media:
      type: ImageBlock
      url: /images/Image-on-the-right.svg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-20
          - pb-6
          - pl-7
          - pr-7
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderColor: border-primary
        borderWidth: 0
        borderStyle: solid
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    colors: colors-h
    title: Automatikus emailek
    subtitle: ''
    text: >
      Vendégeid a foglalás után egy testreszabható automatikus emailben azonnal
      megkapják a szükséges információkat.
    actions: []
    media:
      type: ImageBlock
      url: /images/hero-1.png
      altText: Hero image
    backgroundImage: null
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
          - pt-20
          - pb-20
          - pl-7
          - pr-7
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    colors: colors-a
    title: Önálló weboldalként is működik
    text: >
      Nem gond, ha nincs weboldalad, vagy ha szeretnéd, hogy az Insta
      profilodról foglaljanak, hiszen a foglalómotorra minden fontos információt
      feltölthetsz.
    media:
      type: ImageBlock
      url: /images/Image-on-the-left.svg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-20
          - pb-20
          - pl-7
          - pr-7
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    colors: colors-f
    title: Online foglalási rendszer
    text: >
      Learn how top tech companies have learned working remote using our
      product.
    actions:
      - type: Button
        label: Ingyenes regisztráció
        url: /
        style: secondary
      - type: Link
        label: Bemutató felület
        url: /
        showIcon: true
        icon: arrowRight
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-20
          - mb-20
          - ml-7
          - mr-7
        padding:
          - pt-28
          - pb-28
          - pl-10
          - pr-10
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        borderColor: border-secondary
        borderWidth: 0
        borderStyle: none
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    media:
      url: /images/hero-3.jpg
      altText: Where did everyone go?
      caption: Team meeting
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
  - colors: colors-h
    elementId: ''
    title: Hogy működik a foglalómotor?
    subtitle: ''
    items:
      - type: FeaturedItem
        title: 1. Add meg a lakóegységeidet
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          title:
            textAlign: center
          subtitle:
            textAlign: center
          text:
            textAlign: center
      - type: FeaturedItem
        title: 2. Másold ki és illeszd be a foglalási linket
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        styles:
          title:
            textAlign: center
          subtitle:
            textAlign: center
          text:
            textAlign: center
    actions: []
    columns: 2
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
          - pt-32
          - pb-32
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedItemsSection
  - colors: colors-a
    elementId: ''
    title: Gyakori válaszok
    items:
      - question: How it this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How it this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How it this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
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
          - pt-32
          - pb-32
          - pl-7
          - pr-7
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
    type: FaqSection
  - elementId: ''
    colors: colors-f
    backgroundImage: null
    title: Let's do this
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions:
      - type: Button
        label: Ingyenes regisztráció
        url: /
        style: primary
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
          - pb-24
          - pl-7
          - pr-7
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
