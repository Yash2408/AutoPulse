import React, { useState,useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';


const Allcustomers = () => {

    const navigate = useNavigate();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, runningData] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const fetchReminderData = async () => {
            try {
                const response = await axios.get(
                    'https://autopulse.arksoftai.com/users/runningCustomer?clientId=9lmFTSAKFTd2E7OJZY2RGYCpHlb2'
                );
                console.log(response.data);
                runningData(response.data);
            } catch (error) {
                console.log('Error fetching reminder data:', error);
            }
        };

        fetchReminderData();
    }, []);


    return (
        <>
            <Navbar />
            <Box height={40} />
            <Box sx={{ display: 'flex' }}>
                {/* new sidebar start */}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Grid xs={12} padding={3}>
                        <h3>Customers / <span style={{ color: '#3bd615' }}>Running Customers</span></h3>
                        <Box height={20} />
                        {/* table start */}
                        <Paper sx={{ padding: '2%', width: '100%', overflow: 'hidden', border: '1px solid #d9d9d9', boxShadow: 'none' }}>
                            <Box height={50}>
                                <Stack direction="row">
                                        <div style={{width:'50%'}}>
                                            <input placeholder='Search by Name' style={{ height: '2rem', width: '100%', border: '1px solid #d9d9d9', borderRadius: '5px' }} />
                                        </div>
                                        <div style={{width:'50%'}}>
                                        <button style={{ float: 'right',backgroundColor:'#3bd615',width:'30%',color:'black',fontWeight:'700',height:'40px',borderRadius:'10px' }}>
                                            Add New Customer
                                        </button>
                                        </div>
                                </Stack>
                            </Box>
                            <Box height={10} />

                            <TableContainer sx={{ maxHeight: 418 }}>
                                <Table stickyHeader aria-label="sticky table">   
                                    <table style={{ border: '1px solid #d9d9d9', width: '100%' }}>
                                        <thead>
                                            <tr style={{ height: '50px', backgroundColor: '#f9f9f9' }}>
                                                <th style={{ textAlign: 'center' }}>UID</th>
                                                <th style={{ textAlign: 'center' }}>Name</th>
                                                <th style={{ textAlign: 'center' }}>Mobile No.</th>
                                                <th style={{ textAlign: 'center' }}>Email</th>
                                                <th style={{ textAlign: 'center' }}>Address</th>
                                                <th style={{ textAlign: 'center' }}>Docs</th>
                                                <th style={{ textAlign: 'center' }}>LIC</th>
                                                <th style={{ textAlign: 'center' }}>GIC</th>
                                                <th style={{ textAlign: 'center' }}>All</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse' }}>
                                            {data
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((data) => {
                                                    return (
                                                        <tr style={{ height: '45px' }}>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.uid}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.name}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.mobiel}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.email}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.personal.address}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.noplic}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.nopgic}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.nopgic}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.nopgic}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>                                 
                                </Table>
                            </TableContainer>
                            <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                        {/* table ends */}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Allcustomers