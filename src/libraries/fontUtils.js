// Font utilities

// Map of available fonts and their supported styles
const fontWeights = {
  'Inter': ['Regular', 'Medium', 'Bold'],
  'Space Grotesk': ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'],
  'Poppins': ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold']
};

// Get a list of all supported fonts
export function getAllFonts() {
  return Object.keys(fontWeights).map(fontName => ({
    id: fontName,
    name: fontName,
    weights: fontWeights[fontName]
  }));
}

// Get available weights for a specific font
export function getFontWeights(fontName) {
  return fontWeights[fontName] || ['Regular', 'Medium', 'Bold'];
}

// Helper to check if a font weight combination is supported
export function isFontWeightSupported(fontName, weight) {
  return fontWeights[fontName]?.includes(weight) || false;
}

// Get a fallback font weight if the requested one isn't available
export function getFallbackFontWeight(fontName, requestedWeight) {
  const weights = fontWeights[fontName] || [];
  
  // If the requested weight is available, use it
  if (weights.includes(requestedWeight)) {
    return requestedWeight;
  }
  
  // Otherwise use Regular if available, or the first available weight
  return weights.includes('Regular') ? 'Regular' : weights[0];
}

// Extract font info from a string (font-family and weight)
export function parseFontString(fontString) {
  // Default values
  let fontFamily = 'Inter';
  let fontWeight = 'Regular';
  
  if (!fontString) return { fontFamily, fontWeight };
  
  // Simple parsing logic - can be extended as needed
  const parts = fontString.split(' ');
  if (parts.length > 1) {
    // Last part is likely the weight
    fontWeight = parts.pop();
    fontFamily = parts.join(' ');
  } else {
    // Just a font name
    fontFamily = fontString;
  }
  
  return { fontFamily, fontWeight };
} 