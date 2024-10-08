from PIL import Image

def process_images(image_paths):
    images = [Image.open(image) for image in image_paths]
    for i, img in enumerate(images):
        img.save(f"processed_image_{i}.png")
    return "All images processed."

# Example usage
if __name__ == "__main__":
    image_paths = ['image1.jpg', 'image2.jpg']
    process_images(image_paths)
