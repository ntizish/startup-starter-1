import Slide from "../libraries/Slide";
import SlideElement from "../libraries/SlideElement";
import templateCreativeMess from "../libraries/templateCreativeMess";
import CM1 from "../libraries/palettes/CM1";
// Function to generate slides
export async function generateSlides({ template = 'Default', palette = 'Default', font = 'Default', projectName = 'Untitled' }) {

    console.log('Received selections:', { template, palette, font, projectName });
    

    await figma.loadFontAsync({ family: font, style: "Regular" });
    await figma.loadFontAsync({ family: font, style: "Medium" });

    const selectedTemplate = getTemplateByName(template);
    const selectedPalette = getPaletteByName(palette);

    // iterating over slides templates
    Object.keys(selectedTemplate).forEach((slideKey, index) => {
        console.log(`Generating... Current template is ${slideKey}`) 
        const frame = new Slide({
            title: selectedTemplate[slideKey].title,
            elements: selectedTemplate[slideKey].elements,
        }).generateFrame(index);

        // Create all elements first and store them in an array
        const elementPromises = selectedTemplate[slideKey].elements.map(async (element) => {
            console.log('Iterating over an element');
            const slideElement = new SlideElement({
                type: element.type,
                content: element.content,
                position: element.position,
                color: getColorByIndex(selectedPalette, element.colorIndex),
                fontSize: element.fontSize,
                alignHorizontal: element.alignHorizontal,
                alignVertical: element.alignVertical,
                size: element.size,
                imageSrc: element.imageSrc,
                font: font,
                fontWeight: element.fontWeight,
                letterSpacing: element.letterSpacing,
                lineHeight: element.lineHeight,
            });
            
            try {
                const figmaElement = await slideElement.createFigmaElement();
                if (figmaElement) {
                    console.log(`Created element: ${element.content}`);
                    return figmaElement;
                }
            } catch (error) {
                console.error("Error creating Figma element:", error);
                return null;
            }
        });

        // Wait for all elements to be created, then add them to the frame in reverse order
        Promise.all(elementPromises).then(figmaElements => {
            // Filter out any null elements
            const validElements = figmaElements.filter(Boolean);
            
            // Add elements in reverse order (first element in template will be at the bottom)
            validElements.forEach(element => {
                if (element) frame.appendChild(element);
            });
            
            figma.currentPage.appendChild(frame);
            console.log(`Finished generating slide: ${slideKey}`);
        });
    });
}

function getTemplateByName(templateName) {
    const templates = {
        'CreativeMess': templateCreativeMess
    };
    
    return templates[templateName];
}

function getPaletteByName(paletteName) {
    const palettes = {
        'CM1': CM1
    };
    
    return palettes[paletteName]?.colors;
}

function getColorByIndex(selectedPalette, index) {
    
    return selectedPalette[index];
}
