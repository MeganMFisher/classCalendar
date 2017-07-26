module.exports = {

    postBasic: (req, res) => {
        req.app.get('db').postBasic(req.body.name).then((response) => {
            res.send('B Added')
        })
    },

    postAdvanced: (req, res) => {
        req.app.get('db').postAdvanced(req.body.name).then((response) => {
            res.send('A Added')
        })
    },

    getBasic: (req, res) => {
        req.app.get('db').getBasic().then((response) => {
            res.send(response)
        })
    },

    getAdvanced: (req, res) => {
        req.app.get('db').getAdvanced().then((response) => {
            res.send(response)
        })
    },
    
    getEvents: (req, res) => {
        req.app.get('db').getEvents().then((response) => {
            res.send(response)
        })
    },

    getTodos: (req, res) => {
        req.app.get('db').getTodos().then((response) => {
            res.send(response)
        })
    },

    getGoals: (req, res) => {
        req.app.get('db').getGoals().then((response) => {
            res.send(response)
        })
    },

    addEvent: (req, res) => {
        var params = [
            req.body.title,
            req.body.description,
            req.body.start_time,
            req.body.end_time
        ]
        req.app.get('db').addEvent(params).then((response) => {
            res.send('Event Added')
        })
    },

    addTodo: (req, res) => {
        var params = [
            req.body.mentorID,
            req.body.todo
        ]
        req.app.get('db').addTodo(params).then((response) => {
            res.send('Todo Added')
        })
    },

    addGoal: (req, res) => {
        var params = [
            req.body.mentorID,
            req.body.goal
        ]
        req.app.get('db').addGoal(params).then((response) => {
            res.send('Goal Added')
        })
    },

}