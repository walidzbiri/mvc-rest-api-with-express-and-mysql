// contactController.js
// Import contact model
Contact = require('./contactModel');

// Handle index actions
exports.view = function (req, res) {
    Contact.getAllContacts(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

// Handle view contact info
exports.index = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

exports.new = function(req, res) {
    var new_contact = new Contact(req.body);
    //handles null error 
     if(!new_contact.name || !new_contact.email || !new_contact.phone || !new_contact.gender){
              res.status(400).send({ error:true, message: 'Please provide more info' });
          }
     else{
        Contact.createContact(new_contact, function(err, task) { 
            if (err)
                res.send(err);
                res.json(task);
            }
        );
    }
};