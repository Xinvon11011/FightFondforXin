# Student 5: Waits for TensorFlow results and prepares them for download
def prepare_results_for_download(results):
    # Convert TensorFlow results into a downloadable format (e.g., CSV, JSON)
    downloadable_results = convert_to_csv(results)
    return downloadable_results

def convert_to_csv(results):
    csv_data = "Label, Confidence\n"
    for result in results:
        csv_data += f"{result['label']}, {result['confidence']}\n"
    return csv_data
