const express = require("express");
const { verify } = require('../auth/auth');
const router = express.Router();

const userServices = require("../BL/user.service");

router.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const result = await userServices.register(req.body);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/:email", async (req, res) => {
  try {
   
    const result = await userServices.getUser(req.params.email);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const result = await userServices.login(req.body)
    res.send(result);
  } catch (err) {
    res.status(400).send(err.message);
   
  }
});

module.exports = router
