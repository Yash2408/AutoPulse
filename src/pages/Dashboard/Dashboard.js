import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './Dashboard.css'
import { BsArrowUpRight } from 'react-icons/bs'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    table: {
        "& .MuiTableCell-root": {
            border: '1px solid #d9d9d9',
            backgroundColor:'#ffffff'
        }

    }
});

const columns = [
    { id: 'name', label: 'Name', minWidth: 350 },
    { id: 'first', label: '1st', minWidth: 30 },
    {
        id: 'second',
        label: '2nd',
        minWidth: 30,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'third',
        label: '3rd',
        minWidth: 30,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'check',
        label: 'check',
        minWidth: 30,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    }
];

function createData(name, first, second, third,check) {
    return { name, first, second, third,check };
}

const rows = [
    createData('Pareshbhai Babubhai Vaghasiya', 'IN', 13, 32),
    createData('Pareshbhai Babubhai Vaghasiya', 'CN', 14, 95),
    createData('Pareshbhai Babubhai Vaghasiya', 'IT', 60, 30),
    createData('Pareshbhai Babubhai Vaghasiya', 'US', 32, 98),
    createData('Pareshbhai Babubhai Vaghasiya', 'CA', 37, 99),
    createData('Pareshbhai Babubhai Vaghasiya', 'AU', 25, 78),
    createData('Pareshbhai Babubhai Vaghasiya', 'DE', 87, 35),
    createData('Pareshbhai Babubhai Vaghasiya', 'IE', 48, 70),
    createData('Pareshbhai Babubhai Vaghasiya', 'MX', 12, 19),
    createData('Pareshbhai Babubhai Vaghasiya', 'JP', 16, 37),
    createData('Pareshbhai Babubhai Vaghasiya', 'FR', 67, 64),
    createData('Pareshbhai Babubhai Vaghasiya', 'GB', 67, 24),
    createData('Pareshbhai Babubhai Vaghasiya', 'RU', 14, 17),
    createData('Pareshbhai Babubhai Vaghasiya', 'NG', 20, 92),
    createData('Pareshbhai Babubhai Vaghasiya', 'BR', 21, 85),
];


