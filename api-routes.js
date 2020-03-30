// Import contact controller
var contactController = require('./contactController');
let router = require('express').Router();

router.route('/contacts')
    .get(contactController.view)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.index);

module.exports=router;