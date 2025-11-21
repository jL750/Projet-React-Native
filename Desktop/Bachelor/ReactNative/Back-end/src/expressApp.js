const express = require('express');
const cors = require('cors');
const ProduictRoutes = require('./routes/Produits');

const app = express(); //création de l'application express

app.use(cors()); //pour autoriser les requêtes cross-origin
app.use(express.json());  //pour parser le corps des requêtes en JSON

//dis a express "toutes les routes définies dans ProductRoutes doivent via accessibles"
app.use('/api/produits', ProduictRoutes);

module.exports = app; 