const transformString = (str) => {
    
    if (str.length % 5 === 0 && str.length % 3 === 0) {
        const result1 = replaceWithAscii(str);
        const result2 = reverseString(str);
        return result1+" "+ result2
      
     }
    if (str.length % 3 === 0) {
       return  reverseString(str);
    }
    
    if (str.length % 5 === 0) {
       return replaceWithAscii(str);
    }
    
    return str+" not devided by either 3 or 5"
    
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



console.log(transformString("rwig"));
