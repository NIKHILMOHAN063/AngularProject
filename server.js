var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist/MyAngularProject'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
    console.log('index');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("http://localhost:"+PORT));

//E:\wd\AngularProject\dist\MyAngularProject\index.html