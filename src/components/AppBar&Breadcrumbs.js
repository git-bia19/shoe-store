import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomizedBreadcrumbs from './Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color:{
  backgroundColor: "black",
  }
}));

export default function AppBarBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={require('../components/chanel-logo.png')} alt= "logo" width = "80" height ="90" align = "center" /> 
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomizedBreadcrumbs ></CustomizedBreadcrumbs>
      </div>
  );
}

