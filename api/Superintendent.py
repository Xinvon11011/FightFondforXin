# SuperintendentPython.py

from Student1Python import Student1Python
from Student2Python import Student2Python
from Student3Python import Student3Python
from Student4Python import Student4Python
from Student5Python import Student5Python
from Student6Python import Student6Python

class SuperintendentPython:
    def __init__(self):
        # Initialize all Python students
        self.students = {
            "student1": Student1Python(),
            "student2": Student2Python(),
            "student3": Student3Python(),
            "student4": Student4Python(),
            "student5": Student5Python(),
            "student6": Student6Python(),
        }

    # Method to manage the ML5-related tasks in Python
    def process_description(self, description):
        try:
            is_valid = self.students["student1"].validate_description(description)
            if not is_valid:
                raise ValueError("Invalid description.")
            
            cleaned_description = self.students["student2"].filter_description(description)
            processed_description = self.students["student3"].process_description(cleaned_description)
            self.students["student4"].update_memory(processed_description)
            print("ML5 description processing complete.")
            return processed_description
        except Exception as e:
            print(f"Error during description processing: {str(e)}")
            return None

    # Method to manage TensorFlow-related tasks in Python
    def process_tensorflow(self, description):
        try:
            plan_ready = self.students["student5"].wait_for_tensorflow()
            if plan_ready:
                display_success = self.students["student6"].display_results(description)
                if not display_success:
                    print("Error displaying results.")
                print("TensorFlow processing complete.")
            else:
                print("TensorFlow did not complete successfully.")
        except Exception as e:
            print(f"Error during TensorFlow processing: {str(e)}")

# Example usage
superintendent = SuperintendentPython()

description = "A 3-bedroom modern house with a large living area."
processed_description = superintendent.process_description(description)
if processed_description:
    superintendent.process_tensorflow(processed_description)
