// const express = require('express')
// const config = require('config')
// const fileUpload = require('express-fileupload')
// const routes = require('./routes')
// const cors = require('cors')


// const app = express()
// const PORT = config.get("serverPort")

// app.use(cors())
// app.use(fileUpload({}))
// app.use(express.json())
// app.use(express.static('static'))

// app.use('/auth', routes.auth)
// app.use('/files', routes.files)

// const start = () => {
//     try {
//         app.listen(PORT, () => console.log(`Старт сервера на порту ${PORT}`))
//     } catch (e) {
//         console.log(e)
//     }
// }

// start()

const express = require('express')
const sql = require('./sql.js')
const app = express()
const port = 3001

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  sql.get()
  .then(response => {
      console.log(res)
      res.status(200).send(response)
  })
  .catch(error => {
      console.log(error);
      res.status(500).send(error);
  })
  ;
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})