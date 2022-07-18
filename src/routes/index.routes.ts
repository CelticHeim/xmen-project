import { Router } from "express";
import { listAvaibleRoutes, generateToken, validateToken, isMutant, results } from "../functions";

const router = Router();

router.get('/', listAvaibleRoutes);

router.post('/generate-token', generateToken);

router.post('/is-mutant', validateToken, isMutant);

router.get('/results', validateToken, results);

export default router;