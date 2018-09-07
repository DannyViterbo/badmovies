const mysql = require('mysql');
const mysqlConfig = require('../../config.js');
const knex = require('knex')({
    client: 'mysql',
    connection: mysqlConfig,
    pool: { min: 0, max: 7 }
  })


    // connection.connect((err) =>{
    //     if (err) throw (err);
    //     console.log("YOUR CONNECTED BUDDY!!")
    // })


save = (movie) => {
   knex('favorites').insert({id: movie.id})
}

find = () => {
   knex('favorites').select('id').then()
}

module.exports = {
    save
}