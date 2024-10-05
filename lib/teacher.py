# Teacher AI: Oversees the operations of all students
from student1 import classify_image
from student2 import translate_labels
from student3 import send_description_data
from student4 import cache_result, load_cached_result
from student5 import prepare_results_for_download
from student6 import display_floorplan, report_error

def process_images_and_generate_floorplan(image_path, description):
    try:
        # Student 1: Classify image
        classification = classify_image(image_path)
        print(f"Image classified as: {classification}")

        # Student 2: Translate classification labels
        translated_labels = translate_labels(classification)
        print(f"Translated labels: {translated_labels}")

        # Student 3: Generate floorplan based on description
        floorplan = send_description_data(description)
        print(f"Floorplan generated: {floorplan}")

        # Student 4: Cache the floorplan result
        cache_result(floorplan)

        # Student 5: Prepare results for download
        downloadable_data = prepare_results_for_download([classification])
        print("Downloadable data prepared.")

        # Student 6: Display the floorplan
        display_floorplan(floorplan)

    except Exception as e:
        # Student 6: Report errors if any step fails
        report_error(str(e))

# Teacher overseeing the whole process
if __name__ == "__main__":
    process_images_and_generate_floorplan("house_image.jpg", "This is a modern house.")
