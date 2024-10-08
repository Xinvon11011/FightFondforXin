import requests

# Function to send data to the ML5.js model on the client-side
def send_to_ml5_model(data):
    # Example request to the ML5.js model running in the frontend
    response = requests.post('http://localhost:3000/predict', json=data)
    return response.json()

# Example usage
if __name__ == "__main__":
    data = {"input": "house image data"}
    result = send_to_ml5_model(data)
    print(result)
