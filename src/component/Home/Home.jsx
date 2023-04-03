import React from 'react';
import ShipmentDetail from '../ShipmentDetail/ShipmentDetail';
import { List, ListItem } from '@mui/material';
import ActivityLog from '../ActivityLog/ActivityLog';
import ClientDetail from '../ClientDetail/ClientDetail';

const Home = () => {
    return (
        <div className='container mt-5'> 

            <div className='row'>
                <div className='col-12 '>
             
                <ShipmentDetail></ShipmentDetail>
                
                </div>
            </div>

            <div className='row my-5'>
                <div className='col-md-8 col-sm-12 '>
             
                <ActivityLog></ActivityLog>
                
                </div>

                <div className='col-md-4 col-sm-12 mt-sm-5 mt-md-0'>
                    <ClientDetail></ClientDetail>
                </div>
            </div>
        </div>
    );
};

export default Home;