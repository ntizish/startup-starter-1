// Utility functions for handling local storage operations

const STORAGE_KEY = 'presentation_history';

// Save a new presentation to local storage
export function savePresentation(presentationData) {
  try {
    // Get existing presentations
    const existingData = localStorage.getItem(STORAGE_KEY);
    const presentations = existingData ? JSON.parse(existingData) : [];
    
    // Add new presentation with timestamp
    const newPresentation = {
      ...presentationData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString() // Unique ID for each presentation
    };
    
    presentations.push(newPresentation);
    
    // Save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(presentations));
    
    return true;
  } catch (error) {
    console.error('Error saving presentation:', error);
    return false;
  }
}

// Get all saved presentations
export function getPresentations() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting presentations:', error);
    return [];
  }
}

// Get a specific presentation by ID
export function getPresentationById(id) {
  try {
    const presentations = getPresentations();
    return presentations.find(p => p.id === id);
  } catch (error) {
    console.error('Error getting presentation by ID:', error);
    return null;
  }
}

// Delete a presentation by ID
export function deletePresentation(id) {
  try {
    const presentations = getPresentations();
    const updatedPresentations = presentations.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPresentations));
    return true;
  } catch (error) {
    console.error('Error deleting presentation:', error);
    return false;
  }
}

// Clear all saved presentations
export function clearPresentations() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing presentations:', error);
    return false;
  }
} 