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
let query="UPDATE student SET name='kiru' WHERE name='kiran'"
con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log("inserted")  
})
})