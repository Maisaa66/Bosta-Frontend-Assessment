import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import "./ShipmentDetail.css"
import { List, ListItem } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);


export default function ShipmentDetail() {
  const shipmentDetail = useSelector((state)=>state.shipmentDetail);

  const dateStamp = new Date(shipmentDetail.CurrentStatus.timestamp);
  const promisedDate = new Date(shipmentDetail.PromisedDate);
  console.log(promisedDate);
  const timeStamp =[dateStamp.toLocaleString('en-us', {weekday: 'long'}), dateStamp.toLocaleDateString() ,"at", dateStamp.toLocaleTimeString()].join(" ");
  const estimatedArrival = [promisedDate.getDate(),promisedDate.toLocaleString('en-us', {weekday: 'long'}),promisedDate.getFullYear() ].join(" ") ;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ padding:"10px", borderRadius:"15px" }}>

      <List>
    <ListItem divider>
    <table className="table table-borderless divider" >
      <thead>
    <tr className='text-secondary'>
      <th scope="col">Shipment No. {shipmentDetail.TrackingNumber}</th>
      <th scope="col">Last Update </th>
      <th scope="col">Provider Name </th>
      <th scope="col">Promise Date</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">{shipmentDetail.CurrentStatus.state}</th>
      <td>{timeStamp}</td>
      <td>{shipmentDetail.CurrentStatus.state}</td>
      <td>{estimatedArrival}</td>
    </tr>

  </tbody>
</table>

    </ListItem>
    <ListItem >
        <ProgressBar></ProgressBar>
    </ListItem>
</List>

      </Card>
    </Box>
  );
}