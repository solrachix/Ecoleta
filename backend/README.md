


# Visão Geral
<p align="justify">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS" />
</a>
  <a aria-label="express" href="https://github.com/expressjs/expresss">
    <img src="https://img.shields.io/badge/Express-4.17.1-informational?logo=expressjs" />
  </a>
  <a aria-label="cors" href="https://github.com/expressjs/expresss">
    <img src="https://img.shields.io/badge/Cors-2.8.5-informational?logo=cors" />
  </a>
  <a aria-label="SQLite" href="https://github.com/sqlite/sqlite">
    <img src="https://img.shields.io/badge/SQLite3-4.1.1-informational?logo=sql" />
  </a>
  <a aria-label="knex" href="https://github.com/Automattic/mongoose/blob/master/History.md#user-content-587--2020-01-10">
    <img src="https://img.shields.io/badge/knex.js-0.20.13-informational?logo=knex" />
  </a>
  <a aria-label="Dia 3 de 5" href="https://rocketseat.com.br/week-10/aulas#2">
    <img src="https://img.shields.io/badge/Dia-2-green" />
  </a>
</p>

The backend API is a Node.js-based feature. You can use it to access data and set certain properties for users.
This was created to serve the 1st Next Level Week (NLW) developed by Rocketseat.
The Backend was developed with the RESTful API concept in mind.

## :computer: Languages

- **Javascript**

## :books: Technologies

- **typescript**: ^4.1.1
- **cors**: ^2.8.5
- **express**: ^4.17.1
- **knex**: ^0.21.1
- **sqlite3**: ^4.2.0

**devDependencies**

- **typescript**: ^4.1.1

# Specifications
- ## Insomnia (access to GET / POST / PUT / DELETE routes)
	- Download and install **[Insomnia](https://insomnia.rest/"Insomnia")** following the steps outlined on their website.

- ## Communication protocol:
	The protocol chosen for the development of ** Backend ** was HTTP.
	
	### Types of HTTP requests:
	The methods below are used when:
	- **GET**: if you want to FIND a backend information. It is always requested when accessing a route;
	- **POST**: if you want to CREATE information on the backend;
	- **PUT**: if you want to CHANGE a backend information;
	- **DELETE**: if you want to DELETE information from the backend.

	### Types of parameters:
	- **Query Params**: Named parameters sent on the route after "?" usually for (filters, pagination)
	http://localhost:3333/user?aluno=Carlos
	- **Route Param** s: Parameters used to identify resources
	http://localhost:3333/user/:id = http://localhost: 3333/user/1
	- **Request Body**: They are used when you want to pass many parameters in a request, for example when creating a user.

- ## Databases
	There are relational databases (which use SQL language such as MySQL, SQLite, PostgreSQL MS SQL Server) and non-relational databases (Redis, Mongo, Couch), also called NOSQL (Not Only SQL).

	In this edition, we opted to use SQL databases because they have greater data consistency and the ability to create well-structured and related tables. If you want to go deeper into this subject, there are several sites on the internet that explain this. You can start with [here] (https://www.devmedia.com.br/conceitos-fundamental-de-banco-de-dados/1649 "here").

	The bank chosen was [SQLite] (https://github.com/sqlite/sqlite "SQLite").

	And [KnexJS] (http://knexjs.org/ "KnexJS") was used to structure the table, query, and record data at the Bank.

 - ## Migrations
	- ### Points
		Este é o Migration da tabela Points

		#### Estrutura
		 - *\ecoleta\Backend\src\database\migrations\00_create_points.ts*

		```js

		export  async  function  up(knex:  Knex){
			// criar tabela
			return knex.schema.createTable('points', table  => {
				table.increments('id').primary();
				table.string('image').notNullable();
				table.string('name').notNullable();
				table.string('email').notNullable();
				table.string('whatsapp').notNullable();
				table.decimal('latitude').notNullable();
				table.decimal('longitude').notNullable();
				table.string('city').notNullable();
				table.string('uf', 2).notNullable();
			})
		}

		export  async  function  down(knex:  Knex){
			// voltar atras (deletar tabela)
			return knex.schema.dropTable('points');
		}
		```

	- ### Items
		Este é o Migration da tabela Items

		#### Estrutura
		 - *\ecoleta\Backend\src\database\migrations\01_create_items.ts*

		```js
		export async function up(knex: Knex){
		    // criar tabela
		    return knex.schema.createTable('items', table => {
			table.increments('id').primary();
			table.string('title').notNullable();
			table.string('image').notNullable();
		    })
		}

		export async function down(knex: Knex){
		    // voltar atras (deletar tabela)
		    return knex.schema.dropTable('items');
		}
		```
	- ### Point_items
		Este é o Migration da tabela Point_items, que estabelece um relacionamento entre a tabela Pointas e a Items

		#### Estrutura
		 - *\ecoleta\Backend\src\database\migrations\01_create_items.ts*

		```js
		export async function up(knex: Knex){
		    // criar tabela
		    return knex.schema.createTable('point_items', table => {
			table.increments('id').primary();
			table.integer('point_id')
			    .notNullable()
			    .references('id')
			    .inTable('points');

			table.integer('item_id')
			    .notNullable()
			    .references('id')
			    .inTable('items');
		    })
		}

		export async function down(knex: Knex){
		    // voltar atras (deletar tabela)
		    return knex.schema.dropTable('point_items');
		}
		```

- ## Controllers
	Listed here are the Ecoleta API controls, their methods, parameters and structure.
	- ### Points
	Points are Collection Points.
	| Method | Structure | Action | Parameters | Return |
	| - | - | - | - | - |
	| GET | `/ points` | Lists all points specified in the parameter | Query / city, uf, items | JSON / Points |
	| GET | `/ points: id` | List the point with the id specified in the parameter | Params / id | JSON / Point |
	| POST | `/ points` | Register a point in the database | JSON / image, name, email, whatsapp, latitude, longitude, city, uf | JSON / Id |
- ### Items
	List all application items	
	| Method | Structure | Action | Parameters | Return |
	| ------ | ------ | ------ | ------ | ------ |
	| GET | `/ items` | List all application items | ** None ** | JSON / Items |

# Use:
  To install the dependencies and run ** Server ** (development mode), clone the project on your computer and then execute:
  ```bash
	cd Backend
	yarn install
	yarn start
	# Rodando as migrations
	$ knex:migrate
	# Rodando as seeds
	$ knex:seed
	# Rodando a aplicação em modo desenvolvimento
	$ yarn dev OR node run dev
  ```
## Licença

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)
