module.exports = {
    
    getEvents: (req, res) => {
        req.app.get('db').getEvents().then((response) => {
            res.send(response)
        })
    },

    addEvent: (req, res) => {
        var params = [
            req.body.title,
            req.body.description,
            req.body.startTime,
            req.body.endTime
        ]
        req.app.get('db').addEvent(params).then((response) => {
            res.send('Event Added')
        })
    },


}