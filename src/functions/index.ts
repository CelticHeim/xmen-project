import { generateToken } from "./GenerateTokenController/generateToken";
import { isMutant } from "./IsMutantController/isMutant";
import { validateToken } from "./Middlewares/validateToken";

export {
  generateToken,
  validateToken,
  isMutant,
};
