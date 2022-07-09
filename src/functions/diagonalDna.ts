export const diagonalDna = (fragDnaSeq) => {
  let diagDnaSeq = [], rows = fragDnaSeq.length, cols = fragDnaSeq[0].length;

  for (let index = 0; index < (rows + cols - 1); index++) {
    let rows_j = index, cols_j = 0, dnaValue = "";

    while (rows_j >= 0 && cols_j < cols) {
      if (rows_j < rows) {
        dnaValue += fragDnaSeq[rows_j][cols_j];
      }
      rows_j--;
      cols_j++;
    }
    diagDnaSeq.push(dnaValue);
  }
  return diagDnaSeq;
  // console.log("Diag DNA Left to Right: ");

  // fragDnaSeq.forEach((sequence) => {
  //   console.log(sequence);
  // });
  // return "Hola Mundo :D";
}