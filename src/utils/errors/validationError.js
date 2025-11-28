const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error {
    constructor(error) {
        const message = 'Not able to validate the data sent in the request';

        super(message);

        this.name = 'ValidationError';
        this.message = message;
        this.explanation = error.errors.map(err => err.message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;
