const model = require('./model');
const dbContext = require('./dbContext');

class Service {
    constructor () { }

    async getTasks () {     
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "select * from task";
            let params = [];
            dbContext.db.all(query, params, function(err, result)  {
                if(err){
                    let msg = `Error fetching tasks!: ${err}`;
                    let serviceResult  = { "status": "failure", method: "getTasks", "data": null, message: msg };
                    console.error(serviceResult);
                    reject(serviceResult);
                }
                else {
                    let msg = "Success adding a task!"
                    let serviceResult  = { "status":"success", method: "getTasks", "data": result, message: msg  };
                    console.log(serviceResult); 
                    resolve(serviceResult);
                }
            });
        });    
    }

    async getTask (id) {
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "select * from task where id = ?";
            let params = [id];
            dbContext.db.get(query, params, function(err, result)  {
                if(err){
                    let msg = `Error fetching a task!: ${err}`;
                    console.error(msg);
                    reject(msg);
                }
                else {
                    console.log(result); 
                    resolve(result);
                }
            });
        }); 
    }

    async addTask (task) {
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "insert into task (id, name, description, status, priority) values (?,?,?,?,?)";
            let params = [task.id, task.name, task.description, task.status, task.priority];
            dbContext.db.run(query, params, function(err, result)  {
                if(err){
                    let msg = `Error adding a task!: ${err}`;
                    console.error(msg);
                    reject(msg);
                }
                else {
                    let msg = { message: "Success adding a task!" }
                    console.log(msg);
                    resolve(msg);
                }
            });
        }); 
    }

    async updateTask (task) {
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "update task set name = ?, description = ?, status = ?, priority = ? where id = ?";
            let params = [task.name, task.description, task.status, task.priority, task.id];
            dbContext.db.run(query, params, function(err, result)  {
                if(err){
                    let msg = `Error updating a task!: ${err}`;
                    console.error(msg);
                    reject(msg);
                }
                else {
                    let msg = { message: "Success updating a task!" }
                    console.log(msg);
                    resolve(msg);
                }
            });
        }); 
    }
    
    async deleteTask (task) {
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "delete from task where id = ?";
            let params = [task.id];
            dbContext.db.run(query, params, function(err, result)  {
                if(err){
                    let msg = `Error deleting a task!: ${err}`;
                    console.error(msg);
                    reject(msg);
                }
                else {
                    let msg = { message: "Success deleting a task!" }
                    console.log(msg);
                    resolve(msg);
                }
            });
        }); 
    }
}

module.exports = Service;
