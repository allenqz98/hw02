
document.getElementById('0').addEventListener("click",function(){number(0)})
document.getElementById('1').addEventListener("click",function(){number(1)})
document.getElementById('2').addEventListener("click",function(){number(2)})
document.getElementById('3').addEventListener("click",function(){number(3)})
document.getElementById('4').addEventListener("click",function(){number(4)})
document.getElementById('5').addEventListener("click",function(){number(5)})
document.getElementById('6').addEventListener("click",function(){number(6)})
document.getElementById('7').addEventListener("click",function(){number(7)})
document.getElementById('8').addEventListener("click",function(){number(8)})
document.getElementById('9').addEventListener("click",function(){number(9)})
document.getElementById('C').addEventListener("click",function(){reset()})
document.getElementById('.').addEventListener("click",function(){dot()})
document.getElementById('/').addEventListener("click",function(){operation("/")})
document.getElementById('x').addEventListener("click",function(){operation("x")})
document.getElementById('-').addEventListener("click",function(){operation("-")})
document.getElementById('+/=').addEventListener("click",function(){operation("+/=")})


var prev_num = '';
var cur_num = '';
var op;
var result = '';
var dotted = false;
var display = document.getElementById("display");

function number(number) {
  if (cur_num == '') {
    dotted = false;
    display.innerHTML = number;
    cur_num = number;

  }
  else {
    cur_num = parseFloat(display.innerHTML + number);
    display.innerHTML = display.innerHTML + number;
  }
}

function dot() {
 
  if (dotted == false && display.innerHTML.indexOf('.') < 0){
    display.innerHTML = display.innerHTML + '.';
    cur_num ='0.'
    dotted = true;
  }
}

function reset() {
  if (cur_num == '') {
    prev_num = '';
    op = "";
  }
  else {
    cur_num = '';
  }
  display.innerHTML = 0;

}

function operation(string) {
  if (prev_num === '') {
    prev_num = cur_num;
    cur_num = '';
  }
  else if (cur_num !== '') {
    getResult();
  }
  op = string;

}

function getResult() {
  switch (op) {
    case "+/=":
    total = parseFloat(prev_num) + parseFloat(cur_num);
    display.innerHTML = total;
    prev_num = total;
    cur_num = '';
    break;

    case "-":
    total = prev_num - cur_num;
    display.innerHTML = total;
    prev_num = total;
    cur_num = '';
    break;

    case "x":
    total = prev_num * cur_num;
    display.innerHTML = total;
    prev_num = total;
    cur_num = '';
    break;

    case "/":
    if (cur_num == 0) {
      display.innerHTML = "Error";
      prev_num = 0;
      cur_num = 0;
    }
    else {
    total = prev_num / cur_num;
    display.innerHTML = total;
    prev_num = total;
    cur_num = '';
  }
    break;

    default:
  }
  if (!total.isInteger()) {
    alert("Int");
  }
}
