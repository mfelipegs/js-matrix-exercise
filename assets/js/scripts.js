function showMatrix() {
//creating the array
matrix = new Array;

/*const characters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
console.log(randomCharacter);*/

const r1 = ["A", "B", "a", "G", "J", "N", "I", "B", "P", "W", "D", "B", "A", "b", "A", "S", "G", "E", "K", "Y"];

const r2 = ["Z", "J", "u", "N", "E", "A", "V", "A", "I", "S", "Z", "S", "A", "M", "u", "D", "K", "F", "Q", "Z"];

const r3 = ["B", "E", "d", "G", "A", "X", "S", "N", "P", "l", "a", "m", "b", "o", "r", "g", "h", "i", "n", "i"];

const r4 = ["s", "A", "i", "U", "K", "L", "V", "T", "b", "m", "w", "B", "C", "Q", "A", "J", "a", "V", "O", "X"];

const r5 = ["a", "B", "l", "o", "t", "u", "s", "J", "I", "Q", "E", "B", "A", "M", "Y", "L", "F", "t", "A", "R"];

const r6 = ["l", "T", "A", "F", "A", "C", "Q", "H", "C", "m", "c", "l", "a", "r", "e", "n", "T", "Z", "t", "Q"];

const r7 = ["e", "I", "Q", "W", "Q", "F", "A", "C", "K", "W", "A", "K", "N", "S", "p", "a", "g", "a", "n", "i"];

const r8 = ["e", "B", "A", "E", "D", "Z", "I", "B", "P", "R", "O", "L", "P", "O", "A", "T", "G", "V", "A", "S"];

const r9 = ["n", "B", "A", "p", "o", "r", "s", "c", "h", "e", "R", "B", "R", "M", "Y", "R", "S", "P", "E", "F"];

const r10 = ["L", "Z", "G", "G", "V", "L", "k", "o", "e", "n", "i", "g", "s", "e", "g", "g", "X", "V", "H", "Q"];

matrix = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10]; 

//i = row
//j = column
document.write("<table border=0 class='tb1'>")
for(i = 0; i < 10; i++) {

    document.write("<tr>");

    for(j = 0; j < 20; j++) {
        div1 = document.getElementById('div_matrix');
        div1.textContent = document.write("<td>" + matrix[i][j] + "</td>");
        //div1.style.color = "black";
        document.write(" ");
    }

    document.write("</tr>");
}
document.write("</table>");


}
showMatrix();