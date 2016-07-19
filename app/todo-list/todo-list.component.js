angular
.module('todoList')
.component('todoList', {
  templateUrl: 'todo-list/todo-list.template.html',
  controller: [
  function TodoListController() {
    var self = this;
    var tasks = [{
      name: "task 1"
    }, {
      name: "task 2"
    }, {
      name: "task 3"
    }];
    self.tasks = tasks;

  }]
})
