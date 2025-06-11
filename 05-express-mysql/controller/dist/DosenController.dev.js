"use strict";

var Dosen = require("../model/Dosen");

var index = function index(req, res) {
  var dosen = new Dosen();
  res.render('dosen/index', {
    dataDosen: dosen.all()
  });
};

var create = function create(req, res) {
  res.render('dosen/create');
};

var store = function store(req, res) {
  var dosen = new Dosen();
  dosen.save({
    nik: req.body.nik,
    name: req.body.name,
    email: req.body.email,
    birth_date: req.body.birth_date
  });
  res.redirect("/lecturer");
};

module.exports = {
  index: index,
  create: create,
  store: store
};