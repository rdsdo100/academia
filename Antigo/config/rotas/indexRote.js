const express = require("express")
const router = express.Router()
const aluno = require('../../controller/AlunoTeste')


router.get ('/aluno' ,  aluno.get  )
router.get ('/aluno/:id' ,  aluno.getId  )


router.post('/aluno' , aluno.post)



module.exports = router;