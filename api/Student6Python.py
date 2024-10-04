# Student6Python.py

from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

class Student6Python:
    def __init__(self):
        self.data = pd.DataFrame(columns=["description", "result_displayed"])

    # Flask route to display results
    @app.route('/display_results', methods=['POST'])
    def display_results():
        description = request.json.get("description", "")
        display_success = student6.display_results(description)
        return jsonify({"result_displayed": display_success})

    # Method to display the final results
    def display_results(self, description):
        print(f"Displaying results for: {description}")
        self.data = self.data.append({"description": description, "result_displayed": True}, ignore_index=True)
        return True

# Example usage
student6 = Student6Python()
app.run(debug=True)
