```function criarArrayNomesAnimais() {```
```    const animais = [```
```      { nome: "Cachorro", classificacao: "mamífero" },```
```      { nome: "Papagaio", classificacao: "ave" },```
```      { nome: "Gato", classificacao: "mamífero" },```
```      { nome: "Carpa", classificacao: "peixe" },```
```      { nome: "Pomba", classificacao: "ave" }```
```    ]```
```    const nomes = animais.map((item, índice, array) => {```
```      return item.nome```
```    })```
```    return nomes```

```}```