import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar';
import './Newcustomer.css';
import Grid from '@mui/material/Grid';
import { Button, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import {AiOutlineCloudUpload} from 'react-icons/ai';
import uid from '../../images/UID.png';

const Newcustomer = () => {

    // const [file, setFile] = useState('')
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());

    // function handleFile(e) {
    //     console.log(e.target.file)
    //     setFile(e.target.file[0])
    // }

    // function createData(file, data) {
    //     return { file, data };
    // }

    // const rows = [
    //     createData('Frozen yoghurt', 159),
    //     createData('Ice cream sandwich', 237),
    // ];

    // // file and file type table
    // const [selectedFiles, setSelectedFiles] = useState([]);
    // const [selectedRelation, setSelectedRelation] = useState(null);
    // const [tableData, setTableData] = useState([]);
    // const [selectedName, setSelectedName] = useState(null);
    // const [tableMemberData, setTableMemberData] = useState([]);

    // const relationOptions = [
    //     { value: 'Husband', label: 'Husband' },
    //     { value: 'Wife', label: 'Wife' },
    //     { value: 'Brother', label: 'Brother' },
    //     { value: 'Sister', label: 'Sister' },
    //     { value: 'Child', label: 'Child' },
    //     // Add more relation options as needed
    // ];

    // const handleFileChange = (event) => {
    //     const files = Array.from(event.target.files);
    //     const selectedOptions = files.map((file) => ({
    //         value: file.name,
    //         label: file.name,
    //     }));
    //     setSelectedFiles(selectedOptions);
    // };

    // const handleRelationChange = (selectedOption) => {
    //     setSelectedRelation(selectedOption);
    // };

    // const handleAddRow = () => {
    //     if (selectedFiles.length > 0 && selectedRelation) {
    //         const newRows = selectedFiles.map((file) => ({
    //             file,
    //             relation: selectedRelation,
    //         }));
    //         setTableData([...tableData, ...newRows]);
    //         setSelectedFiles([]);
    //         setSelectedRelation(null);
    //     }
    // };

    // const handleDeleteRow = (index) => {
    //     const updatedTableData = [...tableData];
    //     updatedTableData.splice(index, 1);
    //     setTableData(updatedTableData);
    // };
    // //file type table ends

    // const nameOptions = [
    //     { value: 'Pareshbhai Babubhai Vaghasiya', label: 'Pareshbhai Babubhai Vaghasiya' },
    //     { value: 'Kaushik Ratilal Senjaliya', label: 'Kaushik Ratilal Senjaliya' },
    //     { value: 'Praful Mansukhbhai Bhuva', label: 'Praful Mansukhbhai Bhuva' },
    //     { value: 'Pradip Sureshbhai Paghdal', label: 'Pradip Sureshbhai Paghdal' },
    //     { value: 'Rajeshkumar dhirajlal Polara', label: 'Rajeshkumar dhirajlal Polara' },
    //     { value: 'Suresh Ghanshyambhai Polara', label: 'Suresh Ghanshyambhai Polara' },
    //     { value: 'Sanjaybhai Bachubhai Jinjala', label: 'Sanjaybhai Bachubhai Jinjala' },

    //     // Add more options as needed
    // ];

    // const handleMemberAddRow = () => {
    //     if (selectedName && selectedRelation) {
    //         const newRow = {
    //             name: selectedName.label,
    //             relation: selectedRelation.label,
    //         };
    //         setTableMemberData([...tableMemberData, newRow]);
    //         setSelectedName(null);
    //         setSelectedRelation(null);
    //     }
    // };

    // const handleDeleteMemberRow = (index) => {
    //     const updatedTableData = [...tableMemberData];
    //     updatedTableData.splice(index, 1);
    //     setTableMemberData(updatedTableData);
    // };

    const [file,setFile] = useState('');

    function handleFile(e){
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const handleSubmit = async () => {
        try {

            const clientId = '9lmFTSAKFTd2E7OJZY2RGYCpHlb2';
            const uid = 'cksbdhku12r43t34t341';

            // Collect data from input fields
            const data = {
                personalInfo: {
                    name: document.getElementById('fname').value,
                    dob: document.getElementById('dob').value,
                    gender: document.getElementById('gender').value,
                    email: document.getElementById('email').value,
                    otheremail: document.getElementById('otheremail').value,
                    phone: document.getElementById('phone').value,
                    Alternatephone: document.getElementById('alt_phone').value,
                    address: document.getElementById('addr').value,
                    otheraddress: document.getElementById('otheraddr').value,
                    remarks: document.getElementById('remarks').value,
                },
                // documentData: tableData, // Assuming tableData is already prepared from the file uploads
                // familyMembersData: tableMemberData, // Assuming tableMemberData is already prepared from family member inputs
            };

            let jsondata = JSON.stringify(data);
            // Make a POST request to the API
            fetch('autopulse.arksoftai.com/policy/addLicPolicy', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: jsondata
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
            <div style={{ display: 'flex'}}>
                {/* new sidebar start */}
                <Sidebar />
                <div style={{ flexGrow: 1, padding:10 }}>
                    <div style={{padding:'2.5rem'}}>
                        <h5>Add New Customer</h5>
                        <Box height={10} />
                            <div className="container">
                                <form action="#" className="form">
                                    <div className='column'>
                                        <div className="input-box-1">
                                            <label><img src={uid} />  UID</label>
                                            <input defaultValue='123843HEU' type="text" placeholder="UID" disabled/>
                                        </div>
                                        
                                        <div className="input-box-file">
                                            <input type="file" id="file" onChange={handleFile}/>
                                        </div>
                                    </div>

                                    <div className="input-box-name">
                                    <label><img src={uid} />  Full Name</label>
                                        <input type="text" id='fname' placeholder="Enter full name" required />
                                    </div>
                                    <div className="column-1">
                                        <div className="input-date">
                                            <label>Date of birth</label>
                                            <input type="date" id='dob' required />
                                        </div>
                                        <div className="input-box">
                                            <label>Gender</label>
                                            <select id='gender'>
                                            <option value="" >Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                <div className="column">
                                    <div className="input-box-n">
                                        <label>Email</label>
                                        <input type="text" id='email' placeholder="Enter email" required />
                                    </div>
                                    <div className="input-box-n">
                                        <label>Other Email</label>
                                        <input type="textr" id='otheremail' placeholder="Enter other email" required />
                                    </div>
                                </div>

                                    <div className="column">
                                        <div className="input-box-n">
                                            <label>Phone Number</label>
                                            <input type="number" id='phone' placeholder="Enter phone number" required />
                                        </div>
                                        <div className="input-box-n">
                                            <label>Alternate no.</label>
                                            <input type="number" id='alt_phone' placeholder="Enter phone number" required />
                                        </div>
                                    </div>
                                    <div className='input-box-adr'>
                                        <label>Address </label>
                                        <textarea type="text" id='addr' placeholder="Address" />
                                    </div>
                                    <div className='input-box-adr'>
                                        <label>Other Address</label>
                                        <textarea type="text" id='otheraddr' placeholder="Other Address" />
                                    </div>
                                    <div className='input-box-adr'>
                                        <label>Remarks </label>
                                        <textarea type="text" id='remarks' placeholder="Remarks" />
                                    </div>

                                </form>
                            </div>
                    </div>
                                    <div className='add-button'>
                                        <button type='submit' onClick={handleSubmit}>Add New Customer</button>
                                    </div>
                </div>
            </div>
        </>
    )
}
export default Newcustomer;
