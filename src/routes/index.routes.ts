import { Router } from "express";
import { generateToken, validateToken, isMutant } from "../functions";

const router = Router();

// router.get('/', /* function */);
router.post('/generate-token', generateToken);

router.post('/is-mutant', validateToken, isMutant);

export default router;