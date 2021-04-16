import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import Checkbox from 'material-ui/Checkbox';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import UnarchiveIcon from 'material-ui-icons/Unarchive';
import EditIcon from 'material-ui-icons/Edit';

const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    borderBottom: '1px solid #ECECEC'
  },
  control: {
    width: '100%',
    margin: 0
  },
  controlLabel: {
    width: '100%'
  },
  nameInput: {
    fontSize: '0.875rem'
  },
  nameDone: {
    opacity: 0.55,
    textDecoration: 'line-through'
  },
  delete: {
    marginLeft: -12
  }
};

function moveCursorToEnd(input) {
  const { length } = input.value;
  input.setSelectionRange(length, length);
}

const Todo = ({
  name,
  done,
  editing,
  deleted,
  onToggle,
  onEdit,
  onEditingToggle,
  onDelete,
  classes
}) => (
  <div className={classes.root}>
    <FormControlLabel
      control={
        <Checkbox
          checked={done}
          onChange={(event, checked) => onToggle(checked)}
        />
      }
      label={
        editing ? (
          <Input
            value={name}
            autoFocus
            onFocus={e => moveCursorToEnd(e.target)}
            onInput={e => onEdit(e.target.value)}
            onBlur={() => onEditingToggle(false)}
            fullWidth
            className={classes.nameInput}
          />
        ) : (
          <span className={done ? classes.nameDone : ''}>{name}</span>
        )
      }
      classes={{ root: classes.control, label: classes.controlLabel }}
    />

    <IconButton
      disabled={done || editing}
      onClick={() => onEditingToggle(true)}>
      <EditIcon />
    </IconButton>
    <IconButton onClick={onDelete} className={classes.delete}>
      {deleted ? <UnarchiveIcon /> : <DeleteIcon />}
    </IconButton>
  </div>
);

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEditingToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Todo);
