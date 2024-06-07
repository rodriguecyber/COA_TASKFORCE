const transformString = (str) => {
    let result
    if (str.length % 5 === 0 && str.length % 3 === 0) {
        const result1 = replaceWithAscii(str);
        const result2 = reverseString(str);
        result =result1+" "+ result2
 
     }
    if (str.length % 3 === 0) {
        result = reverseString(str);
    }
    
    if (str.length % 5 === 0) {
        result = replaceWithAscii(str);
    }
    if (str.length % 5 === 0 && str.length % 3 === 0) {
       const result1 = replaceWithAscii(str);
       const result2 = reverseString(str);
       result =result1+" "+ result2

    }
    
    return result;
}

const reverseString = (str) =>{
    return str.split('').reverse().join('');
}

const  replaceWithAscii = (str) => {
    let asciiStr = '';
    for (let i = 0; i < str.length; i++) {
        asciiStr += str.charCodeAt(i) + ' ';
    }
    return asciiStr.trim();
}


console.log(transformString("rwi"));
