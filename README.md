# Horóscopo da Sessão da Tarde

Esse é um projeto bem BR!
Foi bastante divertido de fazer e é um dos projetos que as pessoas mais gostaram.

## Foram realizadas as seguintes etapas:

1. Scrapping do fandom da Rede Globo, onde uma boa alma postou as informações de quase 50 anos do programa.
   - Para isso usei o Selenium com o driver do chromium.
2. Sanitização dos dados.
   - Fiz alguns scripts e usei o regex do VSCode para que os dados ficassem coerentes com as informações que estão disponíveis no site.
3. Transformação do arquivo em um JSON para exportar para o MongoDB.
   - Da mesma forma que a etapa anterior, com alguins scripts e regex. VSCode <3
   - Esses scripts podem ser vistos na pasta "scrap".
4. Criação do "Model" e importação para o BD.
   - Utilizei o Mongoose e a biblioteca nativa FS.
5. Disponibilização da rota de consulta
   - Utilizei o express para fazer uma unica rota e acessar o banco de dados.
6. Criação da página de consulta.
   - Como era uma página simples, utilizei HTML e JS embutido mesmo, pois será realizada uma unica consulta.

### Notas:

- É importante notar que eu utilizei esse projeto para meu primeiro contato com o Google AdSense, caso queira fazer o fork ou contribuir com o projeto (e caso o AdSense seja aprovado também haha), tenha ciencia disso.
- O projeto não tem intenção de ser lucrativo, a ideia foi servir de laborátorio, se eventualmente os custos da hospedagem forem cobertos, ficarei feliz.
- Se algo deste projeto ferir copright ou qualquer coisa neste sentido ou tiver algo de errado com a utilização do AdSense, por gentileza, deixe-me saber que corrigirei imediatamente.

## Agradecimentos

Eu gostaria de agradecer a pessoa que levantou todas essas informações, este é o link do site original: https://tvglobo.fandom.com/pt-br/wiki/Lista_de_filmes_exibidos_na_Sess%C3%A3o_da_Tarde