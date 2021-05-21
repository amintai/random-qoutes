var data = require('./data')
function getQoute(){
    var random = Math.random()
    var res = Math.floor(random*100)
    if(res > 56 ) res = res - 56
    console.log(data[res])
    return data[res]
}

module.exports = {
    getQoute : getQoute
}

