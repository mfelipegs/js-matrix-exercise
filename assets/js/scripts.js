//criando o array
matrix = new Array;

const characters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
console.log(randomCharacter);

/*for(n = 0; n < 10; i++) {

}*/
const r1 = ["A", "B", "A", "G", "J", "L", "V", "B", "P", "Q", "Z", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r2 = ["Z", "U", "A", "G", "J", "L", "V", "B", "P", "Q", "Z", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r3 = ["B", "G", "A", "G", "J", "L", "V", "B", "P", "Q", "Z", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r4 = ["X", "A", "A", "G", "J", "L", "V", "B", "P", "Q", "F", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r5 = ["L", "O", "T", "U", "S", "L", "V", "B", "P", "Q", "E", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r6 = ["Z", "T", "A", "G", "J", "L", "V", "B", "P", "M", "C", "L", "A", "R", "E", "N", "G", "V", "A", "Q"];

const r7 = ["Z", "I", "A", "G", "J", "L", "V", "B", "P", "Q", "R", "B", "A", "M", "P", "A", "G", "A", "N", "I"];

const r8 = ["K", "B", "A", "G", "J", "L", "V", "B", "P", "Q", "A", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r9 = ["F", "B", "A", "G", "J", "L", "V", "B", "P", "Q", "R", "B", "A", "M", "A", "J", "G", "V", "A", "Q"];

const r10 = ["L", "Z", "G", "G", "L", "L", "K", "O", "E", "N", "I", "G", "S", "E", "G", "G", "X", "V", "A", "Q"];

//Criando a matriz 3x3
matrix = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10]; 

//3 elementos, é 0 1 2, por isso < 3

//i = row
//j = column
for(i = 0; i < 10; i++) {
    //document.write("<table border=1>")
    for(j = 0; j < 20; j++) {
        div1 = document.getElementById('div_matrix');
        div1.textContent = document.write(matrix[i][j]);
        //div1.style.color = "black";
        document.write(" ");
    }
    document.write("<br>");
}