class ApiError extends Error {
   status;
   errors;

   constructor(status, message, errors = []) {
      super();
      this.status = status
      this.message = message
      this.errors = errors
   }

   static badRequest(message, errors = []) {
      return new ApiError(404,message,errors)
   }

   static internal(message) {
      return new ApiError(500, message)
   }

}

module.exports = ApiError