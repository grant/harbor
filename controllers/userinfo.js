
function getMyPhone() {
    var nameField = document.getElementById('phone').value;
    var result = document.getElementById('result');
    if(nameField.length!=10){
       result.textContent='Not a Real Number';
    }
}

// use an eventlistener for the event
var subButton1 = document.getElementById('subButton');
subButton1.addEventListener('click', getMyPhone, false);



function getEmergency1() {
    var nameField = document.getElementById('emergency1').value;
    var result = document.getElementById('result');
    if(nameField.length!=10){
       result.textContent='Not a Real Number';
    }
}

// use an eventlistener for the event
var subButton2 = document.getElementById('subButton');
subButton2.addEventListener('click', getEmergency1, false);


function getEmergency2() {
    var nameField = document.getElementById('phone').value;
    var result = document.getElementById('result');
    if(nameField.length!=10){
       result.textContent='Not a Real Number';
    }
}

// use an eventlistener for the event
var subButton3 = document.getElementById('subButton');
subButton3.addEventListener('click', getEmergency2, false);
