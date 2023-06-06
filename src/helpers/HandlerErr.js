class HandlerErr extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export { HandlerErr as default };
  