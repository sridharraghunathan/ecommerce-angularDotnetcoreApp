using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Core.Interfaces;
using Core.Specification;
using API.Dtos;
using System.Linq;
using AutoMapper;
using API.Errors;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController :BaseApiController
    {

        private readonly IGenericRepository<Product> _productrepo;
        private readonly IGenericRepository<ProductBrand> _productBrandrepo;
        private readonly IGenericRepository<ProductType> _productTyperepo;

        private  readonly IMapper _mapper ;

        public ProductsController(IGenericRepository<Product> productRepo,
        IGenericRepository<ProductBrand> productBrandRepo,
        IGenericRepository<ProductType> productTypeRepo,
        IMapper mapper
         ){
           _productrepo = productRepo;  
           _productBrandrepo = productBrandRepo;  
           _productTyperepo = productTypeRepo;
            _mapper = mapper;
        }
 
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductDTOReturn>>> GetProducts (){
            // var products = await _productrepo.GetListAsync();
            var spec = new ProductWithBrandAndTypeSpecification();
            
            var products=  await _productrepo.ListAsync(spec);

        //    return products.Select( product => new ProductDTOReturn(){
        //         Id = product.Id,
        //         Name= product.Name,
        //         Description=product.Description,
        //         Price = product.Price,
        //         PictureUrl= product.PictureUrl,
        //         ProductBrand= product.ProductBrand.Name,
        //         ProductType= product.ProductType.Name
        //    }).ToList() ;

            return Ok(_mapper.Map<IReadOnlyList<Product>,
             IReadOnlyList<ProductDTOReturn>>(products));

           // return  Ok(products);
        }
 

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDTOReturn>> GetProduct(int id ){
            var spec = new ProductWithBrandAndTypeSpecification(id);
            var product = await _productrepo.GetEntityWithSpec(spec);

            if (product == null ) return NotFound(new ApiResponse(404));
            // return new ProductDTOReturn {
            //     Id = product.Id,
            //     Name= product.Name,
            //     Description=product.Description,
            //     Price = product.Price,
            //     PictureUrl= product.PictureUrl,
            //     ProductBrand= product.ProductBrand.Name,
            //     ProductType= product.ProductType.Name
            // };

            return _mapper.Map<Product,ProductDTOReturn>(product);

          // return  await _productrepo.GetIdByAsync(id);

        }

        [HttpGet("brands")]
        public async Task<ActionResult<ProductBrand>> GetProductBrands(){
            return Ok(await _productBrandrepo.GetListAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<ProductBrand>> GetProductTypes(){
            return Ok(await _productTyperepo.GetListAsync());
        }

    }
}
