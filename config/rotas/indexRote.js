const express = require("express")
const router = express.Router()


router.get('/' , (req, res, next)=>{


    console.log('aqui')

    res.status(200).send({
        title: 'academia' ,
        versao: '0.00.1'
        }

    )


} )

module.exports = router;