function calculate() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
  
    z = weight / height ** 2;
    document.getElementById('imc').value = z
    var text=""

    if (z < 18.5) {
      window.alert("Você está abaixo do peso")
    } else if (z< 24.9) {
        window.alert("Você está normal")
    } else if (z< 29.9) {
        window.alert("Você está com sobrepeso")
    } else if (z < 39.9) {
        window.alert("Você está com obesidade")
    } else if (z > 39.9) {
        window.alert("Você está com obesidade grave")
    }
    document.getElementById("text_area").innerText=text
  }

  const limpar = function(){
    document.getElementById('weight').value = "limpar"
    document.getElementById('height').value = "limpar"
    document.getElementById('imc').value = "IMC"
}