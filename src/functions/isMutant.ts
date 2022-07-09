import {
  fragmentedDnaSequences,
  verticalizeDnaSequences,
  diagonalDnaLeftToRight,
  diagonalDnaRightToLeft,
} from "./";

export const isMutant = (request, response) => {
  try {
    const fragDnaSeq = fragmentedDnaSequences(request.body.dna_sequences);
    console.log("Frag DNA Seq: ", fragDnaSeq);

    const fragDnaSeqRev = verticalizeDnaSequences(fragDnaSeq);
    console.log("Frag DNA Seq Rev: ", fragDnaSeqRev);
    /* ---------------------------------------------------------------- */
    const diagDnaLR = diagonalDnaLeftToRight(fragDnaSeq);
    console.log("Diag DNA Left to Right: ", diagDnaLR);

    const diagDnaRL = diagonalDnaRightToLeft(fragDnaSeq);
    console.log("Diag DNA Right to Left: ", diagDnaRL);
    /* ---------------------------------------------------------------- */

    response.send({
      "Datos de Entrada": request.body,
      // "Secuencias de ADN Fragmentadas": fragDnaSeq,
    });
  } catch (error) {
    console.log(error.message);
  }
}
