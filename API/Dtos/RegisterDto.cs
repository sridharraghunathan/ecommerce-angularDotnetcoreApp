using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$",ErrorMessage ="Password must have 1 UpperCase , 1 LoweCase , 1 Digit and Non alphanumric value with more than 6 characters")]
        public string Password { get; set; }
        [Required]
        public string DisplayName { get; set; }
    }
}