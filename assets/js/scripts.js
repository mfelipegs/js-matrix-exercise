//criando o array
matrix = new Array;

const characters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
console.log(randomCharacter);

/*for(n = 0; n < 10; i++) {

}*/

//Criando a matriz 3x3
matrix = [[randomCharacter + " ", randomCharacter + " ", randomCharacter + " "], [4,5,6], [7,8,9]]; 

//3 elementos, é 0 1 2, por isso < 3

//i = row
//j = column
for(i = 0; i < 10; i++) {
    for(j = 0; j < 3; j++) {
        document.write(matrix[i][j]);
    }
    document.write("<br>");
}