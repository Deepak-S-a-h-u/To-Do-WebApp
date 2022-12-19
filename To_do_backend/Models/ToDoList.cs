using System.ComponentModel.DataAnnotations;

namespace To_do_backend.Models
{
    public class ToDoList
    {
        public int ID { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Details { get; set; }

        [Required]
        public bool Status { get; set; }
    }
}
