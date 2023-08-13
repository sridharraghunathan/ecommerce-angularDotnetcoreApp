using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Interfaces;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class ProductRepository : IProductRepository
    {

        public StoreContext _context { get; }

        public ProductRepository(StoreContext context)
        {
            _context = context;

        }
       public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
             return await  _context.Products
             .Include(p => p.ProductBrand)
             .Include(p => p.ProductType)
             .ToListAsync();
        }

      public async   Task<Product> GetProductByIdAsync(int id)
        {
 

            /* 
            INCLUDE METHOD IS USED FOR NAVIGATION PROPERTIES TO SHOW 
            LIKE JOINING THE TABLE AND WE CANNNOT USE FIND METHOD WHEN USE FOR SINGLE RECORD
            SINCE IQUERYABLE METHOD WILL NOT BE AVAILABLE.
            */
            return await _context.Products
            .Include(p => p.ProductBrand)
            .Include(p => p.ProductType)
            .FirstOrDefaultAsync(p => p.Id == id);
        }


        public async Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync()
        {
          return  await _context.ProductBrands.ToListAsync();
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypeAsync()
        {
            return await _context.ProductTypes.ToListAsync();
        }
    }
}
