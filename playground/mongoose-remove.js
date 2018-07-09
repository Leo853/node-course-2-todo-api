const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findOneAndRemove({_id: '5b43cd1c7d7be81eb345f990'}).then((todo) => {
  console.log(todo);
})


Todo.findByIdAndRemove('5b43cd1c7d7be81eb345f990').then((todo) => {
  console.log(todo);
})
