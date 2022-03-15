```function calculaNota(ex, p1, p2) {```
```  let prova1 = p1 * 2;```
```  let prova2 = p2 * 3;```
```  let soma = ex + prova1 + prova2```
```  let media = soma / 6```
```  if (media > 8) {```
```    return 'A'``` 
```  }```
```  if(media < 9){```
```    if(media > 7.5){```
```      return 'B'``` 
```    }```
```  }```
```  if(media < 7.5){```
```    if(media > 6){```
```      return 'C'``` 
```    }```
``` }```
```  if(media < 6){```
```    return 'D'``` 
```  }```
```}```