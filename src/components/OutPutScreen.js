import React, { useState, useContext } from 'react';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ColorModeContext } from '../context/ColorModeContext';


const ContainerBoxStyle = {
    height: '100%',
    p: 0,
    m: 0,
    width: '100%'
}


const OutPutScreen = (props) => {
    const { mode } = useContext(ColorModeContext)
    const [value, setValue] = useState("");
    const [currentMode, setCurrentMode] = useState(mode)
    React.useMemo(
        () => {
            setCurrentMode(mode)
        },
        [mode],
    );


    return (
        <Grid item xs={10}>

            <Box sx={ContainerBoxStyle}>
                <Stack spacing={2}>

                    <Paper elevation={10} >
                        <TextField
                            id="outlined-multiline-static"
                            label="Input Box"
                            multiline
                            minRows={20}
                            defaultValue="Text will be shown here."
                            value={value}
                            variant="filled"
                            style={{
                                width: '100%',
                                maxWidth: '98%',
                                background: currentMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'white',
                                color: currentMode === 'dark' ? 'white' : 'black',

                                fontSize: 15,
                                maxHeight: '600',
                                height: '70vh',

                                overflow: 'auto'
                            }}
                            onChange={(e) => setValue(e.target.value)}

                        />
                    </Paper>
                    <TextField
                        id="outlined-multiline-static"
                        label="Input Box"
                        multiline
                        minRows={10}
                        maxRows={10}
                        value={value}
                        defaultValue="Input here"
                        variant="filled"
                        style={{
                            width: '100%',
                            maxWidth: '98%',
                            background: currentMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'white',
                            color: currentMode === 'dark' ? 'white' : 'black',
                            fontSize: 15
                        }}
                        onChange={(e) => setValue(e.target.value)}

                    />

                </Stack>
            </Box>

        </Grid>
    );
}


export default OutPutScreen;

