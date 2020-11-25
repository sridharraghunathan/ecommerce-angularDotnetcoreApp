using System;
using API.Controllers;

namespace API.Errors
{
    public class ApiResponse  
    {
        public ApiResponse(int statusCode, string message = null)
        {
             Status  = statusCode;
             Message = message ?? GetMessage(statusCode);
        }
        
        public  int Status  { get; set;}
        public  string Message {get; set;}

        private string GetMessage(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad Request have been made.",
                401 => "You are not authorized to perform this action.",
                404 => "Page not found",
                500 => "Internal Server Error, Please contact your system administrator",
                _ => "Unknown Error Occurred, Please contact your system administrator"
            };
        }
    }
}
