var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        msg: 'Name should be between 3 and 50 characters'
    })
];

var Team = new Schema({
    members: [{type: Schema.ObjectId, ref: 'Account'}],
    captain: {type: Schema.ObjectId, ref: 'Account'}
});

module.exports = mongoose.model('Team', Team);
