using System;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure
{
    public class BasketRepository : IBasketRepository
    {
        private readonly IDatabase _connection;
        public BasketRepository(IConnectionMultiplexer connection)
        {
            _connection = connection.GetDatabase();
        }

        public Task<bool> DeleteBasketAsync(string basketId)
        {
            return _connection.KeyDeleteAsync(basketId);
        }

        public async Task<CustomerBasket> GetBasketByIdAsync(string basketId)
        {
            var data = await _connection.StringGetAsync(basketId);
            return data.IsNullOrEmpty ? null :  JsonSerializer.Deserialize<CustomerBasket>(data);
        }

        public async Task<CustomerBasket> UpdateBasketAsync(CustomerBasket customerBasket)
        {
           var created =  await _connection.StringSetAsync(customerBasket.Id,
             JsonSerializer.Serialize(customerBasket), TimeSpan.FromDays(20)    
             );

             if(!created) return null ;

             return await GetBasketByIdAsync(customerBasket.Id);

        }
    }
}