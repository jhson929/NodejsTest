const express = require('express');
const db = require('../db');

const userRouter = express.Router();

userRouter.post("/sign_up", (req, res, next) => {
    const param = [req.body.id, req.body.pwd, req.body.nickname];

    db.query('INSERT INTO user(`id`, `pwd`, `nickname` VALUES (?,?,?)', param, (err, row) => {
        if(err) console.log(err);
    })

    res.end();
})

