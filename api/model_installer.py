import os
import urllib.request

# TensorFlow model URL (Replace with actual model URL if hosted online)
model_url = "Xinvon11011.github.io/js/tensorflow/tensorflow_model.json"

# Model storage path
model_path = "models/model.json"

# Create the models directory if it doesn't exist
if not os.path.exists('models'):
    os.makedirs('models')

# Download the model if it doesn't already exist
if not os.path.exists(model_path):
    print(f"Downloading model from {model_url}...")
    urllib.request.urlretrieve(model_url, model_path)
    print("Model downloaded and saved.")
else:
    print("Model already exists, no need to download.")
