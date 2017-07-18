module.exports = {
    
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
        console.log(req.body)
        var params = [
            req.body.title,
            req.body.description,
            toString(req.body.startTime),
            toString(req.body.endTime)
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