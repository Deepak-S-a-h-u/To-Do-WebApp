using Microsoft.EntityFrameworkCore;
using To_do_backend.Models;

namespace To_do_backend.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {

        }
        public DbSet<ToDoList> ToDoLists { get; set; }
    }
}
