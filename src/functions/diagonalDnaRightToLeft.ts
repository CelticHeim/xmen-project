export const diagonalDnaRightToLeft = (fragDnaSeq) => {
  let diagDnaSeq = [], rows = fragDnaSeq.length, cols = fragDnaSeq[0].length;

  const reverse = fragDnaSeq.map((sequence) => {
    return sequence.reverse();
  });

  for (let index = 0; index < (rows + cols - 1); index++) {
    let rows_j = index, cols_j = 0, dnaValue = [];

    while (rows_j >= 0 && cols_j < cols) {
      if (rows_j < rows) {
        dnaValue.push(reverse[rows_j][cols_j]);
      }
      rows_j--;
      cols_j++;
    }
    diagDnaSeq.push(dnaValue);
  }

  const filterDiagDnaSeq = diagDnaSeq.filter((element) => {
    return element.length >= 4;
  });
  return filterDiagDnaSeq;
}