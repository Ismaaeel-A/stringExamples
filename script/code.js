let sentence = 'I love programming'

//string size
let numOfChar = sentence.length
console.log(`Number of characters: ${numOfChar}`)

//First character
console.log(`First charcter: ${sentence[0]}`)

//last character
console.log(`Last character: ${sentence[numOfChar - 1]}`)

//Check if the first character starts with 'I' vs 'i'
console.log(`starts with I? ${sentence.startsWith('I')}`)