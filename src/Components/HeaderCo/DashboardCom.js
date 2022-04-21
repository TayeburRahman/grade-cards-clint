import Box from '@mui/material/Box';
import React, { useState } from 'react';

const DashboardCom = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return (
        <div>
             <Box sx={{ width: '100%', typography: 'body1' }}>
                
             </Box>
        </div>
    );
};

export default DashboardCom