module.exports = {
    
    getEvents: (req, res) => {
        req.app.get('db').getEvents().then((response) => {
            res.send(response)
        })
    }
}