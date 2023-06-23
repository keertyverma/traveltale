import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";

config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
