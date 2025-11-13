/*
  Autor: @Nk Petrov
  Descrição: Gerencia as rotas e páginas do servidor Express.
*/

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "entrada.html"));
});

router.get("/docs", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "docs.html"));
});

router.get("/suporte", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "suporte.html"));
});

module.exports = router;