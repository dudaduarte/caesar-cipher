/*function submitButton (){
  const textInformation = document.getElementById('idTextUser').value;
  //let arrayText = textInformation.split('');
  //document.getElementById('showText').innerHTML = arrayText;
  return textInformation;
}

let string = submitButton();*/

function cipherEncode(offset, string){
  string = document.getElementById('idTextUser').value;
  arrayAsc = [];

  for (i = 0; i < string.length; i++){
    arrayAsc.push(string.charCodeAt(i));
  }

  // talvez outra função aqui

  offset = parseInt(document.getElementById('offsetInput').value);
  arrayEncripted = [];

  for (j = 0; j < arrayAsc.length; j++){
    arrayEncripted.push(([arrayAsc[j] - 97 + offset] % 26) + 97);
  }

  // aqui transformando a array convertida em string de novo

  let textEncripted = String.fromCharCode(...arrayEncripted);
  
  // pensar em como fazer a barra de espaço não converter
  // fazer o mesmo com maiúsculas
  // descriptografar
  // arrumar css

  document.getElementById('idTextModified').innerHTML=textEncripted;

return offset;
}

function cipherDecode(offset, string){

}


/*
window.cipher = {
  // ... 
};
*/
