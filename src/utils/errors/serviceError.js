const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'something went wrong',
        explanation = 'service layer error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(message); 
        this.name = 'ServiceError';
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = ServiceError;
