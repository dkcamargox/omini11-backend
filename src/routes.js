const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
  const body = req.body;

  console.log(body);
  return res.json({
    evento:  "Oministack 11",
    aluno: "Diego Fernandes"
  });
});


module.exports = routes;