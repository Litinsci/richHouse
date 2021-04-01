const knex = require("../db");

async function findeUser(login){
    let result = await knex.select("*").from('Users');
    for (const rowDB of result) {
        console.log(status);
        if (rowDB.login == login) {
            return login;
        }
    }
    
}

module.exports = findeUser;