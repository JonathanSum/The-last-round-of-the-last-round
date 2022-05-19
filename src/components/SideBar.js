import React from 'react';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import T1 from './T1'
const SideBarTheme = {
    // height: "300px",
    // backgroundColor: (theme) =>
    //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: '#AA336A',
    height: '100vh'
}

const SideBar = () => {
    return (
        <Grid item xs={2}>
            <Paper sx={SideBarTheme} elevation={3} >
                <T1 />
            </Paper>
        </Grid>
    );
};

export default SideBar;