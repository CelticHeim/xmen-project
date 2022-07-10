import {
  fragmentedDnaSequences,
  verticalizeDnaSequences,
  diagonalDnaLeftToRight,
  diagonalDnaRightToLeft,
  validateDna,
} from "./";

export const isMutant = (request, response) => {
  try {
    const fragDnaSeq = fragmentedDnaSequences(request.body.dna_sequences);
    const fragDnaSeqRev = verticalizeDnaSequences(fragDnaSeq);
    /* ---------------------------------------------------------------- */
    const diagDnaLR = diagonalDnaLeftToRight(fragDnaSeq);
    const diagDnaRL = diagonalDnaRightToLeft(fragDnaSeq);
    /* ---------------------------------------------------------------- */

    const sequencesMatrix = [
      fragDnaSeq,
      fragDnaSeqRev,
      diagDnaLR,
      diagDnaRL,
    ]

    const dnaValidated = validateDna(sequencesMatrix);
    console.log(dnaValidated);

    response.send({
      "Datos de Entrada": request.body,
    });
  } catch (error) {
    console.log(error.message);
  }
}
