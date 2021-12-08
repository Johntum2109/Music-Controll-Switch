// Songs
var song1 = "";
var song2 = ""; 

function preload() 
{
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

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