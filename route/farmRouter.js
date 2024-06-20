const express = require("express");
const { register, getAll, getOne, getAllMatured, getAllSold, getAllYetToBeSold, deleteAnimal } = require('../controller/farmController');

const router = express.Router();

router.post('/register-animal', register);
router.get('/all-animals', getAll);
router.get('/animal/:id', getOne);
router.get('/matured-animals', getAllMatured);
router.get('/sold-animals', getAllSold);
router.get('/yet-to-be-sold-animals', getAllYetToBeSold);
router.delete('/animal/:id', deleteAnimal);

module.exports = router;


// const express = require("express");
// const { register, getAll, getOne } = require('../controller/farmController');

// const router = express.Router();

// router.post('/register-animal', register);

// router.get('/all-animals', getAll);

// router.get('/animal/:id', getOne);

// module.exports = router

