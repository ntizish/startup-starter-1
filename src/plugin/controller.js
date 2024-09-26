import { saveImageDataOrExportToFigma } from './images'

figma.showUI(__html__)
figma.ui.resize(400, 400)

figma.ui.onmessage = async (msg) => {
  console.log('FIGMA JUST GOT A MESSAGE, YO', msg)

  if (msg.type === 'image-in-bytes') {
    saveImageDataOrExportToFigma(msg.id, msg.bytes)
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
  } else {
    console.log('unknown message')
  }

  if (msg.type === 'generate-slide') {
    // Create a new frame 
    const frame = figma.createFrame();
    frame.resize(1920, 1080);
    frame.name = "Slide";

    // Give slide bg color
    frame.fills = [{
      type: 'SOLID',
      color: { r: Math.random(255), g: Math.random(255), b: Math.random(255) },  // RGB values for blue color (#00f)
      opacity: 1 // Full opacity
    }];

    // Position the frame in the center of the viewport
    frame.x = figma.viewport.center.x;
    frame.y = figma.viewport.center.y;

    // Add a title to the frame
    await figma.loadFontAsync({
      family: 'Roboto',
      style: 'Regular'
    })
    const title = figma.createText();
    title.fontName = { family: "Roboto", style: "Regular" };
    title.characters = "I generated this slide. Yay!";
    title.fontSize = 48;
    title.x = 50; // X position for the title inside the frame
    title.y = 50; // Y position for the title inside the frame

    // Add the title inside the frame
    frame.appendChild(title);

    // Scroll the viewport to focus on the newly created frame
    figma.viewport.scrollAndZoomIntoView([frame]);
  }
}
