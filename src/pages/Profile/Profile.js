import "rsuite/dist/rsuite.min.css";
import React from 'react'
import Sidebar from '../../components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../../Navbar/Navbar'
import { Profiler } from "react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: 'flex' }}>
        {/* new sidebar start */}
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>Profile</h2>
        </Box>
      </Box>
    </>
  )
}

export default Profile


// import Button from '@mui/material/Button';
// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa'
// import { BsGlobe } from 'react-icons/bs';
// import "rsuite/dist/rsuite.min.css";
// import { Sidenav, Nav, Form } from 'rsuite';
// import { useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Select from 'react-select';
// import { FaCalendarAlt } from 'react-icons/fa';
// import { TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
// import UplaodDoc from './Uploaddoc/UploadDoc'

// // import Select from '@mui/joy/Select';
// // import Option from '@mui/joy/Option';
// // import IconButton from '@mui/joy/IconButton';
// // import CloseRounded from '@mui/icons-material/CloseRounded';
// const styles = {
//   width: 240,
//   display: 'inline-table',
//   color: 'black',
//   marginRight: 10
// };

// const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles}>
//       <Sidenav
//         appearance={appearance}
//         expanded={expanded}
//         openKeys={openKeys}
//         onOpenChange={onOpenChange}
//       >
//         <Sidenav.Body>
//           <Nav {...navProps}>
//             <Nav.Item eventKey="1" onClick={
//               () => {
//                 navigate("/dashboard")
//               }
//             }>
//               Dashboard
//             </Nav.Item>
//             <Nav.Item eventKey="2" onClick={
//               () => {
//                 navigate("/premiumreminderpage")
//               }
//             }>
//               Premium Reminder Page
//             </Nav.Item>
//             <Nav.Menu eventKey="3" title="Customers">
//               <Nav.Item eventKey="3-1" onClick={
//                 () => {
//                   navigate("/runningcustomers")
//                 }
//               }>Running Customers</Nav.Item>
//               <Nav.Item eventKey="3-2" onClick={
//                 () => {
//                   navigate("/allcustomers")
//                 }
//               }>All Customers</Nav.Item>
//             </Nav.Menu>
//             <Nav.Item eventKey="4" onClick={
//               () => {
//                 navigate("/newcustomer")
//               }
//             }>
//               New Customer
//             </Nav.Item>
//             <Nav.Menu eventKey="5" title="New LIC Policy">
//               <Nav.Item eventKey="5-1" onClick={
//                 () => {
//                   navigate("/newindividualpolicy")
//                 }
//               }>New Individual Policy</Nav.Item>
//               <Nav.Item eventKey="5-2" onClick={
//                 () => {
//                   navigate("/newjointpolicy")
//                 }
//               }>New Joint Policy</Nav.Item>
//             </Nav.Menu>
//             <Nav.Menu eventKey="6" title="New GIC Policy">
//               <Nav.Item eventKey="6-1" onClick={
//                 () => {
//                   navigate("/newgindividualpolicy")
//                 }
//               }>New Individual Policy</Nav.Item>
//               <Nav.Item eventKey="6-2" onClick={
//                 () => {
//                   navigate("/newgjointpolicy")
//                 }
//               }>New Joint Policy</Nav.Item>
//             </Nav.Menu>
//             <Nav.Menu eventKey="7" title="Intimation">
//               <Nav.Item eventKey="7-1" onClick={
//                 () => {
//                   navigate("/sentintimations")
//                 }
//               }>Sent Intimations</Nav.Item>
//               <Nav.Item eventKey="7-2" onClick={
//                 () => {
//                   navigate("/newintimations")
//                 }
//               }>New Intimations</Nav.Item>
//               <Nav.Item eventKey="7-3" onClick={
//                 () => {
//                   navigate("/intimationformats")
//                 }
//               }>Intimation formats</Nav.Item>
//             </Nav.Menu>
//             <Nav.Menu eventKey="8" title="Settings">
//               <Nav.Item eventKey="8-1" onClick={
//                 () => {
//                   navigate("/changepassword")
//                 }
//               }>Change Password</Nav.Item>
//               <Nav.Item eventKey="8-2" onClick={
//                 () => {
//                   navigate("/managegstrates")
//                 }
//               }>Manage GST Rates</Nav.Item>
//             </Nav.Menu>
//             <Nav.Item eventKey="9" onClick={
//               () => {
//                 navigate("/reports")
//               }
//             }>
//               Reports
//             </Nav.Item>
//           </Nav>
//         </Sidenav.Body>
//       </Sidenav>
//     </div>
//   );
// };


