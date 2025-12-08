import express from "express";
import { protect } from "../middleware/auth.js";
import { getMenu, addMenuItem } from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getMenu);
router.post("/", protect, addMenuItem);

export default router;
