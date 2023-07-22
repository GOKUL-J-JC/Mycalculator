function add(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let  s = (num1+num2)
    document.getElementById("ad").textContent= " Addition " + " = " + s;
}
function sub(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let s = (num1-num2)
    document.getElementById("sub").textContent= " Subtraction " + " = " + s; 
}
function mul(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let s = (num1*num2)
    document.getElementById("mul").textContent= " Multiplication " + " = " + s;
}
function div(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let s = (num1/num2)
    document.getElementById("div").textContent= " Division " + " = " + s;   
}
function mod() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let s = (num1 % num2)
  document.getElementById("mod").textContent = " Modulus " + " = " + s;
}