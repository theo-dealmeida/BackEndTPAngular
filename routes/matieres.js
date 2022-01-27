let Matiere = require('../model/matiere');

function getMatieres(req, res) {
    Matiere.find((err, matieres) => {
        if(err){
            res.send(err)
        }

        res.send(matieres);
    });
}

function getMatiere(req, res){
    let matiereId = req.params.id;

    Matiere.findOne({id: matiereId}, (err, matiere) =>{
        if(err){res.send(err)}
        res.json(matiere);
    })
}

function postMatiere(req, res){
    let matiere = new Matiere();
    matiere.id = req.body.id;
    matiere.name = req.body.name;
    matiere.photoProf = req.body.photoProf;
    matiere.imageMatiere= req.body.imageMatiere;

    console.log("POST Matiere reçu :");
    console.log(matiere)

    matiere.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${matiere.name} saved!`})
    })
}

function updateMatiere(req, res) {
    console.log("UPDATE recu matiere : ");
    console.log(req.body);
    Matiere.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, matiere) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json({message: 'updated'})
        }
    });

}

function deleteMatiere(req, res) {

    Matiere.findByIdAndRemove(req.params.id, (err, matiere) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${matiere.nom} deleted`});
    })
}



module.exports = { getMatieres, postMatiere, getMatiere, updateMatiere, deleteMatiere };
