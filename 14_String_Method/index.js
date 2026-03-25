let username = ` BroCode `;
console.log(username.charAt(0)); // charAt --> method prints the char at the mentioned index of that string
console.log(username.indexOf("o")); // indexOf --> method prints the index of mentioned char
console.log(username.lastIndexOf("o")); // lastIndexOf --> method prints last occurence index of that char in the string
console.log(username.length); // length --> method prints the entire char's length in that string
console.log(username.trim()); // trim --> function removes the spaces, newline, tabs in the starting and ending of the string
console.log(username.toUpperCase); // toUpperCase --> method prints the entire string in the uppercase
console.log(username.toLowerCase); // toLowerCase --> method prints the entire string in the lowercase
console.log(username.repeat(3)); //  repeat --> method repeats the string respect to mentioned times
console.log(username.startsWith(" ")); // startsWith --> method is a boolean return which returns true when start match's with the mentioned char and false with not mentioned
console.log(username.endsWith("e")); // endsWith --> method is a boolean return which returns true when end match's with the mentioned char and false with not mentioned char
console.log(username.replaceAll(" ","/")); // replaceAll --> method changes all the occurence of the mentioned char to the second mentioned char
console.log(username.padStart(10, "@")); // padStart --> until the mentioned number of length the string exist the string was filled with the mentioned char from the start
console.log(username.padEnd(10, "@")); // padEnd --> until the mentioned number of length the string exist the string was filled with the mentioned char from the end
