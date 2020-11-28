namespace Core.Specification
{
        public class ProductSpecParams
    {        
        public const int MaxPageSize  = 50;
        public string Sort { get; set; }
        public int? BrandId { get; set;}
        public int? TypeId { get; set; }
        public int PageIndex {get; set;} = 1; // Page number
        private int _pageSize = 6;  // No of records per page
        public int PageSize 
        {
            get => _pageSize ;
            //If the page size is more than 50 set as 50 else received value.
            set =>  _pageSize = value > MaxPageSize ?  MaxPageSize : value;
        }
        private string _search;
        public string Search {
            get => _search;
            set => _search = value.ToLower();
             }     
    }
}
