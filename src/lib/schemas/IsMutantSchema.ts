import { z } from "zod";

// const messages = {
//   array: "El arreglo de ADN debe contener 6 secuencias",
//   string: "Solo se permiten cadenas de caracteres",
//   length: "Cada secuencia solo debe contener 6 elementos"
// }

const IsMutantSchema = z.object({
  "dna_sequences": z.array(z.string().length(6)).length(6)
});

export { IsMutantSchema };