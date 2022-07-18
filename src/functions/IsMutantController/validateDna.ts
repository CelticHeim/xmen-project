export const validateDna = (sequencesMatrix) => {
  let numMatch = 0, message = "", result = "";

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
    });
  });

  if (numMatch >= 3) {
    message = "Los datos de ADN indican que el individuo es un mutante";
    result = "Positivo"
  } else {
    message = "No se encontraron señales de que el individuo sea un mutante";
    result = "Negativo"
  }
  return { message: message, numMatch: numMatch, result: result };
}