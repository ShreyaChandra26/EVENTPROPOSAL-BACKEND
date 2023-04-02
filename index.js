const express=require('express')
const app=express()
const cors = require('cors');
const PORT=8080;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
        );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
        );
    next();
});



require("./connection/connection")
require("./schemas/user")
require("./schemas/vendor")
require("./schemas/proposal")

app.use(express.json())
app.use(require("./routes/users"))
app.use(require("./routes/vendors"))
app.use(require("./routes/event"))

app.listen(PORT, ()=>{
    console.log("server starting on port "+ PORT)
})
