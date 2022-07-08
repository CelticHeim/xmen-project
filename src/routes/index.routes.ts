import { Router } from "express";
import { isMutant } from "../functions";

const router = Router();

// router.get('/', /* function */);
router.post('/is-mutant', isMutant);

export default router;