const notFound = (req, res, next) => {
    const error = new Error(`Not Found, -${req.originalUrl} `)
    res.status(404).json({ message: error.message })
    next(error)
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 400;
        message = 'Invalid ObjectId format'
    }

    if(err.name === 'NotFound'){
        statusCode = 404;
        message = 'Resource not found!'
    }

    res.status(statusCode).json({
        message
    })
}

exports.notFound = notFound;
exports.errorHandler = errorHandler;