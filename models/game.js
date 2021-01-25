var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GameSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    noInStock: {type: Number, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

// Virtual for book's URL
GameSchema
.virtual('url')
.get(function () {
  return '/catalog/game/' + this._id;
});

//Export model
module.exports = mongoose.model('Game', GameSchema);