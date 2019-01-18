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

var calc = {prev_num:'', cur_num:'', op:'', display:document.getElementById("display")};

function number(number) {
  if (calc.cur_num == '') {
    calc.display.innerHTML = number;
    calc.cur_num = number;

  }
  else {
    calc.cur_num = parseFloat(calc.display.innerHTML + number);
    calc.display.innerHTML = calc.display.innerHTML + number;
  }
}

function dot() {
  if (calc.display.innerHTML.indexOf(".") < 0 && calc.cur_num !== ''){
    calc.display.innerHTML = calc.display.innerHTML + '.';
    calc.cur_num ='0.'
  }
}

function reset() {
  if (calc.cur_num == '') {
    calc.prev_num = '';
    calc.op = "";
  }
  else {
    calc.cur_num = '';
  }
  calc.display.innerHTML = 0;

}

function operation(string) {
  if (calc.prev_num === '') {
    calc.prev_num = calc.cur_num;
    calc.cur_num = '';
  }
  else if (calc.cur_num !== '') {
    getResult();
  }
  calc.op = string;

}

function getResult() {
  let result = '';
  switch (calc.op) {
    case "+/=":
    total = parseFloat(calc.prev_num) + parseFloat(calc.cur_num);
    calc.display.innerHTML = total;
    calc.prev_num = total;
    calc.cur_num = '';
    break;

    case "-":
    total = calc.prev_num - calc.cur_num;
    calc.display.innerHTML = total;
    calc.prev_num = total;
    calc.cur_num = '';
    break;

    case "x":
    total = calc.prev_num * calc.cur_num;
    calc.display.innerHTML = total;
    calc.prev_num = total;
    calc.cur_num = '';
    break;

    case "/":
    if (calc.cur_num == 0) {
      calc.display.innerHTML = "Error";
      calc.prev_num = 0;
      calc.cur_num = 0;
    }
    else {
    total = calc.prev_num / calc.cur_num;
    calc.display.innerHTML = total;
    calc.prev_num = total;
    calc.cur_num = '';
  }
    break;

    default:
  }
}
