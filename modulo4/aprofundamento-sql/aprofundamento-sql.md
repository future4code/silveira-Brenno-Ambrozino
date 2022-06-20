## Exercício 1 
---

a) Query:
````sql
ALTER TABLE Actor DROP COLUMN salary;
````

Deleta a coluna ``salary`` da tabela ``Actor``

#

b) Query:
````sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
````

Troca o nome da coluna ``gender`` para ``sex`` e as suas definições para ``VARCHAR(6)``

#

c) Query:
````sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
````

Troca as definições da coluna ``gender`` para ``VARCHAR(255)``

#

d) Query utilizado:

````sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
````

#

## Exercício 2
---

a) Query:
````sql
UPDATE Actor 
SET 
name = "Moacyr Franco",
birth_date = "2022-06-20"
WHERE id = "003"
````

#

b) Query 1:
````sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "juliana paes"
````

Query 2:

````sql
UPDATE Actor
SET name = "juliana paes"
WHERE name = "JULIANA PAES"
````

#

c) Query:
````sql
UPDATE Actor 
SET 
name = "Brenno",
birth_day = "2001-06-13",
salary = "1",
gender = "male",
WHERE id = "005"
````

#

d) Não ocorreu nenhuma mudança.

#

## Exercício 3
---

a) Query:

````sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
````

#

b) Query: 
````sql
DELETE FROM Actor 
WHERE gender = male AND salary > 1000000
````

#

## Exercício 4

a) Query:
````sql
SELECT MAX(salary) FROM Actor;
````

#

b) Query:
````sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
````

#

c) Query:
````sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
````

#

d) Query:
````sql
SELECT SUM(salary) FROM Actor;
````

#

## Exercício 5
---
a) A query retorna os valores requisitados agrupados.

#
 
b)Query:
````sql
SELECT name, id FROM Actor ORDER BY name DESC;
````

#
 
c)Query:
````sql
Select * FROM Actor ORDER BY salary ASC;
````

#
 
d)Query:
````sql
Select * FROM Actor ORDER BY salary DESC LIMIT 3;
````

#
 
e)Query:
````sql
SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;
````

#

## Exercício 6
---

a) Query: 
````sql
ALTER TABLE Movie
ADD playing_limit_date DATE;
````

#
b) Query: 
````sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
````

#
c) Query 1: 
````sql
UPDATE Movie 
SET playing_limit_date = "2020-05-03"
WHERE id = "001"; 
````

Query 2:
````sql
UPDATE Movie 
SET playing_limit_date = "2023-05-03"
WHERE id = "002";
````

#
d) Query 1: 
````sql
DELETE  FROM Movie WHERE id = "001";
````

Query 2:
````sql
UPDATE Movie
SET synopsy = "será que vai?"
WHERE id = "001";
````




