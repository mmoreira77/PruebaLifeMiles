const { Router } = require('express');
const apiConsulta = require('./consultas.controller');

const ruoter = require('express').Router();

// ruoter.get("/", apiConsulta.getContent);
ruoter.get("/:palabra", apiConsulta.convertir);

module.exports = ruoter;