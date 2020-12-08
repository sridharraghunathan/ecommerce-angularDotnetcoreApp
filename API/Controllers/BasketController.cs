using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IMapper _mapper;

        public BasketController(IBasketRepository basketRepository , IMapper mapper)
        {
             _basketRepository = basketRepository;
             _mapper = mapper;
        }
        [HttpGet]
        // make sure the query params name should match with passing param
        public async Task<ActionResult<CustomerBasket>> GetBasketById( string id){
            var basketdata = await _basketRepository.GetBasketByIdAsync(id);
            return Ok(basketdata ?? new CustomerBasket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdateBasket(CustomerBasketDto customerBasket){
            var basket = _mapper.Map<CustomerBasketDto,CustomerBasket>(customerBasket);
            var basketdata = await _basketRepository.UpdateBasketAsync(basket);
            return Ok(basketdata);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id){
            await _basketRepository.DeleteBasketAsync(id);
        }

    }
}