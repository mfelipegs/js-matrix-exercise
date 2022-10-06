function showMatrix() {

    //creating the 2D array
    matrix = new Array;

    matrix = [
    ["A", "B", "a", "G", "J", "N", "I", "B", "P", "W", "D", "B", "A", "b", "A", "S", "G", "E", "K", "Y"],
    
    ["Z", "J", "u", "N", "E", "A", "V", "A", "I", "S", "Z", "S", "A", "M", "u", "D", "K", "F", "Q", "Z"],

    ["B", "E", "d", "G", "A", "X", "S", "N", "P", "l", "a", "m", "b", "o", "r", "g", "h", "i", "n", "i"],

    ["s", "A", "i", "U", "K", "L", "V", "T", "b", "m", "w", "B", "C", "Q", "A", "J", "a", "V", "O", "X"],

    ["a", "B", "l", "o", "t", "u", "s", "J", "I", "Q", "E", "B", "A", "M", "Y", "L", "F", "t", "A", "R"],

    ["l", "T", "A", "F", "A", "C", "Q", "H", "C", "m", "c", "l", "a", "r", "e", "n", "T", "Z", "t", "Q"],

    ["e", "I", "Q", "W", "Q", "F", "A", "C", "K", "W", "A", "K", "N", "S", "p", "a", "g", "a", "n", "i"],

    ["e", "B", "A", "E", "D", "Z", "I", "B", "P", "R", "O", "L", "P", "O", "A", "T", "G", "V", "A", "S"],

    ["n", "B", "A", "p", "o", "r", "s", "c", "h", "e", "R", "B", "R", "M", "Y", "R", "S", "P", "E", "F"],

    ["L", "Z", "G", "G", "V", "L", "k", "o", "e", "n", "i", "g", "s", "e", "g", "g", "X", "V", "H", "Q"]];


    //i = row
    //j = column
    document.write("<table border=0 class='tb1'>")
    for(i = 0; i < 10; i++) {

        document.write("<tr>");

        for(j = 0; j < 20; j++) {

            div1 = document.getElementById('div_matrix');
            if(matrix[i][j] === matrix[i][j].toLowerCase()) {
                div1.textContent = document.write("<td style='color: red;'>" + matrix[i][j].toUpperCase() + "</td>");
            }
            else {
                console.log(matrix[i][j]);
                console.log("aa");
                div1.textContent = document.write(`<td>${matrix[i][j]}</td>`);
            }
        }

        document.write("</tr>");
    }
    document.write("</table>");


}
showMatrix();