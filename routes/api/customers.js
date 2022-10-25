const express = require("express");
const mysql = require("../../mysql/index.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const customers = await mysql.query("customerList");
  console.log(customers);
  res.send(customers);
});

router.post("/insert", async (req, res) => {
  const result = await mysql.query("customerInsert", req.body.param);
  res.send(result);
});

router.put("/update", async (req, res) => {
  const result = await mysql.query("customerUpdate", req.body.param);
  res.send(result);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query("customerDelete", id);
  res.send(result);
});

module.exports = router;
