from flask import Flask, request, jsonify
import pandas as pd
import tensorflow as tf

app = Flask(__name__)

@app.route('/student4', methods=['POST'])
def generate_floorplan():
    # Example: Receive data (image or description) via POST
    data = request.get_json()
    description = data.get('description', '')

    # TensorFlow model logic (load model and process data)
    model = tf.keras.models.load_model("path_to_your_model")

    # Dummy logic: Generate floorplan (use real logic here)
    floorplan = model.predict([description])  # Adjust based on input

    return jsonify({"floorplan": floorplan.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
