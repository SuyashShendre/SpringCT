const express = require("express");
const router = express.Router();

const {
  createUser,
  allocateUserToCompany,
  userList,
  userListByCompany,
} = require("../controllers/user.controller");

router.post("/create-user", createUser);
router.put("/user-allocation", allocateUserToCompany);
router.get("/user-list", userList);
router.get("/user-list-company/:companyId", userListByCompany);

module.exports = router;
