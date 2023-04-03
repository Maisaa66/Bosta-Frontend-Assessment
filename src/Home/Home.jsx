import React from 'react';
import ShipmentDetail from '../component/ShipmentDetail/ShipmentDetail';
import { List, ListItem } from '@mui/material';

const Home = () => {
    return (
        <div className='container mt-5'> 

            <div className='row'>
                <div className='col-12 '>
             
                <ShipmentDetail></ShipmentDetail>
                
                </div>
            </div>

        </div>
    );
};

export default Home;