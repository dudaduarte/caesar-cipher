function showDivCode() {
  document.getElementById('encode').classList.remove('hidden');
  document.getElementById('decode').classList.add('hidden');
  clearText();
}

function showDivDecode() {
  document.getElementById('decode').classList.remove('hidden');
  document.getElementById('encode').classList.add('hidden');
  clearText();
}

function clearText() {
  document.getElementById('idFormEncode').reset();
  document.getElementById('idFormDecode').reset();
  document.getElementById('idTextModified').innerHTML="";
  document.getElementById('idTextModified2').innerHTML="";
}

function copyText() {
  document.getElementById('idTextModified').focus();
  document.execCommand('selectAll');
  document.execCommand('copy');
}

function startAgain() {
  document.getElementById('welcome').classList.remove('hidden');
  document.getElementById('encode').classList.add('hidden');
  document.getElementById('decode').classList.add('hidden');
  clearText();
}

function getInformationsEncode() {
  string = document.getElementById('idTextUser').value;
  offset = parseInt(document.getElementById('offsetInput').value);

  document.getElementById('idTextModified').innerHTML = cipherEncode(offset, string);
}

function getInformationsDecode() {
  string = document.getElementById('idTextUser2').value;
  offset = parseInt(document.getElementById('offsetInput2').value);

  document.getElementById('idTextModified2').innerHTML = cipherDecode(offset, string);
}

function cipherEncode(offset, string) {
  arrayAsc = [];

  for (i = 0; i < string.length; i++) {
    arrayAsc.push(string.charCodeAt(i));
  }

  arrayEncripted = [];

  for (j = 0; j < arrayAsc.length; j++) {
    if (offset < 0) {
      if (arrayAsc[j] >= 97 && arrayAsc[j] <= 122) {
        arrayEncripted.push(([arrayAsc[j] - 122 + offset] % 26) + 122);
      } else if (arrayAsc[j] >= 65 && arrayAsc[j] <= 90) {
        arrayEncripted.push(([arrayAsc[j] - 90 + offset] % 26) + 90);
      } else {
        arrayEncripted.push(arrayAsc[j]);
      }
    } else {
    if (arrayAsc[j] >= 97 && arrayAsc[j] <= 122) {
      arrayEncripted.push(([arrayAsc[j] - 97 + offset] % 26) + 97);
    } else if (arrayAsc[j] >= 65 && arrayAsc[j] <= 90) {
      arrayEncripted.push(([arrayAsc[j] - 65 + offset] % 26) + 65);
    } else {
      arrayEncripted.push(arrayAsc[j]);
    }
  }
}
  return String.fromCharCode(...arrayEncripted);
}

function cipherDecode(offset, string) {
  arrayAsc = [];

  for (i = 0; i < string.length; i++) {
    arrayAsc.push(string.charCodeAt(i));
  }

  arrayDisencripted = [];

  for (j = 0; j < arrayAsc.length; j++) {
    if (offset < 0) {
      if (arrayAsc[j] >= 97 && arrayAsc[j] <= 122) {
        arrayDisencripted.push(([arrayAsc[j] - 97 - offset] % 26) + 97);
      } else if (arrayAsc[j] >= 65 && arrayAsc[j] <= 90) {
        arrayDisencripted.push(([arrayAsc[j] - 65 - offset] % 26) + 65);
      } else {
        arrayDisencripted.push(arrayAsc[j]);
      }
    } else {
    if (arrayAsc[j] >= 97 && arrayAsc[j] <= 122) {
      arrayDisencripted.push(([arrayAsc[j] - 122 - offset] % 26) + 122);
    } else if (arrayAsc[j] >= 65 && arrayAsc[j] <= 90) {
      arrayDisencripted.push(([arrayAsc[j] - 90 - offset] % 26) + 90);
    } else {
      arrayDisencripted.push(arrayAsc[j]);
    }
  }
}
  return String.fromCharCode(...arrayDisencripted);
}
