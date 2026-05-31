import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "./controller/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/get", getUser);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);

export default router;
