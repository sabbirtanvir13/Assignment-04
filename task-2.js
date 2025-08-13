function  onlyCharacter( str ) {
   // You have to write your code here
    if(typeof str !== "string"){
        return "Invalid"
    }
    const result=str.split(' ').join('').toUpperCase();
    return result
}


