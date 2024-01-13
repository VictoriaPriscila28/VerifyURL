using System;

class Program {
    static void Main(string[] args) {
        // Lê a entrada do usuário
        string url = Console.ReadLine(); 

        string resultado;
        if (url.StartsWith("https://")) {
          Console.WriteLine("URL segura");
       // TODO: Atribua para a variável resultado a mensagem adequada:
      

      //TODO: Implemente a condição necessária para a verificação da URL:
        } else if (url.StartsWith("http://") ) {
          Console.WriteLine("URL nao segura");
      // TODO: Atribua para a variável resultado a mensagem adequada:

        } else {
          Console.WriteLine("Formato invalido");  
        }

        
    }
}
