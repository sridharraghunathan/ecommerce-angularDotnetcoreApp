using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly IBasketRepository _basketRepository;
        public BasketController(IBasketRepository basketRepository)
        {
             _basketRepository = basketRepository;
        }

        [HttpGet]

        // make sure the query params name should match with passing param
        public async Task<ActionResult<CustomerBasket>> GetBasketById( string id){
            var basketdata = await _basketRepository.GetBasketByIdAsync(id);
            return Ok(basketdata ?? new CustomerBasket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdateBasket(CustomerBasket customerBasket){
            var basketdata = await _basketRepository.UpdateBasketAsync(customerBasket);
            return Ok(basketdata);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id){
            await _basketRepository.DeleteBasketAsync(id);
        }

    }
}