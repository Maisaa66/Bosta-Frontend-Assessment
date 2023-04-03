import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: "#e30613",
    '&:hover': {
      backgroundColor: "#e30613",
    },
    borderRadius:"15px",
    fontSize:"0.8rem",
    padding:"10px 30px",
    fontWeight:600
  }));

export default function Complain() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', borderRadius:4 , border:"1px solid #eee"}} elevation={0}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , mx:2, textAlign:"center"}}>
          <Typography component="div" sx={{fontSize:"1.1rem", fontWeight:700}}>
          Is there a problem with your shipment?
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:"center", pl: 1, pb: 2 }}>
        <ColorButton variant="contained" >Report a problem</ColorButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="Images/complain.jpg"
        alt="Complain images"
      />
    </Card>
  );
}