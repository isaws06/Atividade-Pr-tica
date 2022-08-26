function calculate(){
    var height=document.getElementById("heigth").value/100
    var weight=document.getElementById("weight").value
    console.log(height)
    console.log(weigth)
var imc = weight / height ** 2;
console.log(imc)
var text=""
if(imc<18.5){
    window.alert("Você está magro")
}
else if(imc<24.9){
    window.alert("Você está normal")
}
else if(imc<29.9){
    window.alert("Você está com sobrepeso")
}
else if(imc<39.9){
    window.alert("Você está com obesidade")
}
else if(imc<40.0){
    window.alert("Você está com obesidade mórbida")
}
document.getElementById("text_area").innerText=text
}