# Horóscopo da Sessão da Tarde

Esse é um projeto bem BR!
Foi bastante divertido de fazer e é um dos  meus projetos que as pessoas mais gostaram.

## Foram realizadas as seguintes etapas:

1. Scrapping do fandom da Rede Globo, onde é possível encontrar informações de quase 50 anos do programa.
   - Para isso usei o Selenium.
2. Sanitização dos dados.
   - Fiz o script sanitize, que transforma todos os dados em um JSON para exportar para o MongoDB.
3. Criação do "Model" e importação para o BD.
   - Utilizei o Mongoose e a biblioteca nativa FS.
4. Disponibilização de rota de api para consulta
   - Utilizei o express para fazer uma única rota e acessar o banco de dados.
5. Criação da página de consulta.
   - Como era uma página simples, utilizei HTML e JS embutido.

### Notas:
- Se algo deste projeto ferir copyright ou qualquer coisa neste sentido, por gentileza, deixe-me saber que corrigirei imediatamente.

## Agradecimentos
Eu gostaria de agradecer a pessoa que levantou todas essas informações, este é o link do site original: https://tvglobo.fandom.com/pt-br/wiki/Lista_de_filmes_exibidos_na_Sess%C3%A3o_da_Tarde