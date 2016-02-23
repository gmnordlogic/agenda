module.exports = function(app) {
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get('/api/maa', getMaa); // get agenda

    function getMaa(req, res, next) {
        var json = jsonfileservice.getJsonFromFile('/../../data/mam.json');
        res.send(json);
    }
};