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

  offset = 3;
  arrayEncripted = [];

  for (j = 0; j < arrayAsc.length; j++){
    arrayEncripted.push(([arrayAsc[j] - 97 + offset] % 26) + 97);
  }

  // aqui transformando a array convertida em string de novo

  let textEncripted = String.fromCharCode(...arrayEncripted);
  textEncripted = textEncripted.replace("W", " "); // n tá funfando. PQ? resolver essa questão do espaço

  document.getElementById('idTextModified').innerHTML=textEncripted;

return textEncripted;
}

function cipherDecode(offset, string){

}


/*
window.cipher = {
  // ... 
};
*/
