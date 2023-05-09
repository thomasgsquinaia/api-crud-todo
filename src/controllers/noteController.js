const sqlFunctions = require("../utils/sql");
const dao = require("../dao/noteDao");
const messages = require('../utils/messages')
module.exports = {
    getNotes: async (req, res, next) => {
        let sql;
        try {
            sql = await sqlFunctions.getConnection();
            const notes = await dao.getNotes(sql);
            return res.status(200).json([notes])
            // messages.success(res, notes);
        } catch (error) {
            if (sql) {
                sql.release();
            }
            throw error;
        }
    },
    insertNotes: async (req, res, next) => {
        let sql;
        try {
            sql = await sqlFunctions.getConnection();
            const values = req.params.description
            console.log(values);
            const notesInsert = await dao.insertNotes(sql,values);
            //return res.status(200).json(notesInsert)
            messages.success(res, notesInsert)
        } catch (error) {
            if (sql) {
                sql.release();
            }
            throw error;
        }
    },
    // updateNotes: async (req, res, next) => {
    //     let sql;
    //     try {
    //         sql = await sqlFunctions.getConnection();
    //         const notes = await dao.getNotes(sql);
    //     } catch (error) {
    //         if (sql) {
    //         }
    //         throw error;
    //     }
    // },
    // deleteNotes: async (req, res, next) => {
    //     let sql;
    //     try {
    //         sql = await sqlFunctions.getConnection();
    //         const notes = await dao.getNotes(sql);
    //     } catch (error) {
    //         if (sql) {
    //         }
    //         throw error;
    //     }
    // },
};
