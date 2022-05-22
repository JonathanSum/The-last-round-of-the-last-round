import { createContext } from 'react';


export const ColorModeContext
    = createContext({
        toggleColorMode: () => {
            console.log("Calling Me")
        }
    });

