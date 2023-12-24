/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {

  constructor(){
    this.todos = []
  }

  add(todo) {
    this.todos.push(todo)
  }
  
  remove(idxOfTodo){
    if(idxOfTodo >= 0 && idxOfTodo < this.todos.length){
      this.todos.splice(idxOfTodo, 1);
    }
  }

  update(idx, updatedTodo) {
    if (idx >=0 && idx < this.todos.length){
      this.todos[idx] = updatedTodo
    }
  }

  getAll() {
    return this.todos;
  }

  get(idx){
    if(idx >= 0 && idx < this.todos.length) {
      return this.todos[idx]
    }else{
      throw new Error("Enter a valid Index")
    }
  }

  clear(){
    this.todos = []
  }

}

let todo = new Todo();

todo.add({task: "Do Laundry", deadline: "Tomorrow"});
todo.add({task: "Make Food", deadline: "Thursday"});
todo.add({task: "Bath", deadline: "Tuesday"});
todo.remove(1)
console.log(todo.getAll());


