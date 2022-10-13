import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { RateReviewRounded } from '@material-ui/icons';

const Review = ({ checkoutToken }) => (
  <>
    {/* <h1>revire</h1> */}
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {checkoutToken.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" fontWeight= "700" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;