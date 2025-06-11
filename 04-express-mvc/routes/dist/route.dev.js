"use strict";

var express = require("express");

var dosenController = require("../controller/DosenController");

var router = express.Router();
router.use(express["static"]('public'));
router.get("/student", function (req, res) {
  res.render('mahasiswa/index');
});
router.get("/lecturer/create", dosenController.create);
router.post("/lecturer/create", dosenController.store);
router.get("/lecturer", dosenController.index);
router.get("/", function (req, res) {
  res.render('starter');
});
module.exports = router;