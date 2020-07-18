import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[400],
    height: theme.spacing(3),
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); 

function handleClick(event) {
  event.Link();
}

export default function CustomizedBreadcrumbs() {

  return (
    <div>
    <Breadcrumbs aria-label="breadcrumb" >
      <StyledBreadcrumb
        component={Link}
        to="/Home"
        label=" &nbsp; H O M E"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      ></StyledBreadcrumb> 
      <StyledBreadcrumb component= {Link} to="/About" label="A B O U T &nbsp; C H A N E L" onClick={handleClick}  ></StyledBreadcrumb>
      <StyledBreadcrumb
        label="P R O D U C T S "
        component= {Link}
        to ="/Products"
        onClick={handleClick}
      ></StyledBreadcrumb>
       <StyledBreadcrumb component={Link} to="/Contact" label="C O N T A C T &nbsp; U S" onClick={handleClick} />
    </Breadcrumbs>
    </div>
  );
}