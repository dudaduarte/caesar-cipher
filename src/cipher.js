function submitButton (){
  const textInformation = document.getElementById('idTextUser').value;
  let arrayText = textInformation.split('');
  document.getElementById('showText').innerHTML = arrayText;
  return arrayText;
}

let textInformation = submitButton();



/*
window.cipher = {
  // ... 
};
*/
