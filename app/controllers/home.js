var mongoose = require('mongoose');
require('../models/email.js');

var Emails = mongoose.model('emails');
var currentUserEmail = 'jr@proisc.com';

/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  Emails.find({to:currentUserEmail}).then(function(doc){
    res.render('home/index', {
      title: 'Inbox',
      inboxes : doc
    });
  });
};

exports.sentMail = function (req, res) {
  Emails.find({from:currentUserEmail}).then(function(doc){
    res.render('home/index', {
      title: 'Sent Mail',
      inboxes : doc
    });
  });
};

exports.compose = function (req, res) {
  errors = [];
  if(req.session.errors) {
    for (keys in req.session.errors.errors) {
      errors.push(req.session.errors.errors[keys]['message']);
    }
    req.session.errors = [];
  }
  res.render('home/Compose', {
    title: 'compose',
    errors: errors
  });
};

exports.sendEmail = function (req, res) {
  var item = {
    from: req.body.from,
    to : req.body.to,
    cc : req.body.cc,
    bcc : req.body.bcc,
    subject : req.body.subject,
    content : req.body.content,
    attachment : true
  };
  var record = new Emails(item);
  err = record.validateSync();
  if(err) {
    req.session.errors = err;
    return res.redirect('/compose');
  } else {
    record.save(function(err){
      console.log('inserted successfully');
      res.redirect('/');
    });
  }
};

exports.getUserMailCount = function (req, res) {
  var data = {inboxCount:0,sentMailCount:0};
  Emails.count({to:currentUserEmail}, function(err,count){
    data.inboxCount= count;
    Emails.count({from:currentUserEmail}, function(err,count){
      data.sentMailCount= count;
      return res.json(data);
    });
  });
};

exports.singleMailBox = function (req, res) {
  Emails.findById(req.params.id, function(err,result){
    res.render('home/singleMailBox', {
      title: 'View Message',
      mailData: result
    });
  });
}
