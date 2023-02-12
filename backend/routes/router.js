const router = require('express').Router();

// services routes
const serviceRoutes = require('./ServicesRoutes');

router.use('/', serviceRoutes);

// Parties routes
const partiesRoutes = require('./PartiesRoutes');

router.use('/', partiesRoutes);
module.exports = router;
