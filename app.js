require('dotenv').config()
require('./Models/mongoose')

const config = require('./Config/config')
// process.argv[2]  pega a segunda posição do terminal como porta 
const port = process.env.PORT || process.argv[2] || 3000
const app = config.setUpServer()

app.listen(port, () => {
    console.log('[INFO] Listening on port ' + port + '!')
})

