import { Grid, Typography } from '@mui/material'
import { useContext } from 'react';
import { CartContext } from '../../context';
import { currency } from '../../utils';

export const OrderSummary = () => {

    const {numberOfItems,subTotal,tax,total} = useContext(CartContext)
    
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>Nro. Productos:</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent={'end'}>
            <Typography>{numberOfItems} {numberOfItems>1 ? 'Items': 'Item'}</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>SubTotal:</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent={'end'}>
            <Typography>{currency.format(subTotal)}</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) *100}%):</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent={'end'}>
            <Typography>{currency.format(tax)}</Typography>
        </Grid>

        <Grid item xs={6} sx={{mt:2}}>
            <Typography variant='subtitle1'>Total a Pagar:</Typography>
        </Grid>
        <Grid item xs={6} sx={{mt:2}} display='flex' justifyContent={'end'}>
            <Typography variant='subtitle1'>{currency.format(total)}</Typography>
        </Grid>

    </Grid>
  )
}
