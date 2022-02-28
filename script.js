const btn = document.querySelector("#conversor");
const decimal = document.querySelector("#decimal");
const binario = document.querySelector("#binario");
const limpar = document.querySelector('#limpar');

function settings(){
  decimal.setAttribute("maxlength", "8"); 
  binario.setAttribute("maxlength", "8"); 
  decimal.setAttribute("readonly", "true");
};

settings();

function binary(){
  let value = document.querySelector('#binario').value;
  document.querySelector('#binario').value = value.replace(/[^0-1]+/g,'')
  console.log('hello');
};

function conversor(){
  let binary = document.querySelector('#binario').value;
  let decimal = parseInt(binary,2);
  return decimal;
};

btn.addEventListener("click", function(e){
  e.preventDefault();
  let decimal = conversor();
  document.querySelector('#decimal').value = decimal;
});

limpar.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#binario').value ='';
  document.querySelector('#decimal').value = '';
})




