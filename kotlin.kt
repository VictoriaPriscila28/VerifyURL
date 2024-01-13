fun main() {
    // Lê a entrada do usuário ou usa uma string vazia se nenhuma entrada for fornecida
    val url = readLine() ?: "" 

    val resultado: String

    if (url.startsWith("https://")) {
      resultado = "URL segura"
    // TODO: Atribua para a variável resultado a mensagem adequada:


   //TODO: Implemente a condição necessária para a verificação da URL:
    } else if ( url.startsWith("http://" )) {
      resultado = "URL nao segura"
    // TODO: Atribua para a variável resultado a mensagem adequada:

    } else {
      resultado = "Formato invalido"  
    }

    //Exibe o resultado
    println(resultado)
}
