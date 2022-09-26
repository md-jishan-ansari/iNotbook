class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        console.log("I am in appError");

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;