## Exercício 1
---
a) Query que cria a tabela:

````sql
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
````
Chave estrangeira é a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.
#
b) Query
````sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
    "001",
    "Muito bom!",
    7,
    "004"
);
````
#
c)Response:
````
1 row(s) affected
````
A avaliação é criada normalmente
#
d) Query:
````sql
ALTER TABLE Movie DROP COLUMN rating;
````
#
e) Response:

````
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
````

Tradução:

````
Código de erro: 1175. Você está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desabilitar o modo de segurança, alterne a opção em Preferências -> Editor SQL e reconecte.
````

## Exercício 2
---

a)
#
b) Query :
````sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
        "004"
);
````
#
c) Response:
````
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814534-brenno-ambrozino`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
````

Tradução:

````
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`silveira-21814534-brenno-ambrozino`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS `Movie` (` id`))
````
#
d) Response: 
````
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`silveira-21814534-brenno-ambrozino`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
````

Tradução:
````
Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`silveira-21814534-brenno-ambrozino`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS `Actor` (` id`))
````
#

## Exercício 3
---

a) Query:
````sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
````
#

b) Query: 
````sql
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
````

