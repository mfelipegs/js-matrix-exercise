function showMatrix() {
//criando o array
matrix = new Array;

const characters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
console.log(randomCharacter);

/*for(n = 0; n < 10; i++) {

}*/
const r1 = ["A", "B", "a", "G", "J", "L", "V", "B", "P", "Q", "D", "B", "A", "b", "A", "J", "G", "V", "A", "Q"];

const r2 = ["Z", "U", "u", "G", "X", "L", "V", "B", "P", "Q", "Z", "S", "A", "M", "u", "J", "G", "V", "A", "Q"];

const r3 = ["B", "G", "d", "G", "A", "L", "V", "B", "P", "E", "Z", "B", "W", "M", "A", "g", "G", "V", "A", "Q"];

const r4 = ["s", "A", "i", "G", "K", "L", "V", "B", "P", "Q", "F", "B", "A", "Q", "A", "J", "a", "V", "A", "Q"];

const r5 = ["a", "B", "l", "o", "t", "u", "s", "B", "P", "Q", "E", "B", "A", "M", "Y", "J", "G", "t", "A", "Q"];

const r6 = ["l", "T", "A", "G", "J", "L", "V", "B", "P", "m", "c", "l", "a", "r", "e", "n", "G", "V", "t", "Q"];

const r7 = ["e", "I", "A", "G", "J", "L", "V", "B", "P", "Q", "R", "B", "A", "M", "p", "a", "g", "a", "n", "i"];

const r8 = ["e", "B", "A", "G", "J", "L", "V", "B", "P", "Q", "A", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r9 = ["n", "B", "A", "p", "o", "r", "s", "c", "h", "e", "R", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r10 = ["L", "Z", "G", "G", "L", "L", "k", "o", "e", "n", "i", "g", "s", "e", "g", "g", "X", "V", "A", "Q"];

//Criando a matriz 3x3
matrix = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10]; 

//3 elementos, é 0 1 2, por isso < 3

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