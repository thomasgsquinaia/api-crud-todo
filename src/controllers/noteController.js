const sqlFunctions = require("../utils/sql");
const dao = require("../dao/noteDao");
const messages = require("../utils/messages");
module.exports = {
    getNotes: async (req, res, next) => {
        let sql;
        try {
            sql = await sqlFunctions.getConnection();
            const notes = await dao.getNotes(sql);
            return res.status(200).json(notes);
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
            const values = req.body.description;
            const notesInsert = await dao.insertNotes(sql, values);
            return res.status(200).json(notesInsert);
        } catch (error) {
            if (sql) {
                sql.release();
            }
            throw error;
        }
    },
    updateNotes: async (req, res, next) => {
        let sql;
        try {
            sql = await sqlFunctions.getConnection();
            const body = req.body
            console.log(body);
            const updateNotes = await dao.updateNotes(sql, body);
            return res.status(201).json(updateNotes)
        } catch (error) {
            if (sql) {
                sql.release();
            }
            throw error;
        }
    },
    deleteNotes: async (req, res, next) => {
        let sql;
        try {
            sql = await sqlFunctions.getConnection();
            const id = req.body.id;
            const notesDelete = await dao.deleteNotes(sql, id);
            return res.status(200).json(notesDelete);
        } catch (error) {
            if (sql) {
                sql.release();
            }
            throw error;
        }
    },
};
