using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specification
{
    public class ProductWithBrandAndTypeSpecification : BaseSpecification<Product>
    {
        public ProductWithBrandAndTypeSpecification( ProductSpecParams  productParams) :
        base( x => 

        (string.IsNullOrEmpty(productParams.Search)|| 
        x.Name.ToLower().Contains( productParams.Search))&&
        //BrandId = 2
        (!productParams.BrandId.HasValue
         || x.ProductBrandId == productParams.BrandId)

        &&(!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)

        )
        {
            AddIncludes(x => x.ProductType);
            AddIncludes(x => x.ProductBrand);
            AddOrderBy(x => x.Name);

            // PageIndex = 3 ; Skip will be (6 * 2) = 12 
            AddPaging( productParams.PageSize *(productParams.PageIndex - 1) , 
            productParams.PageSize);

        if( !string.IsNullOrEmpty(productParams.Sort)){

                switch(productParams.Sort)
                {
                    case "priceAsc":
                    AddOrderBy(p => p.Price);
                    break;
                    
                    case "priceDesc":
                    AddOrderByDescending(p => p.Price);
                    break;

                    default:
                    AddOrderBy(n => n.Name);
                    break;
                    
                }



        }

    }

        public ProductWithBrandAndTypeSpecification( int id ) : base( x=> x.Id == id)
        {
            AddIncludes(x => x.ProductType);
            AddIncludes(x => x.ProductBrand);
        }


    }
}
