from PIL import Image, ImageFilter

# Function to apply camera effects like blur, sharpening, etc.
def apply_camera_effects(image_path, effect="sharpen"):
    image = Image.open(image_path)
    
    if effect == "sharpen":
        enhanced_image = image.filter(ImageFilter.SHARPEN)
    elif effect == "blur":
        enhanced_image = image.filter(ImageFilter.BLUR)
    
    enhanced_image.save('camera_effect_image.png')
    return 'Camera effect applied.'

# Example usage
if __name__ == "__main__":
    apply_camera_effects('interior_image.jpg', 'sharpen')
