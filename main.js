function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2Lfh6ugdK/model.json',modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('cachorro') 
    img1 = document.getElementById('gato')
    img2 = document.getElementById('galinha')
    img3 = document.getElementById('cavalinho')

    if (results[0].label == "Latido") {
      img.src = 'cachorro.gif';
      img1.src = 'gato.jpg';
      img2.src = 'somdagalinha.png';
      img3.src = 'cavalinho.jpg';
    }
     else if (results[0].label == "Miado") {
      img.src = 'somcachorro.jpg';
      img1.src = 'gato.gif';
      img2.src = 'somdagalinha.png';
      img3.src = 'cavalinho.jpg';
     }
     else if (results[0].label == "Cacarejo") {
      img.src = 'somcachorro.jpg';
      img1.src = 'gato.jpg';
      img2.src = 'galinha.gif';
      img3.src = 'cavalinho.jpg';
     }
     else if (results[0].label == "Relincho") {
      img.src = 'somcachorro.jpg';
      img1.src = 'gato.jpg';
      img2.src = 'somdagalinha.png';
      img3.src = 'cavalo.gif';
    }
  }
}
