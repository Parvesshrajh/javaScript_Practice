// Multi-dimensional array that stores a matrix of data in rows and column.

const matrix = [[1,2,3],[4,5,6],[7,8,9],["*",0,"#"]];
for(let row of matrix){
    const rowstring = row.join(' '); // .join() --> method join the elements in the array with the mentioned string
    console.log(rowstring);
}