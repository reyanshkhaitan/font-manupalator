function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',getPoses);
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function modelLoaded() { console.log("model is loaded"); }



function draw() {
    background('cyan');
}

