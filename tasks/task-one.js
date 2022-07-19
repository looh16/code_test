export const countStringCharacters = (string) => {

    if(string.length === 0 ){

        throw "the string must have at least one character";
    } 

    if(string.length > 10 ){

        throw "the string cannot not longer than 10 characters";
    }
    
    return string.length;
}


  