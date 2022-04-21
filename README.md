# projeto

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Instalando Dependencias

Por padrão, as dependências foram instaladas quando este aplicativo foi gerado. Sempre que as dependências em`package.json` forem alterados, execute o seguinte comando:

```sh
npm install
```

Para instalar apenas dependências resolvidas em `package-lock.json`:

```sh
npm ci
```

## Executar a Aplicação

Construção do conteiner docker

```sh
docker-compose up --build
```

Criação do banco de dados (Caso necessite), primeiro acessar o volume do banco

```sh
docker-compose exec db bash
```

em seguida acessar o mysql

```sh
mysql -uroot -proot
```

scritp sql de criação do banco

```sh
create database api_projeto;
```

em seguida em outro terminal acesse o volume da aplicação

```sh
docker-compose exec app bash
```

execute o scrip de criacao das tabelas a partir dos models

```sh
npm rum migrate
```

se necessario restart o container execute novamente o comando

```sh
docker-compose up --build
```

Abra http://127.0.0.1:3000 no seu navegador para acessar a pagina principal

Abra http://127.0.0.1:3000/explorer/ para acessar a documentação

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](<https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)
