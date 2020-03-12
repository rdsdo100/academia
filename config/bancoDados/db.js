const config  = require('../bancoDados/knexfile')
const  knex = require('knex')(config)

//knex.migrate.latest([config]) // para criar as tabelas Não e uma boa ideia
module.exports = knex