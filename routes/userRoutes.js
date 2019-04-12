var express = require("express");
var router = express.Router();
var user = require("../models/user");

router.get("/", function(req, res, next) {
    user.getAllUser(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.post('/',function(req,res,next){
    user.getUserEmail(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
  });

  router.get("/:id", function(req, res, next) {
    user.getUserById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

router.post('/',function(req,res,next){
    user.login(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
  });

  router.post("/", function(req, res, next) {
    user.signUp(req.body, function(err, rows) {
      console.log(req.body);
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.put("/:id", function(req, res, next) {
    hotel.changePassword(req.params.id, req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

module.exports = router;
