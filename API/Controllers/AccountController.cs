using API.Dtos;
using API.Errors;
using System.Linq;
using Core.Interfaces;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        //Constructor where we inject the other class 
        // controller intialized the constructor will  be created
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;

        public AccountController(
            UserManager<AppUser> userManager,
        SignInManager<AppUser> signInManager,
         ITokenService tokenService,
         IMapper  mapper)
        {
            _signInManager = signInManager;
            _tokenService  = tokenService;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet ]
        [Authorize] 
        public async Task <ActionResult<UserDto>> GetCurrentUserAsync(){
        var email = HttpContext.User?.Claims?
        .FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
        var  userStatus = await _userManager.FindByEmailAsync(email);
                 return new UserDto {
                    DisplayName = userStatus.DisplayName ,
                    Email = userStatus.Email,
                    Token = _tokenService.CreateToken(userStatus)
                };
        }

        [HttpGet("emailexists")]

        public async Task<bool> EmailIdExists([FromQuery] string email){

            return await _userManager.FindByEmailAsync(email) != null ;
        }

        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDto>> GetUserEmailAddress(){

            /* 
            1) Get the email id from the token
            2) Joining the two table to get the address information
            3) create mapping logic to get the data
            */

            var email = HttpContext.User?.Claims?
                    .FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            // we have added include statemnet since that is separate table.
            var user =  await _userManager.Users.Include(x => x.Address).SingleOrDefaultAsync( x => x.Email == email);
            return _mapper.Map<Address, AddressDto>(user.Address)  ;
        }

        [Authorize]
        [HttpPut("address")]

        public async Task<ActionResult<AddressDto>> UpdateAddress(AddressDto addressDto) {
            /*
            1) Get the email from the Token 
            2) Get User Object From the Email by joining the address table and email table
            3) now user mapper fn to copy the existing input to the address object retrieved
            4) save the data to the backend
            5) return the object
            */
            var email = HttpContext.User?.Claims?
                    .FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var user = await _userManager.Users.Include(x => x.Address).SingleOrDefaultAsync( x=> x.Email ==  email);
            user.Address = _mapper.Map<AddressDto,Address>(addressDto);
           var userUpdated = await _userManager.UpdateAsync(user);

            if(userUpdated.Succeeded)  return Ok(_mapper.Map<Address,AddressDto>(user.Address )); 
            
            return BadRequest("Unable to Update the request");


        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> LoginUser (LoginDto loginDto){
            //   1)  Check whether user is available  
            var userStatus = await    _userManager.FindByEmailAsync(loginDto.Email);
            if(userStatus == null) return Unauthorized(new ApiResponse(401));
            //   2) check whether password is correct
              var passwordStatus = await _signInManager.CheckPasswordSignInAsync(
                   userStatus,
                  loginDto.Password,false);
               if(!passwordStatus.Succeeded) return Unauthorized(new ApiResponse(401));
                return new UserDto {
                    DisplayName = userStatus.DisplayName ,
                    Email = userStatus.Email,
                    Token = _tokenService.CreateToken(userStatus)
                };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> RegisterUser( RegisterDto registerDto){

            // Check email Id already exist or not
            if(EmailIdExists(registerDto.Email).Result){
                return new BadRequestObjectResult(new  ApiValidationResponse {
                    Errors = new [] {"Email already in use"}
                });
            }

            //1) creating the user 
            var User = new AppUser {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName =registerDto.Email
            };           
                var userCreateStatus = await _userManager.CreateAsync(User, registerDto.Password );
            if(!userCreateStatus.Succeeded) return BadRequest(new ApiResponse(400));
                return new UserDto {
                    Email = registerDto.Email ,
                    Token = _tokenService.CreateToken(User),
                    DisplayName = registerDto.DisplayName,
                };
        }
    }  
}