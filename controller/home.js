module.exports = function (options = {}) {
    this.get = function(options={}){
            try {
                const bilgisam = require('bilgisam-projects')
                var methods = new bilgisam()
                var bilgisamAdresLink = methods.get({
                    project: "./Projects/AdresLink/controller/home"
                })
                var bilgisamAdresLink_methods = new bilgisamAdresLink();
                return bilgisamAdresLink_methods.get(options)
            } catch (e) {
                return e.message;
            }
    }

    this.set = function(options={}){
        try {
            const bilgisam = require('bilgisam-projects')
            var methods = new bilgisam()
            var bilgisamAdresLink = methods.get({
                project: "./Projects/AdresLink/controller/home"
            })
            var bilgisamAdresLink_methods = new bilgisamAdresLink();
            return bilgisamAdresLink_methods.get(options)
        } catch (e) {
            return e.message;
        }
    }
}