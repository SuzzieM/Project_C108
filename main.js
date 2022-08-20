function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true}); 
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1bhPBh0qG/model.json', modelReady); 
}

function modelReady()
{
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat+", Detected lion - "+lion+", Detected Cow - "+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice is of - " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking")
        {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
        }
        else if(results[0].label == "Meowing")
        {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        }
        else if(results[0].label == "Roar")
        {
            img.src = "https://tenor.com/view/simba-walk-having-fun-the-lion-king-gif-17028762";
            lion = lion + 1;
        }
        else if(results[0].label == "Mooing")
        {
            img.src = "https://www.pinterest.com/pin/funny-cow-gifs--826129125365287631/";
            cow = cow + 1;
        }
        else
        {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}