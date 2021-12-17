import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Badge from "@mui/material/Badge";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e70074",
        color: "#FFFFFF"
      },
    },
  });
  const Data = [
    { id: 0, text: "Beranda", icon: HomeOutlinedIcon },
    { id: 1, text: "Kategori", icon: CategoryOutlinedIcon },
    { id: 3, text: "Troli", icon: ShoppingCartOutlinedIcon },
    { id: 4, text: "Favorit Saya", icon: FavoriteBorderOutlinedIcon },
    { id: 5, text: "Chat Penjual", icon: SmsOutlinedIcon },
    { id: 6, text: "Layanan Pelanggan", icon: HeadsetMicOutlinedIcon },
    { id: 7, text: "Daftar Pesanan", icon: PlaylistAddCheckOutlinedIcon },
    { id: 8, text: "Cek Ongkir & Resi", icon: LocalShippingOutlinedIcon },
    { id: 9, text: "CS NANDA", icon: DuoOutlinedIcon },
  ];

  const drawer = (
    <div>
      <List
        style={{ backgroundColor: "#E70074", position: "sticky", top: "0px" }}
      >
        <ListItem className="p-0">
          <ListItemIcon>
            <AccountCircleOutlinedIcon
              style={{ fontSize: "85px", color: "grey" }}
            />
          </ListItemIcon>
          <ListItemText>
            <p className="text-light m-0">Roy</p>
            <p className="m-0 text-light">roy@gmail.com</p>
          </ListItemText>
        </ListItem>
      </List>
      <List>
        {Data.map((side, index) => (
          <ListItem button key={index} className="m-0 p-0 list">
            <ListItemIcon>
              {<side.icon fontSize="large" className=" my-2 mx-2" />}
            </ListItemIcon>
            <ListItemText primary={side.text} className="" />
            <Badge badgeContent={4} className="me-3" color="primary"></Badge>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
        style={{ color: "#E70074" }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth + 40,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default Sidebar;
