import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import "./ShipmentDetail.css"
import { List, ListItem } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'


export default function ShipmentDetail() {
  const { t, i18n } = useTranslation();

  const shipmentDetail = useSelector((state)=>state.shipmentDetail);

  const dateStamp = new Date(shipmentDetail.CurrentStatus.timestamp);
  let estimatedArrival="No due date";
  if(shipmentDetail.PromisedDate){
    const promisedDate = new Date(shipmentDetail.PromisedDate);
     estimatedArrival = [promisedDate.getDate(),promisedDate.toLocaleString('en-us', {weekday: 'long'}),promisedDate.getFullYear() ].join(" ") ;

  }
  console.log(estimatedArrival);
  const timeStamp =[dateStamp.toLocaleString('en-us', {weekday: 'long'}), dateStamp.toLocaleDateString() ,"at", dateStamp.toLocaleTimeString()].join(" ");

  return (
    <Box sx={{ minWidth: 275 }} >
      <Card variant="outlined" sx={{ padding:"10px", borderRadius:"15px" }}>

      <List>
    <ListItem divider>
    <table className="table table-borderless divider" dir={i18n.dir()}>
      <thead>
    <tr className='text-secondary'>
      <th scope="col">{t("Shipment Number")} {shipmentDetail.TrackingNumber}</th>
      <th scope="col">{t("Last Update")} </th>
      <th scope="col">{t("Provider Name")} </th>
      <th scope="col">{t("Promise Date")}</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">{t(`${shipmentDetail.CurrentStatus.state}`)}</th>
      <td>{t(`${timeStamp}`)}</td>
      <td>{t(`${shipmentDetail.provider}`)}</td>
      <td>{t(`${estimatedArrival}`)}</td>
    </tr>

  </tbody>
</table>

    </ListItem>
    <ListItem  >
        <ProgressBar></ProgressBar>
    </ListItem>
</List>

      </Card>
    </Box>
  );
}