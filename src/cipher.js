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
  document.getElementById('idTextModified').innerHTML = "";
  document.getElementById('idTextModified2').innerHTML = "";
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

function turnOffsetIntoPositive(offset) {
  while (offset < 0) {
    offset += 26;
  }
  return offset;
}

function getInputEncode() {
  let offset = parseInt(document.getElementById('offsetInput').value);
  return offset;
}

function getInputDecode() {
  let offset = parseInt(document.getElementById('offsetInput2').value);
  return offset;
}

function startFunctionEncodeDecode() {
  if (document.getElementById('idTextUser').value) {
    document.getElementById('idTextModified').innerHTML = cipherEncode(getInputEncode(), document.getElementById('idTextUser').value);
  } else {
    document.getElementById('idTextModified2').innerHTML = cipherDecode(getInputDecode(), document.getElementById('idTextUser2').value);
  }
}

function cipherEncode(offset, string) {
  let arrayAsc = [];
  let arrayEncripted = [];
  offset = turnOffsetIntoPositive(offset);

  for (let i = 0; i < string.length; i++) {
    arrayAsc.push(string.charCodeAt(i));

    if (arrayAsc[i] >= 97 && arrayAsc[i] <= 122) {
      arrayEncripted.push(([arrayAsc[i] - 97 + offset] % 26) + 97);
    } else if (arrayAsc[i] >= 65 && arrayAsc[i] <= 90) {
      arrayEncripted.push(([arrayAsc[i] - 65 + offset] % 26) + 65);
    } else {
      arrayEncripted.push(arrayAsc[i]);
    }
  }
  return String.fromCharCode(...arrayEncripted);
}

function cipherDecode(offset, string) {
  let arrayAsc = [];
  let arrayDisencripted = [];
  offset = turnOffsetIntoPositive(offset);

  for (let i = 0; i < string.length; i++) {
    arrayAsc.push(string.charCodeAt(i));

    if (arrayAsc[i] >= 97 && arrayAsc[i] <= 122) {
      arrayDisencripted.push(([arrayAsc[i] - 122 - offset] % 26) + 122);
    } else if (arrayAsc[i] >= 65 && arrayAsc[i] <= 90) {
      arrayDisencripted.push(([arrayAsc[i] - 90 - offset] % 26) + 90);
    } else {
      arrayDisencripted.push(arrayAsc[i]);
    }
  }
  return String.fromCharCode(...arrayDisencripted);
}
