import { saveImageDataOrExportToFigma } from './images'

figma.showUI(__html__)
figma.ui.resize(668, 628)

let colorModesToShow = []
let colorVariablesToShow = []

async function loadCollections() {
  const localCollections =
    await figma.variables.getLocalVariableCollectionsAsync()

  localCollections.forEach((collection) => {
    // need to save modes for later use
    // modes: [
    //   {
    //     modeId: String,
    //     name: String
    //   }
    // ]
    loadCollection(collection.id)
  })
}

async function loadCollection(id) {
  const collection = await figma.variables.getVariableCollectionByIdAsync(id)
  // console.log('collection', collection)

  collection.modes.forEach((mode) => {
    const { modeId, name } = mode

    colorModesToShow.push({
      modeId,
      name
    })
  })

  collection.variableIds.forEach((variableId) => {
    loadVariable(variableId)
  })
}

async function loadVariable(id) {
  const variable = await figma.variables.getVariableByIdAsync(id)
  // console.log('variable', variable, variable.name, variable.resolvedType)

  const { resolvedType, name, valuesByMode } = await variable

  if (resolvedType == 'COLOR') {
    colorVariablesToShow.push({ name, valuesByMode })
  } else {
    console.log('VAR not color type')
  }

  // console.log('colorVariablesToShow', colorVariablesToShow)
}

loadCollections()

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
