using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specification;

namespace Infrastructure.Services
{
      public class OrderService : IOrderService
      {

            // private readonly IGenericRepository<Product> _productRepo;
            // private readonly IGenericRepository<DeliveryMethod> _deliveryRepo;
            private readonly IBasketRepository _basketRepo;
            private readonly IUnitOfWork _unitOfWork;

                   //Inject the all the Repo
            public OrderService(
            //     IGenericRepository<Product> productRepo ,
            //     IGenericRepository<DeliveryMethod> deliveryRepo,
            IUnitOfWork unitOfWork,
                IBasketRepository basketRepo
            )
            {
                  _unitOfWork = unitOfWork;
                  // _productRepo = productRepo;
                  // _deliveryRepo = deliveryRepo;
                  _basketRepo = basketRepo;
            }

            public async Task<Order> CreateOrderAsync(string buyerEmail,
             int deliveryMethodId,
              string basketId,
               Address shippingAddress)
            {
                   
                   
                   // Get the Information from the Basket Repo 

                    var basket = await _basketRepo.GetBasketByIdAsync(basketId);

                   // Get the Information from the Deliverymethod based on the Id.

                  // var deliveryMethod = await _deliveryRepo.GetIdByAsync(deliveryMethodId);
                   var deliveryMethod = await _unitOfWork.Repository<DeliveryMethod>().GetIdByAsync(deliveryMethodId);

                   // Get the Information about the product and price based on the basket information
                   //Add the Information to OrderItem
                   var items = new List<OrderItem>();
                   foreach ( var item in basket.Items){
                //   var productItem = await _productRepo.GetIdByAsync(item.Id);
                   var productItem = await _unitOfWork.Repository<Product>().GetIdByAsync(item.Id);
                   var prdItem = new ProductItemOrdered(productItem.Id,productItem.Name,productItem.PictureUrl);
                   var ordItem = new OrderItem(prdItem,productItem.Price,item.Quantity);
                    items.Add(ordItem); 
                   }

                   // Calculate the Subtotal .
                    var subtotal = items.Sum( s => s.Price * s.Quantity);

                   // Add the Information to the Order 
                    var order = new Order(  items,
                                            buyerEmail, 
                                            shippingAddress,
                                            deliveryMethod,
                                          
                                            subtotal);
                   _unitOfWork.Repository<Order>().Add(order);
                   
                   
                   // Save the Data to Database for Order table 
                   var result = await _unitOfWork.Complete();

                    //Status checking for the database committed or rollback
                    if(result <= 0 ) return null; // not saved
                    
                    //deleting the basket
                    await _basketRepo.DeleteBasketAsync(basketId);


                   return order;

            }

            public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await _unitOfWork.Repository<DeliveryMethod>().GetListAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id, buyerEmail);

            return await _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(buyerEmail);

            return await _unitOfWork.Repository<Order>().ListAsync(spec);
        }
          
      }
}