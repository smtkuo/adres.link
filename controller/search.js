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
                results['get'] = await bilgisamAdresLink_methods.get(options)
                // results
                options['return'] = "results"
                results['results'] = await bilgisamAdresLink_methods.get(options)

                if(results['results']["data"] != null){
                    options['return'] = "resultsHtml"
                    options['resultData'] = results['results']["data"]
                    results['resultsHtml'] = await bilgisamAdresLink_methods.get(options)
                }
                console.log(results['resultsHtml'])
                
                options['return'] = "resultsHtmlScript"
                results['resultsHtmlScript'] = await bilgisamAdresLink_methods.get(options)
                
                
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