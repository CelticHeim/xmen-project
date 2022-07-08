/* Letras permitidas: A, T, C, G */
const dnaDataMatrix = [
  "ATGCGA",
  "CAGTGC",
  "TTATGT",
  "AGAAGG",
  "CCCCTA",
  "TCACTG"
];

/* Seperar las letras de sus strings, creando un arreglo bidimensional */
const fragDnaMatrixHor = dnaDataMatrix.map((dnaSequence) => {
  let fragDnaMatrix = [];
  for (let index = 0; index < dnaSequence.length; index++) {
    fragDnaMatrix.push(dnaSequence[index]);
    // console.log(element.charAt(index));
  }
  return fragDnaMatrix;
});
console.log("\n Secuencias de ADN Fragmentado Horizontal: ", fragDnaMatrixHor);

// const horDnaSeqInfo = (fragDnaMatrix) => {
//   let dnaValueMatrix = [];

//   fragDnaMatrix.forEach((dnaSequence) => {
//     /* Devuelve una matriz con el numero de elementos que se repiten */
//     const dnaValSeq = dnaSequence.reduce((acc, element) => {
//       acc[element] ? acc[element] += 1 : acc[element] = 1;
//       // console.log(acc[element]);
//       return acc;
//     }, []);
//     // console.log("Valores De La Secuencia de ADN: ", dnaValSeq);
//     dnaValueMatrix.push(dnaValSeq);
//   });
//   return dnaValueMatrix;
// }
// console.log("\n Valores ADN Horizontal: ", horDnaSeqInfo(fragDnaMatrix));

// const searchValidSeq = (dnaSeqInfo) => {
//   dnaSeqInfo.forEach(sequence => {
//     const validateDna = sequence.some((value) => {
//       // console.log(value);
//       return value == ("T: 4");
//     });
//     console.log(validateDna);
//     // console.log(sequence)
//   });
//   return "Hi";
// }
// console.log("\n", searchValidSeq(horDnaSeqInfo(fragDnaMatrix)));

const fragDnaMatrixVer = (fragDnaMatrixHor) => {
  let matrixVertical = [], cont = 0;
  do {
    const sequenceVer = fragDnaMatrixHor.map((element) => {
      return element[cont];
    });
    matrixVertical.push(sequenceVer);
    // console.log(sequenceVer);
    cont++;
  } while (cont < 6);
  // console.log("\n", matrixVertical)
  return matrixVertical;
}
console.log("\nSecuencias de ADN Vertical", fragDnaMatrixVer(fragDnaMatrixHor));

const fragDnaMatrixLeftRight = (fragDnaMatrixHor) => {
  let matrizDiag = [],
    rows = fragDnaMatrixHor.length,
    cols = fragDnaMatrixHor[0].length;

  for (let index = 0; index < cols + rows - 1; index++) {
    let rowJ = index, colJ = 0, str = "";

    while (rowJ >= 0 && colJ < cols) {
      if (rowJ < rows) {
        str += fragDnaMatrixHor[rowJ][colJ];
      }
      rowJ--;
      colJ++;
    }
    // console.log(str);
    matrizDiag.push(str);
  }
  // return { "A": fragDnaMatrixHor.length, "B": fragDnaMatrixHor[0].length };

  const matrizFilter = matrizDiag.filter((element) => {
    return element.length >= 4;
  });
  // console.log(matrizDiag);
  return matrizFilter;
}
console.log("\nSecuencias de ADN LeftRight", fragDnaMatrixLeftRight(fragDnaMatrixHor));

const fragDnaMatrixRightLeft = (fragDnaMatrixHor) => {
  let matrizDiag = [],
    rows = fragDnaMatrixHor.length,
    cols = fragDnaMatrixHor[0].length;

  const reverse = fragDnaMatrixHor.map((sequence) => {
    return sequence.reverse();
  });

  for (let index = 0; index < cols + rows - 1; index++) {
    let rowJ = index, colJ = 0, str = "";

    while (rowJ >= 0 && colJ < cols) {
      if (rowJ < rows) {
        str += reverse[rowJ][colJ];
        // console.log(str);
      }
      rowJ--;
      colJ++;
    }
    matrizDiag.push(str);
  }

  const matrizFilter = matrizDiag.filter((element) => {
    return element.length >= 4;
  });
  // console.log(matrizDiag);
  return matrizFilter;
}
// console.log("\nSecuencias de ADN Right To Left", 
const result = fragDnaMatrixRightLeft(fragDnaMatrixHor);
console.log("Secuencias de ADN RightLeft", result);
// );

const validateDNA = (fragDnaMatrix) => {
  let sequenceEqualsFound = 0, matrix = [];

  fragDnaMatrix.forEach((sequence) => {
    let cont = 0, value = 0;
    while (cont <= sequence.length && sequence.charAt(cont) != '') {
      if (sequence.charAt(cont + 1) != '') {
        if (sequence.charAt(cont) == sequence.charAt(cont + 1)) {
          console.log(sequence.charAt(cont), " == ", sequence.charAt(cont + 1));
          value++;
        } else {
          console.log(sequence.charAt(cont), " != ", sequence.charAt(cont + 1));
        }
      }
      cont++;
    }
    matrix.push(value);
    console.log("\n");
  });
  return matrix;
}

console.log("\nValidar ADN: ", validateDNA(result));
