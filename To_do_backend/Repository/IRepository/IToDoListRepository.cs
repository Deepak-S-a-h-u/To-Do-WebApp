using To_do_backend.Models;
using Todobackend.Migrations;

namespace To_do_backend.Repository.IRepository
{
    public interface IToDoListRepository
    {
        ICollection<ToDoList> GetToDoLists();
        ToDoList GetToDoList(int id);
        bool AddToDoList(ToDoList toDoList);
        bool UpdateToDoList(ToDoList toDoList);
        bool DeleteToDoList(int id);
        bool Save();
    }
}
