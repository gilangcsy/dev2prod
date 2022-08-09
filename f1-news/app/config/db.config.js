module.exports = {
    HOST: 'db', //192.168.144.4
    USER: 'postgres',
    PASSWORD: 'postgres',
    DB: 'f1-news',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: "+07:00",
    V1: '/api/v1',
}