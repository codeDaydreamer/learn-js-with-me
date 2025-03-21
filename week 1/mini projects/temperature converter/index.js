// script to convert temperature units

const tempValue = document.getElementById(`tempValue`);
const toCelcius = document.getElementById(`toCelcius`);
const toFarenheit = document.getElementById(`toFarenheit`);
const result = document.getElementById(`result`);

let tempResult;


function getResult (){

    temperature = Number(tempValue.value);

    if(toCelcius.checked){
        tempResult = (temperature * 9/5) + 32;
        result.textContent = `Your converted temp value is : ${tempResult} celcius`;
    }
    else if (toFarenheit.checked){
        tempResult =(temperature - 32) * 5/9;
        result.textContent = `Your converted temp value is : ${tempResult} farenheit`;
    }
    else {
        window.alert(`You didnt select a temp value to convert to !!`)
    }

    
    return tempResult

    
    

}