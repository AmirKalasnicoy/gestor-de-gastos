import "dotenv/config";
import app from "./app.js";
import { verifyDatabaseConnection } from "./config/database.js";

const PORT = Number(process.env.PORT) || 4000;

async function startServer() {
  try {
    const database = await verifyDatabaseConnection();

    app.listen(PORT, () => {
      console.log(`Base de datos conectada: ${database}`);
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo conectar con PostgreSQL:", error.message);

    process.exit(1);
  }
}

startServer();
