import { listAvaibleRoutes } from "./AvaibleRoutesController/listAvaibleRoutes";
import { generateToken } from "./GenerateTokenController/generateToken";
import { isMutant } from "./IsMutantController/isMutant";
import { validateToken } from "./Middlewares/validateToken";
import { results } from "./ResultsController/results";

export {
  listAvaibleRoutes,
  generateToken,
  validateToken,
  isMutant,
  results,
};
