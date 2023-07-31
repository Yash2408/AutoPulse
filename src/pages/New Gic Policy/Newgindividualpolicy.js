import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Button from '@mui/material/Button';
import { ButtonToolbar, Form } from 'rsuite';
import Table from 'react-bootstrap/Table';
import { Input } from 'rsuite';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SelectPicker } from 'rsuite'
import Select from 'react-select';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'
import axios from 'axios';


const nameOptions = [
    { value: 'John', label: 'John' },
    { value: 'Jane', label: 'Jane' },
    { value: 'James', label: 'James' },
    // Add more options as needed
];

const Newcustomer = () => {

    const [file, setFile] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [LastPremiumDate, setLastPremiumDate] = useState(new Date());
    const [MaturityDate, setMaturityDate] = useState(new Date());
    const [type, setType] = React.useState('info');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedRelation, setSelectedRelation] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [selectedName, setSelectedName] = useState(null);
    const [tableMemberData, setTableMemberData] = useState([]);

    const relationOptions = [
        { value: 'Husband', label: 'Husband' },
        { value: 'Wife', label: 'Wife' },
        { value: 'Brother', label: 'Brother' },
        { value: 'Sister', label: 'Sister' },
        { value: 'Child', label: 'Child' },
        // Add more relation options as needed
    ];

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const selectedOptions = files.map((file) => ({
            value: file.name,
            label: file.name,
        }));
        setSelectedFiles(selectedOptions);
    };

    const handleRelationChange = (selectedOption) => {
        setSelectedRelation(selectedOption);
    };

    const handleAddRow = () => {
        if (selectedFiles.length > 0 && selectedRelation) {
            const newRows = selectedFiles.map((file) => ({
                file,
                relation: selectedRelation,
            }));
            setTableData([...tableData, ...newRows]);
            setSelectedFiles([]);
            setSelectedRelation(null);
        }
    };

    const handleDeleteRow = (index) => {
        const updatedTableData = [...tableData];
        updatedTableData.splice(index, 1);
        setTableData(updatedTableData);
    };
    //file type table ends

    const nameOptions = [
        { value: 'Pareshbhai Babubhai Vaghasiya', label: 'Pareshbhai Babubhai Vaghasiya' },
        { value: 'Kaushik Ratilal Senjaliya', label: 'Kaushik Ratilal Senjaliya' },
        { value: 'Praful Mansukhbhai Bhuva', label: 'Praful Mansukhbhai Bhuva' },
        { value: 'Pradip Sureshbhai Paghdal', label: 'Pradip Sureshbhai Paghdal' },
        { value: 'Rajeshkumar dhirajlal Polara', label: 'Rajeshkumar dhirajlal Polara' },
        { value: 'Suresh Ghanshyambhai Polara', label: 'Suresh Ghanshyambhai Polara' },
        { value: 'Sanjaybhai Bachubhai Jinjala', label: 'Sanjaybhai Bachubhai Jinjala' },
        { value: 'Yash babubhai Patel', label: 'Yash Babubhai Patel' }

        // Add more options as needed
    ];

    const handleMemberAddRow = () => {
        if (selectedName && selectedRelation) {
            const newRow = {
                name: selectedName.label,
                relation: selectedRelation.label,
            };
            setTableMemberData([...tableMemberData, newRow]);
            setSelectedName(null);
            setSelectedRelation(null);
        }
    };

    const handleDeleteMemberRow = (index) => {
        const updatedTableData = [...tableMemberData];
        updatedTableData.splice(index, 1);
        setTableMemberData(updatedTableData);
    };

    function handleFile(e) {
        console.log(e.target.file)
        setFile(e.target.file[0])
    }

    function createData(file, data) {
        return { file, data };
    }

    const rows = [
        createData('Frozen yoghurt', 159),
        createData('Ice cream sandwich', 237),
    ];

