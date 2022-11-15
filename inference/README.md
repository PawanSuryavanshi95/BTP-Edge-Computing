# TensorFlow Lite Object Detection and Facial Recognition on Raspberry Pi
Train your own TensorFlow Lite object detection models and run them on the Raspberry Pi and other edge devices!


## Steps to set up tflite library and inference tflite model
TensorFlow Lite is an optimized framework for deploying lightweight deep learning models on resource-constrained edge devices. TensorFlow Lite models have faster inference time and require less processing power than regular TensorFlow models, so they can be used to obtain faster performance in realtime applications. 


## Step 1. Make sure raspberry pi is updated
Open up terminal and run

```
sudo apt-get update
sudo apt-get upgrade
```

## Step 2. Clone this repository and open inference folder

```
git clone https://github.com/PawanSuryavanshi95/BTP-Edge-Computing.git
cd BTP-Edge-Computing/inference
```

## Step 3. Install virtualenv and create a virtual environment

```
sudo pip3 install virtualenv
python3 -m venv tflite-env
source tflite-env/bin/activate
```

## Step 4. Install dependencies

```
bash get_pi_requirements.sh
```

## Step 5. Run python scripts inside the inference folder and run tflite models
Make sure you have a USB webcam plugged into your computer. If you’re on a laptop with a built-in camera, you don’t need to plug in a USB webcam. 

<details>
   <summary>Object Detection</summary>

From the `inference` directory, issue: 

```
python TFLite_detection_webcam_object_detection.py --modeldir=models\mobilenet_object_detection 
```

After a few moments of initializing, a window will appear showing the webcam feed. Detected objects will have bounding boxes and labels displayed on them in real time.
</details>

<details>
   <summary>Facial Recogntion</summary>

From the `inference` directory, issue: 

```
python TFLite_detection_webcam.py --modeldir=models\facial_recognition_quantized 
```

After a few moments of initializing, a window will appear showing the webcam feed. Detected objects will have bounding boxes and labels displayed on them in real time.
</details>
