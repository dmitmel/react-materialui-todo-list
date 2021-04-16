import React from 'react';
import Container from './Container';
import Header from './Header';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import SimpleTabs from './SimpleTabs';

let todoIdCounter = 0;
const createTodo = () => ({
  id: todoIdCounter++,
  name: 'Новая задача',
  done: false,
  editing: true,
  deleted: false
});

const set = (array, index, item) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index + 1)
];

class App extends React.Component {
  state = {
    currentTab: 'my-todos',
    searchQuery: '',
    todos: []
  };

  onTabChange = tab => this.setState({ currentTab: tab });

  onSearchQueryChange = query => this.setState({ searchQuery: query });

  onTodoAdd = () =>
    this.setState(({ todos }) => ({
      todos: [...todos, createTodo()]
    }));

  onTodoToggle = (id, done) =>
    this.setState(({ todos }) => {
      const { index, todo } = this.findTodoById(id);
      const newTodo = { ...todo, done, editing: false };
      return { todos: set(todos, index, newTodo) };
    });

  onTodoEditingToggle = (id, editing) =>
    this.setState(({ todos }) => {
      const { index, todo } = this.findTodoById(id);
      const newTodo = { ...todo, editing };
      return { todos: set(todos, index, newTodo) };
    });

  onTodoEdit = (id, name) =>
    this.setState(({ todos }) => {
      const { index, todo } = this.findTodoById(id);
      const newTodo = { ...todo, name };
      return { todos: set(todos, index, newTodo) };
    });

  onTodoDelete = id =>
    this.setState(({ todos }) => {
      const { index, todo } = this.findTodoById(id);
      const newTodo = { ...todo, deleted: !todo.deleted };
      return { todos: set(todos, index, newTodo) };
    });

  findTodoById(id) {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const todo = todos[index];
    return { index, todo };
  }

  filterTodos() {
    const { currentTab, searchQuery, todos } = this.state;
    return todos.filter(
      ({ name, deleted }) =>
        currentTab === (deleted ? 'archive' : 'my-todos') &&
        name.indexOf(searchQuery) >= 0
    );
  }

  render() {
    const { currentTab, searchQuery } = this.state;

    return (
      <React.Fragment>
        <Header
          searchQuery={searchQuery}
          onSearchQueryChange={this.onSearchQueryChange}
        />
        <Container>
          <SimpleTabs
            tabs={[
              {
                id: 'my-todos',
                label: 'Мои задачи',
                content: 'Hello'
              },
              {
                id: 'archive',
                label: 'Архив',
                content: 'There'
              }
            ]}
            currentTabId={currentTab}
            onTabChange={this.onTabChange}
          />

          <TodoList
            todos={this.filterTodos()}
            onTodoToggle={this.onTodoToggle}
            onTodoAdd={this.onTodoAdd}
            onTodoEditingToggle={this.onTodoEditingToggle}
            onTodoEdit={this.onTodoEdit}
            onTodoDelete={this.onTodoDelete}
          />
          <AddTodo onClick={this.onTodoAdd} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
