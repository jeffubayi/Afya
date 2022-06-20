const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Wrong Prescription', 'Opened Late', 'Bad receipts',"Late check-in","delay in lab"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
