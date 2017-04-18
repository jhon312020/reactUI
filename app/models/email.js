
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Email schema
 */

var EmailSchema = new Schema({
  to: { type: String, required:[true, 'To address is required'] },
  cc: { type: String, default: '' },
  bcc: { type: String, default: '' },
  from: { type: String, required:[true, 'From address is required'] },
  subject: { type: String,required:[true, 'Subject is required'] },
  content: { type: String, required:[true, 'Content is required'] },
  created: { type: Date, default: Date.now }
});


/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

EmailSchema.method({

});

/**
 * Statics
 */

EmailSchema.static({

});

/**
 * Register
 */

mongoose.model('emails', EmailSchema);
