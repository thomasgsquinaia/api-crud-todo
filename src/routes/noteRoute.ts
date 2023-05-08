import express from "express";
const router = express.Router();
const controller = require("../controllers/noteController");

router.get("/", controller.getNotes); //lista todas as notas  => C
router.post("/insertNotes", controller.insertNotes); //adiciona nota na lista  => R
router.put("/updateNotes/:id", controller.updateNotes); //editar notas da lista => U
router.delete("/deleteNotes/:id", controller.deleteNotes); //deleta notas da lista => D
