const express = require("express");
const router = express.Router();

const {
  createCompany,
  deleteCompany,
} = require("../controllers/company.controller");

router.post("/create-company", createCompany);
router.delete("/delete-company/:companyId", deleteCompany);

module.exports = router;
