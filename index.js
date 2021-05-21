
function getQoute(){
    var random = Math.random()
    var res = Math.floor(random*100)
    if(res > 10 ) 
        res = res - 10
    return data[res]
}
module.exports = {
    getQoute : getQoute
}

