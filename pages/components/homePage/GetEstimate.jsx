import { Button, Typography } from '@mui/material';
import { Box} from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';
import PriceQuote from '../common/PriceQuote';
import classes from './styles/GetEstimate.module.css'
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({

}));

const GetEstimate = () => {
return (
<div className={classes.root}>
<div className={classes.container}>
<Box className={classes.contentContainer}>
<Box className={classes.contentsubContainer}>
<div>
<Typography className={classes.title}>
Get our services at very affordable prices
</Typography>
</div>
<div>
<Typography className={classes.description}>
Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
dui. Vestrae; Donec velit neque, auctor sit amet aliquam vel,
ullamcorper sit amet ligula.
</Typography>
</div>
<div style={{paddingTop:'20px'}}>
<Link href="/plans" >
<Button className={classes.button}>Request a Quote</Button>
</Link>
</div>
</Box>

</Box>

<Box className={classes.quoteContainer}>
<PriceQuote />
</Box>
</div>
</div>
);
};

export default GetEstimate;