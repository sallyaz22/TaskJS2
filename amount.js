
var data = "";
var monay =['dollar','dinar', 'nis'];
for(var i = 0;i<monay.length;i++){
    data += `<option> ${monay[i]} </option>`
}
document.querySelector("select").innerHTML=data

var registerForm = document.querySelector(".registerForm");
var para =document.querySelector("p");
registerForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
    var price ={
        monayType:elements['amount'].value,
        selectType:elements['exchange'].value
    };
    var exchangeRate;
    if(price.selectType=='dollar'){
        exchangeRate=.27
    }
    else if(price.selectType=='dinar'){
        exchangeRate =.19
    }
    else{
        exchangeRate=1
    }
var result = price.monayType * exchangeRate;
para.textContent = `Converted amount: ${result}`;
}
