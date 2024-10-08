import numpy as np

# Function to encode the floorplan into a usable format
def encode_floorplan(floorplan_image):
    encoded_data = np.array(floorplan_image)
    return encoded_data

# Example usage
if __name__ == "__main__":
    floorplan = np.random.rand(224, 224, 3)  # Placeholder for floorplan data
    encoded = encode_floorplan(floorplan)
    print(encoded)
