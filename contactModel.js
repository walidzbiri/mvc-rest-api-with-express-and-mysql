var sql = require('./db.js');

//Contact object constructor
var Contact = function(contact){
    this.name = contact.name;
    this.email = contact.email;
    this.phone = contact.phone;
    this.gender = contact.gender;
};


Contact.getAllContacts = function (result) {
    sql.query("Select * from contacts", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('contacts : ', res);  
             result(null, res);
            }
        });   
};


Contact.findById = function (contactId, result) {
    sql.query("Select * from contacts where id = ? ", contactId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

Contact.createContact = function (newContact, result) {    
    sql.query("INSERT INTO contacts set ?", newContact, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};


module.exports=Contact;