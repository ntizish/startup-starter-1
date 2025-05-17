import { saveImageDataOrExportToFigma } from './images'
import { generateSlides } from "./renderSlides";
import { savePresentation, getPresentations, deletePresentation } from '../libraries/figmaStorage';

// Initialize storage and show saved presentations on startup
(async () => {
  const savedPresentations = await getPresentations();
  console.log('Saved presentations:', savedPresentations);
  figma.ui.postMessage({ 
    type: 'SAVED_PRESENTATIONS', 
    presentations: savedPresentations 
  });
})();

figma.clientStorage.setAsync('onboardingCompleted', false); // TEMPORARY TO TEST ONBOARDING

figma.showUI(__html__, { width: 360, height: 540 });

figma.ui.onmessage = async (msg) => {
  console.log('FIGMA JUST GOT A MESSAGE, YO', msg)

  if (msg.type === 'image-in-bytes') {
    saveImageDataOrExportToFigma(msg.id, msg.bytes)
  } else if (msg.type === 'SAVE_ONBOARDING_STATUS') {
    await figma.clientStorage.setAsync('onboardingCompleted', msg.completed);
  } else if (msg.type === 'GET_ONBOARDING_STATUS') {
    const completed = await figma.clientStorage.getAsync('onboardingCompleted');
    figma.ui.postMessage({ type: 'ONBOARDING_STATUS', completed: completed || false });
  } else if (msg.type === 'export') {
    // console.log(msg.pair)
    // setStoreImagesForExport(images)
    // newCurrentImages.forEach((image) => {
    //   figma.ui.postMessage({ id: image.id, image: image.image })
    // })
  } else if (msg.type === 'set-storage') {
    figma.clientStorage.setAsync('test', { something: msg.id })
  } else if (msg.type === 'get-storage') {
    figma.clientStorage.getAsync('test').then((test) => {
      console.log('from controller', test)
      figma.ui.postMessage({ type: 'get-storage', data: test })
    })
  } else if (msg.type === 'generate-slide') {
    const { template, palette, font, projectName, isRegeneration } = msg;
    
    try {
      // Only save to storage if it's a new presentation
      if (!isRegeneration) {
        await savePresentation({
          template,
          palette,
          font,
          projectName
        });
      }

      // Generate the slides
      await generateSlides({
        template,
        palette,
        font,
        projectName
      });

      // Get updated presentations list and send to UI
      const updatedPresentations = await getPresentations();
      figma.ui.postMessage({ 
        type: 'SAVED_PRESENTATIONS', 
        presentations: updatedPresentations 
      });
    } catch (error) {
      console.error('Error generating slides:', error);
      figma.closePlugin(`Error: ${error.message}`);
    }
  } else if (msg.type === 'delete-presentation') {
    try {
      // Delete the presentation
      await deletePresentation(msg.id);
      
      // Get updated presentations list and send to UI
      const updatedPresentations = await getPresentations();
      figma.ui.postMessage({ 
        type: 'SAVED_PRESENTATIONS', 
        presentations: updatedPresentations 
      });
    } catch (error) {
      console.error('Error deleting presentation:', error);
      figma.ui.postMessage({ 
        type: 'ERROR', 
        message: 'Failed to delete presentation' 
      });
    }
  } else {
    console.log('unknown message')
  }
}
