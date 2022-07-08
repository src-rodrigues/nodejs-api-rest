const { request } = require('express');
const Pet = require('../models/pets');

module.exports = app => {

    app.post('/pet', (request, response) => {
      const pet = request.body;

      Pet.create(pet, response);
    });
};