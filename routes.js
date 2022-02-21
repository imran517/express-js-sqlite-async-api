const controller = require('./controller')

const routes = async function (app){
    app.get('/getTasks', controller.getTasks);
    app.get('/getTask/:id', controller.getTask);

    app.post('/addTask', controller.addTask);
    app.post('/updateTask', controller.updateTask);
    app.post('/deleteTask', controller.deleteTask);
}

module.exports = routes;