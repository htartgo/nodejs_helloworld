const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Hello world received a request.");

    res.send(
        JSON.stringify({
            // 查看所有的 headers
            headers: req.headers,
            // 获取用户的 openid
            // 此处使用小写访问是因为 node 中的 req.headers 默认转成了小写，原 header 输入是大写的
            openid: req.headers["x-wx-openid"],
            // 获取用户的 unionid（如果满足 unionid 获取条件）
            unionid: req.headers["x-wx-unionid"],
        })
    );
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('Hello world listening on port', port);
});