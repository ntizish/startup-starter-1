// Template definition for minimalist style
const templateBold = {
  metadata: {
    name: "Bold",
    description: "Clean and simple designs with ample white space",
    availablePalettes: ['BOLD1'], // This template works best with these palettes
    availableFonts: ['Archivo', 'Parkinsans'] // This template works best with these fonts
  },
  titleSlide: {
    backgroundColorIndex: 0,
    title: "Title Slide",
    elements: [
      { type: "image", imageSrc: "https://raw.githubusercontent.com/ntizish/startup-starter-1/refs/heads/main/src/app/assets/images/slides/BOLD/B_1.png", position: [12, 12], size: [1896, 1056], borderRadius: 9999 },
      { type: "text", content: "Project Title", position: [35, 432], colorIndex: 1, fontSize: 196, size: [1850, 216], alignHorizontal: "CENTER", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 110  },
      { type: "text", position: [740, 870], size: [440, 154], content: "A bit more comprehensive description", colorIndex: 1, fontSize: 32, alignHorizontal: "CENTER", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 120 },
      { type: "rectangle", position: [22, 30], colorIndex: 1, size: [12, 12], borderRadius: 9999 },
      { type: "rectangle", position: [1881, 30], colorIndex: 1, size: [12, 12], borderRadius: 9999 },
      { type: "rectangle", position: [22, 1038], colorIndex: 1, size: [12, 12], borderRadius: 9999 },
      { type: "rectangle", position: [1881, 1038], colorIndex: 1, size: [12, 12], borderRadius: 9999 }
    ]
  },
  problemSlide: {
    backgroundColorIndex: 1,
    title: "Problem Slide",
    elements: [
      { type: "rectangle", position: [1286, 1080], size: [318, 1080], colorIndex: 2, opacity: 0.1, rotation: 180.0 },
      { type: "text", position: [56, 53], size: [896, 381], content: "Short overview of the problem that’s being solved with your product", colorIndex: 0, fontSize: 80, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 90 },
      { type: "text", position: [56, 463], size: [592, 457], content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [56, 984], size: [136, 40], content: "PROJECT NAME", colorIndex: 0, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Bold", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [208, 1004], size: [136, 20], content: "PROBLEM", colorIndex: 0, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "rectangle", position: [1286, 1080], size: [318, 180], colorIndex: 2, rotation: 180.0 },
      { type: "rectangle", position: [1603, 1080], size: [317, 1080], colorIndex: 2, opacity: 0.11, rotation: 180.0 },
      { type: "rectangle", position: [1603, 1080], size: [317, 892], colorIndex: 2, rotation: 180.0 },
      { type: "rectangle", position: [1920, 1080], size: [317, 1080], colorIndex: 2, opacity: 0.1, rotation: 180.0 },
      { type: "rectangle", position: [1920, 1080], size: [317, 544], colorIndex: 2, rotation: 180.0 },
      { type: "text", position: [968, 487], size: [317, 106], content: "25%", colorIndex: 0, fontSize: 96, alignHorizontal: "CENTER", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [1286, 487], size: [317, 106], content: "50%", colorIndex: 0, fontSize: 96, alignHorizontal: "CENTER", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [1604, 487], size: [317, 106], content: "25%", colorIndex: 0, fontSize: 96, alignHorizontal: "CENTER", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [1621, 966], size: [280, 58], content: "Some visualised data explanation up to 2 lines", colorIndex: 0, fontSize: 24, alignHorizontal: "CENTER", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 120, opacity: 0.5 },
      { type: "text", position: [1304, 966], size: [280, 58], content: "Some visualised data explanation up to 2 lines", colorIndex: 0, fontSize: 24, alignHorizontal: "CENTER", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 120, opacity: 0.5 },
      { type: "text", position: [987, 966], size: [280, 58], content: "Some visualised data explanation up to 2 lines", colorIndex: 0, fontSize: 24, alignHorizontal: "CENTER", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 120, opacity: 0.5 },
      { type: "rectangle", position: [22, 1038], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [22, 30], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [927, 1038], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [927, 30], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
    ]
  },
  solutionSlide: {
    backgroundColorIndex: 1,
    title: "Solution Slide",
    elements: [
      { type: "image", imageSrc: "https://raw.githubusercontent.com/ntizish/startup-starter-1/refs/heads/main/src/app/assets/images/slides/BOLD/B_3.png", position: [664, 620], size: [896, 460]},
      { type: "rectangle", position: [700, 566.89], size: [896, 458], colorIndex: 2, rotation: 3.0 },
      { type: "text", position: [56, 53], size: [1808, 381], content: "The solution is simply so unique it’s even hard to comprehend", colorIndex: 0, fontSize: 128, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 984], size: [136, 40], content: "PROJECT NAME", colorIndex: 0, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Bold", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [208, 1004], size: [136, 20], content: "SOLUTION", colorIndex: 0, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "rectangle", position: [1574, 531], size: [12, 12], colorIndex: 1, borderRadius: 9999, rotation: -3.0 },
      { type: "rectangle", position: [707, 580], size: [12, 12], colorIndex: 1, borderRadius: 9999, rotation: -3.0 },
      { type: "rectangle", position: [1598, 960], size: [12, 12], colorIndex: 1, borderRadius: 9999, rotation: -3.0 },
    ]
  },
  solutionSlide2: {
    backgroundColorIndex: 0,
    title: "Solution Slide",
    elements: [
      { type: "image", imageSrc: "https://raw.githubusercontent.com/ntizish/startup-starter-1/refs/heads/main/src/app/assets/images/slides/BOLD/B_4.png", position: [968, 22], size: [933, 1036]},
      { type: "text", position: [56, 53], size: [896, 381], content: "Functionality that’s tailored for your need on the go", colorIndex: 1, fontSize: 72, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 984], size: [136, 40], content: "PROJECT NAME", colorIndex: 1, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Bold", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [208, 1004], size: [136, 20], content: "SOLUTION", colorIndex: 1, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [64, 470], size: [592, 219], content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", colorIndex: 1, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "rectangle", position: [31, 1038], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [31, 30], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [927, 1038], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [927, 30], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
    ]
  },
  marketSlide: {
    backgroundColorIndex: 0,
    title: "Market Slide",
    elements: [
      { type: "image", imageSrc: "https://raw.githubusercontent.com/ntizish/startup-starter-1/refs/heads/main/src/app/assets/images/slides/BOLD/B_5.png", position: [0, 21], size: [1920, 1059]},
      { type: "text", position: [56, 984], size: [136, 40], content: "PROJECT NAME", colorIndex: 1, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Bold", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [208, 1004], size: [136, 20], content: "MARKET", colorIndex: 1, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [95, 230], size: [913, 168], content: "$ 151.2M", colorIndex: 1, fontSize: 156, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [87, 430], size: [592, 219], content: "Description of the market can be quite long up to 5 lines of text.", colorIndex: 1, fontSize: 32, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "rectangle", position: [56, 218], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [56, 528], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [1008, 218], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [1008, 528], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
    ]
  },
  roadmapSlide: {
    backgroundColorIndex: 0,
    title: "Roadmap Slide",
    elements: [
      { type: "text", position: [56, 984], size: [136, 40], content: "PROJECT NAME", colorIndex: 1, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Bold", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [208, 1004], size: [136, 20], content: "ROADMAP", colorIndex: 1, fontSize: 18, alignHorizontal: "LEFT", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [56, 53], size: [896, 0], content: "Limitless growth", colorIndex: 1, fontSize: 72, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 229], size: [896, 0], content: "Q1 2024", colorIndex: 2, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 402], size: [896, 0], content: "Q2 2024", colorIndex: 2, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 575], size: [896, 0], content: "Q3 2024", colorIndex: 2, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 748], size: [896, 0], content: "Q4 2024", colorIndex: 2, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 268], size: [592, 0], content: "Something bigger", colorIndex: 1, fontSize: 40, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 446], size: [592, 0], content: "Something bigger", colorIndex: 1, fontSize: 40, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 619], size: [592, 0], content: "Something bigger", colorIndex: 1, fontSize: 40, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 800], size: [592, 0], content: "Something bigger", colorIndex: 1, fontSize: 40, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [1120, 263], size: [744, 0], content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", colorIndex: 1, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [1120, 436], size: [744, 0], content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", colorIndex: 1, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [1120, 609], size: [744, 0], content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", colorIndex: 1, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110 },
      { type: "text", position: [1120, 782], size: [744, 0], content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", colorIndex: 1, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110 },
      { type: "rectangle", position: [56, 353], size: [1808, 1], colorIndex: 2, opacity: 0.32 },
      { type: "rectangle", position: [56, 527], size: [1808, 1], colorIndex: 2, opacity: 0.32 },
      { type: "rectangle", position: [56, 700], size: [1808, 1], colorIndex: 2, opacity: 0.32 },
      { type: "rectangle", position: [56, 873], size: [1808, 1], colorIndex: 2, opacity: 0.32 }
    ]
  },
  teamSlide: {
    backgroundColorIndex: 0,
    title: "Team Slide",
    elements: [
      { type: "rectangle", position: [968, 212], size: [440, 868], colorIndex: 2 },
      { type: "rectangle", position: [1424, 212], size: [440, 868], colorIndex: 2 },
      { type: "rectangle", position: [512, 212], size: [440, 868], colorIndex: 2 },
      { type: "rectangle", position: [56, 212], size: [440, 868], colorIndex: 2 },
      { type: "text", position: [56, 53], size: [608, 101], content: "Dedicated team", colorIndex: 1, fontSize: 80, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 90 },
      { type: "text", position: [81, 664], size: [390, 0], content: "Team player #1", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [537, 664], size: [390, 0], content: "Team player #2", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [993, 664], size: [390, 0], content: "Team player #3", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [1449, 664], size: [390, 0], content: "Team player #4", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [81, 723], size: [390, 77], content: "Larger description of a person. May be longer that a sentence and up to 4 lines of text.", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110, opacity: 0.64 },
      { type: "text", position: [537, 723], size: [390, 77], content: "Larger description of a person. May be longer that a sentence and up to 4 lines of text.", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110, opacity: 0.64 },
      { type: "text", position: [993, 723], size: [390, 77], content: "Larger description of a person. May be longer that a sentence and up to 4 lines of text.", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110, opacity: 0.64 },
      { type: "text", position: [1449, 723], size: [390, 77], content: "Larger description of a person. May be longer that a sentence and up to 4 lines of text.", colorIndex: 0, fontSize: 24, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110, opacity: 0.64 },
      { type: "rectangle", position: [68, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [524, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [980, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [1436, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [472, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [928, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [1384, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [1840, 1056], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
    ]
  },
  gallerySlide: {
    backgroundColorIndex: 0,
    title: "Gallery Slide",
    elements: [
      { type: "text", position: [56, 53], size: [608, 78], content: "Gallery heading", colorIndex: 1, fontSize: 80, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 90 },
    ]
  },
  contactSlide: {
    backgroundColorIndex: 2,
    title: "Contact Slide",
    elements: [
      { type: "text", position: [56, 56], size: [1808, 0], content: "Shape the world with us!", colorIndex: 0, fontSize: 220, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [56, 990], size: [592, 0], content: "wanna@email.me", colorIndex: 0, fontSize: 32, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [664, 990], size: [592, 0], content: "@wanna_text_me", colorIndex: 0, fontSize: 32, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "text", position: [1272, 990], size: [592, 0], content: "wanna-text.me", colorIndex: 0, fontSize: 32, alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Bold", letterSpacing: -1, lineHeight: 105 },
      { type: "rectangle", position: [22, 1047], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [1886, 1047], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [22, 22], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [1886, 22], size: [12, 12], colorIndex: 1, borderRadius: 9999 },
      { type: "rectangle", position: [76, 615], size: [288, 342], colorIndex: 1, rotation: 15.0 },
      { type: "rectangle", position: [1124, 625], size: [472, 342], colorIndex: 1, rotation: 15.0 },
      { type: "rectangle", position: [547, 695], size: [196, 198], colorIndex: 1, rotation: 15.0 },
      { type: "rectangle", position: [1650, 585], size: [196, 198], colorIndex: 1, rotation: -10.0 },
      { type: "rectangle", position: [971, 613], size: [95, 96], colorIndex: 1, rotation: 15.0 },
      { type: "rectangle", position: [422, 588], size: [193, 342], colorIndex: 1, rotation: -17.0 },
      { type: "rectangle", position: [788, 625], size: [421, 123], colorIndex: 1, rotation: -17.0 },
      { type: "rectangle", position: [335, 564], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [574, 651], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [718, 663], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [796, 647], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [1048, 602], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [1556, 528], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
      { type: "rectangle", position: [1657, 602], size: [12, 12], colorIndex: 0, borderRadius: 9999 },
    ]
  }
};

export default templateBold; 