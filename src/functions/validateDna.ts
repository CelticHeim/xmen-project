export const validateDna = (sequencesMatrix) => {
  let numMatch = 0;

  sequencesMatrix.forEach((sequences) => { // 4 Matrices Para Analizar
    sequences.forEach((sequence) => {
      let numValEquals = 0, valPos = 0;
      console.log("\nCantidad de valores en la secuencia:", sequence.length);

      while (valPos <= sequence.length && sequence[valPos + 1] != '') {
        if (sequence[valPos + 1]) {
          if (sequence[valPos] == sequence[valPos + 1]) {
            console.log(sequence[valPos], "==", sequence[valPos + 1]);
            numValEquals++;
          } else {
            console.log(sequence[valPos], "!=", sequence[valPos + 1]);
            numValEquals = 0;
          }

          if (numValEquals == 3) {
            numMatch++;
          }
          // console.log("Numero de equivalencias:", numValEquals);
        }
        valPos++;
      }
      console.log("Numero de coincidencias:", numMatch, "\nNumero de equivalencias:", numValEquals);
    });
  });
  return numMatch;
}