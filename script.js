function Button(){
    const text = document.getElementById("out");

    text.innerHTML = "I am a random color"; 

    var r = Math.floor(Math.random()*255); 
    var g = Math.floor(Math.random()*255); 
    var b = Math.floor(Math.random()*255); 
    text.style.color = "RGB(" + r + "," + g + "," + b + ")"; 

    window.alert("The color has been changed to: " + text.style.color) 
}

function textChange(){
    const textbox = document.getElementById("Text").value;
    const count = document.getElementById("count");

    if(textbox.length > 255){
        window.alert("Text exceeding 255! You put in " + textbox.length + " words!");
        var slice = textbox.slice(0,255);
        document.getElementById("Text").value = slice;
        count.innerHTML = "255/255";
    } else {
        count.innerHTML = textbox.length + "/255";
    }   
}

function greet(){
    const textarea = document.getElementById("fn").value;
    const greet = document.getElementById("greet");

    if(!textarea.match(/\S/)){
        window.alert("Please enter a name!");
    } else {
        var name = document.getElementById("fn");
        var FLetter = name.value.slice(0,1);
        var LLetters = name.value.slice(1,name.value.length);
        var construct = FLetter.toUpperCase() + LLetters;
        greet.innerHTML = "Hello " + construct + ", How are you today?";
    }
}

function LOVE(){
    const p1 = document.getElementById("p1").value
    const p2 = document.getElementById("p2").value
    const out = document.getElementById("loveout")

    if(!p1.match(/\S/) || !p2.match(/\S/)){
        window.alert("Person 1 or/and Person 2 Name is Empty");
    } else {
        var level;
        let rand = Math.floor(Math.random()*100);
        switch(true) {
            case (rand < 20):
                level = "morbid";
                break;
            case (rand < 40):
                level = "bad";
                break;
            case (rand < 60):
                level = "okay";
                break;
            case (rand < 80):
                level = "good";
                break;
            case (rand < 99):
                level = "amazing";
                break;
            case (rand == 100):
                level = "excellent";
                break;
            default:
                level = "broken"
                break;
        }
        out.innerHTML = "the love percentage for " + p1 + " and " + p2 + " is at a " + level + " " + rand +"%";
    }
}
