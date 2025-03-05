import { hexToRgb } from './colorManagement';

export default class Slide {
    constructor({ title, elements = [], palette }) {
      this.title = title; // Slide title
      this.elements = elements; // Array of text, images, shapes, etc.
      this.palette = palette; // Store the palette
    }
  
    generateFrame(index) {
      const frame = figma.createFrame();
      frame.name = this.title;
      frame.resize(1920, 1080);
      frame.x = index * 850;
      
      // Set background color from palette index 0
      if (this.palette && this.palette[0]) {
        frame.fills = [{
          type: 'SOLID',
          color: hexToRgb(this.palette[0])
        }];
      }
      
      return frame;
    }
  }
  