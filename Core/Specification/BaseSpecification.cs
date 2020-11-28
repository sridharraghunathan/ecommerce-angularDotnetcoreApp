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
        
        public Expression <Func<T, Object>> OrderBy {get; set;}

        public Expression <Func<T, Object>> OrderByDescending {get; set;}

        public  List<Expression<Func<T, Object>>> Includes  {get;}
        = new List<Expression<Func<T, Object>>>();

        public int Take  {get; private set;}
        public int Skip  {get; private set;}
        public bool IsPagingEnabled   {get; private set;}

        protected void AddIncludes ( Expression<Func<T, Object>> includeExpression) {
                Includes.Add (includeExpression);
         }  

        protected void AddOrderBy( Expression<Func<T,Object>> orderBy){

            OrderBy = orderBy;
        }

        protected void AddOrderByDescending( Expression<Func<T,Object>> orderByDescending){

            OrderByDescending =  orderByDescending;
        }

        //Enabling the Paging also this should come after where ,Join, Ordering

        protected void AddPaging ( int skip, int take ) {
            Take  = take;
            Skip = skip;
            IsPagingEnabled = true;
        }


    }
}
