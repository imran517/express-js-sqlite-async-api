const model = require('./model');
const dbContext = require('./dbContext');

class Service {
    constructor () { 
        this.service = "Service";
        this.method = "";
    }

    async getTasks () {     
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "select * from task";
            let params = [];
            dbContext.db.all(query, params, function(error, result)  {
                if(error){
                    let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                    console.error(serviceResult);
                    reject(serviceResult);
                }
                else {
                    let serviceResult  = { status:"success", message: "Tasks retrieved.",service: this.service, method: this.method, data: result };
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
            dbContext.db.get(query, params, function(error, result)  {
                if(error){
                    let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                    console.error(serviceResult);
                    reject(serviceResult);
                }
                else {
                    let serviceResult  = { status:"success", message: "Task retrieved.", service: this.service, method: this.method, data: result };
                    console.log(serviceResult); 
                    resolve(serviceResult); 
                }
            });
        }); 
    }

    async addTask (task) {
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "insert into task (id, name, description, status, priority) values (?,?,?,?,?)";
            let params = [task.id, task.name, task.description, task.status, task.priority];
            dbContext.db.run(query, params, function(error, result)  {
                if(error){
                    let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                    console.error(serviceResult);
                    reject(serviceResult);
                }
                else {
                    let serviceResult  = { status:"success", message: "Task added.", service: this.service, method: this.method, data: result };
                    console.log(serviceResult);
                    resolve(serviceResult); 
                }
            });
        }); 
    }

    async updateTask (task) {
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "update task set name = ?, description = ?, status = ?, priority = ? where id = ?";
            let params = [task.name, task.description, task.status, task.priority, task.id];
            dbContext.db.run(query, params, function(error, result)  {
                if(error){
                    let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                    console.error(serviceResult);
                    reject(serviceResult);
                }
                else {
                    let serviceResult  = { status:"success", message: "Task updated.", service: this.service, method: this.method, data: result };
                    console.log(serviceResult);
                    resolve(serviceResult); 
                }
            });
        }); 
    }
    
    async deleteTask (task) {
        return new Promise (async (resolve, reject) => {
            await dbContext.connect();
            let query = "delete from task where id = ?";
            let params = [task.id];
            dbContext.db.run(query, params, function(error, result)  {
                if(error){
                    let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
                    console.error(serviceResult);
                    reject(serviceResult);
                }
                else {
                    let serviceResult  = { status:"success", message: "Task deleted.", service: this.service, method: this.method, data: result };
                    console.log(serviceResult);
                    resolve(serviceResult); 
                }
            });
        }); 
    }
}

module.exports = Service;
