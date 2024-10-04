# Student2Python.py

from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

class Student2Python:
    def __init__(self):
        self.data = pd.DataFrame(columns=["description", "cleaned_description"])

    # Flask route to process description
    @app.route('/filter_description', methods=['POST'])
    def filter_and_translate():
        description = request.json.get("description", "")
        cleaned_description = student2.filter_description(description)
        return jsonify({"cleaned_description": cleaned_description})

    # Method to clean and translate the description
    def filter_description(self, description):
        profanity_list = ["badword1", "badword2"]
        for word in profanity_list:
            description = description.replace(word, "[censored]")
        print(f"Cleaned description: {description}")
        self.data = self.data.append({"description": description, "cleaned_description": description}, ignore_index=True)
        return description

# Example usage
student2 = Student2Python()
app.run(debug=True)
