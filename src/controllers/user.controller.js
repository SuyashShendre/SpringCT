const User = require("../models/user.model");
const Company = require("../models/company.model");

exports.createUser = async (req, res) => {
  const { name, email, phone } = req.body;

  const data = await User.create({ name, email, phone });

  res.status(201).json({ status: true, data });
};

exports.allocateUserToCompany = async (req, res) => {
  const { companyId, userId } = req.body;
  console.log(req.body);

  const company = await Company.findById({ _id: companyId });
  if (!company) {
    return res
      .status(404)
      .json({ status: false, message: "Company not found" });
  }

  const data = await User.findOneAndUpdate(
    { _id: userId },
    { $set: { companyId: companyId } },
    { new: true }
  );

  res.status(200).json({ status: true, data });
};

exports.userList = async (req, res) => {
  const data = await User.find().populate("companyId");

  res.status(200).json({ status: true, data });
};

exports.userListByCompany = async (req, res) => {
  const companyId = req.params;
  const data = await User.find(companyId).populate("companyId");

  res.status(200).json({ status: true, data });
};
