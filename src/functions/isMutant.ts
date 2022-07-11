import { IsMutantSchema } from "../lib";
import {
  fragmentedDnaSequences,
  verticalizeDnaSequences,
  diagonalDnaLeftToRight,
  diagonalDnaRightToLeft,
  validateDna,
} from "./";

export function isMutant(request, response) {
  try {
    const dataBody = IsMutantSchema.parse(request.body);

    const fragDnaSeq = fragmentedDnaSequences(dataBody.dna_sequences);
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

    response.send({
      "Datos de Entrada": dataBody.dna_sequences,
      "¿Es Mutante?": dnaValidated.message,
      "Numero de patrones encontrados: ": dnaValidated.numMatch,
    });
  } catch (error) {
    // console.log(error);
    response.status(500).send({ message: error });
  }
}
