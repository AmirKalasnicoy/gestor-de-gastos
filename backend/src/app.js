import express from "express";
import cors from "cors";
import expenseRoutes from "./routes/expense.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use("/api/expenses", expenseRoutes);

app.get("/api/health", (_request, response) => {
  response.status(200).json({ message: "API is healthy" });
});

export default app;
