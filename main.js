function preload() {}

function setup() 
{
    // Canvas
    canvas = createCanvas(600, 495);
    canvas.center();

    // Webcam
    webcam = createCapture(600, 495);
    webcam.hide();
}

function draw() 
{
    image(webcam, 0, 0, 600, 495);

    
}