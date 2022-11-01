const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

var con = mysql.createPool({
    host: "localhost",
    user: "sevda",
    password: "password",
    database: "mydb"
});  

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello Express")
})
 
app.get("/createDB", (req,res) => {
    const sqlcreate = `create table if not exists EVC_Seri_No(
        id int primary key auto_increment,
        name_of_the_product VARCHAR(255),
        product_type VARCHAR(255),
        charge_type VARCHAR(255),
        number_of_input_phases INT,
        max_volt INT,
        max_current INT,
        power INT,
        number_of_outputs VARCHAR(255),
        output_type INT,
        payment_method INT,
        version VARCHAR(45),
        year INT,
        week INT, 
        order_number INT
    )`;
    con.query(sqlcreate,(err,result) =>{
        console.log("error",err);
        console.log("result",result);
        res.send("Hello express")
    })
})

app.get("/api/get", (req,res) => {
    const sqlGet = "SELECT * FROM EVC_Seri_No";
    con.query(sqlGet,(error,result) => {
        res.send(result);
    })
})

app.post("/api/post",(req, res) => {
    const {name_of_the_product,product_type,charge_type,
        number_of_input_phases,max_volt,max_current,power,number_of_outputs,
        output_type,payment_method,version,year,week,order_number} = req.body;
    const sqlInsert = ` INSERT INTO EVC_Seri_No (name_of_the_product, 
        product_type,charge_type,number_of_input_phases,max_volt,max_current,power,
        number_of_outputs,output_type,payment_method,version,
        year,week,order_number) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    con.query(sqlInsert,[name_of_the_product,product_type,charge_type,
        number_of_input_phases,max_volt,max_current,power,number_of_outputs,
        output_type,payment_method,version,year,week,order_number],(error,result) =>{
            if(error) {
                console.log(error);
            }
        })
})

app.get("/api/add", (req,res) => {
    const sqlinsert = ` INSERT INTO EVC_Seri_No (name_of_the_product, 
        product_type,charge_type,number_of_input_phases,max_volt,max_current,power,
        number_of_outputs,output_type,payment_method,version,
        year,week,order_number) VALUES 
        ('EVC', 'S', 'D',1,500,200,120,'D',2,1,'V00',22,45,1)
    `
    con.query(sqlinsert,(error,result) => {
        res.send(result);
        console.log("error",error);
        console.log("result",result);
    })
})

// con.connect(function (err) {
//     console.log("Connected!");
//     var sql = "INSERT INTO EVC_Seri_No (name_of_the_product, product_type) VALUES ('EVC', 'S')";
//     con.query(sql, function (err, result) {
//         if(err){
//             console.log(err);
//         }
//         console.log("1 record inserted");
//     });
// });

// con.connect(function (err) {
//     con.query("SELECT name_of_the_product, product_type FROM EVC_Seri_No", function (err, result, fields) {
//         console.log(result,fields);
//     });
// });







app.listen(5005, () => {
    console.log("Server is running on port 5000");
})
