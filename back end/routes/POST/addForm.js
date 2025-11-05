import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { db } from "../../config/firebase.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/forms", async (req, res) => {
    try {
        console.log(req.body)
        const forms = req.body

        // const docRef = await db.collection("forms").add(forms);

    } catch (error) {
        console.error("Erro ao enviar formulário:", error);

    
        res.status(500).json({ error: "Erro interno ao formulário" });
    }
});

export default router;