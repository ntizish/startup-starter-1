// Template definition for minimalist style
const templateMinimalist = {
  metadata: {
    name: "Minimalist",
    description: "Clean and simple designs with ample white space",
    availablePalettes: ['CM1', 'CM3'], // This template works best with these palettes
    availableFonts: ['Inter', 'Poppins'] // This template works best with these fonts
  },
  titleSlide: {
    title: "Title Slide",
    elements: [
      { type: "text", content: "Project Title", position: [360, 440], color: '#000000', colorIndex: 1, fontSize: 96, size: [1200, 200], alignHorizontal: "CENTER", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1, lineHeight: 95 },
      { type: "text", content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", position: [664, 870], color: '#000000', colorIndex: 1, fontSize: 20, size: [592, 160], alignHorizontal: "CENTER", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 120  }
    ]
  },
  problemSlide: {
    title: "Problem Slide",
    elements: [
      { type: "text", content: "Problem", position: [56, 56], color: '#000000', colorIndex: 1, fontSize: 24, size: [592, 28], alignHorizontal: "LEFT", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 115 },
      { type: "text", content: "Short overview of the problem that's being solved with your product", position: [56, 128], color: '#000000', colorIndex: 1, fontSize: 56, size: [896, 159], alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Regular", letterSpacing: -1, lineHeight: 110  },
      { type: "text", content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", position: [512, 540], color: '#000000', colorIndex: 1, fontSize: 20, size: [440, 192], alignHorizontal: "LEFT", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 120 },
      { type: "text", content: "ProjectName", position: [56, 1024], color: '#000000', colorIndex: 1, fontSize: 20, size: [440, 56], alignHorizontal: "LEFT", alignVertical: "CENTER", fontWeight: "Bold", letterSpacing: -1.1, lineHeight: 120 },
      { type: "text", content: "Q1 2024", position: [360, 1024], color: '#000000', colorIndex: 2, fontSize: 20, size: [440, 56], alignHorizontal: "LEFT", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 120 }
    ]
  },
  solutionSlide: {
    title: "Solution Slide",
    elements: [
      { type: "text", content: "Solution", position: [664, 56], color: '#000000', colorIndex: 1, fontSize: 24, size: [592, 28], alignHorizontal: "CENTER", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 115 },
      { type: "text", content: "ProjectName", position: [56, 1024], color: '#000000', colorIndex: 1, fontSize: 20, size: [440, 56], alignHorizontal: "LEFT", alignVertical: "CENTER", fontWeight: "Bold", letterSpacing: -1.1, lineHeight: 120 },
      { type: "text", content: "Q1 2024", position: [360, 1024], color: '#000000', colorIndex: 2, fontSize: 20, size: [440, 56], alignHorizontal: "LEFT", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1.1, lineHeight: 120 },
      { type: "text", content: "The solution is simply so unique it's even hard to comprehend, just buy it", position: [289, 676], color: '#000000', colorIndex: 1, fontSize: 96, size: [1342, 273], alignHorizontal: "CENTER", alignVertical: "TOP", fontWeight: "Medium", letterSpacing: -1, lineHeight: 95 }
    ]
  },
  // Add more slides as needed for this template
};

export default templateMinimalist; 