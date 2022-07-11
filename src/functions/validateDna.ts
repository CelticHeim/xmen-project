export const validateDna = (sequencesMatrix) => {
  let numMatch = 0, message = "";

  sequencesMatrix.forEach((sequences) => { // 4 Matrices Para Analizar
    sequences.forEach((sequence) => {
      console.log("Secuencias Actual:", sequence);
      let nextElement = 1, pairLetter = 0;

      sequence.forEach((element, index) => {
        if (element == sequence[nextElement]) {
          pairLetter++;
          console.log(element, "==", sequence[index + 1], " PL:", pairLetter);
        } else {
          if (pairLetter == 3) {
            numMatch++;
            console.log("Cadena de 4 elementos identicos sucesivos encontrada")
          }
          pairLetter = 0;
          console.log(element, "!=", sequence[index + 1], " PL:", pairLetter);
        }
        nextElement++;
      });
      console.log("Numero de coincidencias: ", numMatch);

      // console.log("\nCantidad de valores en la secuencia:", sequence.length);
      // while (valPos <= sequence.length && sequence[valPos + 1] != '') {
      //   if (sequence[valPos + 1]) {
      //     if (sequence[valPos] == sequence[valPos + 1]) {
      //       console.log(sequence[valPos], "==", sequence[valPos + 1]);
      //       numValEquals++;
      //     } else {
      //       console.log(sequence[valPos], "!=", sequence[valPos + 1]);
      //       numValEquals = 0;
      //     }

      //     if (numValEquals == 3) {
      //       numMatch++;
      //     } else if (numValEquals > 3) {
      //       numMatch--;
      //     }
      //     // console.log("Numero de equivalencias:", numValEquals);
      //   }
      //   valPos++;
      // }
      // console.log("Numero de coincidencias:", numMatch, "\nNumero de equivalencias:", numValEquals);
    });
  });

  if (numMatch >= 3) {
    message = "Los datos de ADN indican que el individuo es un mutante";
  } else {
    message = "No se encontraron señales de que el individuo sea un mutante";
  }
  return { message: message, numMatch: numMatch };
}