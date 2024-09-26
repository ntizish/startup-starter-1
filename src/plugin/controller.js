import { saveImageDataOrExportToFigma } from './images'

figma.showUI(__html__)
figma.ui.resize(400, 400)

figma.ui.onmessage = (msg) => {
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
}