const handleSubmit = async () => {
    try {
        const clientId = '9lmFTSAKFTd2E7OJZY2RGYCpHlb2';
        const uid = 'cksbdhku12r43t34t341';

        // Collect data from input fields
        const data = {
            clientId,
            uid,
            personalInfo: {
                name : document.getElementById('name').value,
                policyNumber: document.getElementById('policyNumber').value,
                policyName: document.getElementById('policyName').value,
                planeNumber: document.getElementById('planeNumber').value,
            },
            policyDetails: {
                policyTerm: document.getElementById('policyTerm').value,
                premiumPayingTerm: document.getElementById('premiumPayingTerm').value,
                startDate: document.getElementById('startDate').value,
                endDate: document.getElementById('endDate').value,
                lastPremiumDate: document.getElementById('lastPremiumDate').value,
                MaturityDate: document.getElementById('policyMaturityDate').value,
            },
            Money:{
                sumAssured: document.getElementById('sum').value,
                MoneybackAmount: document.getElementById('backamount').value,
                MoneybackYear: document.getElementById('backyears').value,
            },
            additionalInfo: {
                additionalNotes: document.getElementById('additionalNotes').value,
            },
            documentData: tableData, // Assuming tableData is already prepared from the file uploads
            familyMembersData: tableMemberData, // Assuming tableMemberData is already prepared from family member inputs
        };

        let jsondata = JSON.stringify(data);
        // Make a POST request to the API
        fetch('autopulse.arksoftai.com/policy/addLicPolicy',{
            method:'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body:jsondata
        }).then(res => res.json())
        .then(result => console.log(result))

        // Handle the response if needed
        console.log('API response:', jsondata);
    } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error:', error);
    }
}


    return (
        <>
            <Navbar />
            <Box height={40} />
            <Box sx={{ display: 'flex' }}>
                {/* new sidebar start */}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Dashboard</h1>
                    <Form>
                        <table>
                            <tr>
                                <td>
                                    <h5>Personal Information</h5>
                                </td>
                            </tr>
                            <tr>
                                <br />
                                <SelectPicker
                                    cleanable={false}
                                    value={type}
                                    data={[
                                        { label: 'Yash Kathiriya', value: 'Yash Kathiriya' },
                                        { label: 'Aryan Patel', value: 'Aryan Patel' },
                                        { label: 'Sarvaiya Yash', value: 'Sarvaiya Yash' },
                                        { label: 'Patel Meet', value: 'Patel Meet' },
                                        { label: 'Patel Keyur', value: 'Patel Meet' },
                                        { label: 'Patel Harshil', value: 'Patel Meet' },
                                        { label: 'Patel Dhruv', value: 'Patel Meet' },
                                        { label: 'Patel Raj', value: 'Patel Meet' },
                                        { label: 'Patel Rushi', value: 'Patel Meet' }
                                    ]}
                                    onChange={setType}
                                    style={{ width: 350, height: 50 }}
                                    id='name'
                                />
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Policy Number</Form.ControlLabel>
                                        <Form.Control id="policyNumber" style={{ width: '40vh' }} />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Policy Name</Form.ControlLabel>
                                        <Form.Control id="policyName" style={{ width: '30vh' }} />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Plane Number</Form.ControlLabel>
                                        <Form.Control id="planeNumber" style={{ width: '30vh' }} />
                                    </Form.Group>
                                </td>
                            </tr>
                        </table>
                        <br />
                        <table>
                            <tr>
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Policy Term</Form.ControlLabel>
                                        <Form.Control id="policyTerm" style={{ width: '15vh' }} />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Premium Paying Term</Form.ControlLabel>
                                        <Form.Control id="premiumPayingTerm" style={{ width: '20vh' }} />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Start Date</Form.ControlLabel>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            maxDate={endDate}
                                            id="startDate"
                                        />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>End Date</Form.ControlLabel>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={endDate}
                                            onChange={date => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            id="endDate"
                                        />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Last Premium Date</Form.ControlLabel>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={endDate}
                                            onChange={date => setLastPremiumDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            LastPremiumDate={LastPremiumDate}
                                            minDate={startDate}
                                            id="lastPremiumDate"
                                        />
                                    </Form.Group>
                                </td>
                                &emsp;
                            </tr>
                        </table>
                        <br />
                        <table>
                            <tr>
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Policy Maturity Date</Form.ControlLabel>
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            selected={endDate}
                                            onChange={date => setMaturityDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            MaturityDate={MaturityDate}
                                            minDate={startDate}
                                            id='policyMaturityDate'
                                        />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Sum Assured</Form.ControlLabel>
                                        <Form.Control id='sum' name="name" style={{ width: '36vh' }} />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Money Back Amount</Form.ControlLabel>
                                        <Form.Control id='backamount' name="name" style={{ width: '36vh' }} />
                                    </Form.Group>
                                </td>
                                &emsp;
                                <td>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Money Back Years</Form.ControlLabel>
                                        <Form.Control id='backyears' name="name" style={{ width: '36vh' }} />
                                    </Form.Group>
                                </td>
                            </tr>
                        </table>
                        <br />
                        <table>
                            <tr>
                                <td>
                                    <h5>Additional Information</h5>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <Input as="textarea" id="additionalNotes" rows={3} cols={50} placeholder="Textarea" />
                            </tr>
                        </table>

                    </Form>
                    <br />
                    <div style={{ width: '50%', Height: '500px', float: 'left' }}>
                        <table>
                            <h5>Documents</h5>
                            <Table style={{ width: '80vh' }}>
                                <thead>
                                    <tr>
                                        <th>Upload Document</th>
                                        <th>Document type</th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input type="file" onChange={handleFileChange} multiple />
                                        </th>
                                        <th>
                                            <Select
                                                options={relationOptions}
                                                isSearchable
                                                placeholder="relation"
                                                value={selectedRelation}
                                                onChange={handleRelationChange}
                                            />
                                        </th>
                                        <th>
                                            <Button style={{ color: 'black', backgroundColor: '#ccffcc' }} appearance="primary" onClick={handleAddRow}>Add</Button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.file.label}</td>
                                            <td>{row.relation.label}</td>
                                            <td>
                                                <Button variant='contained' color="error" onClick={() => handleDeleteRow(index)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </table>
                    </div>
                    <div style={{ width: '50%', Height: '500px', float: 'left' }}>
                        <table>
                            <h5>Family Members</h5>
                            <Table style={{ width: '80vh' }}>
                                <thead>
                                    <tr>
                                        <th>
                                            Add Members
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <Select
                                                options={nameOptions}
                                                isSearchable
                                                placeholder="Select a name"
                                                value={selectedName}
                                                onChange={(selectedOption) => setSelectedName(selectedOption)}
                                            />
                                        </th>
                                        <th>
                                            <Select
                                                options={relationOptions}
                                                isSearchable
                                                placeholder="relation"
                                                value={selectedRelation}
                                                onChange={handleRelationChange}
                                            />
                                        </th>
                                        <th>
                                            <Button style={{ color: 'black', backgroundColor: '#ccffcc' }} appearance="primary" onClick={handleMemberAddRow}>Add</Button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableMemberData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.name}</td>
                                            <td>{row.relation}</td>
                                            <td>
                                                <Button variant='contained' color="error" onClick={() => handleDeleteMemberRow(index)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <button
                                style={{ marginLeft: '45vh' }}
                                type="button"
                                class="btn btn-primary btn-lg"
                                onClick={handleSubmit}
                            >

                                Add New Policy
                            </button>
                        </table>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Newcustomer;

