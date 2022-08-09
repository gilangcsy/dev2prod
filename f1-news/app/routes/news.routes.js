const controller = require('../controllers/news.controller')
const API = require('../config/db.config')
const {cacheRedis} = require('../middlewares/index.middleware')

module.exports = app => {

	let router = require('express').Router()
	
	router.get('/', cacheRedis.verifyCache, controller.read)

	app.use(`${API.V1}/news/`, router)
}