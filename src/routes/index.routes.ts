import { Router } from "express";
import { isMutant, generateToken } from "../functions";

const router = Router();

// router.get('/', /* function */);
router.post('/generate-token', generateToken);

router.post('/is-mutant', isMutant);

export default router;