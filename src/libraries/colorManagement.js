export function hexToRgb(hex) {
    // Remove the "#" if present
    hex = hex.replace(/^#/, "");
  
    // Parse the hex color
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    // Convert to Figma-compatible RGB values (0 to 1 range)
    return { r: r / 255, g: g / 255, b: b / 255 };
  }