import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import SearchIcon from 'material-ui-icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 440,
    position: 'relative',

    '&:before': {
      content: '""',

      width: '100%',
      height: '100%',
      position: 'absolute',

      borderRadius: 3,
      background: theme.palette.common.white,
      opacity: 0.25,

      pointerEvents: 'none'
    }
  },
  searchIconWrapper: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    opacity: 0.5,
    color: theme.palette.common.white,

    pointerEvents: 'none'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,

    border: 'none',
    background: 'none',

    color: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    '&::placeholder': {
      opacity: 0.5,
      color: theme.palette.common.white
    },

    '&:focus': {
      outline: 'none'
    }
  }
});

const Search = ({ query, onQueryChange, classes }) => (
  <div className={classes.root}>
    <div className={classes.searchIconWrapper}>
      <SearchIcon />
    </div>
    <input
      value={query}
      placeholder="Быстрый поиск"
      onInput={e => onQueryChange(e.target.value)}
      className={classes.input}
    />
  </div>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
