using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specification
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public  Expression< Func<T, bool>> Criteria {get;}

        public BaseSpecification(Expression< Func<T, bool>> criteria)
        {
            Criteria = criteria;
        }

        public BaseSpecification( )
        {
          
        }
        public  List<Expression<Func<T, Object>>> Includes  {get;}
        = new List<Expression<Func<T, Object>>>();


         protected void AddIncludes ( Expression<Func<T, Object>> includeExpression) {
                Includes.Add (includeExpression);
         }  

    }
}
