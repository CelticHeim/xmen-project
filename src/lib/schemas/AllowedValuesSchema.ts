import { z } from "zod";

// const messages = {
//   value: "Los valores permitidos son A, T, C y G"
// }

const AllowedValuesSchema = z.enum(["A", "T", "C", "G"],
  // { invalid_type_error: messages.value }
);

export { AllowedValuesSchema };