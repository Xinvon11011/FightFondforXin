# Student4Python.py

import pandas as pd

class Student4Python:
    def __init__(self):
        self.memory = pd.DataFrame(columns=["description", "memory_updated"])

    # Method to update memory with processed description
    def update_memory(self, processed_description):
        print(f"Updating memory with: {processed_description}")
        self.memory = self.memory.append({"description": processed_description, "memory_updated": True}, ignore_index=True)
        print("Memory updated.")
        return True

# Example usage
student4 = Student4Python()
processed_description = "Processed: A modern house."
student4.update_memory(processed_description)
