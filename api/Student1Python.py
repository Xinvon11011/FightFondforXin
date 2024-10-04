# Student1Python.py

import pandas as pd

class Student1Python:
    def __init__(self):
        # Initialize a DataFrame for managing descriptions and related data
        self.data = pd.DataFrame(columns=["description", "is_valid"])

    # Method to validate description and store it
    def validate_description(self, description):
        if not description or description.strip() == '':
            print("Description is empty.")
            self.data = self.data.append({"description": description, "is_valid": False}, ignore_index=True)
            return False
        else:
            print("Description is valid.")
            self.data = self.data.append({"description": description, "is_valid": True}, ignore_index=True)
            return True

# Example usage
student1 = Student1Python()
description = "A modern house with 3 bedrooms and 2 bathrooms."
student1.validate_description(description)
