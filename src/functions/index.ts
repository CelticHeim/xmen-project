import { listAvaibleRoutes } from "./AvaibleRoutesController/listAvaibleRoutes";
import { generateToken } from "./GenerateTokenController/generateToken";
import { isMutant } from "./IsMutantController/isMutant";
import { validateToken } from "./Middlewares/validateToken";

export {
  listAvaibleRoutes,
  generateToken,
  validateToken,
  isMutant,
};
