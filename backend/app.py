from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Home route to verify the backend is working
@app.route('/')
def home():
    return "Flask Backend is running."

# Example endpoint to handle floorplan edits (replace with your logic)
@app.route('/edit-floorplan', methods=['POST'])
def edit_floorplan():
    # Example code for processing image data
    image_data = request.files.get('image')
    if image_data:
        # Process the image using your future TensorFlow/ML5 logic
        return jsonify({'message': 'Image received and processed'}), 200
    return jsonify({'error': 'No image provided'}), 400

if __name__ == '__main__':
    # Run Flask app on default port 5000 (change as needed)
    app.run(debug=True)
