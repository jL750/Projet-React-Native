//routes/produits.js
 
const express = require('express');
const router = express.Router();
const Listproduits = require('../models/Produit');
 
// GET : récupérer tous les produits
router.get('/', async (req, res) => {
  try {
    const produits = await Listproduits.find();
    res.json(produits);//renvoie les produits au client sous forme de JSON.
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
 
module.exports = router;