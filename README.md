# Projeto: Verificador de URLs Seguras

O objetivo deste projeto é criar um programa que verifica a segurança de URLs. A lógica é simples: URLs que começam com "https" são consideradas seguras, URLs que começam com "http" são consideradas não seguras, e URLs com outros formatos são consideradas inválidas.

## Linguagens de Programação

O projeto foi implementado nas seguintes linguagens de programação:

- [Kotlin](#kotlin)
- [Java](#java)
- [JavaScript](#javascript)
- [Python](#python)
- [C#](#csharp)

## Kotlin

```kotlin
fun verificarURL(url: String): String {
    return when {
        url.startsWith("https") -> "Segura"
        url.startsWith("http") -> "Não Segura"
        else -> "Formato Inválido"
    }
}
