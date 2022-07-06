/* Letras permitidas: A, T, C, G */
const dnaSequence = [
  "ATGCGA",
  "CAGTGC",
  "TTATGT",
  "AGAAGG",
  "CCCCTA",
  "TCACTG"
];

/* Seperar las letras de sus strings, creando un arreglo bidimensional */
const result = dnaSequence.map((element) => {
  let matrix = [];
  for (let index = 0; index < element.length; index++) {
    matrix.push(element[index]);
    // console.log(element.charAt(index));
  }
  return matrix;
});
console.log(result);

result.forEach((element) => {
  /* ¿En esta fila hay minimo 4 elementos repetidos? */
  const row = element.reduce((acc, element) => {
    acc[element] ? acc[element] += 1 : acc[element] = 1
    return acc;
  }, {});
  console.log("Row: ", row);
});

