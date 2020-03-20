const express = require("express")
const router = express.Router()
const aluno = require('../../controller/Aluno')


router.get ('/aluno' ,  aluno.get  )
router.get ('/aluno/:id' ,  aluno.getId  )
/*
router.post('/aluno' ,   )
router.delete('/aluno' ,    )
router.update('/aluno' ,    )
*/




module.exports = router;