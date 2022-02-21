
const Service = require('./service');

async function getTasks (req, res) {
    try {
        let svc = new Service();
        let result = await svc.getTasks();
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
}   

async function getTask (req, res) {    
    try {
        let svc = new Service();
        let result = await svc.getTask(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
}

async function addTask(req, res) {
    try {
        let svc = new Service();
        let result = await svc.addTask(req.body);
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
}

async function updateTask(req, res) {
    try {
        let svc = new Service();
        let result = await svc.updateTask(req.body)
        return res.json(result);        
    } catch (error) {
        return res.json(error);
    }
}

async function deleteTask(req, res) {
    try {
        let svc = new Service();
        let result = await svc.deleteTask(req.body)
        return res.json(result);
    } catch (error) {
        return res.json(error);
    }
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }