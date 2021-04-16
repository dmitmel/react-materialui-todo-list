import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import FormGroup from 'material-ui/Form/FormGroup';
import Todo from './Todo';

const styles = theme => ({
  hasItems: {
    paddingTop: theme.spacing.unit * 2.5
  }
});

const TodoList = ({
  todos,
  onTodoToggle,
  onTodoEditingToggle,
  onTodoEdit,
  onTodoDelete,
  classes
}) => (
  <FormGroup className={todos.length ? classes.hasItems : ''}>
    {todos.map(({ id, ...todoProps }) => (
      <Todo
        key={id}
        {...todoProps}
        onToggle={done => onTodoToggle(id, done)}
        onEditingToggle={editing => onTodoEditingToggle(id, editing)}
        onEdit={newName => onTodoEdit(id, newName)}
        onDelete={() => onTodoDelete(id)}
      />
    ))}
  </FormGroup>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoEditingToggle: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
