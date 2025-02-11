import { hexToRgb } from "./colorManagement";

export default class SlideElement {
    static loadedFonts = new Set();

    constructor({ type, content = "", position, font, color, size, imageSrc }) {
      this.type = type; // "text" | "image" | "shape"
      this.content = content; // Only for text
      this.position = position; // [x, y]
      this.font = font;
      this.color = color;
      this.size = size; // { width, height }
      this.imageSrc = imageSrc; // Only for images
    }
  
    async createFigmaElement() {
      
      if (this.type === "text") {
        try {
          console.log(`Trying: ${this.content}`);
          console.log(`loadedFonts : ${this.loadedFonts}`);

          const font = { family: "Inter", style: "Regular" };
          // Only load font if it hasn't been loaded before
          const fontKey = `${font.family}-${font.style}`;
          if (!SlideElement.loadedFonts.has(fontKey)) {
              console.log(`Loading font: ${fontKey}`);
              await figma.loadFontAsync(font);
              SlideElement.loadedFonts.add(fontKey);
          }
          
          const text = figma.createText();
          text.characters = String(this.content || "Placeholder Text");
          text.fontName = font;
          text.fills = [{ type: "SOLID", color: hexToRgb(this.color) }];
          text.x = this.position[0];
          text.y = this.position[1];
          
          return text;
          } catch (error) {
            console.error(`Font loading failed for ${this.content}:`, error);
            return null;
          }
      } else if (this.type === "image") {
        try {
          const image = figma.createRectangle();
          if (this.size && this.size.width && this.size.height) {
            image.resize(this.size.width, this.size.height);
          }
          if (this.position) {
            image.x = this.position[0];
            image.y = this.position[1];
          }
          return image;
        } catch (error) {
          console.error('Error creating image:', error);
          return null;
        }
      }
      return null;
    }
  }
  