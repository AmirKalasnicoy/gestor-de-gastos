import { Router } from "express";
import { listExpenses } from "../controllers/expense.controller.js";

const router = Router();

router.get("/", listExpenses);

export default router;