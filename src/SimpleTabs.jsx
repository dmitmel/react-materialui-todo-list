import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2.5
  },
  tab: {
    opacity: 0.55
  },
  tabSelected: {
    opacity: 1,
    color: theme.palette.primary.main
  }
});

const SimpleTabs = ({ tabs, currentTabId, onTabChange, classes }) => (
  <div className={classes.root}>
    <Tabs value={currentTabId} onChange={(event, tabId) => onTabChange(tabId)}>
      {tabs.map(({ id, label }) => (
        <Tab
          key={id}
          value={id}
          label={label}
          classes={{
            rootInherit: classes.tab,
            rootInheritSelected: classes.tabSelected
          }}
        />
      ))}
    </Tabs>
  </div>
);

SimpleTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  currentTabId: PropTypes.any.isRequired,
  onTabChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
