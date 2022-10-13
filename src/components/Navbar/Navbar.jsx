import React from 'react'

import { AppBar, Typography,  Toolbar, IconButton,Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link , useLocation} from 'react-router-dom'


import useStyles from './styles'

const Navbar = ({ totalItems }) => {

    const classes = useStyles();
    const location= useLocation();

  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit' >

            <Toolbar>

         
                <Typography component={Link} to= "/" variant='h6' color='inherit' className={classes.title}>
                    <img src= "https://image.shutterstock.com/image-photo/image-260nw-611143775.jpg" alt="e-commerce" className={classes.image} height="25px" />
                    E-store
                </Typography>

                
                <div className={classes.grow} />

                {location.pathname === "/" && (
                <div className={classes.button}>
                    <IconButton component={Link} to= "/cart" aria-label='Show Items' color='inherit'>
                        <Badge overlap="rectangular" badgeContent={ totalItems  } color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                </div>
                )}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar