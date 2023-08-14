using API.Dtos;
using AutoMapper;
using Core.Entities.OrderAggregate;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
    {
        private readonly IConfiguration _config;
        private readonly HttpRequest _baseURL;
        public OrderItemUrlResolver(IConfiguration config, IHttpContextAccessor httpContextAccessor)
        {
            _config = config;
            _baseURL = httpContextAccessor.HttpContext?.Request;
        }

        public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ItemOrdered.PictureUrl))
            {
             //   return _config["ApiUrl"] + source.ItemOrdered.PictureUrl;
                return $"{_baseURL.Scheme}://{_baseURL.Host}/{source.ItemOrdered.PictureUrl}";
            }

            return null;
        }
    }
}
