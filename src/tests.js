function Teste (mensagemCifrada, respostaCerta) {
    if (mensagemCifrada === respostaCerta) {
        console.log("Certinho!");
    } else {
        console.log("Tá errado. \"" + mensagemCifrada + "\" não é igual a \"" + respostaCerta + "\".");
    }
}
console.log("------------------------- \nTeste da cifragem \n-------------------------")
Teste(cipherEncode(5, "abc!#789"), "fgh!#789");
Teste(cipherEncode(10, "yzop :)"), "ijyz :)");
Teste(cipherEncode(15, "ABCZ 123"), "PQRO 123");
Teste(cipherEncode(20, "XxZz"), "RrTt");
Teste(cipherEncode(20, "XxZz"), "abc"); //testando se o "tá errado" funciona
console.log("------------------------- \nTeste da decifragem \n-------------------------")
Teste(cipherDecode(5, "fgh!#789"), "abc!#789");
Teste(cipherDecode(10, "ijyz :)"), "yzop :)");
Teste(cipherDecode(15, "PQRO 123"), "ABCZ 123");
Teste(cipherDecode(20, "RrTt"), "XxZz");