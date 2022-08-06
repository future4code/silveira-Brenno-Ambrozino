const isOneEdit = (strA: string, strB:string): boolean => {
    if(strB.length - strA.length > 1) {
        return false
    } else if(strA.length > strB.length) {
        return strA.includes(strB)
    } else if(strB.length > strA.length) {
        return strB.includes(strA)
    } 

    let charsDiffCount = 0

    for (let i = 0; i < strA.length; i++) {
        if(strA[i] !== strB[i]) charsDiffCount++
    }

    return charsDiffCount === 1

}

console.log(isOneEdit('banana', 'bananak'))
