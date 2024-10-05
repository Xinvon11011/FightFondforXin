from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/student3', methods=['POST'])
def remove_blocks():
    # Example: Receive image and description data
    data = request.get_json()
    description = data.get('description', '')
    
    # Example: Process description with Pandas
    df = pd.DataFrame([description], columns=['description'])

    # Remove blocking elements (example: dummy logic)
    blocked_elements_removed = description.replace("blocking_element", "")

    return jsonify({"processed_description": blocked_elements_removed})

if __name__ == '__main__':
    app.run(debug=True)
