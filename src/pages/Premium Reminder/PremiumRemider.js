import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import { BsBoxArrowUpRight } from 'react-icons/bs'
import MaterialTable from 'material-table'
import axios from 'axios';

const columns = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 350,
        align: 'left',
    },
    {
        id: 'first',
        label: '1st',
        minWidth: 30,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'second',
        label: '2nd',
        minWidth: 30,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'third',
        label: '3rd',
        minWidth: 30,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'policyname', label: 'Policy Name', minWidth: 30 },
    {
        id: 'premiumamount',
        label: 'Premium Amount',
        minWidth: 30,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'policynumber',
        label: 'Policy Number',
        minWidth: 30,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'sumassured',
        label: 'Sum Assured',
        minWidth: 30,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'policy',
        label: 'Policy',
        minWidth: 30,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'check', label: 'Check', minWidth: 30 },
];


const PremiumRemider = () => {

    // old code start

    // const [open, setOpen] = React.useState(false);
    // const [size, setSize] = React.useState();

    // const handleOpen = value => {
    //     setSize(value);
    //     setOpen(true);
    // };
    // const handleClose = () => setOpen(false);

    // const navigate = useNavigate();

    // const dummyData = [{ "Date": 1, "Name": "Francklin Ridd", "first": "", "GIC": "true" },
    // { "Date": 2, "Name": "Oriana Woolward", "first": "": "true", "GIC": "false" },
    // { "Date": 3, "Name": "Sharon Knotte", "first": ", "GIC": "true" },
    // { "Date": 4, "Name": "Ilyse Noble", "first": ""true", "GIC": "true" },
    // { "Date": 5, "Name": "Krissy Piccard", "first": ""LIC": "false", "GIC": "true" },
    // { "Date": 6, "Name": "Theressa Schlagman", "first": "deo", "LIC": "false", "GIC": "false" },
    // { "Date": 7, "Name": "Caroline Emm", "first": "": "false", "GIC": "true" },
    // { "Date": 8, "Name": "Marleah Ingyon", "first": " "LIC": "true", "GIC": "true" },
    // { "Date": 9, "Name": "Anders Bridgewood", "first": "eg", "LIC": "true", "GIC": "true" },
    // { "Date": 10, "Name": "Alberik Draxford", "first": "eg", "LIC": "true", "GIC": "true" },
    // { "Date": 11, "Name": "Jacquette Glendinning", "first": "plication/pdf", "LIC": "false", "GIC": "false" },
    // { "Date": 12, "Name": "Cinda Pedican", "first": "time", "LIC": "false", "GIC": "true" },
    // { "Date": 13, "Name": "Casar O' Sullivan", "first": "-msvideo", "LIC": "false", "GIC": "true" },
    // { "Date": 14, "Name": "Minna Randerson", "first": "dio/mpeg3", "LIC": "false", "GIC": "true" },
    // { "Date": 15, "Name": "Raye Tharme", "first": "n/excel", "LIC": "true", "GIC": "true" },
    // { "Date": 16, "Name": "Koral Gahan", "first": "", "LIC": "true", "GIC": "false" },
    // { "Date": 17, "Name": "L;urette Kiessel", "first": "ideo", "LIC": "true", "GIC": "true" },
    // { "Date": 18, "Name": "Felice Chirm", "first": "-mspowerpoint", "LIC": "true", "GIC": "true" },
    // { "Date": 19, "Name": "Beltran Janczyk", "first": "nd.ms-excel", "LIC": "true", "GIC": "false" },
    // { "Date": 20, "Name": "Ethelin Lerway", "first": "mspowerpoint", "LIC": "true", "GIC": "true" },
    // { "Date": 21, "Name": "Dyane Adamec", "first": "powerpoint", "LIC": "false", "GIC": "true" }
    // ]

    // const [value, setValue] = useState('');
    // const [dataSource, setDataSource] = useState(dummyData)
    // const [tableFilter, settableFilter] = useState([])

    // const filterData = (e) => {
    //     if (e.target.value != "") {
    //         setValue(e.target.value);
    //         const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
    //             String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
    //         ));
    //         settableFilter([...filterTable])
    //     } else {
    //         setValue(e.target.value);
    //         setDataSource([...dataSource])
    //     }
    // }

    // const [radioState, setRadioState] = useState({
    //     aboveRadio1: false,
    //     aboveRadio2: false,
    //     aboveRadio3: false,
    //     belowRadio: false,
    // });

    // const handleAboveRadioChange = (radioName) => {
    //     setRadioState((prevRadioState) => ({
    //         ...prevRadioState,
    //         [radioName]: !prevRadioState[radioName],
    //     }));
    // };

    // const handleBelowRadioChange = () => {
    //     setRadioState((prevRadioState) => ({
    //         ...prevRadioState,
    //         aboveRadio1: false,
    //         aboveRadio2: false,
    //         aboveRadio3: false,
    //         belowRadio: true,
    //     }));
    // };

    //old code ends

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [data, setData] = useState([]);
    const [val,searchValue] = useState('');
    
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
                    'http://autopulse.arksoftai.com/reminder/premiumRemiders?clientId=9lmFTSAKFTd2E7OJZY2RGYCpHlb2'
                );
                console.log(response.data);
                setData(response.data);
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
                    {/* PremiumRemider code start */}

                    <Grid xs={8} padding={3}>
                        <h3>Premium Reminders</h3>
                        <Box height={20} />

                        {/* table start */}
                        <Paper sx={{ padding: '2%', width: '90%', overflow: 'hidden', border: '1px solid #d9d9d9', boxShadow: 'none',borderRadius:'10px' }}>
                            <Box height={50}>
                                <Stack>
                                    <div style={{ width: '50%' }}>
                                        <input placeholder='Search by Name' style={{ height: '2rem', width: '100%', border: '1px solid #d9d9d9', borderRadius: '5px' }} />
                                    </div>
                                </Stack>
                            </Box>
                            <Box height={10} />

                            <TableContainer sx={{ maxHeight: '490px' }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <table style={{ border: '1px solid #d9d9d9', width: '100%' }}>
                                        <thead>
                                            <tr style={{height:'50px',backgroundColor:'#f9f9f9' }}>
                                                <th style={{textAlign:'center'}}>Name</th>
                                                <th style={{textAlign:'center'}}>1st</th>
                                                <th style={{textAlign:'center'}}>2nd</th>
                                                <th style={{textAlign:'center'}}>3rd</th>
                                                <th style={{textAlign:'center'}}>Policy Name</th>
                                                <th style={{textAlign:'center'}}>Policy Amount</th>
                                                <th style={{textAlign:'center'}}>Policy Number</th>
                                                <th style={{textAlign:'center'}}>Sum Assured</th>
                                                <th style={{textAlign:'center'}}>Policy</th>
                                                <th style={{textAlign:'center'}}>Check</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse' }}>
                                            {data
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((data) => {
                                                    return (
                                                        <tr style={{height:'35px' }}>
                                                            <td style={{border:'1px solid #d9d9d9', borderCollapse:'collapse',textAlign:'center'}}>
                                                                {data.data.name}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse',textAlign:'center' }}>
                                                                <Radio color='default'/>
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                <Radio color='default' />
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                <Radio color='default' />
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.policyname}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.pid}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                                {data.data.duration}
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
                                                            </td>
                                                            <td style={{ border: '1px solid #d9d9d9', borderCollapse: 'collapse', textAlign: 'center' }}>
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

                    {/* <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input style={{ width: '40vh' }} type="text" value={value} placeholder='Search' onChange={filterData} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br />
                    <table style={{ width: '90%' }} className="table table-success table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Name</th>
                                <th scope="col">1st</th>
                                <th scope="col">2nd</th>
                                <th scope="col">3rd</th>
                                <th scope="col">Policy Name</th>
                                <th scope="col">Premium amt.</th>
                                <th scope="col">Check</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.length > 0 ? tableFilter.map((data) => {
                                return (
                                    <tr>
                                        <td scope="col">{data.Date}</td>
                                        <td scope="col" onDoubleClick={() => {
                                            navigate("/profile")
                                        }}>{data.Name}</td>
                                        <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
                                        <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
                                        <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
                                        <td scope="col">{data.Policy}</td>
                                        <td scope="col">{data.LIC}</td>
                                        <td scope="col">
                                            <Button color="blue" appearance="primary" size="lg" onClick={() => handleOpen('lg')}>Check</Button>
                                            <Modal size={size} open={open} onClose={handleClose} style={{ marginLeft: '40vh', marginTop: '15vh' }}>
                                                <Modal.Header>
                                                    <Modal.Title style={{ backgroundColor: '#eeeeee' }}>{data.Name}</Modal.Title>
                                                </Modal.Header>
                                                <hr />
                                                <Modal.Body>
                                                    <p>1.Reminder sent :-  &emsp;&emsp;&emsp;&emsp; 1st
                                                        <input
                                                            type="radio"
                                                            name="aboveRadio"
                                                            checked={radioState.aboveRadio1}
                                                            disabled={radioState.belowRadio}
                                                            onChange={() => handleAboveRadioChange('aboveRadio1')}
                                                        />
                                                        &emsp; 2nd
                                                        <input
                                                            type="radio"
                                                            name="aboveRadio"
                                                            checked={radioState.aboveRadio2}
                                                            disabled={radioState.belowRadio}
                                                            onChange={() => handleAboveRadioChange('aboveRadio2')}
                                                        />
                                                        &emsp; 3rd
                                                        <input
                                                            type="radio"
                                                            name="aboveRadio"
                                                            checked={radioState.aboveRadio3}
                                                            disabled={radioState.belowRadio}
                                                            onChange={() => handleAboveRadioChange('aboveRadio3')}
                                                        />
                                                    </p>
                                                    <p>2.Premium received  :-&emsp;&emsp; &nbsp;Cash :
                                                        <input
                                                            type="radio"
                                                            name="belowRadio"
                                                            checked={radioState.belowRadio1}
                                                            onChange={handleBelowRadioChange}
                                                        />
                                                        &emsp; Check :
                                                        <input
                                                            type="radio"
                                                            name="belowRadio"
                                                            checked={radioState.belowRadio2}
                                                            onChange={handleBelowRadioChange}
                                                        />
                                                        &emsp; UPI :
                                                        <input
                                                            type="radio"
                                                            name="belowRadio"
                                                            checked={radioState.belowRadio3}
                                                            onChange={handleBelowRadioChange}
                                                        />
                                                    </p>
                                                    <p>3.Premium Paid :- &emsp;&emsp;&emsp;&emsp;&nbsp;   <input type="checkbox" />  </p>
                                                    <p>4.New Policy renewed:-  &emsp;&emsp; <input type="checkbox" /> </p>
                                                    <p>5.Data Updated :-  &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<input type="checkbox" />  </p>
                                                </Modal.Body>
                                                <Modal.Footer>

                                                </Modal.Footer>
                                            </Modal>
                                        </td>
                                    </tr>
                                )
                            })
                                :
                                dataSource.map((data) => {
                                    return (
                                        <tr>
                                            <td scope="col">{data.Date}</td>
                                            <td scope="col" onDoubleClick={() => {
                                                navigate("/profile")
                                            }}>{data.Name}</td>
                                            <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
                                            <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
                                            <td scope="col" style={{ width: '10vh' }}><input type="radio" name="reminder" /></td>
                                            <td scope="col">{data.Policy}</td>
                                            <td scope="col">{data.LIC}</td>
                                            <td scope="col">
                                                <Button color="blue" appearance="primary" size="sm" onClick={() => handleOpen('sm')}>Check</Button>
                                                <Modal size={size} open={open} onClose={handleClose} style={{ marginLeft: '40vh', marginTop: '15vh' }}>
                                                    <Modal.Header>
                                                        <Modal.Title style={{ backgroundColor: '#eeeeee' }}>{data.Name}</Modal.Title>
                                                    </Modal.Header>
                                                    <hr />
                                                    <Modal.Body>
                                                        <p>1.Reminder sent :-  &emsp;&emsp;&emsp;&emsp; 1st
                                                            <input
                                                                type="radio"
                                                                name="aboveRadio"
                                                                checked={radioState.aboveRadio1}
                                                                disabled={radioState.belowRadio}
                                                                onChange={() => handleAboveRadioChange('aboveRadio1')}
                                                            />
                                                            &emsp; 2nd
                                                            <input
                                                                type="radio"
                                                                name="aboveRadio"
                                                                checked={radioState.aboveRadio2}
                                                                disabled={radioState.belowRadio}
                                                                onChange={() => handleAboveRadioChange('aboveRadio2')}
                                                            />
                                                            &emsp; 3rd
                                                            <input
                                                                type="radio"
                                                                name="aboveRadio"
                                                                checked={radioState.aboveRadio3}
                                                                disabled={radioState.belowRadio}
                                                                onChange={() => handleAboveRadioChange('aboveRadio3')}
                                                            />
                                                        </p>
                                                        <p>2.Premium received  :-&emsp;&emsp; &nbsp;Cash :
                                                            <input
                                                                type="radio"
                                                                name="belowRadio"
                                                                checked={radioState.belowRadio1}
                                                                onChange={handleBelowRadioChange}
                                                            />
                                                            &emsp; Check :
                                                            <input
                                                                type="radio"
                                                                name="belowRadio"
                                                                checked={radioState.belowRadio2}
                                                                onChange={handleBelowRadioChange}
                                                            />
                                                            &emsp; UPI :
                                                            <input
                                                                type="radio"
                                                                name="belowRadio"
                                                                checked={radioState.belowRadio3}
                                                                onChange={handleBelowRadioChange}
                                                            />
                                                        </p>
                                                        <p>3.Premium Paid :- &emsp;&emsp;&emsp;&emsp;&nbsp;   <input type="checkbox" />  </p>
                                                        <p>4.New Policy renewed:-  &emsp;&emsp; <input type="checkbox" /> </p>
                                                        <p>5.Data Updated :-  &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<input type="checkbox" />  </p>

                                                    </Modal.Body>
                                                    <Modal.Footer>

                                                    </Modal.Footer>
                                                </Modal>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table> */}
                    {/* premiumRemiders code end */}

                </Box>
            </Box>

            {/* new sidebar end */}


        </>
    )
}

export default PremiumRemider