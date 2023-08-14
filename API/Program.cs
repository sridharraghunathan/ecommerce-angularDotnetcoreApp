using System;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Infrastructure;
using Infrastructure.Data;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            // While Starting the Application if the database is not there.
            // Any Pending migration not carried will be done with below configuration.

            var host = CreateHostBuilder(args).Build();
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetService<ILoggerFactory>();

                try
                {
                    // while program gets started the below code will create the 
                    // database Skinet if not there and do the migration if not there
                    var context = services.GetRequiredService<StoreContext>();
                    await context.Database.MigrateAsync();
                    await StoreContextSeed.SeedData(context, loggerFactory);

                    // while program gets started the below code will create the 
                    // database Identity if not available along with migration
                /*
                    var userManager = services.GetRequiredService<UserManager<AppUser>>();
                    var identityContext = services.GetRequiredService<AppIdentityDBContext>();
                    await identityContext.Database.MigrateAsync();
                    await AppIdentityContextSeed.SeedUserAsync(userManager);
*/
 
                }
                
                catch (Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "Failed to migrate");
                }
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
