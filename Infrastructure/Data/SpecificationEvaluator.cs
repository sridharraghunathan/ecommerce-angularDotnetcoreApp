using System.Linq;
using Core.Entities;
using Core.Specification;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class SpecificationEvaluator<TEntity>  where TEntity : BaseEntity
    {
        
        public static IQueryable<TEntity> GetQuery ( IQueryable<TEntity>  inputQuery,
        ISpecification<TEntity> spec){

                var query = inputQuery;

                if(spec.Criteria != null){
                    query = query.Where(spec.Criteria);
                }

                if (spec.OrderBy != null){
                    query = query.OrderBy(spec.OrderBy);
                }
                if (spec.OrderByDescending != null){
                    query = query.OrderByDescending(spec.OrderByDescending);
                }

                query = spec.Includes.Aggregate(query, 
                (current, include) => current.Include(include));

        //Enabling the Paging also this should come after where ,Join, Ordering
        //Always Write Skip*** then Take order is important !!!

                if(spec.IsPagingEnabled ){
                    query = query.Skip(spec.Skip).Take(spec.Take);
                }


                return query ;  

        }
    }

  
}
