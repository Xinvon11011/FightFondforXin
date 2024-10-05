# Student 1: Handles basic image classification using ML5
from ml5 import ImageClassifier

def classify_image(image_path):
    classifier = ImageClassifier('MobileNet')
    result = classifier.classify(image_path)
    return result
