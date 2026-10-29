import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { handleContact } from "./contact-handler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.post("/api/contact", handleContact);

app.listen(PORT, () => {
  console.log(`Contact server running on port ${PORT}`);
});
