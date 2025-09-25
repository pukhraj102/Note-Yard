import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


// middleware
app.use(
  cors({
    origin: "http://localhost:5173", // frontend url
  })
);
app.use(express.json()); // this  middlewqare is used to parse json data: req.body
app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });
});

//mongodb+srv://puneetsingh1024_db_user:45oGhDvrQzpPJuoa@cluster0.kyc1xhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0