// thread.route.js

const express = require('express');
const app = express();
const threadRoutes = express.Router();

// Require thread model in our routes module
let Thread = require('../models/Thread');

// Defined store route
threadRoutes.route('/add').post(function (req, res) {
  let thread = new Thread(req.body);
  thread.save()
    .then(thread => {
      res.status(200).json({'thread': 'thread in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
threadRoutes.route('/').get(function (req, res) {
    Thread.find(function (err, threads){
    if(err){
      console.log(err);
    }
    else {
      res.json(threads);
    }
  });
});
// // Defined view route
// threadRoutes.route('/:id').get(function (req, res) {
//   let id = req.params.id;
//   Thread.findById(id, function (err, thread){
//       res.json(thread);
//   });
// });

// // Defined edit route
// threadRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Thread.findById(id, function (err, thread){
//       res.json(thread);
//   });
// });

// //  Defined update route
// threadRoutes.route('/update/:id').post(function (req, res) {
//     Thread.findById(req.params.id, function(err, thread) {
//     // if (!thread)
//     //   return next(new Error('Could not load Document'));
//     // else {
//         thread.thread_title = req.body.thread_title;
//         thread.thread_posts = req.body.thread_posts;

//         thread.save().then(thread => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("Unable to update the database");
//       });
//     //}
//   });
// });

// // Defined delete | remove | destroy route
// threadRoutes.route('/delete/:id').get(function (req, res) {
//     Thread.findByIdAndRemove({_id: req.params.id}, function(err, thread){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = threadRoutes;