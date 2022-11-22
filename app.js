const express = require('express');

const app = express();
const port = 3000;
// const db = require('./db');

// 뷰 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

// 메인 페이지
app.get("/", (req, res) => {
    res.render('main');
});

// 회원가입
app.get("/sign_up", (req, res) => {
    res.render('sign_up');
});

app.post("/sign_up", (req, res, next) => {
    console.log(req.body);
    res.end();
})

// 서버 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
