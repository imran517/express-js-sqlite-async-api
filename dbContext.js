const sqlite3 = require('sqlite3').verbose()
const config = require('./config');
var db = null;

function connect() {
  return new Promise ((resolve, reject) => {
     this.db = new sqlite3.Database(config.db.name, err => {
        if (err) {
          let msg = `Fatal error occurred: ${err}`;
          console.error(msg);
          reject(msg);
        }   
        else{
          let msg = `Successful connection to the database: ${config.db.name}`;
          console.log(msg);
          resolve(msg);
        }
    });   
  });
}

module.exports = {db, connect} ;