// const Customers = () => {
//   const [activeKey, setActiveKey] = React.useState('1');
//   const [openKeys, setOpenKeys] = React.useState([]);
//   const [expanded, setExpand] = React.useState(true);
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [image, setImage] = useState({ preview: "", raw: "" });
//   const [gender, setGender] = useState('');

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const genderOptions = [
//     { value: 'male', label: 'Male' },
//     { value: 'female', label: 'Female' },
//     { value: 'other', label: 'Other' }
//   ];
//   const handleChange = e => {

//     if (e.target.files.length) {
//       setImage({
//         preview: URL.createObjectURL(e.target.files[0]),
//         raw: e.target.files[0]
//       });
//     }
//   };

//   const [selectedRelation, setSelectedRelation] = useState(null);
//   const [selectedName, setSelectedName] = useState(null);
//   const [tableMemberData, setTableMemberData] = useState([]);

//   const relationOptions = [
//     { value: 'Husband', label: 'Husband' },
//     { value: 'Wife', label: 'Wife' },
//     { value: 'Brother', label: 'Brother' },
//     { value: 'Sister', label: 'Sister' },
//     { value: 'Child', label: 'Child' },
//     // Add more relation options as needed
//   ];

//   const handleRelationChange = (selectedOption) => {
//     setSelectedRelation(selectedOption);
//   };

//   //file type table ends

//   const nameOptions = [
//     { value: 'Pareshbhai Babubhai Vaghasiya', label: 'Pareshbhai Babubhai Vaghasiya' },
//     { value: 'Kaushik Ratilal Senjaliya', label: 'Kaushik Ratilal Senjaliya' },
//     { value: 'Praful Mansukhbhai Bhuva', label: 'Praful Mansukhbhai Bhuva' },
//     { value: 'Pradip Sureshbhai Paghdal', label: 'Pradip Sureshbhai Paghdal' },
//     { value: 'Rajeshkumar dhirajlal Polara', label: 'Rajeshkumar dhirajlal Polara' },
//     { value: 'Suresh Ghanshyambhai Polara', label: 'Suresh Ghanshyambhai Polara' },
//     { value: 'Sanjaybhai Bachubhai Jinjala', label: 'Sanjaybhai Bachubhai Jinjala' },

//     // Add more options as needed
//   ];

//   const handleMemberAddRow = () => {
//     if (selectedName && selectedRelation) {
//       const newRow = {
//         name: selectedName.label,
//         relation: selectedRelation.label,
//       };
//       setTableMemberData([...tableMemberData, newRow]);
//       setSelectedName(null);
//       setSelectedRelation(null);
//     }
//   };

//   const handleDeleteMemberRow = (index) => {
//     const updatedTableData = [...tableMemberData];
//     updatedTableData.splice(index, 1);
//     setTableMemberData(updatedTableData);
//   };
//   return (

//     <div>
//       <h3
//         style={{
//           backgroundColor: "#cccccc",
//           justifyContent: 'center',
//           display: 'flex',
//           color: '#3944bc'}}
//       >Customer Profile</h3>
//       {/* navbar */}
//       <div className="container">
//         <div style={{ width: isOpen ? "240px" : "50px" }} className="sidebar">
//           <div className="top_section">
//             <h1 style={{ display: isOpen ? "block" : "none", whiteSpace: 'nowrap', color: 'white' }} className="logo">
//               <BsGlobe />
//               &nbsp;
//               LIC Policy</h1>
//             <div style={{ marginLeft: isOpen ? "30px" : "0px", color: 'white' }} className="bars">
//               <FaBars onClick={toggle} />
//             </div>
//           </div>
//           {
//             <div>

//               <div style={{ display: isOpen ? "block" : "none" }} className="link_text">

//                 <CustomSidenav
//                   activeKey={activeKey}
//                   openKeys={openKeys}
//                   onOpenChange={setOpenKeys}
//                   onSelect={setActiveKey}
//                   onExpand={setExpand}
//                   appearance="inverse"
//                 />
//               </div>
//             </div>
//           }
//         </div>
//       </div >
//       {/* navbar end */}
//       <div style={{ marginLeft: '280px' }}>
//         <div style={{ width: '45%', Height: '500px', float: 'left' }}>
//           <Form>
//             {/* form */}
//             <h3>Basic Details</h3>
//             {/* photo */}
//             <div>
//               <label htmlFor="upload-button">
//                 {image.preview ? (
//                   <img src={image.preview} alt="dummy" width="100" height="100" style={{border:'2px solid black'}}/>
//                 ) : (
//                   <>
//                       <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="photo" width="100" height="100"/>
//                     <h5 className="text-center">Upload your photo</h5>
//                   </>
//                 )}
//               </label>
//               <input
//                 type="file"
//                 id="upload-button"
//                 style={{ display: "none" }}
//                 onChange={handleChange}
//               />
//             </div>
//             {/* end photo */}
//             <Form.Group controlId="name">
//               <Form.ControlLabel>Customer ID</Form.ControlLabel>
//               <Form.Control name="name" style={{ width: '60vh' }} />
//             </Form.Group>
//             <Form.Group controlId="name">
//               <Form.ControlLabel>Customer Name</Form.ControlLabel>
//               <Form.Control name="name" style={{ width: '60vh' }} />
//             </Form.Group>
//             <table>
//               <tr>
//                 <td>
//                   <Form.Group controlId="name">
//                     <Form.ControlLabel>Mobile Number</Form.ControlLabel>
//                     <Form.Control name="name" style={{ width: '28vh' }} />
//                   </Form.Group>
//                 </td>
//                 <pre>   </pre>
//                 <td>
//                   <Form.Group controlId="name">
//                     <Form.ControlLabel>Email</Form.ControlLabel>
//                     <Form.Control name="name" style={{ width: '30vh' }} />
//                   </Form.Group>
//                 </td>
//               </tr>
//             </table>
//             <br/>
//             <table>
//               <tr>
//                 <td>
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={date => setSelectedDate(date)}
//                     placeholderText="Select date of birth"
//                     dateFormat="dd/MM/yyyy"
//                     showYearDropdown
//                     scrollableYearDropdown
//                     yearDropdownItemNumber={100}
//                     customInput={
//                       <div>
//                         <input
//                           placeholder='select date'
//                           className="date-picker-input"
//                           readOnly
//                           value={selectedDate ? selectedDate.toLocaleDateString() : ''}
//                         />
//                         <FaCalendarAlt className="calendar-icon" />
//                       </div>
//                     }
//                   />
//                 </td>
//                 <pre>   </pre>
//                 <td>
//                   <select value={gender} onChange={handleGenderChange} className='gender-form'>
//                     <option value="">Select gender</option>
//                     {genderOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                   {/* <Select
//                     value={genderOptions.find(option => option.value === gender)}
//                     onChange={handleGenderChange}
//                     options={genderOptions}
//                     placeholder="Select gender"
//                   /> */}
//                   {/* <Form.Group controlId="name">
//                     <Form.ControlLabel>Gender</Form.ControlLabel>
//                     <Form.Control name="name" style={{ width: '23vh' }} />
//                   </Form.Group> */}
//                 </td>
//               </tr>
//             </table>
//             <Form.Group controlId="name">
//               <Form.ControlLabel>Address</Form.ControlLabel>
//               <textarea name="name" style={{ width: '65vh' }} />
//             </Form.Group>

//             {/* table */}
//             <table>
//               <h5>Family Information</h5>
//               <Table striped hover style={{ width: '65vh' }}>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>
//                       <Select
//                         options={nameOptions}
//                         isSearchable
//                         placeholder="Select a name"
//                         value={selectedName}
//                         onChange={(selectedOption) => setSelectedName(selectedOption)}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <Select
//                         options={relationOptions}
//                         isSearchable
//                         placeholder="relation"
//                         value={selectedRelation}
//                         onChange={handleRelationChange}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <Button style={{ color: 'black', backgroundColor: '#ccffcc' }} appearance="primary" onClick={handleMemberAddRow}>Add</Button>
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {tableMemberData.map((row, index) => (
//                     <tr key={index}>
//                       <td>{row.name}</td>
//                       <td>{row.relation}</td>
//                       <td>
//                         <Button variant='contained' color="error" onClick={() => handleDeleteMemberRow(index)}>Delete</Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </TableBody>
//               </Table>
//             </table>
//             <div style={{ marginBottom: '10px' }}>
//               <h5>Policies</h5>
//               <table>
//                 <tbody>
//                   <tr>
//                     <pre>            </pre>
//                     <td>
//                       <button type="button" class="btn btn-primary">LIC</button>
//                     </td>
//                     <pre>       </pre>
//                     <td>
//                       <button type="button" class="btn btn-primary">GIC</button>

//                     </td>
//                     <pre>       </pre>

//                     <td>
//                       <button type="button" class="btn btn-primary">All</button>

//                     </td>
//                   </tr>
//                 </tbody>
//               </table>



//             </div>
//           </Form>
//         </div>
//         <br />
//         <div className='additional-right' >
//           <h4>Other additional information
//             <button type="button" class="btn btn-primary">Edit</button>
//           </h4>
//           <br />
//           <div style={{ width: '90%', Height: '500px', background: '#ececec' }}>
//             <br />
//             <Form>
//               <Form.Group controlId="name">
//                 <Form.ControlLabel ></Form.ControlLabel>
//                 <Form.Control placeholder='Additional Mobile Number' name="name" style={{ width: '60vh', marginInline: '9vh' }} />
//               </Form.Group>
//             </Form>
//             <br />
//             <Form>
//               <Form.Group controlId="name">
//                 <Form.ControlLabel ></Form.ControlLabel>
//                 <Form.Control placeholder='Additional Email Address' name="name" style={{ width: '60vh', marginInline: '9vh' }} />
//               </Form.Group>
//             </Form>
//             <br />
//             <Form>
//               <Form.Group controlId="name">
//                 <Form.ControlLabel ></Form.ControlLabel>
//                 <Form.Control placeholder='Reference' name="name" style={{ width: '60vh', marginInline: '9vh' }} />
//               </Form.Group>
//             </Form>
//             <br />
//             <Form>
//               <Form.Group controlId="name">
//                 <Form.ControlLabel ></Form.ControlLabel>
//                 <Form.Control placeholder='Additional Address' name="name" style={{ width: '60vh', marginInline: '9vh' }} />
//               </Form.Group>
//             </Form>
//             <br />
//             <Form>
//               <Form.Group controlId="name">
//                 <Form.ControlLabel ></Form.ControlLabel>
//                 <Form.Control placeholder='Additional Notes' name="name" style={{ width: '60vh', marginInline: '9vh' }} />
//               </Form.Group>
//             </Form>
//             <br />
//           </div>
//           <br />
//           <h3>Documents</h3>
//           <br />
//           <div>
//               <UplaodDoc />


//           </div>

//         </div>

//         <div style={{ width: '5%', Height: '550px', float: 'right' }}>
//         </div>
//       </div>

//     </div >

//   )
// }

// export default Customers