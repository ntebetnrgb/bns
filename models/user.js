var db = require("../dbConnection");
var user = {

    login:function(item,callback){
        return db.query("select emailId,password from bns_users where emailId=? and password=?",[item.emailId,item.password],callback);
    },

  

    signUp: function(item,callback) {
        return db.query(
          "insert into bns_users values(?,?,?,?,?,?,?)",
          [
            item.id,
            item.firstname,
            item.lastname,
            item.emailId,
            item.contactno,
            item.password,
            item.created_Date
          ],
          callback
        );
      },

   getUserEmail:function(item,callback)
  {
    console.log(item.username);
    return db.query(
      "select emailId from bns_users where emailId=?",[item.emailId],callback
    );
  },

      changePassword: function(id, item, callback) {
        return db.query(
            "update bns_users set password=? where id=? ",
          [
            item.password,
            id
          ],
          callback
        );
      },

      getUserById: function(id, callback) {
        return db.query(
          "select id,firstname,lastname,emailId,contactno,password,created_Date from bns_users where id=?",
          [id],
          callback
        );
      },

      getAllUser: function(callback) {
        return db.query("select id,firstname,lastname,emailId,contactno,password,created_Date from bns_users", callback);
      },

      noOfHotel: function(callback) {
        return db.query(
          "select count(hotel_id) as NumberOfHotels FROM bns_hotels",
          callback
        );
      }

};
module.exports = user;