import random

sayings = [
    "Processing floorplan...",
    "AI is adjusting the layout...",
    "Optimizing image...",
    "Rendering final touches...",
    "Almost done..."
]

def get_random_saying():
    return random.choice(sayings)

# Example usage
if __name__ == "__main__":
    print(get_random_saying())
