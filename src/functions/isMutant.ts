import {
  fragmentedDnaSequences,
  verticalizeDnaSequences,
  diagonalDna,
} from "./";

export const isMutant = (request, response) => {
  try {
    const fragDnaSeq = fragmentedDnaSequences(request.body.dna_sequences);
    console.log("Frag DNA Seq: ", fragDnaSeq);

    const fragDnaSeqRev = verticalizeDnaSequences(fragDnaSeq);
    console.log("Frag DNA Seq Rev: ", fragDnaSeqRev);

    const diagDnaLR = diagonalDna(fragDnaSeq);
    console.log("Diag DNA Left to Right: ", diagDnaLR);

    response.send({
      "Datos de Entrada": request.body,
      // "Secuencias de ADN Fragmentadas": fragDnaSeq,
    });
  } catch (error) {
    console.log(error.message);
  }
}
