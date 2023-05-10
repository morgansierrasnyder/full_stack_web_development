// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const RecipeSchema = new Schema({

    ingredients: {
        type: [String],
    },
    time:{
        type: Number,
    },
    dietary: {
        type: String,
        enum: ["regular","vegan"],
        default: "regular"
    }
});


module.exports = mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeSchema;