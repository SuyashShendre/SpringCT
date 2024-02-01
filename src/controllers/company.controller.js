const Company = require("../models/company.model");

exports.createCompany = async (req, res) => {
  const { name, city } = req.body;

  const data = await Company.create({ name, city });

  res.status(201).json({ status: true, data });
};

exports.deleteCompany = async (req, res) => {
  const companyId = req.params;

  await Company.deleteOne(companyId);

  res
    .status(200)
    .json({ status: true, message: "Company deleted Successfully" });
};
