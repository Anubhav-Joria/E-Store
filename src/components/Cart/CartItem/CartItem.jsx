import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, OnRemoveItem, onUpdateCart }) => {
  const classes = useStyles();

//   const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCart(lineItemId, newQuantity);

//   const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => onUpdateCart(item.id, item.quantity - 1)}>-</Button>
          {/* <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button> */}
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => onUpdateCart(item.id, item.quantity + 1)} >+</Button>
          {/* <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button> */}
        </div>
        {/* <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button> */}
        <Button variant="contained" type="button" color="secondary" onClick={() => OnRemoveItem(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;