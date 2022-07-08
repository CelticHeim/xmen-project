import { fragmentedDnaSequences } from "./";

export const isMutant = (request, response) => {
  try {
    const fragDnaSeq = fragmentedDnaSequences(request.body.dna_sequences);
    console.log(fragDnaSeq);



    response.send({
      "Datos de Entrada": request.body,
      // "Secuencias de ADN Fragmentadas": fragDnaSeq,
    });
  } catch (error) {
    console.log(error.message);
  }
}
