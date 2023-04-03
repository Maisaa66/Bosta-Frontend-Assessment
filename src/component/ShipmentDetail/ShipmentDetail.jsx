import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import "./ShipmentDetail.css"
import { List, ListItem } from '@mui/material';
import ProgressBar from '../../ProgressBar/ProgressBar';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

const card = (
<List>
    <ListItem divider>
    <table className="table table-borderless divider" >
      <thead>
    <tr className='text-secondary'>
      <th scope="col">Shipment No.</th>
      <th scope="col">Last Update</th>
      <th scope="col">Shipper Name</th>
      <th scope="col">Due Date</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">1</th>
      <td>الاثنين</td>
      <td>Otto</td>
      <td>Otto</td>
    </tr>

  </tbody>
</table>

    </ListItem>
    <ListItem >
        <ProgressBar></ProgressBar>
    </ListItem>
</List>
  
);

export default function ShipmentDetail() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ padding:"10px", borderRadius:"15px" }}>{card}</Card>
    </Box>
  );
}