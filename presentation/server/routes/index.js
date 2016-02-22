module.exports = function(app) {
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get('/api/maa', getMaa);
    app.get('/api/mam', getMam); // motto

    function getMaa(req, res, next) {
        var json = jsonfileservice.getJsonFromFile('/../../data/maa.json');
        json[0].data.results.forEach(function(character) {
            var pos = character.name.indexOf('(MAA)');
            character.name = character.name.substr(0, pos - 1);
        });
        res.send(json);
    }

    function getMam(req, res, next) {
        var json = jsonfileservice.getJsonFromFile('/../../data/mam.json');
        res.send(json);
    }
};