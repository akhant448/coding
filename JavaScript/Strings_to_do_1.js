// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks (str) {
    //set newStr as an empty string
    let newStr = ''

    //loop through the given string
    for (let char in str) {
        if(str[char] != ' ') {
            newStr += str[char]
        }
    }

    return newStr
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits (str) {
    //set newStr as an empty string
    let newNumStr = ' '

    //loop through the given string
    for (let char in str) {
        //isNaN is checking for the value that are not numbers through the loops but with ! its flipped so we are now looking for value that are numbers
        if (!isNaN(str[char])) {
            newNumStr += str[char]

        }
    }
    //Number() changed the string to the number type
    return Number(newNumStr)
}

console.log(getDigits("abc8c0d1ngd0j0!8"));



// Acronyms

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN". 

function acronym(str) {
    //using the split() method, we will divide the given string into list of substring and put these substring into an array
    let wordArr = str.split(' ')
    let acronymStr = ''
    //loop through the given string
    for (let word in wordArr) {
        //if condition where there are empty substring that are showing as undefined when accessing the first letter
        if (wordArr[word].length > 0) {
            //select the first letter from the word or substring and put it into the acronymStr empty array
            acronymStr += wordArr[word][0]
        }
        
        
    }

    return acronymStr.toUpperCase()

}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));



// Count Non-Spaces

// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    //make a variable counter to count the number of non-space characters
    let counter = 0;
    //loop through the given string
    for (let char in str) {
        //if condition where the character is not a space
        if (str[char] != ' ') {
            //then increment the counter 
            counter++
        }
    }

    return counter
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));




// Remove Shorter Strings

// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(array, length) {
    //initialize a new empty array to a variable 
    let newArr = []
    //initialize a nextIndex variable
    let nextIndex = 0
    //loop through the given array
    for (let value in array) {
        //if condition where length of value is bigger or equal to the given length
        if (array[value].length >= length) {
            //now add the value to the new array
            newArr[nextIndex++] = array[value]
        }
    }
    return newArr
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));