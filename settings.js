module.exports = function(options={}) {
    this.get = {
        meta:{title:"ADRESLINK",description:"Adres Ara Bul"},
        data:{
            env: process.env,
            options: options
        }
    }
}