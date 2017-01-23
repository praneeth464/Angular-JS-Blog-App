var config = {

    server: {
        port: process.env.PORT || 8000,
        hostname: 'localhost',
    },
    database: {
        url: 'mongodb://localhost:27017/angular-blog'
    },
    jwtSecret: 'g4b34hbntr4hd39053/3uk'

}

module.exports = config;