const PremiumReminder = () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const handleOpen = (value) => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    //table state and function
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [currentDate, setCurrentDate] = useState(new Date());


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    //table state and function ends

    // useEffect(() => {
        // const fetchReminderData = async () => {
        //     try {
        //         const response = await axios.get(
        //             `http://autopulse.arksoftai.com/reminder/premiumRemiders?clientId=9lmFTSAKFTd2E7OJZY2RGYCpHlb2`
        //         );
        //         console.log(response.data);
        //         setReminderData(response.data);
        //         setTableFilter(response.data);
        //     } catch (error) {
        //         console.log('Error fetching reminder data:', error);
        //     }
        // };

    //     fetchReminderData();
    // }, []);

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                {/* new sidebar start */}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1 }}>

                    {/* dashboard code start */}
                    <Grid xs={8} padding={4}>
                        <h3>Dashboard</h3>
                        <Box height={12} />
                        <Box sx={{ height: '13rem', width: '100%', border: '1px solid #d9d9d9', borderRadius: '10px' }}>
                            <Stack direction="row">
                                <Grid item xs={2} sx={{ width: '25%' }}>
                                    <div className='card-1'>
                                        <div className='content'>
                                            <h2 className='message-number'>28384</h2>
                                            <span className='message-text'>Total messages sent</span>
                                            <p>< BsArrowUpRight />&emsp;1.01% this week</p>
                                        </div>
                                    </div>
                                </Grid>
                                <div style={{ border: "1px solid #d9d9d9", height: '130px', margin: '40px 0 10px 0' }}></div>
                                <Grid item xs={2} sx={{ width: '25%' }}>
                                    <div className='card-1'>
                                        <div className='content'>
                                            <h2 className='message-number'>28384</h2>
                                            <span className='message-text'>Total messages sent</span>
                                            <p>< BsArrowUpRight />&emsp;1.01% this week</p>

                                        </div>
                                    </div>
                                </Grid>
                                <div style={{ border: "1px solid #d9d9d9", height: '130px', margin: '40px 0 10px 0' }}></div>
                                <Grid item xs={2} sx={{ width: '25%' }}>
                                    <div className='card-1'>
                                        <div className='content'>
                                            <h2 className='message-number'>28384</h2>
                                            <span className='message-text'>Total messages sent</span>
                                            <p>< BsArrowUpRight />&emsp;1.01% this week</p>

                                        </div>
                                    </div>
                                </Grid>
                                <div style={{ border: "1px solid #d9d9d9", height: '130px', margin: '40px 0 10px 0' }}></div>
                                <Grid item xs={2} sx={{ width: '25%' }}>
                                    <div className='card-1'>
                                        <div className='content'>
                                            <h2 className='message-number'>28384</h2>
                                            <span className='message-text'>Total messages sent</span>
                                            <p>< BsArrowUpRight />&emsp;1.01% this week</p>
                                        </div>
                                    </div>
                                </Grid>
                            </Stack>
                        </Box>
                        <Box>
                            <Box height={20} />
                            <Stack direction="row">
                                <Grid item xs={2} sx={{ width: '42%' }}>
                                    <Box sx={{ height: '31rem', width: '100%', border: '1px solid #d9d9d9', borderRadius: '5px' }}>
                                        {/* table start */}
                                        <Box height={50}>
                                            <Stack direction="row">
                                                <Grid item xs={2}>
                                                    <h6 style={{padding:'12%'}}>Date:{formattedDate}</h6>
                                                </Grid>
                                                <Grid>
                                                    <Box height={10}/>
                                                    <input placeholder='Search' style={{ height: '30px', marginInline: '100%'}} />
                                                </Grid>
                                            </Stack>
                                            
                                        </Box>
                                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                            <TableContainer sx={{ maxHeight: 392 }}>
                                                <Table stickyHeader aria-label="sticky table">
                                                    <TableHead>
                                                        <TableRow>
                                                            {columns.map((column) => (
                                                                <TableCell 
                                                                    key={column.id}
                                                                    align={column.align}
                                                                    style={{ minWidth: column.minWidth,
                                                                        backgroundColor:'#d9d9d9',
                                                                        fontStyle:'normal',
                                                                        fontWeight:'400',
                                                                        fontSize:'16px'
                                                                    }}
                                                                >
                                                                    {column.label}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody className={classes.table}>
                                                        {rows
                                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                            .map((row) => {
                                                                return (
                                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                        {columns.map((column) => {
                                                                            const value = row[column.id];
                                                                            return (
                                                                                <TableCell 
                                                                                key={column.id} 
                                                                                align={column.align}
                                                                                style={{
                                                                                    fontStyle:'normal',
                                                                                    fontWeight:'400',
                                                                                    fontSize:'15px'
                                                                                }}
                                                                                >
                                                                                    {column.format && typeof value === 'number'
                                                                                        ? column.format(value)
                                                                                        : value}
                                                                                </TableCell>
                                                                            );
                                                                        })}
                                                                    </TableRow>
                                                                );
                                                            })}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                            <TablePagination
                                                rowsPerPageOptions={[10, 25, 100]}
                                                component="div"
                                                count={rows.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                onPageChange={handleChangePage}
                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                            />
                                        </Paper>
                                        {/* table ends */}
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sx={{ width: '56.8%' }}>
                                    <Box sx={{ height: '16rem', width: '100%', border: '1px solid #d9d9d9', borderRadius: '10px',marginInline:'20px' }}>
                                        <h4 style={{paddingTop:'10px',paddingLeft:'30px'}}>Total Policies</h4>
                                        <Stack direction="row">
                                        <Grid item xs={1} sx={{ width: '50%' }}>
                                            <div className='card-1'>
                                                <div className='content'>
                                                    <h2 className='message-number'>28384</h2>
                                                    <span className='message-text'>Total messages sent</span>
                                                    <p>< BsArrowUpRight />&emsp;1.01% this week</p>

                                                </div>
                                            </div>
                                        </Grid>
                                        <div style={{ border: "1px solid #d9d9d9", height: '180px'}}></div>
                                        <Grid item xs={1} sx={{ width: '50%' }}>
                                            <div className='card-1'>
                                                <div className='content'>
                                                    <h2 className='message-number'>28384</h2>
                                                    <span className='message-text'>Total messages sent</span>
                                                    <p>< BsArrowUpRight />&emsp;1.01% this week</p>
                                                </div>
                                            </div>
                                        </Grid>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Stack>

                        </Box>
                    </Grid>

                    {/* <Box sx={{height:'50rem',width:'100rem',border:'1px solid black'}}>
                        box
                    </Box> */}

                    {/* <div>
                        <SearchBar />

                        <br />
                        <table style={{ width: '80%' }} className='table table-bordered '>
                            <thead>
                                <tr>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>1st</th>
                                    <th scope='col'>2nd</th>
                                    <th scope='col'>3rd</th>
                                    <th scope='col'>Policy Name</th>
                                    <th scope='col'>Premium amt.</th>
                                    <th scope='col'>Check</th>
                                </tr>
                            </thead>
                            <tbody>
                                {value.length > 0
                                    ? tableFilter.map((data) => {
                                        const timestamp = new Date(
                                            data.data.timestamp._seconds * 1000
                                        ).toLocaleDateString();

                                        return (
                                            <tr key={data.id}>
                                                <td scope='col'>{timestamp
                                                }</td>
                                                <td
                                                    scope='col'
                                                    onClick={() => {
                                                        navigate('/profile');
                                                    }}
                                                >
                                                    {data.data.name}
                                                </td>
                                                <td scope='col' style={{ width: '10vh' }}>
                                                    <input type='checkbox' name='reminder' />
                                                </td>
                                                <td scope='col' style={{ width: '10vh' }}>
                                                    <input type='checkbox' name='reminder' />
                                                </td>
                                                <td scope='col' style={{ width: '10vh' }}>
                                                    <input type='checkbox' name='reminder' />
                                                </td>
                                                <td scope='col'>{data.data.plicyName}</td>
                                                <td scope='col'>{data.data.duration}</td>
                                                <td scope='col'>
                                                    <Button
                                                        appearance='link'
                                                        onClick={() => handleOpen(data)}
                                                    >
                                                        Check
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    : reminderData.map((data) => {
                                        const timestamp = new Date(
                                            data.data.timestamp._seconds * 1000
                                        ).toLocaleDateString();

                                        return (
                                            <tr key={data.id}>
                                                <td scope='col'>{timestamp}</td>
                                                <td
                                                    scope='col'
                                                    onClick={() => {
                                                        navigate('/profile');
                                                    }}
                                                >
                                                    {data.data.name}
                                                </td>
                                                <td scope='col' style={{ width: '10vh' }}>
                                                    <input type='checkbox' name='reminder' />
                                                </td>
                                                <td scope='col' style={{ width: '10vh' }}>
                                                    <input type='checkbox' name='reminder' />
                                                </td>
                                                <td scope='col' style={{ width: '10vh' }}>
                                                    <input type='checkbox' name='reminder' />
                                                </td>
                                                <td scope='col'>{data.data.plicyName}</td>
                                                <td scope='col'>{data.data.duration}</td>
                                                <td scope='col'>
                                                    <Button
                                                        appearance='link'
                                                        onClick={() => handleOpen(data)}
                                                    >
                                                        Check
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div> */}
                    {/* dashboard code end */}
                </Box>
            </Box>

            {/* new sidebar end */}


        </>
    );
};

export default PremiumReminder;

// import React, { useState } from 'react'
// import Sidebar from '../../components/Sidebar'
// import { Button } from 'rsuite';
// import { Modal } from 'rsuite';
// import { Navigate, useNavigate } from 'react-router-dom';

// const PremiumRemider = () => {

//     const [open, setOpen] = React.useState(false);
//     const [size, setSize] = React.useState();
//     const handleOpen = value => {
//         setSize(value);
//         setOpen(true);
//     };
//     const handleClose = () => setOpen(false);

//     const navigate = useNavigate();

//     const dummyData = [{ "Date": '1-6-2023', "Name": "Francklin Ridd", "first": "+80", "second": "fridd0", "third": "Room 472", "Policy": "image/jpeg", "LIC": "false", "GIC": "true" },
//     { "Date": '2-6-2023', "Name": "Oriana Woolward", "first": "+88", "second": "owoolward", "third": "PO Box 17159", "Policy": "image/x-tiff", "LIC": "true", "GIC": "false" },
//     { "Date": '3-6-2023', "Name": "Sharon Knotte", "first": "+64", "second": "sknott", "third": "2nd Floor", "Policy": "video/avi", "LIC": "true", "GIC": "true" },
//     { "Date": '4-6-2023', "Name": "Ilyse Noble", "first": "+49", "second": "inoble", "third": "PO Box 80563", "Policy": "image/x-tiff", "LIC": "true", "GIC": "true" },
//     { "Date": '5-6-2023', "Name": "Krissy Piccard", "first": "+518", "second": "kpiccard4@jimdo.com", "third": "Apt 940", "Policy": "video/mpeg", "LIC": "false", "GIC": "true" },
//     { "Date": '6-6-2023', "Name": "Theressa Schlagman", "first": "+67", "second": "tschlagman5@cdc.gov", "third": "Room 1954", "Policy": "video/x-msvideo", "LIC": "false", "GIC": "false" },
//     { "Date": '7-6-2023', "Name": "Caroline Emm", "first": "+7", "second": "cemm6@berkeley.edu", "third": "Apt 243", "Policy": "image/png", "LIC": "false", "GIC": "true" },
//     { "Date": '8-6-2023', "Name": "Marleah Ingyon", "first": "+1", "second": "mingyon7@multiply.com", "third": "Apt 1849", "Policy": "image/jpeg", "LIC": "true", "GIC": "true" },
//     { "Date": '9-6-2023', "Name": "Anders Bridgewood", "first": "+84", "second": "abridgewood8@mit.edu", "third": "PO Box 25713", "Policy": "video/mpeg", "LIC": "true", "GIC": "true" },
//     { "Date": '0-6-2023', "Name": "Alberik Draxford", "first": "+367", "second": "adraxford9@unesco.org", "third": "13th Floor", "Policy": "video/mpeg", "LIC": "true", "GIC": "true" },
//     { "Date": '1-6-2023', "Name": "Jacquette Glendinning", "first": "+57", "second": "jglendinninga@princeton.edu", "third": "PO Box 4705", "Policy": "application/pdf", "LIC": "false", "GIC": "false" },
//     { "Date": '2-6-2023', "Name": "Cinda Pedican", "first": "+68", "second": "cpedicanb@comsenz.com", "third": "Apt 1892", "Policy": "video/quicktime", "LIC": "false", "GIC": "true" },
//     { "Date": '3-6-2023', "Name": "Casar O' Sullivan", "first": "+86", "second": "coc@imgur.com", "third": "Room 994", "Policy": "application/x-troff-msvideo", "LIC": "false", "GIC": "true" },
//     { "Date": '4-6-2023', "Name": "Minna Randerson", "first": "+316", "second": "mrandersond@printfriendly.com", "third": "Room 472", "Policy": "audio/mpeg3", "LIC": "false", "GIC": "true" },
//     { "Date": '5-6-2023', "Name": "Raye Tharme", "first": "+395", "second": "rtharmee@spiegel.de", "third": "15th Floor", "Policy": "application/excel", "LIC": "true", "GIC": "true" },
//     { "Date": '6-6-2023', "Name": "Koral Gahan", "first": "+44", "second": "kgahanf@europa.eu", "third": "PO Box 5696", "Policy": "image/x-tiff", "LIC": "true", "GIC": "false" },
//     { "Date": '7-6-2023', "Name": "L;urette Kiessel", "first": "+58", "second": "lkiesselg@stanford.edu", "third": "Room 1256", "Policy": "video/msvideo", "LIC": "true", "GIC": "true" },
//     { "Date": '8-6-2023', "Name": "Felice Chirm", "first": "+56", "second": "fchirmh@hexun.com", "third": "11th Floor", "Policy": "application/x-mspowerpoint", "LIC": "true", "GIC": "true" },
//     { "Date": '9-6-2023', "Name": "Beltran Janczyk", "first": "+53", "second": "bjanczyki@goo.ne.jp", "third": "Suite 14", "Policy": "application/vnd.ms-excel", "LIC": "true", "GIC": "false" },
//     { "Date": '0-6-2023', "Name": "Ethelin Lerway", "first": "+7", "second": "elerwayj@vinaora.com", "third": "2nd Floor", "Policy": "application/mspowerpoint", "LIC": "true", "GIC": "true" },
//     { "Date": '1-6-2023', "Name": "Dyane Adamec", "first": "+84", "second": "dadameck@senate.gov", "third": "3rd Floor", "Policy": "application/powerpoint", "LIC": "false", "GIC": "true" }
//     ]

//     const [value, setValue] = useState('');
//     const [dataSource, setDataSource] = useState(dummyData)
//     const [tableFilter, settableFilter] = useState([])

//     const filterData = (e) => {
//         if (e.target.value != "") {
//             setValue(e.target.value);
//             const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
//                 String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
//             ));
//             settableFilter([...filterTable])
//         } else {
//             setValue(e.target.value);
//             setDataSource([...dataSource])
//         }
//     }

//     return (
//         <div>
//             <p className='header'>Dashboard</p>
//             <Sidebar />
//             <div style={{ marginLeft: '250px', marginTop: '10px' }}>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td>
//                                 <input style={{ width: '40vh' }} type="text" value={value} placeholder='Search' onChange={filterData} />
//                             </td>
//                         </tr>
//                     </tbody>

//                 </table>


//                 <br />
//                 <table style={{ width: '80%'}} className="table table-bordered ">
//                     <thead >
//                         <tr>
//                             <th scope="col">Date</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">1st</th>
//                             <th scope="col">2nd</th>
//                             <th scope="col">3rd</th>
//                             <th scope="col">Policy Name</th>
//                             <th scope="col">Premium amt.</th>
//                             <th scope="col">Check</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {value.length > 0 ? tableFilter.map((data) => {
//                             return (
//                                 <tr>
//                                     <td scope="col">{data.Date}</td>
//                                     <td scope="col" onDoubleClick={() => {
//                                         navigate("/profile")
//                                     }}>{data.Name}</td>
//                                     <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
//                                     <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
//                                     <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
//                                     <td scope="col">{data.Policy}</td>
//                                     <td scope="col">{data.LIC}</td>
//                                     <td scope="col">
//                                         <Button color="blue" appearance="primary" size="lg" onClick={() => handleOpen('lg')}>Check</Button>
//                                         <Modal size={size} open={open} onClose={handleClose} style={{ marginLeft: '40vh', marginTop: '15vh' }}>
//                                             <Modal.Header>
//                                                 <Modal.Title style={{ backgroundColor: '#eeeeee' }}>Account Holder Name</Modal.Title>
//                                             </Modal.Header>
//                                             <hr />
//                                             <Modal.Body>
//                                                 <p>1.Reminder sent :-  &emsp;&emsp;&emsp;&emsp; 1st : <input type="radio" name="reminder-modal" />&emsp; 2nd : <input type="radio" name="reminder-modal" />&emsp; 3rd : <input type="radio" name="reminder-modal" /></p>
//                                                 <p>2.Premium received  :-&emsp;&emsp; &nbsp;Cash : <input type="radio" name="pay" />&emsp; Check : <input type="radio" name="pay" />&emsp; UPI : <input type="radio" name="pay" />  </p>
//                                                 <p>3.Premium Paid :- &emsp;&emsp;&emsp;&emsp;&nbsp;   <input type="checkbox" />  </p>
//                                                 <p>4.New Policy renewed:-  &emsp;&emsp; <input type="checkbox" /> </p>
//                                                 <p>5.Data Updated :-  &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<input type="checkbox" />  </p>

//                                             </Modal.Body>
//                                             <Modal.Footer>

//                                             </Modal.Footer>
//                                         </Modal>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                             :
//                             dataSource.map((data) => {
//                                 return (
//                                     <tr>
//                                         <td scope="col">{data.Date}</td>
//                                         <td scope="col" onDoubleClick={() => {
//                                             navigate("/profile")
//                                         }}>{data.Name}</td>
//                                         <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
//                                         <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
//                                         <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
//                                         <td scope="col">{data.Policy}</td>
//                                         <td scope="col">{data.LIC}</td>
//                                         <td scope="col">
//                                             <Button color="blue" appearance="primary" size="sm" onClick={() => handleOpen('sm')}>Check</Button>
//                                             <Modal size={size} open={open} onClose={handleClose} style={{ marginLeft: '40vh', marginTop: '15vh' }}>
//                                                 <Modal.Header>
//                                                     <Modal.Title style={{ backgroundColor: '#eeeeee' }}>Account Holder Name</Modal.Title>
//                                                 </Modal.Header>
//                                                 <hr />
//                                                 <Modal.Body>
//                                                     <p>1.Reminder sent :-  &emsp;&emsp;&emsp;&emsp; 1st : <input type="radio" name="reminder-modal" />&emsp; 2nd : <input type="radio" name="reminder-modal" />&emsp; 3rd : <input type="radio" name="reminder-modal" /></p>
//                                                     <p>2.Premium received  :-&emsp;&emsp; &nbsp;Cash : <input type="radio" name="pay" />&emsp; Check : <input type="radio" name="pay" />&emsp; UPI : <input type="radio" name="pay" />  </p>
//                                                     <p>3.Premium Paid :- &emsp;&emsp;&emsp;&emsp;&nbsp;   <input type="checkbox" />  </p>
//                                                     <p>4.New Policy renewed:-  &emsp;&emsp; <input type="checkbox" /> </p>
//                                                     <p>5.Data Updated :-  &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<input type="checkbox" />  </p>

//                                                 </Modal.Body>
//                                                 <Modal.Footer>

//                                                 </Modal.Footer>
//                                             </Modal>
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default PremiumRemider