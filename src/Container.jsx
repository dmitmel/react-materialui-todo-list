import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  container: {
    width: '100%',
    margin: '0 auto',
    ...theme.mixins.gutters({}),
    ...['sm', 'md', 'lg', 'xl'].reduce((mediaQueries, breakpointName) => {
      const breakpoint = theme.breakpoints.values[breakpointName];
      mediaQueries[`@media (min-width: ${breakpoint}px)`] = {
        maxWidth: breakpoint
      };
      return mediaQueries;
    }, {})
  }
});

const Container = ({ children, classes }) => (
  <div className={classes.container}>{children}</div>
);

Container.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Container);
