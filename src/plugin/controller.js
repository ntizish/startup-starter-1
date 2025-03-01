import { saveImageDataOrExportToFigma } from './images'
import { generateSlides } from "./renderSlides";

figma.clientStorage.setAsync('onboardingCompleted', false); // TEMPORARY TO TEST ONBOARDING

figma.showUI(__html__, { width: 540, height: 685 });

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
    const { template, palette, font, projectName } = msg;
    
    try {
      await generateSlides({
        template,
        palette,
        font,
        projectName
      });
    } catch (error) {
      console.error('Error generating slides:', error);
      figma.closePlugin(`Error: ${error.message}`);
    }
  } else {
    console.log('unknown message')
  }
}
