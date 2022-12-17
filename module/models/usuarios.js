const mongoose=require('mongoose')
const Schema=mongoose.Schema

const usuariosSchema = new Schema({
    NombreCompleto: {type:String, Trin:true, lowercase:true},
    Username: {type:String, Trin:true, lowercase:true},
    Password: {type:String, Trin:true, unique:true, lowercase:true},
    Rol: {type:Number},
    Token:{type:String},
    Token_Timestamp:{type:Date},
    Equipos_ID:[{ type: Schema.Types.ObjectId, ref: "equipos" }],
    Deportes_ID:[{ type: Schema.Types.ObjectId, ref: "deportes" }]
})

module.exports=mongoose.model('usuarios',usuariosSchema)