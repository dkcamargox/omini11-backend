const express = require('express');
const routes = express.Router();
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');
const connection = require('./database/connection');

routes.delete('/deleteAll', async (req, res) => {

    await connection('ongs').del();
    await connection('incidents').del();
    return res.status(201).json({
      Deleted: "All"
    })
});

routes.post('/sessions', SessionController.create );

routes.get('/ongs', OngController.index ); 

routes.post('/ongs', OngController.create );

routes.delete('/ongs/:id', OngController.delete );

routes.post('/incidents', IncidentController.create );

routes.get('/incidents', IncidentController.index );

routes.delete('/incidents/:id', IncidentController.delete );

routes.get('/profile', ProfileController.index );

module.exports = routes;