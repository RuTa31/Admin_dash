import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Doughnut, Bar } from 'react-chartjs-2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const data = {
    labels: ["Red", "Blue", "Yellow", "green", "Purple", "Orange"],
    datasets: [{
        data: [12, 2, 19, 13, 16]
    }]
}

const Chart = () => {
  return (
      <Grid container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
         spacing={4} >
        <Grid item xs={2.5}>
          <Item sx={{height: 134, width: 258}}>xs=8</Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item sx={{height: 134, width: 258}}>xs=8</Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item sx={{height: 134, width: 258}}>xs=4</Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item sx={{height: 134, width: 258}}>xs=8</Item>
        </Grid>
        <Grid item xs={100}>
          <Item sx={{height: 400, width: '100%'}}>
            asda
            {/* <Doughnut  data={data}/> */}
          </Item>
        </Grid>
        <Grid item xs={100}>
          <Item sx={{height: 134, width:'100%'}}>xs=8</Item>
        </Grid>
      </Grid>
  );
}
export default Chart;
