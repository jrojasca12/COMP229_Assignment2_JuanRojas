var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/services');

router.get('/', serviceController.getAll);
router.post('/', serviceController.add);
router.get('/:id', serviceController.getById);
router.put('/:id', serviceController.update);
router.delete('/:id', serviceController.delete);

module.exports = router;