var express = require('express');
var router = express.Router();

var referenceController = require('../controllers/references');

router.get('/', referenceController.getAll);
router.post('/', referenceController.add);
router.get('/:id', referenceController.getById);
router.put('/:id', referenceController.update);
router.delete('/:id', referenceController.delete);

module.exports = router;