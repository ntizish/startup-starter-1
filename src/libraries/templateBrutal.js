// Templates of the slides being generated with the plugin

const templateBrutal = {
    metadata: {
        name: "Brutal",
        description: "Brutal design with bold elements",
        availablePalettes: ['BRUTAL1'],
        availableFonts: ['Archivo Narrow', 'Outfit', 'Mate']
    },
    titleSlide: {
      backgroundColorIndex: 0,
      title: "Title Slide",
      elements: [
        { type: "image", imageSrc: "https://raw.githubusercontent.com/ntizish/startup-starter-1/refs/heads/main/src/app/assets/images/slides/CM/CM_1.png", position: [0, 0], size: [1920, 1080] },
        { type: "text", content: "Project Title", position: [360, 440], color: '#000000', colorIndex: 1, fontSize: 96, size: [1200, 200], alignHorizontal: "CENTER", alignVertical: "CENTER", fontWeight: "Medium", letterSpacing: -1, lineHeight: 95 },
        { type: "text", content: "Larger description of the way that product solves the issue. May be longer that a sentence and up to 8 lines of text.", position: [664, 870], color: '#000000', colorIndex: 1, fontSize: 20, size: [592, 160], alignHorizontal: "CENTER", alignVertical: "BOTTOM", fontWeight: "Medium", letterSpacing: -1, lineHeight: 120  }]
    }
}
  
  export default templateBrutal;