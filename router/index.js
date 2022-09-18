exports.home =  async function(req, res){
    var controller = require('../controller/home');
    var methods = new controller();
    var data = await methods.get({req:req,res:res});
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
exports.search =  async function(req, res){
    var controller = require('../controller/search');
    var methods = new controller();
    var data = await methods.get({req:req,res:res});
    var settings = require('../settings');
    var settingsMethods = new settings({controller:data});

    res.render('./pages/search', settingsMethods.get, (err, html) => {
        if(err) {
            res.status(500).send('')
        } else {
            res.send(html);
        }
    })
};

