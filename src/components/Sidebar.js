import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useAppStore } from '../Navbar/Appstore';
import muiFooter from '../pages/Footer/Footer'

const drawerWidth = 280;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Footer = styled(muiFooter, {
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));


export default function Sidebar() {
    const theme = useTheme();
    // const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const open = useAppStore((state) => state.dopen)
    const [openn1, setOpen1] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(!openn1);
    };

    const [openn2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(!openn2);
    };

    const [openn3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
        setOpen3(!openn3);
    };

    const [openn4, setOpen4] = React.useState(false);

    const handleClick4 = () => {
        setOpen4(!openn4);
    };

    const [openn5, setOpen5] = React.useState(false);

    const handleClick5 = () => {
        setOpen5(!openn5);
    };

    return (
        <Box sx={{ display: 'flex'}} >
            <CssBaseline />
            <Box height={40}/>
            <Drawer 
                PaperProps={{
                    sx:{
                        color:"white",
                        backgroundColor: "#2a2b2b"
                    }
                }}
                variant="permanent" 
                open={open} >
                <DrawerHeader>
                    <IconButton>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {/* dashboard is listed into sidenav */}
                    {/* 1st */}

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={() => {
                                navigate('/dashboard')
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                            <InboxIcon/> {/*here is the icon*/}
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        
                    </ListItem>
                    {/* dashboard is listed into sidenav end*/}

                    {/* 2nd */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={() => {
                                navigate('/premiumreminderpage')
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon />
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='Premium Reminders' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    {/* 3rd */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={handleClick1}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon /> {/*here is the icon*/}
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='Customers' sx={{ opacity: open ? 1 : 0 }} />
                            {open ? openn1 ? <ExpandLess /> : <ExpandMore /> : !open}
                        </ListItemButton>
                        <Collapse in={openn1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => {
                                    navigate('/runningcustomers')
                                }} sx={{ pl: 3 }}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Running Customers" />
                                </ListItemButton>
                                <ListItemButton onClick={()=>{
                                    navigate('/allcustomers')
                                }} sx={{ pl: 3 }}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="All Customers" />
                                </ListItemButton>
                            </List>
                            {openn1 ? true : null}
                        </Collapse>
                    </ListItem>

                    {/* 4th */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={() => {
                                navigate('/newcustomer')
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon />
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='New Customer' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    {/* 5th */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={handleClick2}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon /> {/*here is the icon*/}
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='New LIC Policy' sx={{ opacity: open ? 1 : 0 }} />
                            {open ? openn2 ? <ExpandLess /> : <ExpandMore /> : !openn2}
                        </ListItemButton>
                        <Collapse in={openn2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton 
                                    onClick={() => {
                                        navigate('/newindividualpolicy')
                                    }}
                                sx={{ pl: 3 }}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="New Individual Policy" />
                                </ListItemButton>
                                <ListItemButton 
                                    onClick={() => {
                                        navigate('/newjointpolicy')
                                    }}
                                sx={{ pl: 3 }}
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="New Joint Policy" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>

                    {/* 6th */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={handleClick3}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon /> {/*here is the icon*/}
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='New GIC Policy' sx={{ opacity: open ? 1 : 0 }} />
                            {open ? openn3 ? <ExpandLess /> : <ExpandMore /> : !openn3}
                        </ListItemButton>
                        <Collapse in={openn3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton 
                                    onClick={() => {
                                        navigate('/newgindividualpolicy')
                                    }} 
                                sx={{ pl: 3 }}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="New Individual Policy" />
                                </ListItemButton>
                                <ListItemButton 
                                onClick={() => {
                                    navigate('/newgjointpolicy')
                                }}
                                sx={{ pl: 3 }}
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="New Joint Policy" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>

                    {/* 7th */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={() => {
                                navigate('/intimation')
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon />
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='Intimation' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    {/* 8th */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={handleClick4}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon /> {/*here is the icon*/}
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='Reports' sx={{ opacity: open ? 1 : 0 }} />
                            {open ? openn4 ? <ExpandLess /> : <ExpandMore /> : !openn4}
                        </ListItemButton>
                        <Collapse in={openn4} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        navigate('/clientdetailreport')
                                    }} 
                                sx={{ pl: 3 }}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Client Detail Report" />
                                </ListItemButton>
                                <ListItemButton 
                                    onClick={() => {
                                        navigate('/licpolicyreport')
                                    }}
                                sx={{ pl: 3 }}
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="LIC Policy Report" />
                                </ListItemButton>
                                <ListItemButton 
                                    onClick={() => {
                                        navigate('/gicpolicyreport')
                                    }}
                                sx={{ pl: 3 }}
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="GIC Policy Report" />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => {
                                        navigate('/premiumreminderreport')
                                    }}
                                 sx={{ pl: 3 }}
                                 >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Premium Reminder Report" />
                                </ListItemButton>
                                <ListItemButton 
                                    onClick={() => {
                                        navigate('/selfaccountreport')
                                    }}
                                sx={{ pl: 3 }}
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Self Account Report" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>

                    {/* 9th */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={handleClick5}

                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InboxIcon /> {/*here is the icon*/}
                            </ListItemIcon>
                            {/* list of sidenav element */}
                            <ListItemText primary='Settings' sx={{ opacity: open ? 1 : 0 }} />
                            {open ? openn5 ? <ExpandLess /> : <ExpandMore/> :null }
                        </ListItemButton>
                        <Collapse in={openn5} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    component="a"
                                    href="/changepassword"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderBottom: 'none',
                                        transition: 'border-bottom 0.3s ease',
                                        '&:hover': {
                                            borderBottom: 'none'
                                        },
                                    }}
                                sx={{ pl: 3 }}
                                >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    {/* <ListItemText primary="Change Password" /> */}
                                    <span>Change Password</span>
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => {
                                        navigate('/managegstrates')
                                    }} 
                                sx={{ pl: 3 }}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Manage GST Rates" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </ListItem>
                </List>
                <Footer/>
            </Drawer>
            
        </Box>
    );
}


// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa'
// import { BsGlobe } from 'react-icons/bs'
// import "rsuite/dist/rsuite.min.css";
// import { Sidenav, Nav } from 'rsuite';
// import { useNavigate } from 'react-router-dom';

// const styles = {
//     width: 240,
//     display: 'inline-table',
//     color: 'black',
//     marginRight: 10
// };

// const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
//     const navigate = useNavigate();

//     return (
//         <div style={styles}>
//             <Sidenav
//                 appearance={appearance}
//                 expanded={expanded}
//                 openKeys={openKeys}
//                 onOpenChange={onOpenChange}
//             >
//                 <Sidenav.Body>
//                     <Nav {...navProps}>
//                         <Nav.Item eventKey="1" onClick={
//                             () => {
//                                 navigate("/dashboard")
//                             }
//                         }>
//                             Dashboard
//                         </Nav.Item>
//                         <Nav.Item eventKey="2" onClick={
//                             () => {
//                                 navigate("/premiumreminderpage")
//                             }
//                         }>
//                             Premium Reminder Page
//                         </Nav.Item>
//                         <Nav.Item eventKey="3" onClick={
//                             () => {
//                                 navigate("/newcustomer")
//                             }
//                         }>
//                             New Customer
//                         </Nav.Item>
//                         <Nav.Menu eventKey="4" title="Customers" >
//                             <Nav.Item eventKey="4-1" onClick={
//                                 () => {
//                                     navigate("/runningcustomers")
//                                 }
//                             }>Running Customers</Nav.Item>
//                             <Nav.Item eventKey="4-2" onClick={
//                                 () => {
//                                     navigate("/allcustomers")
//                                 }
//                             }>All Customers</Nav.Item>
//                         </Nav.Menu>
//                         <Nav.Menu eventKey="5" title="New LIC Policy">
//                             <Nav.Item eventKey="5-1" onClick={
//                                 () => {
//                                     navigate("/newindividualpolicy")
//                                 }
//                             }>New Individual Policy</Nav.Item>
//                             <Nav.Item eventKey="5-2" onClick={
//                                 () => {
//                                     navigate("/newjointpolicy")
//                                 }
//                             }>New Joint Policy</Nav.Item>
//                         </Nav.Menu>
//                         <Nav.Menu eventKey="6" title="New GIC Policy">
//                             <Nav.Item eventKey="6-1" onClick={
//                                 () => {
//                                     navigate("/newgindividualpolicy")
//                                 }
//                             }>New Individual Policy</Nav.Item>
//                             <Nav.Item eventKey="6-2" onClick={
//                                 () => {
//                                     navigate("/newgjointpolicy")
//                                 }
//                             }>New Joint Policy</Nav.Item>
//                         </Nav.Menu>
//                         <Nav.Menu eventKey="7" title="Intimation">
//                             <Nav.Item eventKey="7-1" onClick={
//                                 () => {
//                                     navigate("/sentintimations")
//                                 }
//                             }>Sent Intimations</Nav.Item>
                           
//                         </Nav.Menu>
//                         <Nav.Menu eventKey="8" title="Settings">
//                             <Nav.Item eventKey="8-1" onClick={
//                                 () => {
//                                     navigate("/changepassword")
//                                 }
//                             }>Change Password</Nav.Item>
//                             <Nav.Item eventKey="8-2" onClick={
//                                 () => {
//                                     navigate("/managegstrates")
//                                 }
//                             }>Manage GST Rates</Nav.Item>
//                         </Nav.Menu>
//                         <Nav.Item eventKey="9" onClick={
//                             () => {
//                                 navigate("/reports")
//                             }
//                         }>
//                             Reports
//                         </Nav.Item>

//                     </Nav>
//                 </Sidenav.Body>
//             </Sidenav>
//         </div>
//     );
// };


// const Sidebar = () => {

//     const [activeKey, setActiveKey] = React.useState('1');
//     const [openKeys, setOpenKeys] = React.useState([]);
//     const [expanded, setExpand] = React.useState(true);
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);
//     // const menuItem = [
//     //     {
//     //         path: "/dashboard",
//     //         name: "Dashboard",
//     //     },
//     //     {
//     //         path: "/premiumreminderpage",
//     //         name: "Premium Reminder Page",
//     //     },
//     //     {
//     //         path: "/customers",
//     //         name: "Customers",
//     //     },
//     //     {
//     //         path: "/newcustomer",
//     //         name: "New Customer",
//     //     },
//     //     {
//     //         path: "/newlicpolicy",
//     //         name: "New LIC Policy",
//     //     },
//     //     {
//     //         path: "/newgicpolicy",
//     //         name: "New GIC Policy",
//     //     },
//     //     {
//     //         path: "/intimation",
//     //         name: "Intimation",
//     //     },
//     //     {
//     //         path: "/setting",
//     //         name: "Setting",
//     //     },
//     //     {
//     //         path: "/reports",
//     //         name: "Reports",
//     //     }
//     // ]
//     return (
//         <div className="container">
//             <div style={{ width: isOpen ? "240px" : "50px" }} className="sidebar">
//                 <div className="top_section">
//                     <h1 style={{ display: isOpen ? "block" : "none", whiteSpace: 'nowrap', color: 'white' }} className="logo">
//                         <BsGlobe />
//                         &nbsp;
//                         AUTO PULSE</h1>
//                     <div style={{ marginLeft: isOpen ? "30px" : "0px", color: 'white' }} className="bars">
//                         <FaBars onClick={toggle} />
//                     </div>
//                 </div>
//                 {
//                     <div>

//                         <div style={{ display: isOpen ? "block" : "none" }} className="link_text">

//                             <CustomSidenav
//                                 activeKey={activeKey}
//                                 openKeys={openKeys}
//                                 onOpenChange={setOpenKeys}
//                                 onSelect={setActiveKey}
//                                 onExpand={setExpand}
//                                 appearance="inverse"
//                             />
//                         </div>
//                         {/* <NavLink to="/dashboard" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"Dashboard"}
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/premiumreminderpage" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"Premium Reminder Page"}
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/customers" className="link" activeclassName="active">
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     <Nav>
//                                         <Nav.Menu placement="rightStart" eventKey="5"
//                                             title="Customers" >
//                                             <Nav.Item eventKey="4-1">Searching</Nav.Item>
//                                             <Nav.Item eventKey="4-2">Sorting</Nav.Item>
//                                             <Nav.Item eventKey="4-3">Greedy</Nav.Item>
//                                         </Nav.Menu>
//                                     </Nav>
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/newcustomer" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"New Customer"}
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/newlicpolicy" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"New LIC Policy"}
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/newgicpolicy" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"New GIC Policy"}
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/intimation" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"Intimation"}
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/setting" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"Setting"}
//                                 </div>
//                             </NavLink>

//                             <NavLink to="/reports" className="link" activeclassName="active" style={{ color: 'white' }}>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
//                                     {"Reports"}
//                                 </div>
//                             </NavLink> */}
//                     </div>
//                 }
//             </div>
//         </div >
//         // <div className="container">
//         //     <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
//         //         <div className="top_section">
//         //             <h1 style={{ display: isOpen ? "block" : "none", whiteSpace: 'nowrap' }} className="logo" >
//         //                 <BsGlobe />
//         //                 &nbsp;
//         //                 LIC Policy</h1>
//         //             <div style={{ marginLeft: isOpen ? "30px" : "0px" }} className="bars">
//         //                 <FaBars onClick={toggle} />
//         //             </div>
//         //         </div>
//         //         {
//         //             menuItem.map((item, index) => (
//         //                 <NavLink to={item.path} key={index} className="link" activeclassName="active">
//         //                     <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//         //                 </NavLink>
//         //             ))
//         //         }
//         //     </div>
//         //     <main>{children}</main>
//         // </div>
//     );
// };

// export default Sidebar;