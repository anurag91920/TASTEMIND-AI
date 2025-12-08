import express from "express";
import { protect } from "../middleware/auth.js";
import { getRecommendations, getForecast } from "../controllers/ml.controller.js";

const router = express.Router();

router.get("/recommend", protect, getRecommendations);
router.get("/forecast", protect, getForecast);

export default router;
