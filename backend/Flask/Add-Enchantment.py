from PIL import Image, ImageEnhance

# Function to enhance an image
def enhance_image(image_path, enhancement_type="brightness", factor=1.5):
    image = Image.open(image_path)
    
    if enhancement_type == "brightness":
        enhancer = ImageEnhance.Brightness(image)
    elif enhancement_type == "contrast":
        enhancer = ImageEnhance.Contrast(image)
    
    enhanced_image = enhancer.enhance(factor)
    enhanced_image.save('enhanced_image.png')
    return 'Image enhanced and saved.'

# Example usage
if __name__ == "__main__":
    enhance_image('interior_image.jpg', 'brightness', 1.8)
