using Core.Entities;

namespace Core.Specification
{
    public class ProductForCountPagination : BaseSpecification<Product>
    {
        
        public ProductForCountPagination( ProductSpecParams  productParams) :
        base( x => 
         (string.IsNullOrEmpty(productParams.Search)   || 
         x.Name.ToLower().Contains( productParams.Search)
         ) &&
        
        //BrandId = 2
        (!productParams.BrandId.HasValue
         || x.ProductBrandId == productParams.BrandId) &&        
        (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
        )
        {
                              
        }
        
    }
}
