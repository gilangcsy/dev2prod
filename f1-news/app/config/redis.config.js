const redis = require('redis')

const redisClient = redis.createClient({
    socket: {
        host: 'test-redis',
        port: 6379
    }
})

module.exports = {
    client: redisClient
}