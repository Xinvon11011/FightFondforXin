from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/student5', methods=['POST'])
def add_text_to_floorplan():
    # Example: Receive floorplan data
    data = request.get_json()
    floorplan = data.get('floorplan', '')
    labels = data.get('labels', [])

    # Pandas example: Process the labels (dummy logic)
    df = pd.DataFrame(labels, columns=['label', 'x', 'y'])

    # Add labels to floorplan (dummy logic)
    for label in labels:
        # Insert text into the floorplan (real implementation needed)
        print(f"Adding {label['text']} at position ({label['x']}, {label['y']})")

    return jsonify({"status": "labels added", "floorplan": floorplan})

if __name__ == '__main__':
    app.run(debug=True)
