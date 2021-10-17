NoseX = 0
NoseY = 0
LeftWristX = 0
RightWristX = 0
Difference = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("poseNet");
}
function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        Difference=floor(LeftWristX-RightWristX);
        console.log("LeftWistX= "+LeftWristX);
        console.log("RightWristX= "+RightWristX);

    }
}
function draw() {
    background('#AED6F1');
    document.getElementById("font_size").innerHTML = "Width And Height Of The Font Is= " + Difference + "px";
    textSize(Difference);
    fill('#88ebbb');
    stroke('#88ebbb');
    text('LeAsia',50,400);
}