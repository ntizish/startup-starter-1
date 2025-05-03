import { hexToRgb } from "./colorManagement";
import CM_1 from '../app/assets/images/slides/CM/CM_1.png';

// const imageMap = {
//   'src/app/assets/images/slides/CM/CM_1.png': CM_1
// };

export default class SlideElement {
  constructor({ 
    type, 
    content = "", 
    position, 
    font, 
    color, 
    size, 
    imageSrc, 
    alignHorizontal, 
    alignVertical, 
    fontSize,
    letterSpacing,    // New: for letter spacing
    lineHeight,       // New: for line height
    fontWeight,       // New: for font weight (Regular, Medium, Bold, etc.)
    rotation = 0,      // Add default value of 0
    borderRadius = 0  // Add default value
  }) {
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
    this.letterSpacing = letterSpacing;
    this.lineHeight = lineHeight;
    this.fontWeight = fontWeight;
    this.rotation = rotation;
    this.borderRadius = borderRadius;
  } 

    // !!! MOVE TO UTILS !!!
    base64ToUint8Array(dataUrl) {
      // Remove the data URL prefix
      const base64 = dataUrl.replace(/^data:image\/\w+;base64,/, '');
      
      // Decode base64
      const binStr = Buffer.from(base64, 'base64').toString('binary');
      
      // Convert to Uint8Array
      const uint8Array = new Uint8Array(binStr.length);
      for (let i = 0; i < binStr.length; i++) {
        uint8Array[i] = binStr.charCodeAt(i);
      }
      return uint8Array;
    }
  
    async createFigmaElement() {
      
      if (this.type === "text") {
        try {
          console.log(`Trying to add text: ${this.content} with font: ${this.font} style: ${this.fontWeight || "Regular"}`);

          const font = { 
            family: this.font, 
            style: this.fontWeight || "Regular" 
          };
          
          // First, ensure the font is loaded
          try {
            // Double-check that the font is loaded before creating the text element
            await figma.loadFontAsync(font);
          } catch (fontError) {
            console.error(`Font loading error for ${this.font} ${this.fontWeight}:`, fontError);
            // Try with "Regular" as fallback
            if (this.fontWeight !== "Regular") {
              font.style = "Regular";
              try {
                await figma.loadFontAsync(font);
                console.log(`Falling back to ${this.font} Regular`);
              } catch (fallbackError) {
                console.error(`Even fallback font failed to load:`, fallbackError);
                return null;
              }
            } else {
              return null;
            }
          }
          
          const text = figma.createText();

          text.fontName = font;
          text.characters = String(this.content || "Placeholder Text");
          text.fills = [{ type: "SOLID", color: hexToRgb(this.color) }];
          text.x = this.position[0];
          text.y = this.position[1];
          text.resize(this.size[0], this.size[1]);
          text.textAlignHorizontal = this.alignHorizontal;
          text.textAlignVertical = this.alignVertical;
          text.fontSize = this.fontSize;
          
          // Apply new text properties if they exist
          if (this.letterSpacing !== undefined) {
            text.letterSpacing = { value: this.letterSpacing, unit: 'PERCENT' };
          }
          if (this.lineHeight !== undefined) {
            text.lineHeight = { value: this.lineHeight, unit: 'PERCENT' };
          }

          if (this.rotation) {
            text.rotation = this.rotation;
          }

          return text;
        } catch (error) {
          console.error(`Text creation failed for ${this.content}:`, error);
          return null;
        }
      } else if (this.type === "image") {
        
        try {
          // Create image from URL
          const image = await figma.createImageAsync(this.imageSrc);
          
          // Create a rectangle for the image
          const rect = figma.createRectangle();
          rect.x = this.position[0];
          rect.y = this.position[1];

          if (this.size) {
            // If size is specified, use it
            rect.resize(this.size[0], this.size[1]);
          } else {
            // Otherwise, use the image's original dimensions
            const { width, height } = await image.getSizeAsync();
            rect.resize(width, height);
          }

          // Set the image as fill
          rect.fills = [{
            type: 'IMAGE',
            imageHash: image.hash,
            scaleMode: 'FILL'
          }];

          if (this.rotation) {
            rect.rotation = this.rotation;
          }

          // Apply border radius if specified
          if (this.borderRadius) {
            rect.cornerRadius = this.borderRadius;
          }

          return rect;
        } catch (error) {
          console.error('Error creating image:', error);
          return null;
        }
      }
      return null;
    }
  }
  