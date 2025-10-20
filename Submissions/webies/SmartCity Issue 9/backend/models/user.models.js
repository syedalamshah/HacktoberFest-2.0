const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:   { type: String, required: true },
  email:      { type: String, required: true, unique: true },
  password:   { type: String, required: true },
  role:       { type: String, enum: ['user', 'admin'], default: 'user' },

  reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Incident' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
