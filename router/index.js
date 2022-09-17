exports.home =  function(req, res){
    var controller = require('../controller/home');
    var methods = new controller();
    var data = methods.get({req:req,res:res});
    var settings = require('../settings');
    var settingsMethods = new settings({controller:data});

    res.render('./pages/index', settingsMethods.get, (err, html) => {
        if(err) {
            res.status(500).send('')
        } else {
            res.send(html);
        }
    })
};
exports.search =  function(req, res){
    var controller = require('../controller/home');
    var methods = new controller();
    var data = methods.get({req:req,res:res});
    var settings = require('../settings');
    var settingsMethods = new settings({controller:data});

    res.render('./pages/index', settingsMethods.get, (err, html) => {
        if(err) {
            res.status(500).send('')
        } else {
            res.send(html);
        }
    })
};

