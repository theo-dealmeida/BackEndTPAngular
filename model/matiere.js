const mongoose = require('mongoose');

const MatiereSchema = new mongoose.Schema({
    id: Number,
    name: String,
    imageMatiere: String,
    photoProf: String,
});
mongoose.model('Matiere', MatiereSchema);

module.exports = mongoose.model('Matiere');