using To_do_backend.Data;
using To_do_backend.Models;
using To_do_backend.Repository.IRepository;
using Todobackend.Migrations;

namespace To_do_backend.Repository
{
    public class ToDoListRepository : IToDoListRepository
    {
        private readonly ApplicationDbContext _context;
        public ToDoListRepository(ApplicationDbContext context)
        {
            _context= context;
        }
        public bool AddToDoList(ToDoList todoList)
        {
            _context.ToDoLists.AddAsync(todoList);
            return Save();
        }

        public bool DeleteToDoList(int id)
        {
            var toDo=_context.ToDoLists.Find(id);
            _context.ToDoLists.Remove(toDo);
            return Save();
        }

        public ToDoList GetToDoList(int id)
        {
            return _context.ToDoLists.Find(id);
        }

        public ICollection<ToDoList> GetToDoLists()
        {
            return _context.ToDoLists.ToList();
        }

        public bool Save()
        {
            return _context.SaveChanges() == 1 ? true : false;
        }

        public bool UpdateToDoList(ToDoList toDoList)
        {
            _context.ToDoLists.Update(toDoList);
            return Save();  
        }

     
    }
}
