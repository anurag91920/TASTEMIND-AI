import express from "express";
import { protect } from "../middleware/auth.js";
import { addReview } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", protect, addReview);

export default router;
