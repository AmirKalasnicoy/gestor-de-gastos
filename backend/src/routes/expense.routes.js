import { Router } from "express";
import {
  listExpenses,
  addExpense,
} from "../controllers/expense.controller.js";

const router = Router();

router.get("/", listExpenses);
router.post("/", addExpense);

export default router;