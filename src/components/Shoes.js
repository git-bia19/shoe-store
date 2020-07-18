import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import tileData from './tileData';
import  Breadcrumbs  from '@material-ui/core/Breadcrumbs';  
import {Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import { emphasize, withStyles } from '@material-ui/core/styles';
 let prod =1;
 let product;

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
  
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
   backgroundImage: "marble.jpg",
  },
  gridList: {
    width: 900,
    height: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function handleChange () {
  product =prod++;
alert("Added to Cart  :"  + product + " " + "item/s")
}
function handleClick(event) {
    event.Link();
  }
export default function Shoes() {
  const classes = useStyles();

  return (
    <div >
    <Breadcrumbs>
    <StyledBreadcrumb  component={Link}
      to="/Products"
      label=" &nbsp;  BACK "
      onClick={handleClick}  ></StyledBreadcrumb>
      </Breadcrumbs>
    <div className={classes.root}>
      <GridList cellHeight={270} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">S H O E S</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.url}>
            <img src={tile.url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Price: {tile.price} <br></br>Description: {tile.descript}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <ShoppingCartIcon onClick ={handleChange} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}
