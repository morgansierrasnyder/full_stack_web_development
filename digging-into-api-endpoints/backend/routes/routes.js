const express = require('express')
const router = express.Router()
const DinnerSchema = require('../models/Dinner.js')
const MealSchema = require('../models/Meal.js')

router.get('/', (req, res) => {
    DinnerSchema.find(req.query)
    //'then' happens if find is succesful
    .then(dinners => {
      console.log("succesfully got entire db!")
      console.log(dinners)
      res.json(dinners)
    })
    //if theres an error, 'catch' happens instead
    .catch(err => {
      console.error(err) 
      res.json(err)
    })
})

router.get('/getDinner', (req, res) => {
  MealSchema.find(req.query)
  //'then' happens if find is succesful
  .then(meals => {
    console.log("succesfully got entire db!")
    console.log(meals)
    res.json(meals)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err) 
    res.json(err)
  })
})

//we will be using the '/add' to do a POST request
router.post('/add', (req, res) => {
  DinnerSchema.create(req.body)
    .then(dinner => {
      console.log(dinner)
      res.send(dinner)
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})
router.post('/add/dinner', (req, res) => {
  MealSchema.create(req.body) 
    .then(meal => {
      console.log(meal)
      res.send(meal)
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})

router.put('/:id', (req, res) => {
    DinnerSchema.findByIdAndUpdate(req.params.id, req.body)
      .then(updated => {
        // returns the previously saved model
        res.send(updated)
      })
      .catch(err => {
        res.json(err)
      })
})
router.put('/:id/dinner', (req, res) => {
  MealSchema.findByIdAndUpdate(req.params.id, req.body)
    .then(updated => {
      // returns the previously saved model
      res.send(updated)
    })
    .catch(err => {
      res.json(err)
    })
})

router.delete('/:id', (req, res) => {
  DinnerSchema.findByIdAndDelete(req.params.id)
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.json(err)
  })
})
router.delete('/:id/dinner', (req, res) => {
  MealSchema.findByIdAndDelete(req.params.id)
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router
