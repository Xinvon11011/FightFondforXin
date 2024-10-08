import tensorflow as tf

# Function to load the TensorFlow model
def load_tf_model(model_path):
    model = tf.keras.models.load_model(model_path)
    return model

# Function to make a prediction using TensorFlow
def predict_image_with_tf(model, image):
    # Preprocess image for model prediction
    image_resized = image.resize((224, 224))  # Assuming the model expects 224x224 images
    image_array = np.array(image_resized) / 255.0
    image_array = image_array.reshape(1, 224, 224, 3)  # Add batch dimension
    prediction = model.predict(image_array)
    return prediction

# Example usage
if __name__ == "__main__":
    model = load_tf_model('../models/tf_model.h5')
    image = Image.open('house_image.jpg')
    prediction = predict_image_with_tf(model, image)
    print(prediction)
