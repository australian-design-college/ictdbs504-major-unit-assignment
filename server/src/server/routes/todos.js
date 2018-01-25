import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["Hook this todo list up to the given database", "(instead of keeping it mocked)"]);
});

router.post("/", (req, res) => {
  // TODO: instead of just doing this, you should add the todo into the database!
  res.send(req.body);
});

export default router;
