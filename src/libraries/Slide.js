export default class Slide {
    constructor({ title, elements = [] }) {
      this.title = title; // Slide title
      this.elements = elements; // Array of text, images, shapes, etc.
    }
  
    generateFrame(index) {
      const frame = figma.createFrame();
      frame.name = this.title;
      frame.resize(1920, 1080);
      frame.x = index * 850;
      return frame;
    }
  }
  