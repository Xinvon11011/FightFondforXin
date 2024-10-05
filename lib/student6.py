from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/student6', methods=['POST'])
def display_floorplan():
    # Example: Receive floorplan data from previous steps
    data = request.get_json()
    floorplan = data.get('floorplan', '')
    
    # Logic to display floorplan (dummy example)
    if floorplan:
        return jsonify({"status": "floorplan displayed", "floorplan": floorplan})
    else:
        return jsonify({"error": "no floorplan available"})

if __name__ == '__main__':
    app.run(debug=True)
