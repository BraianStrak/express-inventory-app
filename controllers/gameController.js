var Game = require('../models/game');
var Genre = require('../models/genre');
var async = require('async');

exports.index = function(req, res) {
    async.parallel({
        game_count: function(callback) {
            Game.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Game Home', error: err, data: results });
    });
};

// Display list of all games.
exports.game_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Game list');
};

// Display detail page for a specific game.
exports.game_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id);
};

// Display game create form on GET.
exports.game_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Game create GET');
};

// Handle game create on POST.
exports.game_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Game create POST');
};

// Display game delete form on GET.
exports.game_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Game delete GET');
};

// Handle game delete on POST.
exports.game_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Game delete POST');
};

// Display game update form on GET.
exports.game_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Game update GET');
};

// Handle game update on POST.
exports.game_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Game update POST');
};