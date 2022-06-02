function phrase(name:string, date:string ){
    const results:string[] = date.split("/")
    function month(){
        switch(results[1]){
            case "01":
                return "janeiro"
                break;
            case "02":
                return "fevereiro"
                break;
            case "03":
                return "março"
                break;
            case "04":
                return "abril"
                break;
            case "05":
                return "maio"
                break;
            case "06":
                return "junho"
                break;
            case "07":
                return "julho"
                break;
            case "08":
                return "agosto"
                break;
            case "09":
                return "setembro"
                break;
            case "10":
                return "outubro"
                break;
            case "11":
                return "novembro"
                break;
            case "12":
                return "dezembro"
                break;
        }
    }
    return `Olá, me chamo ${name}, nasci no dia ${results[0]} do mês de ${month()} do ano de ${results[2]}`
}

console.log(phrase("brenno", "13/06/2001"))