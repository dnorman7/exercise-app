const Diet = require('../models/diet');

module.exports = {
  get,
  add,
  edit,
  remove,
  getById
};

async function get(req, res) {
    await Diet.find({userId:req.user._id})
    .then((diets)=>{
        res.json(diets);
    }).catch((err)=>{
        res.status(500).json({ err });
    })
}

async function getById(req, res) {
    await Diet.findOne({_id:req.params.id})
    .then((diet)=>{
        res.json(diet);
    }).catch((err)=>{
        res.status(500).json({ err });
    })
}

async function add(req, res) {
    const diet = new Diet();
    diet.userId = req.user._id;
    diet.breakfast = req.body.breakfast;
    diet.lunch = req.body.lunch;
    diet.dinner = req.body.dinner;
    diet.save()
      .then((result) => {
          res.json({ message: 'Diet Added!' });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
}

async function edit(req, res) {
  await Diet.findOneAndUpdate({_id:req.body._id},req.body)
    .then((result)=>{
        console.log(req.body)
        console.log(result)
        res.json({ message: 'Diet Modified!' });
    }).catch((err)=>{
        res.status(500).json({ err });
    })
}

async function remove(req, res) {
  await Diet.findOneAndDelete({_id:req.body._id})
    .then((result)=>{
        res.json({ message: 'Diet Deleted!' });
    }).catch((err)=>{
        res.status(500).json({ err });
    })
}