<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <b>API de Pedidos - Projeto com NestJS</b>
</p>

<p align="center">
  Uma API simples para gerenciamento de pedidos, construída com o framework <a href="https://nestjs.com/" target="_blank">NestJS</a> utilizando Prisma e SQLite.
</p>

---

## 🔧 Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

Instale as dependências

npm install

Configure o Prisma e o banco de dados

npm install
npx prisma generate
npx prisma migrate dev --name init


Rode a aplicação

npm run start:dev

A API estará disponível em http://localhost:3000.

📦 Rotas da API
Método	Endpoint	Descrição
POST	http://localhost:3000/pedidos	Cria um novo pedido
GET	http://localhost:3000/pedidos	Retorna todos os pedidos
PATCH	http://localhost:3000/pedidos/:id/status	Atualiza o status de um pedido
DELETE	http://localhost:3000/pedidos/:id	Deleta um pedido pelo ID

Método	Rota	Descrição Status
GET	http://localhost:3000/pedidos/status	Filtro dinâmico via ?status=
GET	http://localhost:3000/pedidos/status/em-preparo	Lista só os "Em preparo"
GET	http://localhost:3000/pedidos/status/pronto	Lista só os "Pronto"
GET	http://localhost:3000/pedidos/status/entregue	Lista só os "Entregue"

Exemplo de payload para criar pedido (POST /pedidos)

json
{
  "cliente": "João da Silva",
  "item": "Pizza calabresa",
  "quantidade": 2,
  "observacoes": "Sem cebola",
  "status": "Em preparo"
}


Exemplo para atualizar status (PATCH /pedidos/3/status)
{
  "status": "Pronto"
}
{
  "status": "Entregue"
}


🧪 Testes

# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov

📄 Licença
Este projeto é licenciado sob a licença MIT. Veja mais em LICENSE.

📬 Contato
Em caso de dúvidas ou sugestões, fique à vontade para entrar em contato.

✨ Autor
Desenvolvido por Leonardo Lopes Borges 🚀
