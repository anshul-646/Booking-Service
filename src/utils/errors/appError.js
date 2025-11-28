class AppError extends Error {
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        explanation = 'An unexpected error occurred',
        statusCode = 500
    ) {
        super(message);
        this.name = name;
        this.explanation = explanation;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }
}

module.exports = AppError;
