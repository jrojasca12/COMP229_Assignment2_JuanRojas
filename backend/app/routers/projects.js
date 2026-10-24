var express = require('express');
var router = express.Router();

var projectController = require('../controllers/projects');

router.get('/', projectController.getAll);
router.post('/', projectController.add);
router.get('/:id', projectController.getById);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.delete);

module.exports = router;