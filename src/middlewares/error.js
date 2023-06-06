import HandlerErr from HandlerErr;

const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error";

    // I have no idea how this works but the code doesn't function without it

    if (err.name === "CastError") {
        const message = `Resource not found - (invalid: ${err.path})`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default errorMiddleware