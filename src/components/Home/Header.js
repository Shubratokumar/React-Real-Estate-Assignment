import { Box, Typography, Button, Stack, styled } from '@mui/material';
import React from 'react';

const Component = styled(Box)`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Header = () => {
    return (
        <Component>
            <Box>
                <Typography style={{fontSize: '24px', fontWeight: "600"}}>Estatery</Typography>
            </Box>
            <Stack direction="row" spacing={2}>
                <Button variant="contained">Rent</Button>
                <Button variant="outlined">Buy</Button>
                <Button variant="outlined">Sell</Button>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined">Login</Button>
                <Button variant="contained">Sign up</Button>
            </Stack>
        </Component>
    );
};

export default Header;