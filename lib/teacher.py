from flask import Flask, jsonify
import pandas as pd
from student1 import process_student1  # Import students
import tensorflow as tf

app = Flask(__name__)

@app.route('/run_all_students', methods=['POST'])
def process_all_students():
    # Example: Combine results from all students
    student1_result = process_student1()

    # Load a model (TensorFlow) and make predictions if needed
    model = tf.keras.models.load_model("path_to_your_model")
    additional_results = model.predict([...])  # Use actual input here

    # Return combined results
    return jsonify({"student1": student1_result, "additional_results": additional_results})

if __name__ == '__main__':
    app.run(debug=True)
