# Student 3: Sends description data for generating floorplans
def send_description_data(description):
    # Process description text for generating floorplan layouts
    processed_data = preprocess_description(description)
    # Simulate sending to model for generation
    return generate_floorplan(processed_data)

def preprocess_description(description):
    # Simple preprocessing (remove punctuation, etc.)
    return description.lower().strip()

def generate_floorplan(data):
    # Placeholder: Generate a simple floorplan based on description
    return f"Generated floorplan based on: {data}"
