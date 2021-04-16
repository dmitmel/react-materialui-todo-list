import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Container from './Container';
import Search from './Search';
import logo from './logo.png';

const styles = theme => ({
  root: {
    marginBottom: 56,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      marginBottom: 48
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: 64
    }
  },
  logo: {
    width: 24,
    height: 24,
    margin: `0 ${theme.spacing.unit * 1.5}px`,
    borderRadius: 0
  },
  brand: {
    marginRight: 'auto'
  }
});

const Header = ({ searchQuery, onSearchQueryChange, classes }) => (
  <div className={classes.root}>
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <Avatar alt="logo" src={logo} className={classes.logo} />
          <Typography variant="title" color="inherit" className={classes.brand}>
            To Do Task
          </Typography>
          <Search query={searchQuery} onQueryChange={onSearchQueryChange} />
        </Toolbar>
      </Container>
    </AppBar>
  </div>
);

Header.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
