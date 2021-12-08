'use strict';

const Todo = {
  props: [ 'content', 'deadline' ],
  template: `<li>{{ deadline }} : {{ content }}</li>`,
};

const TodoList = {
  components: {
    Todo,
  },

  data() {
    return {
      todos: [],
    };
  },

  async mounted() {
    const response = await fetch(`${API_ROOT}/todolist`);
    const todos = await response.json();

    this.todos = todos;
  },

  template: `
  <ul>
    <todo
      v-for="todo in todos"
      :content="todo.content"
      :deadline="todo.deadline"
    ></todo>
  </ul>
  `,
};
