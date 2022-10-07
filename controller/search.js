module.exports = function (options = {}) {
    this.get = async function(options={}){
            try {
                const bilgisam = require('bilgisam-projects')
                var methods = new bilgisam()
                var bilgisamAdresLink = methods.get({
                    project: "./Projects/AdresLink/controller/search"
                })
                var bilgisamAdresLink_methods = new bilgisamAdresLink();
                var results = {}
                // get
                results['get'] = await (new bilgisamAdresLink()).get(options)
                // results
                options['return'] = "results"
                results['results'] = await (new bilgisamAdresLink()).get(options)

                if(results['results']["data"] != null){
                    options['return'] = "resultsHtml"
                    options['resultData'] = results['results']["data"]
                    results['resultsHtml'] = await (new bilgisamAdresLink()).get(options)
                }
                
                // GET MAP SCRIPT
                var mapScript = methods.get({
                    project: "./Projects/AdresLink/helpers/mapScript"
                })
                results['map_script'] = await (new mapScript()).get({return : 'script'})
                
                
                return results
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
                project: "./Projects/AdresLink/controller/search"
            })
            var bilgisamAdresLink_methods = new bilgisamAdresLink();
            return bilgisamAdresLink_methods.set(options)
        } catch (e) {
            return {error: e.message}
        }
    }
}