module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-control-Allow-Headers', 'Origins, X-Requested-With, Content-Type, Accept')
    next()
}