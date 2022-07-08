import { Router } from "express";
import { isMutant } from "../functions/isMutant";

const router = new Router();

// router.get('/', /* function */);
router.post('/is-mutant', isMutant);

export default router;