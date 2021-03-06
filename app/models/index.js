const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.use = require('./user.model');
db.role = require('./role.model');

db.ROLES = ['user', 'admin'];

module.exports = db;