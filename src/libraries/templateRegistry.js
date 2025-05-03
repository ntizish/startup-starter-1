import templateCreativeMess from './templateCreativeMess';
import templateMinimalist from './templateMinimalist';
import CM1 from './palettes/CM1';
import CM2 from './palettes/CM2';
import CM3 from './palettes/CM3';

// Registry of all available templates
const templates = {
  'CreativeMess': templateCreativeMess
};

// Registry of all available palettes
const palettes = {
  'CM1': CM1,
  'CM2': CM2,
  'CM3': CM3
};

// Get template by name
export function getTemplateByName(templateName) {
  return templates[templateName] || null;
}

// Get all available templates with their metadata
export function getAllTemplates() {
  return Object.entries(templates).map(([id, template]) => ({
    id,
    name: template.metadata.name,
    description: template.metadata.description
  }));
}

// Get palette by name
export function getPaletteByName(paletteName) {
  return palettes[paletteName]?.colors || null;
}

// Get all available palettes for a template
export function getPalettesForTemplate(templateName) {
  const template = getTemplateByName(templateName);
  if (!template || !template.metadata || !template.metadata.availablePalettes) {
    return [];
  }
  
  return template.metadata.availablePalettes.map(paletteId => {
    const palette = palettes[paletteId];
    if (!palette) return null;
    
    return {
      id: paletteId,
      name: palette.name,
      colors: palette.colors,
      tags: palette.tags || [] // Use palette's own tags
    };
  }).filter(Boolean);
}

// Get all available fonts for a template
export function getFontsForTemplate(templateName) {
  const template = getTemplateByName(templateName);
  if (!template || !template.metadata || !template.metadata.availableFonts) {
    return [];
  }
  
  return template.metadata.availableFonts.map(fontId => ({
    id: fontId,
    name: fontId
  }));
} 