song="";
wristXleft=0;
wristYleft=0;
wristXright=0;
wristYright=0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,500,400);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("POSENET IS INITIALIZED !!");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        wristXleft=results[0].pose.leftWrist.x;
        wristYleft=results[0].pose.leftWrist.y;
        //console.log(wristXleft+wristYleft);

        wristXright=results[0].pose.rightWrist.x;
        wristYright=results[0].pose.rightWrist.y;
    }
}