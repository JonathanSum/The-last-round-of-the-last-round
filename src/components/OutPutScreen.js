import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ScreenBoard from './ScreenBoard'


const ShowScreenTheme = {
    maxHeight: '75vh',
    height: '75vh',
    // backgroundColor: (theme) =>
    //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: 'yellow',
    overflow: 'auto'

}
const InputBoxContain = {
    //     height: "500 %",
    // backgroundColor: (theme) =>
    //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: 'pink',
    height: '100%',
    // width: '100%'
}
const InputBox = {
    height: "500 %",
    // backgroundColor: (theme) =>
    //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: 'pink',
    // height: '100%',
    width: '3000'
}
const t1 = {
    //     height: "500 %",
    // backgroundColor: (theme) =>
    //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: '#AA336A',
    height: '100%',
    p: 0,
    m: 0,
    width: '100%'
}


const OutPutScreen = (props) => {

    const [value, setValue] = useState(props.value);
    return (
        <Grid item xs={10}>

            <Box sx={t1}>
                <Stack spacing={2}>

                    <Paper sx={ShowScreenTheme} elevation={10} > {value}</Paper>
                    <TextareaAutosize
                        sx={InputBox}
                        minRows={10}
                        maxRows={10}
                        aria-label="Input Area"
                        placeholder="Input Here"
                        defaultValue={value}
                        style={{
                            width: '100%',
                            maxWidth: '98%'
                        }}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Stack>
            </Box>

        </Grid>
    );
}


export default OutPutScreen;

{/* <Paper sx={InputBox} elevation={3} > Hello?</Paper> */ }