import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2.5
  },
  icon: {
    marginRight: theme.spacing.unit
  }
});

const AddTodo = ({ onClick, classes }) => (
  <Button color="primary" onClick={onClick} className={classes.root}>
    <AddIcon className={classes.icon} />
    Добавить задачу
  </Button>
);

AddTodo.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTodo);
