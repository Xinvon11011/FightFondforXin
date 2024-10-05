from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/student2', methods=['POST'])
def filter_and_translate():
    # Example: Receive description as JSON input
    data = request.get_json()
    description = data.get('description', '')

    # Example of using Pandas (if you're working with structured data)
    df = pd.DataFrame([description], columns=['description'])

    # Simple profanity filter and translation (dummy logic)
    profanity_list = ["badword1", "badword2"]
    cleaned_description = ' '.join(['****' if word.lower() in profanity_list else word for word in description.split()])

    # Translation logic (dummy, would use a real translation service)
    translated_description = cleaned_description  # Example: Assuming it's already in English

    return jsonify({"cleaned_description": translated_description})

if __name__ == '__main__':
    app.run(debug=True)
