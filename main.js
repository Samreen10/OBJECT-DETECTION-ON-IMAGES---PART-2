status = ""

function preload()
{
    img = loadImage('candle.jpg');

}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelloaded()
{
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResults()
{
    console.log(results);
}

