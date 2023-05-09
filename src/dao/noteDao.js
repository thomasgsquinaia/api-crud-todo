const { getDateToday } = require("../utils/date");
module.exports = {
    getNotes: (sql) => {
        return new Promise((resolve, reject) => {
            sql.query(`SELECT description FROM notes`, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
    insertNotes: (sql,values) => {
        return new Promise((resolve, reject) => {
            sql.query(
                `INSERT INTO notes (description) VALUES (?)`, [values],  (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
};
