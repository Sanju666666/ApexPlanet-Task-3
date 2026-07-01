// ---------------- WEATHER API ----------------

async function getWeather() {

    let city = document.getElementById("city").value.trim();

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }

    try{

        let response = await fetch(`https://wttr.in/${city}?format=j1`);
        let data = await response.json();

        document.getElementById("cityName").innerText = city;
        document.getElementById("temperature").innerText =
        data.current_condition[0].temp_C + " °C";

        document.getElementById("windSpeed").innerText =
        data.current_condition[0].windspeedKmph + " km/h";

        document.getElementById("weatherCondition").innerText =
        data.current_condition[0].weatherDesc[0].value;

    }

    catch{

        alert("Unable to fetch weather data.");

    }

}


// ---------------- QUIZ ----------------

const questions = [

{
question:"Which language is used for styling web pages?",
options:["HTML","CSS","Java","Python"],
answer:"CSS"
},

{
question:"Which language is used to make websites interactive?",
options:["JavaScript","HTML","SQL","C"],
answer:"JavaScript"
},

{
question:"Which tag creates a hyperlink?",
options:["<img>","<a>","<table>","<div>"],
answer:"<a>"
},

{
question:"Which property changes text color?",
options:["background","font-size","color","padding"],
answer:"color"
},

{
question:"Which function displays a popup?",
options:["print()","prompt()","alert()","log()"],
answer:"alert()"
}

];

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion(){

    document.getElementById("score").innerHTML="";

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML=q.question;

    let output="";

    q.options.forEach(option=>{

        output += `
        <button class="option-btn"
        onclick="checkAnswer('${option}')">
        ${option}
        </button>
        `;

    });

    document.getElementById("options").innerHTML=output;

}

function checkAnswer(selected){

    if(selected===questions[currentQuestion].answer){

        score++;

    }

    let buttons=document.querySelectorAll(".option-btn");

    buttons.forEach(btn=>btn.disabled=true);

}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }

    else{

        document.getElementById("question").innerHTML="🎉 Quiz Completed!";

        document.getElementById("options").innerHTML="";

        document.getElementById("score").innerHTML=
        "Your Score : "+score+" / "+questions.length;

    }

}