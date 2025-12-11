import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import orderRoutes from "./routes/order.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import mlRoutes from "./routes/ml.routes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],   // ← array me rakho
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/ml", mlRoutes);

app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
