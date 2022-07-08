import { Router } from "express";
import isMutant from "../functions/isMutant.js";

const router = new Router();

// router.get('/', /* function */);
router.post('/is-mutant', isMutant);

export default router;