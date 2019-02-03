# Cifra de César

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Objetivos

O objetivo principal de aprendizagem deste projeto é que você tenha sua
primeira experiência construindo uma aplicação web, usando os seus
conhecimentos de **User Experience Design** e de **JavaScript**. Isso
inclui desenhar um produto pensando nos usuários, construir uma interface,
escutar eventos básicos do DOM, escrever a lógica que cifra e descifra
mensagens, realizar testes básicos que comprovem (e documentem) esta lógica,
e finalmente manipular o DOM para que ele mostre e imprima os resultados.

Esperamos que neste projeto você possa pensar no usuário, entendendo quem ele
é e suas necessidades. A ideia é que consiga entender o que o usuário
necessita para criar o produto e o ajudar a resolver suas necessidades da
melhor maneira possível.

Também é esperado que você possa se organizar, tendo em conta o tempo e os
recursos disponíveis. Essa é a primeira vez que avaliaremos suas soft skills,
mas deve considerar que são habilidades que provavelmente já deve ter
utilizado em diversas experiências em sua vida. O importante é que realize
o projeto de forma integral.

## Diagrama de Blocos e Explicação do Projeto

O [diagrama de blocos] desse projeto se encontra no seguinte link: (https://github.com/dudaduarte/caesar-cipher/blob/master/Diagrama%20do%20Cypher.jpeg).

### Explicando o diagrama:
Ao entrar no site, o usuário tem duas opções: clicar para CIFRAR seu texto, ou para DECIFRAR. Em qualquer um dos dois caminhos, aparecerão duas caixas de texto na tela, sendo que a caixa da esquerda tem uma indicação por placeholder de que lá é o local para se inserir o texto. Nessa tela também deverá ser inserido o deslocamento desejado para o alfabeto. O usuário insere seu texto e, dependendo do caminho escolhido no início, clica em "criptografar" ou em "descriptografar". O próximo passo é a aparição do texto cifrado/decifrado na caixa de texto à direita na tela, chegando ao fim do diagrama.

### Sobre a execução do projeto

Para atender aos objetivos do projeto, o primeiro passo foi a criação de duas funções destinadas à cifragem e decifragem (cipherEncode e cipherDecode). Essas funções serviam tanto para coletar as informações dos inputs feitos pelo usuário, quanto para a aplicação da fórmula e a entrega da mensagem cifrada (ou decifrada) na tela. Na fase de teste, o Daniel nos instruiu a separar em outra função tudo que for relacionado a coletar e entregar informações ao HTML, destinando às funções anteriormente citadas somente a função de aplicar a fórmula e gerar o texto cifrado/decifrado. A partir disso, criei outras duas funções (getInformationsEncode e getInformationsDecode) com a finalidade de fazer a ponte entre o JS e o HTML. Além dessas funções mais essenciais, também criei funções para os botões que aparecem nos diferentes momentos da navegação.
Ainda tenho muita dificuldade com CSS, e foi dito em muitos momentos que não deveríamos focar nisso no projeto cypher, mas nos (vários) momentos em que eu travava e não conseguia avançar no JavaScript, acabei pesquisando algumas coisas novas e retomando conceitos da época da pré-admissão. No fim, acabou me agradando muito o projeto como um todo, tanto a parte funcional como também a parte de CSS!

### Parte Obrigatória

* [x] `README.md` com explicações e desenho do projeto
* [x] Usar VanillaJS.
* [x] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [x] Mostrar o resultado da cifra corretamente.
* [x] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Criar testes unitários.

### Parte Opcional: "Hacker edition"

* [x] Permite usar um `offset` (_deslocamento_) negativo
* [x] Cifra/descifra _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...)
