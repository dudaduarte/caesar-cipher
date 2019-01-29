function showDivCode() {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('code').classList.remove('hidden');
}

function showDivDecode() {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('decode').classList.remove('hidden');
}

function startAgain() {
  document.getElementById('welcome').classList.remove('hidden');
  document.getElementById('code').classList.add('hidden');
  document.getElementById('decode').classList.add('hidden');
  // /\ verificar se isso de value="" é realmente necessário
  // verificar se tem uma maneira menos feia de copiar o conteúdo de uma função pra outra
}

function clearText() {
  document.getElementById('idTextUser').value="";
  document.getElementById('idTextUser2').value="";
  document.getElementById('idTextModified').value="";
  document.getElementById('idTextModified2').value="";
  document.getElementById('offsetInput').value="0";
  document.getElementById('offsetInput2').value="0";
  document.getElementById('showNumber').value="0";
  document.getElementById('showNumber2').value="0";  
}

/*function getInformations() {
  string = document.getElementById('idTextUser').value;
  offset = parseInt(document.getElementById('offsetInput').value);

  document.getElementById('idTextModified').innerHTML = cipherEncode(offset,string);
}*/

function cipherEncode(offset, string){
  string = document.getElementById('idTextUser').value;
  // /\ essa parte que pega informação do html também precisa ser retirada daqui
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
// /\ deixar tudo que for "externo", que diga respeito ao HTM etc, FORA dessa função, em outra função.
return textEncripted;
}



function cipherDecode(offset, string){
  string = document.getElementById('idTextUser2').value;
  arrayAsc = [];

  for (i = 0; i < string.length; i++){
    arrayAsc.push(string.charCodeAt(i));
  }

  offset = parseInt(document.getElementById('offsetInput2').value);
  arrayDisencripted = [];

  for (j = 0; j < arrayAsc.length; j++){
    if (arrayAsc[j] >= 97 && arrayAsc[j] <= 122) {
      arrayDisencripted.push(([arrayAsc[j] - 122 - offset] % 26) + 122);
    } else if (arrayAsc[j] >= 65 && arrayAsc[j] <= 90) {
      arrayDisencripted.push(([arrayAsc[j] - 90 - offset] % 26) + 90);
    } else {
      arrayDisencripted.push(arrayAsc[j]);
    }
  }

  let textDisencripted = String.fromCharCode(...arrayDisencripted);

  document.getElementById('idTextModified2').innerHTML=textDisencripted;

return textDisencripted;
}


/*
window.cipher = {
  // ... 
};
*/
