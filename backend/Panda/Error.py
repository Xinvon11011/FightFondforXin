import logging

# Set up logging configuration
logging.basicConfig(filename='errors.log', level=logging.ERROR)

def log_error(error_message):
    logging.error(error_message)

# Example usage
if __name__ == "__main__":
    try:
        # Simulate an error
        1 / 0
    except Exception as e:
        log_error(f"An error occurred: {e}")
