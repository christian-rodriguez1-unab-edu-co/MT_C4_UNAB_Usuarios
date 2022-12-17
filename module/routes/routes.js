const express=require('express')
const router=express.Router()
const usuariosController=require('../controllers/usuariosControler')

module.exports=()=>{
    //llamado get users
    router.get('/users',usuariosController.list)

    //llamado post users
    router.post('/users',usuariosController.add)

    //llamado put users
    router.put('/users/:id',usuariosController.update)

    
    //llamado delete users
    router.delete('/users/:id',usuariosController.delete)

    //validar  Token
    router.post('/token/:id',usuariosController.tokenval)


    //llamado post login
    router.post('/login',usuariosController.login)




    return router

}


    