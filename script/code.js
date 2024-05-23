let sentence = 'I love programming love'

//String size
let numOfChar = sentence.length
console.log(`Number of characters: ${numOfChar}`)

//First character
console.log(`First charcter: ${sentence[0]}`)

//Last character
console.log(`Last character: ${sentence[numOfChar - 1]}`)

//Check if the first character starts with 'I' vs 'i'
console.log(`starts with I? ${sentence.startsWith('I')}`)

//Replace love with hate
console.log(`Replace love with hate. ${sentence.replace('love', 'hate')}`)
console.log(`Does it end with programming? ${sentence.endsWith('programming')}`)
console.log(`includes love: ${sentence.includes('love')}`)

//-------------------------------------------------------------------------------------
/* PLease work on the following string methods:
    - split()
    - slice()
    - charAt()
    - concat()
    - indexOf()
    - lastIndexOf()
    - substring()
    - toUpperCase()
    - trim()
    - trimStart()
    - trimEnd()
 */

// split()
console.log(sentence.split(' ')) //splits string into an array. It splits at specified point

// slice()
console.log(sentence.slice(2, 5)) //cuts string from specified positions to specified position
                                  //if the start value is greater than the end value it will return an empty string    
// charAt()
console.log(sentence.charAt(2)) //returns character at specified position (*index start from 0) within the string

//concat()
console.log(sentence.concat(sentence)) //merges the two strings

//indexOf()
console.log(sentence.indexOf('love')) //finds the position (*index start from 0) of specified string (its first occurence within the variable) 

//lastIndexOf()
console.log(sentence.lastIndexOf('love')) //finds the position (*index start from 0) of specified string (its last occurence within the variable)

//Substring
console.log(sentence.substring(7, 14)) //pulls characters between the specified start and end numbers/variables (* the end number is the cutoff, it is not included)
                                       //if the start value is greater than the end value it will swap the values 
//toUpperCase()
console.log(sentence.toUpperCase()) //Changes all charcteres to uppercase

//trim()
//trimStart()
//trimEnd()


