using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specification
{
      public class OrdersWithItemsAndOrderingSpecification : BaseSpecification<Order>
      {
         public OrdersWithItemsAndOrderingSpecification(string email) : 
         base(o => o.BuyerEmail == email)
        {
            AddIncludes(o => o.OrderItems);
            AddIncludes(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }

        public OrdersWithItemsAndOrderingSpecification(int id, string email) 
            : base(o => o.Id == id && o.BuyerEmail == email)
        {
            AddIncludes(o => o.OrderItems);
            AddIncludes(o => o.DeliveryMethod);
        }
      }
}