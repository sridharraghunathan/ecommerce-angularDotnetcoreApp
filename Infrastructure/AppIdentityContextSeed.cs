using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure
{
    public class AppIdentityContextSeed
    {
        //Creating the Initial Data Load
        public static async Task SeedUserAsync (UserManager <AppUser> UserManager){
                if(!UserManager.Users.Any()){
                    var user = new AppUser{
                        DisplayName = "Bob",
                        Email ="Bob@gmail.com",
                        UserName ="Bob@gmail.com",
                        Address = new Address{
                            FirstName ="Bob",
                            LastName ="Nick",
                            Street =" 9th Avenue Lincon st",
                            city ="Newyork",
                            State ="NY",
                            ZipCode ="950001"
                        }
                    };
                await UserManager.CreateAsync(user, "$Password123");
                }
        }
    }
}