import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarBreadcrumbs from './AppBar&Breadcrumbs';
import ButtonBases from './shopnow.js'
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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarBreadcrumbs></AppBarBreadcrumbs>
      <div className ="back">
       <br></br> <img src={require('../components/chanel.gif')} alt= "N.5" width = '150%' height ="500" align="center" ></img>
       <br></br><br></br><br></br>
    <div  className ="back">
    <ButtonBases></ButtonBases>
    </div>
     </div>
     </div>
  );
}

