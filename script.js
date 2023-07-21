var hexValues = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function changeColor() {
var hexCode = "";
    
    for(var i=0; i < 6;i++){
        var randomIndex = Math.floor(Math.random() * hexValues.length);

        hexCode += hexValues[randomIndex];

    }

    document.getElementById("hex-code").innerHTML = hexCode;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#"+hexCode; 
   
};