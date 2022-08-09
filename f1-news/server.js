
const db = require('./app/models/index.model')
const { client } = require('./app/config/redis.config')
const express = require('express')
const app = express()
// 'createClient()' usually takes an URL connection path, or the path of a host to connect to.
// In our case use the name of the service from 'docker-compose.yml', 'test-redis'.
// Redis server itself usually runs on Port '6379'

client.connect()


//Migrasi tabel yang ada dalam setiap model
db.sequelize.sync({ force: false })

// redisClient.set('numVisits', 0);

// GET route
app.get('/', async function(req, res) {
    try {
        const value = await client.get('key')
        res.send(`the value is ${value}`)
    } catch (err) {
        res.status(500).send(err)
    }
})

require('./app/routes/news.routes')(app);

// Listen on Port 5000 in Docker Container (mapped to Local Machine Port 3008)
app.listen(3000, function() {
    console.log('Web app is listening on port 3000')
});
