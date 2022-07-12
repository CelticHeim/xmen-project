import { IsMutantSchema } from "../../lib";

import { fragmentedDnaSequences } from "./fragmentedDnaSequences";
import { verticalizeDnaSequences } from "./verticalizeDnaSequences";
import { diagonalDnaLeftToRight } from "./diagonalDnaLeftToRight";
import { diagonalDnaRightToLeft } from "./diagonalDnaRightToLeft";
import { validateDna } from "./validateDna";

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

    response.status(200).send({
      "Datos de Entrada": dataBody.dna_sequences,
      "¿Es Mutante?": dnaValidated.message,
      "Numero de patrones encontrados: ": dnaValidated.numMatch,
    });
  } catch (error) {
    // console.log(error);
    response.status(500).send({ message: error });
  }
}
