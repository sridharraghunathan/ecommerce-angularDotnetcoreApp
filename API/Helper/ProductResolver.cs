using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helper
{
    public class ProductResolver : IValueResolver<Product, ProductDTOReturn, string>
    {
        private readonly IConfiguration _config ;
        public ProductResolver(IConfiguration config)
        {
            _config = config;

        }

        public string Resolve(Product source, ProductDTOReturn destination,
        string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.PictureUrl)){
              return _config["ApiUrl"] + source.PictureUrl;
            }

            return null;

        }
    }
}
