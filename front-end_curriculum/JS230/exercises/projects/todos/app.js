const $ = document;

class TodoList {
  constructor() {
    this.location = $.querySelector("#todos");
    this.todoHTML = $.getElementById('todos_template').innerHTML;
    this.todoTemplate = Handlebars.compile(this.todoHTML);
    this.todos = [
      { id: 1, title: 'Homework' },
      { id: 2, title: 'Shopping' },
      { id: 3, title: 'Calling Mom' },
      { id: 4, title: 'Coffee with John '}
    ];

    this.createTodoList();
  }

  createTodoList() {
    let object = {"todos": this.todos}
    let html = this.todoTemplate(object);
    this.location.insertAdjacentHTML("beforeend", html);
  }
}

class ContextMenu {
  constructor() {
    this.container = $.querySelector(".context_menu");
    this.html = $.getElementById("context_menu_template").innerHTML;
    this.template = Handlebars.compile(this.html);
  }
  
  render(id) {
    this.currentId = id;
    let template = this.template({'id': this.currentId});
    this.container.insertAdjacentHTML("beforeend", template);
    this.setupEventListeners();
  }

  display(event) {
    this.container.classList.add('context_menu');
    this.container.style.display = "block";
    this.container.style.position = "fixed";
    this.container.style.top = `${event.clientY}px`;
    this.container.style.left = `${event.clientX}px`;
  }

  toggle() {
    let contextMenu = $.querySelector('.context_menu ul');
    if (contextMenu) {
      $.querySelector('.context_menu ul').remove();
    }
  }

  setupEventListeners() {
    this.setupDeleteEvent();
  }

  setupDeleteEvent() {
    let deleteOption = $.querySelector('li.remove');
    deleteOption.addEventListener('click', function (event) {
      this.displayConfirmPrompt(this.currentId);
      this.setupYesEventListener();
      this.setupNoEventListener();
    }.bind(this));
  }

  setupYesEventListener() {
    $.querySelector('.confirm_yes').addEventListener('click', function() {
      $.querySelector(`li[data-id="${this.currentId}"]`).remove();
      this.hideConfirmPrompt();
      $.querySelector(".confirm_wrapper").remove();
    }.bind(this));
  }

  setupNoEventListener() {
    $.querySelector('.confirm_no').addEventListener('click', function() {
      this.hideConfirmPrompt();
      $.querySelector(".confirm_wrapper").remove();
    }.bind(this));
  }
  
  renderConfirmPrompt() {
    let html = $.getElementById('confirm_template').innerHTML;
    let promptTemplate = Handlebars.compile(html);
    let object = { "id": this.currentId };
    return promptTemplate(object);
  }

  displayConfirmPrompt() {
    $.querySelector(".overlay").style.display = "block";
    let location = $.querySelector('.confirm_prompt');
    let prompt = this.renderConfirmPrompt(this.currentId);
    location.insertAdjacentHTML("beforeend", prompt);
    $.querySelector('.confirm_prompt').style.display = "block"
  }

  hideConfirmPrompt() {
    $.querySelector(".overlay").style.display = "none";
    $.querySelector(".confirm_prompt").style.display = "none";
  }
}


$.addEventListener('DOMContentLoaded', function(e) {
  let list = new TodoList();
  let contextMenu = new ContextMenu();
  let todos = $.querySelectorAll('#todos li');

  Array.prototype.slice.call(todos).forEach((todo) => {
    let todoId = todo.getAttribute('data-id');

    todo.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      contextMenu.render(todoId);
      contextMenu.display(e);

      $.addEventListener('click', function(e) {
        contextMenu.toggle();
      })
    });
  });
});

// Launch School Solution

var todoItems = [{id: 1, title: 'Homework'},
                {id: 2, title: 'Shopping'},
                {id: 3, title: 'Calling Mom'}];

var App = {
  todos: todoItems,
  todosTemplate: Handlebars.compile($('#todos_template').html()),
  confirmTemplate: Handlebars.compile($('#confirm_template').html()),
  $todos: $('ul#todos'),
  $confirm: $('.confirm_prompt'),
  $contextMenu: $('.context_menu'),
  contextMenuTemplate: Handlebars.compile($('#context_menu_template').html()),

  renderTodos: function() {
    this.$todos.html(this.todosTemplate({ todos: this.todos }));
  },

  handleDeleteClick: function(e) {
    e.preventDefault();
    var todoId   = Number($(e.target).closest('li').attr('data-id'));
    this.showPrompt(todoId);
  },

  handleConfirmYes: function(e) {
    e.preventDefault();
    todoId = Number($(e.target).closest('.confirm_wrapper').attr('data-id'));
    this.removeTodo(todoId);
  },

  removeTodo: function(id) {
    this.todos = this.todos.filter(function(todo) {
      return todo.id !== id;
    });

    this.hidePrompt();
    this.renderTodos();
  },

  showPrompt: function(todoId) {
    this.$confirm.html(this.confirmTemplate({id: todoId}));
    this.$confirm.add('.overlay').fadeIn(300);
    this.bindPromptEvents();
  },

  bindPromptEvents: function() {
    this.$confirm.one('click', '.confirm_no', this.hidePrompt.bind(this));
    this.$confirm.one('click', '.confirm_yes', this.handleConfirmYes.bind(this));
  },

  hidePrompt: function() {
    this.$confirm.add('.overlay').hide();
  },

  handleContextMenu: function(e) {
    var left  = e.clientX;
    var top = e.clientY;
    var id    = +$(e.target).attr('data-id');

    this.displayContextMenu(id, {left: left, top: top});
    return false;
  },

  displayContextMenu: function(id, coords) {
    this.hideContextMenu();
    this.$contextMenu.html(this.contextMenuTemplate({id: id}));
    this.$contextMenu.fadeIn(300);
    this.$contextMenu.offset(coords);
    this.$contextMenu.one('click', '.remove', this.handleDeleteClick.bind(this));
  },

  hideContextMenu: function() {
    this.$contextMenu.hide();
  },

  init: function() {
    this.renderTodos();
    this.$todos.on('contextmenu', 'li', this.handleContextMenu.bind(this));
    $('.overlay').on('click', this.hidePrompt.bind(this));
    $(document.body).on('click', this.hideContextMenu.bind(this));
  }
};

App.init();
