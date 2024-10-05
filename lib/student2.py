# Student 2: Handles language translation or image labeling
from ml5 import Translator

def translate_labels(labels):
    translator = Translator()
    translated_labels = [translator.translate(label, 'en') for label in labels]
    return translated_labels
