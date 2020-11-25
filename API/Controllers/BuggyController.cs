using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        public StoreContext _context { get; }

        //Injecting the store context using the constructor
        public BuggyController(StoreContext context)
        {
            _context = context;
        }


        [HttpGet("notfound")]
        public   ActionResult GetNotFound(){
            //Data Not Found
           var product = _context.Products.Find(42);
           if(product == null){
               return NotFound(new ApiResponse(404));
           }
           return Ok();
        }

         
        [HttpGet("servererror")]
      public   ActionResult GetServerError(){
            //Null Exception
           var product =    _context.Products.Find(72);
           var productInfo = product.ToString();  
           return Ok();
        }



        [HttpGet("badrequest")]
        public ActionResult GetBadRequest(){
            
            return BadRequest(new ApiResponse(400));
        }

        [HttpGet("badrequest/{id}")]
        public ActionResult GetNotFound(int id){
            return Ok();
        }

    }
}
