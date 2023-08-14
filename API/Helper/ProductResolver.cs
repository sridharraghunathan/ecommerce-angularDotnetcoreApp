using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace API.Helper
{
    public class ProductResolver : IValueResolver<Product, ProductDTOReturn, string>
    {
        private readonly IConfiguration _config;
        private readonly HttpRequest _baseURL;
        public ProductResolver(IConfiguration config, IHttpContextAccessor httpContextAccessor)
        {
            _config = config;
            _baseURL = httpContextAccessor.HttpContext?.Request;
        }

        public string Resolve(Product source, ProductDTOReturn destination,
        string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                // return _config["ApiUrl"] + source.PictureUrl;

                return $"{_baseURL.Scheme}://{_baseURL.Host}/{source.PictureUrl}";
            }

            return null;

        }
    }
}
