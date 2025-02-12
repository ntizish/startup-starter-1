import { hexToRgb } from "./colorManagement";

export default class SlideElement {
    constructor({ type, content = "", position, font, color, size, imageSrc, alignHorizontal, alignVertical, fontSize }) {
      this.type = type; // "text" | "image" | "shape"
      this.content = content; // Only for text
      this.position = position; // [x, y]
      this.font = font;
      this.color = color;
      this.size = size; // { width, height }
      this.imageSrc = imageSrc; // Only for images
      this.alignHorizontal = alignHorizontal;
      this.alignVertical = alignVertical;
      this.fontSize = fontSize;
    }
  
    async createFigmaElement() {
      
      if (this.type === "text") {
        try {
          console.log(`Trying to add text: ${this.content}`);

          const font = { family: "Inter", style: "Regular" };
          
          const text = figma.createText();

          text.characters = String(this.content || "Placeholder Text");
          text.fontName = font;
          text.fills = [{ type: "SOLID", color: hexToRgb(this.color) }];
          text.x = this.position[0];
          text.y = this.position[1];
          text.resize(this.size[0], this.size[1]);
          text.textAlignHorizontal = this.alignHorizontal;
          text.textAlignVertical = this.alignVertical;
          text.fontSize = this.fontSize;

          return text;
          } catch (error) {
            console.error(`Text creation failed for ${this.content}:`, error);
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
  