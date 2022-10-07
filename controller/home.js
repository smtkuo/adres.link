module.exports = function (options = {}) {
    this.get = async function(options={}){
        try {
            const bilgisam = require('bilgisam-projects')
            var methods = new bilgisam()
            var bilgisamAdresLink = methods.get({
                project: "./Projects/AdresLink/controller/home"
            })
            var mapScript = methods.get({
                project: "./Projects/AdresLink/helpers/mapScript"
            })

            var results = {}
            
            options['return'] = "script"
            results['map_script'] = await (new mapScript()).get({return : 'script'})
            
            return results;
        } catch (e) {
            console.log(e.message)
            return {error: e.message}
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
            return bilgisamAdresLink_methods.set(options)
        } catch (e) {
            return {error: e.message}
        }
    }
}