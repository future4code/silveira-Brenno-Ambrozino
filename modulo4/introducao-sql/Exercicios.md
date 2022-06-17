## Exercício 1

---
a) Querys utilizadas:
- ``VARCHAR(n)``: strings de no máximo n caracteres ;
- ``FLOAT``: números não inteiros ;
- ``DATE``: representa uma data (YYYY-MM-DD) ; 
- ``PRIMARY KEY``: chave primária, evita valores repetidos;
- ``NOT NULL``: garante que uma coluna não admita valores ``NULL``.
#
b)
- ``SHOW DATABASES``: retorna todos os databases;
- ``SHOW TABLES``: retorna todas as tabelas.
#
c) O comando ``DESCRIBE Actor`` retorna a estrutura da tabela.
#
## Exercício 2 
---

a)
````sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
````
#
b) 
````
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
````
Tradução:
- Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

O programa só permite a criação de ``PRIMARY KEY`` diferente
#
c)

Comando:
````sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
````

Mensagem de Erro:
````
Error Code: 1136. Column count doesn't match value count at row 1.
````

Tradução:
- Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

Não foram passadas todas as requisições nos parâmetros
#
d)
````sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
````

Mensagem de Erro:
````
Error Code: 1364. Field 'name' doesn't have a default value
````

Tradução
- Código de erro: 1364. O campo 'nome' não tem um valor padrão

O campo 'name' é obrigatório por causa do ``NOT NULL``
#
e)

````sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
````

Mensagem de Erro:

````
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
````

Tradução:
- Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

A QUERY ``DATE`` deve ser passada como string
#

## Exercício 3
---

a)
````sql
SELECT * FROM Actor WHERE gender = "female";
````
#
b)
````sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
````
#
c)
````sql
SELECT * FROM Actor WHERE gender = "invalid";
````
Não foi encontrado nenhum resultado
#
d)
````sql
SELECT id, name, salary FROM Actor WHERE salary >= 500000;
````
#
e)

Comando:

````sql
SELECT id, nome FROM Actor WHERE id = "002"
````

Mensagem de Erro:
````
Error Code: 1054. Unknown column 'invalid' in 'where clause'
````
Tradução:
- Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

O certo é 'name' e não 'nome'

Comando correto:

````sql
SELECT id, name FROM Actor WHERE id = "002"
````
#
## Exercício 4
---

a) A Query:
````sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
````
retorna todos os atores e atrizes que o nome começa com 'A' ou 'J' e que o salário seja maior que 300.000
#

b)
````sql
SELECT * FROM Actor 
WHERE (name NOT LIKE "A%") AND salary > 350000;  
````
#
c)
````sql
SELECT * FROM Actor WHERE (name LIKE "%g%");
````
#
d) 
````sql
SELECT * FROM Actor 
WHERE (name LIKE "%g%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;
````
#

## Exercício 5
---
a) Query:
````sql
CREATE TABLE Movie (
	id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL, 
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);
````

A Query cria uma tabela com id, nome, sinopse, data de lançamento, avaliação
#

b)
````sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
````
#
c)
````sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
````
#
d)
````sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2012-12-27",
    8
);
````
#
e)
````sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
	"004",
    "Minha mãe é uma peça",
    "Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos.",
    "2013-06-21",
    10
);
````
#

## Exercício 6
---
a) 
````sql
SELECT id, name, rating FROM Movie WHERE id = "004";
````
#
b)
````sql
SELECT * FROM Movie WHERE name = "Minha mãe é uma peça";
````
#
c)
````sql
SELECT id, name, synopsy FROM Movie WHERE rating >= 7;
````
#

## Exercício 7

a) 
````sql
SELECT * FROM Movie WHERE name LIKE "%vida%";
````
#
b) 
````sql
SELECT * FROM Movie WHERE name LIKE "%peça%" OR synopsy LIKE "%peça%";
````
#
c) 
````sql
SELECT * FROM Movie WHERE release_date < "2022-06-17";
````
#
c) 
````sql
SELECT * FROM Movie 
WHERE release_date < "2022-06-17" AND (name LIKE "%peça%" OR synopsy LIKE "%peça%") AND rating > 7; 
````
#