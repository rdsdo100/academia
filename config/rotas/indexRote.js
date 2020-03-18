const express = require("express")
const router = express.Router()
const aluno = require('../../controller/Aluno')


router.get('/aluno' ,  aluno.get  )



module.exports = router;