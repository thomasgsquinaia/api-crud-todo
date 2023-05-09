const connect = require("../config/database");
const mysql =require("mysql2");
const conn = mysql.createPool(connect);


module.exports = {
    getConnection: () => {
        return new Promise((resolve, reject) => {
            conn.getConnection((err, sql) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(sql);
                }
            });
        });
    },
};
