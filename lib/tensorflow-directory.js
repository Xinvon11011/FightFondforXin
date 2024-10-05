// TensorFlow Directory: Manages TensorFlow installation and configuration
async function installAndConfigureTensorFlow() {
    try {
        await tf.setBackend('webgl');  // Use WebGL for faster computation
        console.log("TensorFlow backend set to WebGL");
    } catch (error) {
        console.error("Error setting TensorFlow backend:", error);
    }
}

installAndConfigureTensorFlow();
