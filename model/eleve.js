const mongoose = require('mongoose');

const EleveSchema = new mongoose.Schema({
    id: Number,
    name: String
});
mongoose.model('Eleve', EleveSchema);

module.exports = mongoose.model('Eleve');