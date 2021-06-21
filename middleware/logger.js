const logger (res, req, next) {
    console.log(`METHOD: ${req.method}`)
    console.log(`REQUESTS: ${req}`)
}

module.exports = logger; 