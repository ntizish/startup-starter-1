import Slide from "../libraries/Slide";
import SlideElement from "../libraries/SlideElement";
import templates from "../libraries/templates";

const slidesData = templates;

// Function to generate slides
export async function generateSlides() {

    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });

    // iterating over slides templates
    Object.keys(templates).forEach((slideKey, index) => {
        console.log(`Generating... Current template is ${slideKey}`) 
        const frame = new Slide({
            title: templates[slideKey].title,
            elements: templates[slideKey].elements,
        }).generateFrame(index);

        // Create all elements first and store them in an array
        const elementPromises = templates[slideKey].elements.map(async (element) => {
            console.log('Iterating over an element');
            const slideElement = new SlideElement({
                type: element.type,
                content: element.content,
                position: element.position,
                color: element.color,
                fontSize: element.fontSize,
                alignHorizontal: element.alignHorizontal,
                alignVertical: element.alignVertical,
                size: element.size,
                imageSrc: element.imageSrc,
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