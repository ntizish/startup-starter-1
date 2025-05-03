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
      { type: "text", content: "Project Title", position: [35, 432], colorIndex: 1, fontSize: 196, size: [1850, 216], alignHorizontal: "CENTER", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 110  }
    ]
  },
  problemSlide: {
    backgroundColorIndex: 1,
    title: "Problem Slide",
    elements: [
      { type: "text", content: "Problem", position: [35, 432], colorIndex: 0, fontSize: 196, size: [1850, 216], alignHorizontal: "CENTER", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 110  }
    ]
  },
};

export default templateBold; 