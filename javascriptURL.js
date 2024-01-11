//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Leitura da entrada do usuário:
const url = gets();
var resultado;

if (url.startsWith("https://")) {
  resultado = "URL segura"

//TODO: Implemente a condição necessária para a verificação da URL:
} else if ( url.startsWith("http://")) {
  resultado = "URL nao segura"
// TODO: Atribua para a variável resultado a mensagem adequada:

} else {
  resultado = "Formato invalido"

}
// Exibe o resultado
print(resultado);