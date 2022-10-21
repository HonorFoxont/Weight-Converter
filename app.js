let buttons = document.getElementsByClassName('selector');
let popup = document.getElementsByClassName('popup')[0]
let btnClose = document.getElementById('close-popup');
let input = document.getElementById('valueInput');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', btnClick);
});

btnClose.addEventListener('click', closePopup)
window.addEventListener('click', confirm)
function btnClick(e){
    popup.style.visibility = 'visible';
    switch(e.target.id){
        case 'poundSelector':
        createUI('Pound');
        break;

        case 'gramSelector':
            createUI('Gram');
        break;
        case 'kiloSelector':
            createUI('Kilo');
        break;
        case 'ounceSelector':
            createUI('Ounce');
        break;
    }
}

function confirm(e){
    if(e.target == popup){
        closePopup();
    }
}
function createUI(name){
    document.getElementById('popup-header').innerText = `${name} Converter`;

    if(name === 'Pound'){
        input.addEventListener('input', poundConversion);
    }
    else if(name === 'Gram'){
        input.addEventListener('input', gramConversion);
    }
    else if(name === 'Kilo'){
        input.addEventListener('input', kiloConversion);
    }
    else{
        input.addEventListener('input', ounceConversion);
    }
}

function closePopup(){
    popup.style.visibility = 'hidden';
    input.value = '';
    poundOutput.innerHTML = '';
    gramOutput.innerHTML = '';
    kiloOutput.innerHTML = '';
    ounceOutput.innerHTML = '';
}

let poundOutput = document.querySelector('#pound-value');
let gramOutput = document.querySelector('#gram-value'); 
let kiloOutput = document.querySelector('#kilo-value');
let ounceOutput = document.querySelector('#ounce-value');

function poundConversion(e){
    inputValue = e.target.value;

    poundOutput.innerHTML = inputValue;
    gramOutput.innerHTML = inputValue*453.59237;
    kiloOutput.innerHTML = inputValue*0.45359237;
    ounceOutput.innerHTML = inputValue*16;
}

function gramConversion(e){
    inputValue = e.target.value;

    poundOutput.innerHTML = inputValue*0.00220462;
    gramOutput.innerHTML = inputValue;
    kiloOutput.innerHTML = inputValue/1000;
    ounceOutput.innerHTML = inputValue*0.035274;
}

function kiloConversion(e){
    inputValue = e.target.value;

    poundOutput.innerHTML = inputValue*2.204625002841;
    gramOutput.innerHTML = inputValue*1000;
    kiloOutput.innerHTML = inputValue;
    ounceOutput.innerHTML = inputValue*35.274;
}

function ounceConversion(e){
    inputValue = e.target.value;

    poundOutput.innerHTML = inputValue*0.0625;
    gramOutput.innerHTML = inputValue*28.3495;
    kiloOutput.innerHTML = inputValue*0.028349500000294;
    ounceOutput.innerHTML = inputValue;
}