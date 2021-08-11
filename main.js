Webcam.set({
    height : 300,
    width  : 350,
    image_format : 'png',
   png_quality : 100,   
  });
  
  camera = document.getElementById("camera");
  Webcam.attach("#camera");
   
  function take_snapshot()
  {
    Webcam.snap(function(data_uri)
    {
      document.getElementById("result").innerHTML = '<img id= "captured_image" src="'+data_uri+'"/>';
    });
  }
  
  console.log("ml5_version",ml5.version);
  classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YsAhZu4dg/model.json",modelloaded);

  function modelloaded()
{
    console.log("Model loaded!");
}

function check()
{
  img = document.getElementById("captured_image");
  classifier.classify(img,gotResult);   
}

function gotResult(error, results) 
{
 if (error) 
 {
   console.log(error);
 }
else 
{
console.log(results);
document.getElementById("result_person_name").innerHTML = results[0].label;
document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(3);
}

}