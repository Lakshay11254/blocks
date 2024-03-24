//components/header.jsx

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = (props) => {
    const { icon: Icon, title, headerSize } = props; 

    return (
        <Box
            sx={{
                display: 'flex', 
                alignItems: 'center',
                padding: '20px',
            }}
        >
            {Icon && <Icon sx={{ marginRight: 2 }} />} 
            <Typography variant={headerSize}>
                {title}
            </Typography>
        </Box>
    );
};

export default Header;
