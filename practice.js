// function disemvowel(str) {
//     return str.replace[/[aeiou]/gi, ""
//
// }
//
// console.log(disemvowel("Hello World"))

function isPangram(string){
    let splitString = string.toLowerCase().split('');
    let alphabet = [];
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    console.log(alphabet);
}

