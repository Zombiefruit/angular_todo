(function() {
  angular
  .module('todoList')
  .component('todoList', {
    templateUrl: 'todo-list/views/todo-list.template.html',
    controller: TodoListController
  });

    function TodoListController() {
      var self = this;
      var selectedTasks = [];
      var tasks = [{
        name: "task 1"
      }, {
        name: "task 2"
      }, {
        name: "task 3"
      }, {
        name: "task 4"
      }];

      function addItem(title) {
        self.tasks.push({
          name: this.title
        });
      }

      function toggleClick(task) {
        selectedTasks.push(task);
      }

      function deleteItems() {
        tasks.filter(n => selectedTasks);
        console.log(tasks);
      }

      self.addItem = addItem;
      self.toggleClick = toggleClick;
      self.deleteItems = deleteItems;
      self.tasks = tasks;
    }
})();
