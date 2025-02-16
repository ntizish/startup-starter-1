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

        const elementPromises = templates[slideKey].elements.map((element) => {
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
            
            return slideElement.createFigmaElement()
                .then(figmaElement => {
                    console.log(`Appending ${element.content}`);
                    if (figmaElement) frame.appendChild(figmaElement);
                })
                .catch(error => console.error("Error creating Figma element:", error));
        });

        // Ensure all elements are processed before adding the frame to the page
        Promise.all(elementPromises).then(() => {
            figma.currentPage.appendChild(frame);
            console.log(`Finished generating slide: ${slideKey}`);
        });
    });
}