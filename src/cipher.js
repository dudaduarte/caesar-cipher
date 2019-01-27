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

  offset = parseInt(document.getElementById('offsetInput').value);
  arrayEncripted = [];

  for (j = 0; j < arrayAsc.length; j++){
    if (arrayAsc[j] >= 97 && arrayAsc[j] <= 122) {
      arrayEncripted.push(([arrayAsc[j] - 97 + offset] % 26) + 97);
    } else if (arrayAsc[j] >= 65 && arrayAsc[j] <= 90) {
      arrayEncripted.push(([arrayAsc[j] - 65 + offset] % 26) + 65);
    } else {
      arrayEncripted.push(arrayAsc[j]);
    }
  }

  let textEncripted = String.fromCharCode(...arrayEncripted);

  document.getElementById('idTextModified').innerHTML=textEncripted;

return textEncripted;
}



function cipherDecode(offset, string){

  string = document.getElementById('idTextModified').value;
  arrayAsc = [];

  for (i = 0; i < string.length; i++){
    arrayAsc.push(string.charCodeAt(i));
  }

  offset = parseInt(document.getElementById('offsetInput').value);
  arrayDisencripted = [];

  for (j = 0; j < arrayAsc.length; j++){
    if (arrayAsc[j] >= 97 && arrayAsc[j] <= 122) {
      arrayDisencripted.push(([arrayAsc[j] - 97 - offset] % 26) + 97);
    } else if (arrayAsc[j] >= 65 && arrayAsc[j] <= 90) {
      arrayDisencripted.push(([arrayAsc[j] - 65 - offset] % 26) + 65);
    } else {
      arrayDisencripted.push(arrayAsc[j]);
    }
  }

  let textDisencripted = String.fromCharCode(...arrayDisencripted);

  document.getElementById('idTextUser').innerHTML=textDisencripted;

return textDisencripted;

}


/*
window.cipher = {
  // ... 
};
*/
