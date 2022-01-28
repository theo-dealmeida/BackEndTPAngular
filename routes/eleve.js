let Eleve = require('../model/eleve');

function getEleves(req, res) {
    Eleve.find((err, eleves) => {
        if(err){
            res.send(err)
        }

        res.send(eleves);
    });
}

function getEleve(req, res){
    let eleveId = req.params.id;

    Eleve.findOne({id: eleveId}, (err, eleve) =>{
        if(err){res.send(err)}
        res.json(eleve);
    })
}

function postEleve(req, res){
    let eleve = new Eleve();
    eleve.id = req.body.id;
    eleve.name = req.body.name;

    console.log("POST Eleve reçu :");
    console.log(eleve)

    eleve.save( (err) => {
        if(err){
            res.send('cant post eleve ', err);
        }
        res.json({ message: `${eleve.name} saved!`})
    })
}

function updateEleve(req, res) {
    console.log("UPDATE recu eleve : ");
    console.log(req.body);
    Eleve.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, eleve) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json({message: 'updated'})
        }
    });

}

function deleteEleve(req, res) {

    Eleve.findByIdAndRemove(req.params.id, (err, eleve) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${eleve.nom} deleted`});
    })
}



module.exports = { getEleves, postEleve, getEleve, updateEleve, deleteEleve };
