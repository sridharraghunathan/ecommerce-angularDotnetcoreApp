using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IBasketRepository
    {
         Task<CustomerBasket> GetBasketByIdAsync(string basketId);
         Task<CustomerBasket> UpdateBasketAsync(CustomerBasket customerBasket);
         Task<bool> DeleteBasketAsync(string basketId);


    }
}