const express=require('express')
const {db}  = require('./db/models')

const app = express()
 
//const {db}=require('./src/db/models')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


db.sync({force:true}).then(()=>{
    app.listen(7777,()=>{
        console.log('server started on http://localhost:5555')
    })
})
.catch((err)=>{
    console.log(err)
})

