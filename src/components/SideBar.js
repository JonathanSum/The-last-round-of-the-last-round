import React, { useContext } from 'react';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';

import Switch from '@mui/material/Switch';
import { ColorModeContext } from '../context/ColorModeContext'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const SideBarTheme = {
    p: 2,
    height: '100vh'
}

const SideBar = () => {
    const { mode, setMode } = useContext(ColorModeContext)

    const handleSwitch = () => {

        if (mode === "dark") {
            setMode('light')
        } else {
            setMode('dark')
        }
    }
    return (
        <Grid item xs={2}>
            <Paper sx={SideBarTheme} elevation={3} >
                <FormGroup>
                    <FormControlLabel control={
                        <Switch
                            checked={mode === 'dark'}
                            onChange={handleSwitch}
                            inputProps={{ 'aria-label': 'dark mode' }}
                            color="secondary"
                        />
                    } label="Dark Mode" />
                </FormGroup>
            </Paper>
        </Grid>
    );
};

export default SideBar;