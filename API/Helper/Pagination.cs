using System.Collections.Generic;
using API.Dtos;

namespace API.Helper
{
    public class Pagination<T> where T : class
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public IReadOnlyList<ProductDTOReturn> Data { get; set; }
    }
}
