const pool = require('./db.js')

const get = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM test ORDER BY id ASC', (error, results) => {
        // console.log('rrrr', results.rows[0])
        if (error) {
            console.log('eeerrrr')
          reject(error)
        }
        resolve(results.rows[0]);
      })
    }) 
  }
//   const create = (body) => {
//     return new Promise(function(resolve, reject) {
//       const { name, email } = body
//       pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(`A new merchant has been added added: ${results.rows[0]}`)
//       })
//     })
//   }
//   const delete = () => {
//     return new Promise(function(resolve, reject) {
//       const id = parseInt(request.params.id)
//       pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(`Merchant deleted with ID: ${id}`)
//       })
//     })
//   }
  
  module.exports = {
    get,
    // createMerchant,
    // deleteMerchant,
  }