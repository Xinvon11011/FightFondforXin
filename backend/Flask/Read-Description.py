def read_description(text_description):
    # Process the description and extract key information
    if "kitchen" in text_description.lower():
        return "Detected: Kitchen description."
    elif "bedroom" in text_description.lower():
        return "Detected: Bedroom description."
    else:
        return "No specific rooms detected."

# Example usage
if __name__ == "__main__":
    description = "The house has a large kitchen and two bedrooms."
    result = read_description(description)
    print(result)
