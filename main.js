Webcam.set({
     width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

Webcam.attach( '#camera' );

function take_snapshot() {
     Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
     });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2LZB49wWY/model.json', modelLoaded);

function modelLoaded() {
     console.log("modelLoaded!")
}

function check() {
     img = document.getElementById("captured_image");
     classifier.classify(img , gotResult);
}

function gotResult(error , results) {
     if(error) {
          console.error(error);
     }
     else{
          console.log(result);
          document.getElementById("resultobject_name").innerHTML = results[0].label;
          accuracy = results[0].confidence.toFixed(3) * 100 + "%" ;
          document.getElementById("resultobject_accuracy").innerHTML = accuracy;
     }
}

   