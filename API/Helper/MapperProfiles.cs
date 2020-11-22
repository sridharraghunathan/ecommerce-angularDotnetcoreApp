using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helper
{
    public class MapperProfiles :Profile
    {
        public MapperProfiles()
        {
             CreateMap<Product, ProductDTOReturn>()
             .ForMember(s=> s.ProductBrand,
              d => d.MapFrom(s => s.ProductBrand.Name))
                 .ForMember(s=> s.ProductType,
              d => d.MapFrom(s => s.ProductType.Name))
              .ForMember(s => s.PictureUrl, d => d.MapFrom<ProductResolver>());
              
        }
        
    }
}
