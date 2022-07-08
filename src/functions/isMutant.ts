import {
  fragmentedDnaSequences,
  verticalizeDnaSequences
} from "./";

export const isMutant = (request, response) => {
  try {
    const fragDnaSeq = fragmentedDnaSequences(request.body.dna_sequences);
    console.log(fragDnaSeq);

    const fragDnaSeqRev = verticalizeDnaSequences(fragDnaSeq);
    console.log(fragDnaSeqRev);

    response.send({
      "Datos de Entrada": request.body,
      // "Secuencias de ADN Fragmentadas": fragDnaSeq,
    });
  } catch (error) {
    console.log(error.message);
  }
}
