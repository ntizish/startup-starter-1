// Utility functions for handling Figma client storage operations

const STORAGE_KEY = 'presentation_history';

// Save a new presentation to Figma client storage
export async function savePresentation(presentationData) {
  try {
    // Get existing presentations
    const existingData = await figma.clientStorage.getAsync(STORAGE_KEY);
    const presentations = existingData || [];
    
    // Add new presentation with timestamp
    const newPresentation = {
      ...presentationData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString() // Unique ID for each presentation
    };
    
    presentations.push(newPresentation);
    
    // Save back to Figma client storage
    await figma.clientStorage.setAsync(STORAGE_KEY, presentations);
    
    return true;
  } catch (error) {
    console.error('Error saving presentation:', error);
    return false;
  }
}

// Get all saved presentations
export async function getPresentations() {
  try {
    const presentations = await figma.clientStorage.getAsync(STORAGE_KEY);
    return presentations || [];
  } catch (error) {
    console.error('Error getting presentations:', error);
    return [];
  }
}

// Get a specific presentation by ID
export async function getPresentationById(id) {
  try {
    const presentations = await getPresentations();
    return presentations.find(p => p.id === id);
  } catch (error) {
    console.error('Error getting presentation by ID:', error);
    return null;
  }
}

// Delete a presentation by ID
export async function deletePresentation(id) {
  try {
    const presentations = await getPresentations();
    const updatedPresentations = presentations.filter(p => p.id !== id);
    await figma.clientStorage.setAsync(STORAGE_KEY, updatedPresentations);
    return true;
  } catch (error) {
    console.error('Error deleting presentation:', error);
    return false;
  }
} 