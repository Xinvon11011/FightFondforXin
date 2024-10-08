from PIL import Image, ImageDraw
import numpy as np
import pickle

# Load the model for predictions (if needed)
with open('../models/model.pkl', 'rb') as file:
    model = pickle.load(file)

# Function to compare and edit the floorplan image
def edit_floorplan_image(floorplan_image_path, aerial_image_path):
    # Load the images
    floorplan_image = Image.open(floorplan_image_path)
    aerial_image = Image.open(aerial_image_path)

    # Preprocess both images to match the input size of the model
    floorplan_image_resized = floorplan_image.resize((224, 224))
    aerial_image_resized = aerial_image.resize((224, 224))

    # Convert the images to arrays and normalize the values
    floorplan_array = np.array(floorplan_image_resized) / 255.0
    aerial_array = np.array(aerial_image_resized) / 255.0

    # Compare both images (placeholder logic)
    difference = np.abs(floorplan_array - aerial_array)
    
    # If the difference is too high, modify the floorplan image
    threshold = 0.1  # Set a threshold for acceptable difference
    if np.mean(difference) > threshold:
        draw = ImageDraw.Draw(floorplan_image)
        draw.text((10, 10), "Modified by AI", fill="red")
        floorplan_image.save('edited_floorplan.png')
        return "Floorplan modified."
    
    return "Floorplan accepted as is."
