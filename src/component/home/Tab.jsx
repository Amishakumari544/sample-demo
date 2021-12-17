import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import MenuCategories from './MenuCategories';
import ShortcutMenu from './Shortcutmenu';
// import { Link } from 'react-router-dom';
export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e70074",
        color: "#FFFFFF"
      },
    },
  });
  const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #fff',
    '& .MuiTabs-indicator': {
      backgroundColor: '#fff',
    },
  }
  );
  
  const AntTab = styled((d) => <Tab disableRipple {...d} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
   
    '&.Mui-selected': {
      color: '#fff !important',
      textTransform:'uppercase !important',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#fff',
    },
  }));
  
  return (
    <ThemeProvider theme={theme}>
      {/* fixed-top */}
    <Box className='text-white ' sx={{ maxWidth: 480 }} bgcolor='primary.main'>
       
    <AntTabs value={value} onChange={handleChange} aria-label="ant example" variant="scrollable"
        scrollButtons="false"
        aria-label="scrollable">
     
      
        <AntTab label="Beranda" className='text-white text-uppercase' href="/home"   />
        <AntTab label="Tas Highquality" className='text-white text-uppercase' href="/productlist"   />
        <AntTab label="Tas Premium" className='text-white text-uppercase' href="/"   />
        <AntTab label="Sepatu" className='text-white text-uppercase' href="/"   />
        <AntTab label="Aksesories" className='text-white text-uppercase' href="/"   /> 
         <AntTab label="Dompet" className='text-white text-uppercase' href="/"   />
        
        
      </AntTabs>
    </Box>
    <MenuCategories />
    <ShortcutMenu />
    </ThemeProvider>
  );
}
