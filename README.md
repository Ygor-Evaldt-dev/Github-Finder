# Github-Finder

## Descrição

**Github-Finder** é uma aplicação que permite buscar perfis de usuários do GitHub e visualizar seus principais dados.

## Funcionalidades

A aplicação permite buscar usuários do GitHub através da API oficial e retorna as seguintes informações:

- **Nome de usuário**
- **Endereço**
- **Número de seguidores**

## Como usar

### 1. Acessar a Aplicação

Você pode acessar e testar a aplicação diretamente no seguinte link: [Github-Finder](https://github-finder-topaz-seven.vercel.app/)

### 2. Realizar uma Busca

1. **Digite o nome de usuário**: Insira o nome de usuário do GitHub no campo de busca.
2. **Clique em "Buscar"**: Pressione o botão de busca para visualizar as informações do perfil do usuário.

### 3. Visualizar Resultados

Após realizar a busca, você verá as informações principais do usuário, incluindo:

- Nome de usuário
- Endereço
- Número de seguidores

## Documentação da API

Para mais detalhes sobre a API utilizada, você pode consultar a documentação oficial do GitHub:

- [Documentação da API do GitHub](https://docs.github.com/pt/rest/users/users?apiVersion=2022-11-28#get-a-user)

## Exemplos de Uso da API

### Requisição de Exemplo

Para buscar informações sobre um usuário específico, você pode fazer uma requisição GET para o seguinte endpoint:

```http
GET https://api.github.com/users/{username}
```

### Resposta de Exemplo

```json
{
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "The Octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "twitter_username": "monatheoctocat",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}
```

Sinta-se à vontade para explorar a aplicação e obter as informações que precisa sobre os usuários do GitHub!