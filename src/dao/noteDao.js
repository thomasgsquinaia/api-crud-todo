const { getDateToday } = require("../utils/date");
module.exports = {
    getNotes: (sql) => {
        return new Promise((resolve, reject) => {
            sql.query(`SELECT * FROM notes`, (error, result) => {
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
            sql.query(`INSERT INTO notes (description) VALUES (?)`,  (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    deleteNotes: (sql, id) => {
        return new Promise((resolve, reject) => {
            sql.query(`DELETE FROM notes WHERE id = ?`, [id], (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }
};
