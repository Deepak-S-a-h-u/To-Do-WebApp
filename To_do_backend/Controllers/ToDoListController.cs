using Microsoft.AspNetCore.Mvc;
using To_do_backend.Models;
using To_do_backend.Repository.IRepository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace To_do_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListController : ControllerBase
    {
        private readonly IToDoListRepository _toDoListRepository;
        public ToDoListController(IToDoListRepository toDoListRepository)
        {
            _toDoListRepository= toDoListRepository;
        }
        // GET: api/<ToDoListController>
        [HttpGet]
        public IEnumerable<ToDoList> Get()
        {
            return _toDoListRepository.GetToDoLists().ToList(); 
        }

        // GET api/<ToDoListController>/5
        [HttpGet("{id}")]
        public ToDoList Get(int id)
        {
            return _toDoListRepository.GetToDoList(id); 
        }

        // POST api/<ToDoListController>
        [HttpPost]
        public void Post([FromBody] ToDoList toDoList)
        {
            _toDoListRepository.AddToDoList(toDoList);
        }

        // PUT api/<ToDoListController>/5
        [HttpPut]
        public void Put([FromBody] ToDoList toDoList)
        {
            _toDoListRepository.UpdateToDoList(toDoList);
        }

        // DELETE api/<ToDoListController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _toDoListRepository.DeleteToDoList(id);
        }
    }
}
