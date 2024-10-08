import pandas as pd

# Function to classify an image based on identified features
def classify_image(features):
    if "kitchen" in features:
        return "Classified as Kitchen"
    elif "bedroom" in features:
        return "Classified as Bedroom"
    return "Unclassified"

# Example usage
if __name__ == "__main__":
    features = ["kitchen", "table"]
    classification = classify_image(features)
    print(classification)
