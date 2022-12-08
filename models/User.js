const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: 'String',
    required: true //, uniqueItems: true --> how would this affect other code?
  },
  password: {
    type: 'String',
    required: true
  },
  name: {
    type: 'String',
    required: true
  },
  role: {
    type: 'String',
    reuired: true
  }
});

// the first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// therefore, in this case, the model we create will be mapped to the "products" collection.
const UserModel = model('user', UserSchema);

module.exports = UserModel;