import { Jimp } from "jimp";

const inputPath='./input.jpeg';
const outputPath='./output.jpeg';

Jimp.read(inputPath)
    .then(image => {    
        // Resize the image to 800x600 pixels
        return image.resize(800, 600)
            // Convert the image to grayscale
            .greyscale()
            // Write the processed image to a new file
            .writeAsync(outputPath);
    })
    .then(() => {
        console.log('Image processing complete. Output saved to:', outputPath);
    })
    .catch(err => {
        console.error('Error processing image:', err);
    });