 using System.Linq;
using API.Errors;
using Core.Interfaces;
using Infrastructure;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class  ApplicationServiceExtensions
    {
            public static IServiceCollection AddAppliCationService  (this IServiceCollection services)
            {
            services.AddScoped(typeof(IGenericRepository<>),(typeof(GenericRepository<>)));
            services.AddScoped<ITokenService,TokenService>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IBasketRepository, BasketRepository>(); 
            // when the error occured 
            services.Configure<ApiBehaviorOptions>(
                options => 
                {
                    options.InvalidModelStateResponseFactory = actionContext =>
                    {
                        var errors = actionContext.ModelState
                                                .Where( e=> e.Value.Errors.Count >0 )
                                                .SelectMany(x=> x.Value.Errors)
                                                .Select(x=> x.ErrorMessage)
                                                .ToArray();

                        var errorResponse = new ApiValidationResponse{
                            Errors = errors       
                        };
                        return new BadRequestObjectResult(errorResponse);
                    };
                }
            );

              return services;
            }
    }   
}
