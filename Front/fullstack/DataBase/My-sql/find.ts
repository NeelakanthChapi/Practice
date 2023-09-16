var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'neel'
})
con.connect((err:any)=>{
    if(err)throw err;
    console.log('db connected')
let query="SELECT * FROM student"
con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log(res)  
})
})