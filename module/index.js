const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const routes= require('./routes/routes')

const app=express()

mongoose.Promise=global.Promise
mongoose.connect(
    'mongodb+srv://MTC4MarcadoresDeportivosUNAB:xS%5E5j6C19ppI@cluster0.yvgbphz.mongodb.net/MarcadoresDeportivos',
    
    {useNewUrlParser:true,}
)

//mongoose.set('strictQuery', true);

//Habilitar body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())


/*app.get('/',(req,res)=>{
    res.send('Hola Mundo MongoDb')
})*/

app.use('/',routes())


app.listen(9003,()=>{
    console.log('server listen in: 9003')
})