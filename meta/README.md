# RealXin AI Floorplan Generator

The RealXin AI Floorplan Generator is a web-based application that uses machine learning to generate detailed house floorplans based on uploaded images. The tool is designed for architects, designers, and anyone interested in generating custom floorplans from visual inputs.

## Key Features

- Upload up to 40 images and generate corresponding house floorplans.
- Utilizes **TensorFlow.js** and **ML5.js** for real-time image processing.
- Interactive canvas with zoom-in/zoom-out functionality.
- Download the generated floorplans in **PNG** format.
- AI-powered floorplan generation from simple image inputs.

## How It Works

1. Upload one or more images of house exteriors or interiors (up to 40 images).
2. Click the "Start Cracking" button to initiate the AI simulation process.
3. The AI processes the images and generates floorplans based on the uploaded images.
4. Preview the generated floorplans on the canvas.
5. Download the results as PNG files for further use.

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/RealXin-AI-Floorplan-Generator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd RealXin-AI-Floorplan-Generator
    ```

3. Install dependencies (if applicable):
    - This project relies on **TensorFlow.js** and **ML5.js** for AI functionalities. You can include them in your project via CDN or npm:
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ml5/0.6.0/ml5.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.9.0/dist/tf.min.js"></script>
    ```

4. Open the `index.html` file in your browser to use the tool.

## Usage

1. Open the `index.html` file in a web browser.
2. Upload up to 40 images using the file input.
3. Use the **Start Cracking** button to start the AI floorplan generation process.
4. Zoom in or out, preview the generated floorplans, and download them.

## Technologies Used

- **HTML5**, **CSS3**, **JavaScript**
- **TensorFlow.js**: For AI-based image processing and floorplan generation.
- **ML5.js**: A high-level machine learning library built on TensorFlow.js.

## Contributing

Contributions are welcome! Please follow these steps for contributing:

1. Fork the repository.
2. Create a new branch with your feature or fix.
3. Submit a pull request with a detailed explanation of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries or issues, please contact us at [support@realxin.com](mailto:support@realxin.com).
