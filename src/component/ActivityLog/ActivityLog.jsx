import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import {  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.common.white,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ActivityLog() {
  const { t , i18n} = useTranslation();

  const [data, setData] = React.useState([])
  const shipmentDetail = useSelector((state)=>state.shipmentDetail);

  const transitEvents = shipmentDetail.TransitEvents;

  let newData = [];
  useEffect(()=>{
    if(shipmentDetail){

      newData=[...transitEvents];

      let previousHub = shipmentDetail.provider;

      for(let i=0;i<newData.length;i++){
        newData[i]=JSON.parse(JSON.stringify(newData[i]));
        if(newData[i].hub){
          previousHub=newData[i].hub;
        }
        else{
          newData[i].hub=previousHub;
        }
      }
      console.log(newData);
      setData(newData);
    }
  }, [shipmentDetail]);

  console.log(data);

  
  return (
<>

<Typography
          sx={{ flex: '1 1 100%' , mb:2, ml:1,fontWeight:700}}
          
          id="tableTitle"
          component="div"
          
        >
         {t("Shipment Details")}
        </Typography>
<TableContainer component={Paper} sx={{borderRadius:"15px"}} dir="rtl">
      <Table sx={{ minWidth: 700}} aria-label="customized table" dir="rtl">
        <TableHead>
          <TableRow sx={{color:"red"}}>
            <StyledTableCell >{t(`Branch`)}</StyledTableCell>
            <StyledTableCell >{t("Date")}</StyledTableCell>
            <StyledTableCell >{t("Time")}</StyledTableCell>
            <StyledTableCell >{t("Details")}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow  key={row.timestamp}>
              <StyledTableCell >{t(`${row.hub}`)}</StyledTableCell>
              <StyledTableCell >{t(`${new Date(row.timestamp).toLocaleDateString()}`)}</StyledTableCell>
              <StyledTableCell >{t(`${new Date(row.timestamp).toLocaleTimeString()}`)}</StyledTableCell>
              <StyledTableCell >{t(`${row.state.split("_").join(" ")}`)}</StyledTableCell>
              {/* <StyledTableCell >{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</>
  );
}