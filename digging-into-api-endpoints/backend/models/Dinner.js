// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {RecipeSchema} = require('./Recipe.js')
 
// create a schema
const DinnerSchema = new Schema({
    date:{
        type: Date,
    },
    meal:{
        type: String,
        enum: ["regular","vegitarian","vegan","gluten-free"],
        default: "regular",
    },
    main:{
        type: String,
        enum: ["chicken","beef","pork","tofu"],
        default:"chicken",
    },

    side: {
        type: RecipeSchema,
        // enum: ["potatoes","salad","veggies","fries"],
        // default:"veggies",
    },
});


module.exports = mongoose.model("Dinner", DinnerSchema);
