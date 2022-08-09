const db = require('../models/index.model')
const News = db.news
const { client } = require('../config/redis.config')

module.exports = {
    async read(req, res, next) {
        try {
            const news = await News.findAll()

            //This data will expire in one hour.
            client.setEx("all-news", 3600, JSON.stringify(news))
            const value = await client.get('all-news')

            res.status(200).json({
                success: true,
                data: value
            })
        } catch (err) {
            next(err)
        }
    }
}