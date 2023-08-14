using API.Extensions;
using API.Helper;
using API.Middleware;
using AutoMapper;
using Infrastructure.Data;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddAutoMapper(typeof(MapperProfiles));
            //For Database ConnectionSkinet
            /*
            services.AddDbContext<StoreContext>(x => 
            x.UseSqlite(
                _config.GetConnectionString("DefaultConnection"))
                );
*/
            string connectionString = _config.GetConnectionString("DefaultConnection");
            services.AddDbContext<StoreContext>(opt =>
            {
                opt.UseSqlServer(connectionString);

            });
            services.AddDbContext<AppIdentityDBContext>(opt => opt.UseSqlServer(connectionString));

            //For Database ConnectionIdentity 
            /*
                        services.AddDbContext<AppIdentityDBContext>( x =>

                            x.UseSqlite(_config.GetConnectionString("IdentityConnection"))
                        );
            */

            services.AddSingleton<IConnectionMultiplexer>(c =>
            {
                var configuration = ConfigurationOptions.Parse(_config.GetConnectionString("Redis"), true);
                return ConnectionMultiplexer.Connect(configuration);
            }

            );
            services.AddAppliCationService();
            services.AddIdentityServices(_config);
            services.AddSwaggerDocument();
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
                });
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // if (env.IsDevelopment())
            // {
            //     app.UseDeveloperExceptionPage();
            // }

            app.UseMiddleware<ExceptionMiddleware>();

            //Not Found page Middleware.
            app.UseStatusCodePagesWithReExecute("/errors/{0}");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseCors("CorsPolicy");

            app.UseAuthentication();

            app.UseAuthorization();

            app.SwaggerUIExtension();
 
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToController("Index", "Fallback");
            });
        }
    }
}
