const { client } = require('../config/redis.config')

verifyCache = async (req, res, next) => {
    try {
        let key = req.headers['cache-key'];
    
        const value = await client.get('all-news')

        if(value !== null)
            res.status(200).json({
                success: true,
                cached: true,
                data: JSON.parse(value)
            })
        else
            next()
    } catch (err) {
        console.log(err)
    }
}

const cacheRedis = {
    verifyCache: verifyCache
}

module.exports = cacheRedis;