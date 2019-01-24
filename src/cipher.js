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
  offset = 3;

  for (i = 0; i < string.length; i++){
    arrayAsc.push(string.charCodeAt(i));
  }

  document.getElementById('idTextModified').innerHTML=arrayAsc;

return arrayAsc;
}

function cipherDecode(offset, string){

}


/*
window.cipher = {
  // ... 
};
*/
