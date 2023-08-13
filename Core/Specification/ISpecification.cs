using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specification
{
    // T refers the Class type like Product or Brand 
    public interface ISpecification<T>
    {
        //WHERE CONDITION FILTER
        Expression <Func<T, bool>> Criteria {get;}
        //Join the table
        List<Expression<Func<T, Object>>> Includes {get;}
        //Ordering the data based on the columns
        Expression <Func<T, Object>> OrderBy {get ;}
        //Ordering the data based on columns descending
        Expression <Func<T, Object>> OrderByDescending {get ;}

        int Take {get; }
        int Skip {get; } 
        bool IsPagingEnabled {get;}       
    }
}
 