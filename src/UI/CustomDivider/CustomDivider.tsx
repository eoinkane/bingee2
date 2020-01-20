import React from "react";

import Divider from "@material-ui/core/Divider";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export interface CustomDividerProps {
    width?: number
}

const CustomDivider: React.FC<CustomDividerProps> = (props) => {        
    const theme = createMuiTheme({
        overrides: {
            // Style sheet name ⚛️
            MuiDivider: {
              // Name of the rule
              root: {
                // Some CSS
                margin: '5px 0',
                width: (props.width === 100 ? '100%' : `${props.width}%`),
                left: `${(100 - (props.width ? props.width : 0)) / 2}%`,
                position: 'relative',
              },
            },
          },
    })

    return (
        <ThemeProvider theme={theme}>
            <Divider />
        </ThemeProvider>
    );
}

const defaultProps: CustomDividerProps = {
    width: 100
}

CustomDivider.defaultProps = defaultProps;
 
export default CustomDivider;