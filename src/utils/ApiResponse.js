



class ApiResponse {
    constructor(
        statusCode, data, message="Success"
    ){
        this.statusCode = statusCode
        this.data= data
        this.message = message
        this.success = statusCode < 400   // check status code below 400
    }
}
export {ApiResponse}